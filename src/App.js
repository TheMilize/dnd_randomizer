import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CharacterCard from './components/CharacterCard';
import { characterClasses } from './data/characterData';
import { useLanguage } from './context/LanguageContext';
import { statNames } from './data/characterStats';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  padding: 20px;
`;

const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
  font-size: 3em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.2em;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const LanguageButton = styled(Button)`
  background: linear-gradient(135deg, #6c5ce7 0%, #a55eea 100%);
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  text-align: center;
  margin: 20px;
  padding: 10px;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 8px;
`;

const App = () => {
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [error, setError] = useState(null);
  const { language, toggleLanguage } = useLanguage();

  const generateCharacter = () => {
    try {
      setError(null);
      const classKeys = Object.keys(characterClasses);
      const randomClass = classKeys[Math.floor(Math.random() * classKeys.length)];
      const character = characterClasses[randomClass];
      
      // Проверяем, что все необходимые поля присутствуют
      if (!character || !character.name || !character.image) {
        throw new Error('Invalid character data');
      }

      setCurrentCharacter(character);
    } catch (err) {
      setError('Error generating character. Please try again.');
      console.error('Error:', err);
    }
  };

  const downloadCharacter = () => {
    if (!currentCharacter) return;

    try {
      // Создаем временный элемент для рендеринга карточки
      const cardElement = document.createElement('div');
      cardElement.style.width = '1200px';
      cardElement.style.padding = '20px';
      cardElement.style.background = 'rgba(255, 255, 255, 0.1)';
      cardElement.style.backdropFilter = 'blur(10px)';
      cardElement.style.borderRadius = '15px';
      cardElement.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      cardElement.style.display = 'flex';
      cardElement.style.flexDirection = 'row';
      cardElement.style.alignItems = 'flex-start';
      cardElement.style.gap = '30px';
      cardElement.style.color = '#fff';
      cardElement.style.fontFamily = "'Cinzel', serif";
      cardElement.style.position = 'absolute';
      cardElement.style.left = '-9999px';
      document.body.appendChild(cardElement);

      // Создаем контейнер для изображения
      const imageContainer = document.createElement('div');
      imageContainer.style.flex = '0 0 500px';
      imageContainer.style.display = 'flex';
      imageContainer.style.alignItems = 'center';
      imageContainer.style.justifyContent = 'center';
      cardElement.appendChild(imageContainer);

      // Создаем изображение
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        // Создаем контейнер для контента
        const contentContainer = document.createElement('div');
        contentContainer.style.flex = '1';
        contentContainer.style.display = 'flex';
        contentContainer.style.flexDirection = 'column';
        cardElement.appendChild(contentContainer);

        // Добавляем имя персонажа
        const characterName = document.createElement('h2');
        characterName.textContent = currentCharacter.name[language];
        characterName.style.textAlign = 'center';
        characterName.style.marginBottom = '20px';
        characterName.style.fontSize = '2em';
        characterName.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        contentContainer.appendChild(characterName);

        // Добавляем характеристики
        if (currentCharacter.stats) {
          const statsContainer = document.createElement('div');
          statsContainer.style.display = 'grid';
          statsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
          statsContainer.style.gap = '15px';
          statsContainer.style.marginBottom = '20px';
          contentContainer.appendChild(statsContainer);

          Object.entries(currentCharacter.stats).forEach(([key, stat]) => {
            const statItem = document.createElement('div');
            
            const statHeader = document.createElement('div');
            statHeader.style.display = 'flex';
            statHeader.style.justifyContent = 'space-between';
            statHeader.style.alignItems = 'center';
            statHeader.style.marginBottom = '5px';
            
            const statName = document.createElement('span');
            statName.textContent = statNames[language][key] || key;
            
            const statValue = document.createElement('span');
            statValue.textContent = `${stat.value}/${stat.max}`;
            statValue.style.fontWeight = 'bold';
            
            statHeader.appendChild(statName);
            statHeader.appendChild(statValue);
            
            const progressBarContainer = document.createElement('div');
            progressBarContainer.style.width = '100%';
            progressBarContainer.style.height = '8px';
            progressBarContainer.style.background = 'rgba(255, 255, 255, 0.1)';
            progressBarContainer.style.borderRadius = '4px';
            progressBarContainer.style.overflow = 'hidden';
            
            const progressBar = document.createElement('div');
            progressBar.style.height = '100%';
            progressBar.style.width = `${(stat.value / stat.max) * 100}%`;
            
            // Устанавливаем цвет в зависимости от типа характеристики
            switch (key) {
              case 'hp':
                progressBar.style.background = 'linear-gradient(90deg, #ff4d4d, #ff6b6b)';
                break;
              case 'mp':
                progressBar.style.background = 'linear-gradient(90deg, #4d79ff, #6b8eff)';
                break;
              case 'stamina':
                progressBar.style.background = 'linear-gradient(90deg, #4dff4d, #6bff6b)';
                break;
              case 'defense':
                progressBar.style.background = 'linear-gradient(90deg, #ffd700, #ffed4a)';
                break;
              case 'speed':
                progressBar.style.background = 'linear-gradient(90deg, #ff4dff, #ff6bff)';
                break;
              case 'critChance':
                progressBar.style.background = 'linear-gradient(90deg, #ff4d4d, #ff6b6b)';
                break;
              default:
                progressBar.style.background = 'linear-gradient(90deg, #4d4dff, #6b6bff)';
            }
            
            progressBarContainer.appendChild(progressBar);
            
            statItem.appendChild(statHeader);
            statItem.appendChild(progressBarContainer);
            statsContainer.appendChild(statItem);
          });
        }

        // Добавляем активные способности
        const activeTitle = document.createElement('h3');
        activeTitle.textContent = language === 'en' ? 'Active Abilities' : 'Активные способности';
        activeTitle.style.margin = '15px 0';
        activeTitle.style.fontSize = '1.5em';
        activeTitle.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)';
        contentContainer.appendChild(activeTitle);

        currentCharacter.activeAbilities.forEach(ability => {
          const abilityItem = document.createElement('div');
          abilityItem.textContent = ability[language];
          abilityItem.style.margin = '10px 0';
          abilityItem.style.padding = '10px';
          abilityItem.style.background = 'rgba(255, 255, 255, 0.1)';
          abilityItem.style.borderRadius = '8px';
          contentContainer.appendChild(abilityItem);
        });

        // Добавляем пассивные способности
        const passiveTitle = document.createElement('h3');
        passiveTitle.textContent = language === 'en' ? 'Passive Abilities' : 'Пассивные способности';
        passiveTitle.style.margin = '15px 0';
        passiveTitle.style.fontSize = '1.5em';
        passiveTitle.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)';
        contentContainer.appendChild(passiveTitle);

        currentCharacter.passiveAbilities.forEach(ability => {
          const abilityItem = document.createElement('div');
          abilityItem.textContent = ability[language];
          abilityItem.style.margin = '10px 0';
          abilityItem.style.padding = '10px';
          abilityItem.style.background = 'rgba(255, 255, 255, 0.1)';
          abilityItem.style.borderRadius = '8px';
          contentContainer.appendChild(abilityItem);
        });

        // Добавляем ультимативную способность
        const ultimateTitle = document.createElement('h3');
        ultimateTitle.textContent = language === 'en' ? 'Ultimate Ability' : 'Ультимативная способность';
        ultimateTitle.style.margin = '15px 0';
        ultimateTitle.style.fontSize = '1.5em';
        ultimateTitle.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)';
        contentContainer.appendChild(ultimateTitle);

        if (currentCharacter.ultimateAbility) {
          const ultimateItem = document.createElement('div');
          ultimateItem.textContent = currentCharacter.ultimateAbility[language];
          ultimateItem.style.margin = '10px 0';
          ultimateItem.style.padding = '10px';
          ultimateItem.style.background = 'rgba(255, 215, 0, 0.2)';
          ultimateItem.style.border = '1px solid gold';
          ultimateItem.style.borderRadius = '8px';
          ultimateItem.style.fontWeight = 'bold';
          contentContainer.appendChild(ultimateItem);
        }

        // Добавляем слабость
        const weaknessTitle = document.createElement('h3');
        weaknessTitle.textContent = language === 'en' ? 'Weakness' : 'Слабость';
        weaknessTitle.style.margin = '15px 0';
        weaknessTitle.style.fontSize = '1.5em';
        weaknessTitle.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)';
        contentContainer.appendChild(weaknessTitle);

        if (currentCharacter.weakness) {
          const weaknessItem = document.createElement('div');
          weaknessItem.textContent = currentCharacter.weakness[language];
          weaknessItem.style.margin = '10px 0';
          weaknessItem.style.padding = '10px';
          weaknessItem.style.background = 'rgba(255, 0, 0, 0.2)';
          weaknessItem.style.border = '1px solid red';
          weaknessItem.style.borderRadius = '8px';
          weaknessItem.style.color = '#ff6b6b';
          contentContainer.appendChild(weaknessItem);
        }

        // Добавляем изображение в контейнер
        imageContainer.appendChild(img);
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '10px';
        img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

        // Используем html2canvas для создания изображения карточки
        setTimeout(() => {
          import('html2canvas').then(({ default: html2canvas }) => {
            html2canvas(cardElement, {
              backgroundColor: null,
              scale: 2,
              logging: false,
              useCORS: true
            }).then(canvas => {
              // Создаем ссылку для скачивания
              const link = document.createElement('a');
              link.download = `${currentCharacter.name[language]}-card.png`;
              link.href = canvas.toDataURL('image/png');
              link.click();
              
              // Удаляем временный элемент
              document.body.removeChild(cardElement);
            });
          });
        }, 100);
      };

      img.onerror = () => {
        setError('Failed to load character image. Please try again.');
        document.body.removeChild(cardElement);
      };

      img.src = currentCharacter.image;
    } catch (err) {
      setError('Error downloading character. Please try again.');
      console.error('Error:', err);
    }
  };

  useEffect(() => {
    generateCharacter();
  }, []);

  return (
    <AppContainer>
      <Title>
        {language === 'en' ? 'DnD Character Generator' : 'Генератор персонажей DnD'}
      </Title>
      <ButtonContainer>
        <Button onClick={generateCharacter}>
          {language === 'en' ? 'Generate Character' : 'Создать персонажа'}
        </Button>
        <Button onClick={downloadCharacter} disabled={!currentCharacter}>
          {language === 'en' ? 'Download Image' : 'Скачать изображение'}
        </Button>
        <LanguageButton onClick={toggleLanguage}>
          {language === 'en' ? 'RU' : 'EN'}
        </LanguageButton>
      </ButtonContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {currentCharacter && <CharacterCard character={currentCharacter} />}
    </AppContainer>
  );
};

export default App;
