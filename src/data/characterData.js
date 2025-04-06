import { abilitiesPool } from './abilitiesPool';
import { generateCharacterStats } from './characterStats';

// Функция для получения случайных элементов из массива
const getRandomElements = (array, count) => {
  // Проверяем, является ли array массивом
  if (Array.isArray(array)) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  } 
  // Если array - объект с ключами en и ru
  else if (array && array.en && array.ru) {
    const shuffledEn = [...array.en].sort(() => 0.5 - Math.random());
    const shuffledRu = [...array.ru].sort(() => 0.5 - Math.random());
    
    return shuffledEn.slice(0, count).map((en, index) => ({
      en,
      ru: shuffledRu[index]
    }));
  }
  
  // Если формат неизвестен, возвращаем пустой массив
  console.error('Unknown format for abilities:', array);
  return [];
};

// Функция для преобразования camelCase в kebab-case
const camelToKebab = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

// Функция для создания персонажа с случайными способностями
export const createCharacter = (name, characterClass) => {
  const classData = abilitiesPool[characterClass];
  if (!classData) return null;

  // Получаем случайные способности
  const activeAbilities = getRandomElements(classData.activeAbilities, 3);
  const passiveAbilities = getRandomElements(classData.passiveAbilities, 2);
  
  // Получаем случайную ультимативную способность
  let ultimateAbility;
  if (Array.isArray(classData.ultimateAbilities)) {
    const index = Math.floor(Math.random() * classData.ultimateAbilities.length);
    ultimateAbility = classData.ultimateAbilities[index];
  } else if (classData.ultimateAbilities && classData.ultimateAbilities.en && classData.ultimateAbilities.ru) {
    const index = Math.floor(Math.random() * classData.ultimateAbilities.en.length);
    ultimateAbility = {
      en: classData.ultimateAbilities.en[index],
      ru: classData.ultimateAbilities.ru[index]
    };
  }
  
  // Получаем случайную слабость
  let weakness;
  if (Array.isArray(classData.weaknesses)) {
    const index = Math.floor(Math.random() * classData.weaknesses.length);
    weakness = classData.weaknesses[index];
  } else if (classData.weaknesses && classData.weaknesses.en && classData.weaknesses.ru) {
    const index = Math.floor(Math.random() * classData.weaknesses.en.length);
    weakness = {
      en: classData.weaknesses.en[index],
      ru: classData.weaknesses.ru[index]
    };
  }

  // Генерируем характеристики персонажа
  const stats = generateCharacterStats(characterClass);

  return {
    name: {
      en: name,
      ru: name // В будущем можно добавить перевод имен
    },
    class: characterClass,
    image: `/images/${camelToKebab(characterClass)}.png`,
    activeAbilities,
    passiveAbilities,
    ultimateAbility,
    weakness,
    stats
  };
};

export const characterClasses = {
  // Существующие классы
  necromancer: createCharacter('Necromancer', 'necromancer'),
  samurai: createCharacter('Samurai', 'samurai'),
  forestGuardian: createCharacter('Forest Guardian', 'forestGuardian'),
  pyromancer: createCharacter('Pyromancer', 'pyromancer'),
  tideMaster: createCharacter('Tide Master', 'tideMaster'),
  shadowBlade: createCharacter('Shadow Blade', 'shadowBlade'),
  solarForge: createCharacter('Solar Forge', 'solarForge'),
  stormCaller: createCharacter('Storm Caller', 'stormCaller'),
  boneReaper: createCharacter('Bone Reaper', 'boneReaper'),
  dreamWeaver: createCharacter('Dream Weaver', 'dreamWeaver'),
  voidReaper: createCharacter('Void Reaper', 'voidReaper'),
  chaosAlchemist: createCharacter('Chaos Alchemist', 'chaosAlchemist'),
  thunderForger: createCharacter('Thunder Forger', 'thunderForger'),
  sandCursed: createCharacter('Sand Cursed', 'sandCursed'),
  icePaladin: createCharacter('Ice Paladin', 'icePaladin'),
  
  // Новые классы
  ironJuggernaut: createCharacter('Iron Juggernaut', 'ironJuggernaut'),
  luminarch: createCharacter('Luminarch', 'luminarch'),
  sonicAnnihilator: createCharacter('Sonic Annihilator', 'sonicAnnihilator'),
  chronokeeper: createCharacter('Chronokeeper', 'chronokeeper'),
  venomlash: createCharacter('Venomlash', 'venomlash')
}; 