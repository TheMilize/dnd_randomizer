// Базовые диапазоны характеристик для разных классов
const baseStats = {
  // Общие характеристики для всех классов
  common: {
    hp: { min: 80, max: 120 },
    defense: { min: 5, max: 15 },
    speed: { min: 8, max: 15 },
    critChance: { min: 3, max: 10 }
  },
  
  // Специфические характеристики для разных классов
  classSpecific: {
    // Магические классы
    necromancer: {
      mp: { min: 100, max: 150 },
      magicPower: { min: 15, max: 25 },
      elementalResistance: { min: 8, max: 15 }
    },
    luminarch: {
      mp: { min: 90, max: 140 },
      magicPower: { min: 12, max: 22 },
      lightResistance: { min: 10, max: 18 }
    },
    chaosAlchemist: {
      mp: { min: 85, max: 135 },
      magicPower: { min: 10, max: 20 },
      chaosResistance: { min: 12, max: 20 }
    },
    
    // Физические классы
    ironJuggernaut: {
      stamina: { min: 120, max: 180 },
      physicalPower: { min: 18, max: 28 },
      armor: { min: 15, max: 25 }
    },
    sonicAnnihilator: {
      stamina: { min: 90, max: 140 },
      physicalPower: { min: 15, max: 25 },
      sonicResistance: { min: 10, max: 18 }
    },
    
    // Гибридные классы
    chronokeeper: {
      mp: { min: 70, max: 120 },
      stamina: { min: 70, max: 120 },
      timeManipulation: { min: 12, max: 22 }
    },
    venomlash: {
      stamina: { min: 80, max: 130 },
      poisonResistance: { min: 15, max: 25 },
      venomMastery: { min: 10, max: 20 }
    }
  }
};

// Функция для генерации случайного значения в заданном диапазоне
const getRandomStat = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для генерации характеристик персонажа
export const generateCharacterStats = (characterClass) => {
  const stats = {};
  
  // Генерируем общие характеристики
  Object.entries(baseStats.common).forEach(([stat, range]) => {
    stats[stat] = {
      value: getRandomStat(range.min, range.max),
      max: range.max
    };
  });
  
  // Добавляем специфические характеристики класса
  if (baseStats.classSpecific[characterClass]) {
    Object.entries(baseStats.classSpecific[characterClass]).forEach(([stat, range]) => {
      stats[stat] = {
        value: getRandomStat(range.min, range.max),
        max: range.max
      };
    });
  }
  
  return stats;
};

// Локализация названий характеристик
export const statNames = {
  en: {
    hp: "Health",
    mp: "Mana",
    stamina: "Stamina",
    defense: "Defense",
    speed: "Speed",
    critChance: "Critical Chance",
    magicPower: "Magic Power",
    physicalPower: "Physical Power",
    armor: "Armor",
    elementalResistance: "Elemental Resistance",
    lightResistance: "Light Resistance",
    chaosResistance: "Chaos Resistance",
    sonicResistance: "Sonic Resistance",
    timeManipulation: "Time Manipulation",
    poisonResistance: "Poison Resistance",
    venomMastery: "Venom Mastery"
  },
  ru: {
    hp: "Здоровье",
    mp: "Мана",
    stamina: "Выносливость",
    defense: "Защита",
    speed: "Скорость",
    critChance: "Шанс крита",
    magicPower: "Магическая сила",
    physicalPower: "Физическая сила",
    armor: "Броня",
    elementalResistance: "Сопротивление стихиям",
    lightResistance: "Сопротивление свету",
    chaosResistance: "Сопротивление хаосу",
    sonicResistance: "Сопротивление звуку",
    timeManipulation: "Манипуляция временем",
    poisonResistance: "Сопротивление яду",
    venomMastery: "Владение ядом"
  }
}; 