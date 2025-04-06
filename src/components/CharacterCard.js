import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { statNames } from '../data/characterStats';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin: 15px;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 500px;
  position: sticky;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    width: 100%;
    max-width: 500px;
    position: static;
    margin-bottom: 20px;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CharacterName = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.8em;
    margin-bottom: 15px;
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  object-fit: contain;
  max-height: 800px;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    max-height: 500px;
  }
`;

const SectionTitle = styled.h3`
  color: #fff;
  margin: 15px 0;
  font-size: 1.5em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.3em;
    margin: 12px 0;
  }
`;

const AbilityItem = styled.div`
  color: #fff;
  margin: 10px 0;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(5px);
  }
  
  @media (max-width: 768px) {
    margin: 8px 0;
    padding: 8px;
    font-size: 0.95em;
  }
`;

const UltimateAbility = styled(AbilityItem)`
  background: rgba(255, 215, 0, 0.2);
  border: 1px solid gold;
  font-weight: bold;

  &:hover {
    background: rgba(255, 215, 0, 0.3);
  }
`;

const Weakness = styled(AbilityItem)`
  background: rgba(255, 0, 0, 0.2);
  border: 1px solid red;
  color: #ff6b6b;

  &:hover {
    background: rgba(255, 0, 0, 0.3);
  }
`;

const StatsContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 0.9em;
`;

const StatName = styled.span`
  color: #fff;
`;

const StatValue = styled.span`
  color: #fff;
  font-weight: bold;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: ${props => {
    switch (props.type) {
      case 'hp':
        return 'linear-gradient(90deg, #ff4d4d, #ff6b6b)';
      case 'mp':
        return 'linear-gradient(90deg, #4d79ff, #6b8eff)';
      case 'stamina':
        return 'linear-gradient(90deg, #4dff4d, #6bff6b)';
      case 'defense':
        return 'linear-gradient(90deg, #ffd700, #ffed4a)';
      case 'speed':
        return 'linear-gradient(90deg, #ff4dff, #ff6bff)';
      case 'critChance':
        return 'linear-gradient(90deg, #ff4d4d, #ff6b6b)';
      default:
        return 'linear-gradient(90deg, #4d4dff, #6b6bff)';
    }
  }};
  width: ${props => (props.value / props.max) * 100}%;
  transition: width 0.3s ease;
`;

const CharacterCard = ({ character }) => {
  const { language } = useLanguage();

  if (!character) {
    return null;
  }

  const renderStat = (statKey, stat) => {
    if (!stat) return null;
    
    return (
      <StatItem key={statKey}>
        <StatHeader>
          <StatName>{statNames[language][statKey]}</StatName>
          <StatValue>{stat.value}/{stat.max}</StatValue>
        </StatHeader>
        <ProgressBarContainer>
          <ProgressBar 
            type={statKey} 
            value={stat.value} 
            max={stat.max} 
          />
        </ProgressBarContainer>
      </StatItem>
    );
  };

  return (
    <Card>
      <ImageContainer>
        <CharacterImage src={character.image} alt={character.name[language]} />
      </ImageContainer>
      
      <ContentContainer>
        <CharacterName>{character.name[language]}</CharacterName>
        
        <StatsContainer>
          {character.stats && Object.entries(character.stats).map(([key, stat]) => 
            renderStat(key, stat)
          )}
        </StatsContainer>
        
        <SectionTitle>
          {language === 'en' ? 'Active Abilities' : 'Активные способности'}
        </SectionTitle>
        {character.activeAbilities && character.activeAbilities.map((ability, index) => (
          <AbilityItem key={index}>{ability[language]}</AbilityItem>
        ))}

        <SectionTitle>
          {language === 'en' ? 'Passive Abilities' : 'Пассивные способности'}
        </SectionTitle>
        {character.passiveAbilities && character.passiveAbilities.map((ability, index) => (
          <AbilityItem key={index}>{ability[language]}</AbilityItem>
        ))}

        <SectionTitle>
          {language === 'en' ? 'Ultimate Ability' : 'Ультимативная способность'}
        </SectionTitle>
        {character.ultimateAbility && (
          <UltimateAbility>{character.ultimateAbility[language]}</UltimateAbility>
        )}

        <SectionTitle>
          {language === 'en' ? 'Weakness' : 'Слабость'}
        </SectionTitle>
        {character.weakness && (
          <Weakness>{character.weakness[language]}</Weakness>
        )}
      </ContentContainer>
    </Card>
  );
};

export default CharacterCard; 