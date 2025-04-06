// Пул способностей для каждого класса
export const abilitiesPool = {
  // Некромант
  necromancer: {
    activeAbilities: {
      en: [
        "Soul Drain", "Bone Spike", "Death Bolt", "Shadow Strike", "Life Leech",
        "Dark Ritual", "Soul Explosion", "Necrotic Blast", "Death's Touch", "Shadow Bind",
        "Soul Harvest", "Bone Prison", "Death Wave", "Shadow Lance", "Life Steal",
        "Dark Pact", "Soul Burst", "Necrotic Ray", "Death's Grasp", "Shadow Trap",
        "Soul Blast", "Bone Storm", "Death Pulse", "Shadow Blade", "Life Drain",
        "Dark Curse", "Soul Strike", "Necrotic Touch", "Death's Mark", "Shadow Whip"
      ],
      ru: [
        "Высасывание души", "Костяной шип", "Смертельная стрела", "Теневой удар", "Высасывание жизни",
        "Темный ритуал", "Взрыв души", "Некротический взрыв", "Прикосновение смерти", "Теневое связывание",
        "Сбор душ", "Костяная тюрьма", "Волна смерти", "Теневое копье", "Кража жизни",
        "Темный договор", "Взрыв души", "Некротический луч", "Хватка смерти", "Теневая ловушка",
        "Взрыв души", "Костяная буря", "Пульс смерти", "Теневой клинок", "Высасывание жизни",
        "Темное проклятие", "Удар души", "Некротическое прикосновение", "Метка смерти", "Теневая плеть"
      ]
    },
    passiveAbilities: {
      en: [
        "Soul Collector", "Death's Embrace", "Shadow Veil", "Bone Armor", "Life Siphon",
        "Dark Aura", "Soul Shield", "Death's Presence", "Shadow Cloak", "Bone Regeneration",
        "Life Link", "Dark Protection", "Soul Fortress", "Death's Guard", "Shadow Step",
        "Bone Mastery", "Life Force", "Dark Resilience", "Soul Barrier", "Death's Ward"
      ],
      ru: [
        "Собиратель душ", "Объятия смерти", "Теневая завеса", "Костяная броня", "Высасывание жизни",
        "Темная аура", "Щит души", "Присутствие смерти", "Теневой плащ", "Костяная регенерация",
        "Связь с жизнью", "Темная защита", "Крепость души", "Стража смерти", "Теневой шаг",
        "Мастерство костей", "Жизненная сила", "Темная стойкость", "Барьер души", "Защита смерти"
      ]
    },
    ultimateAbilities: {
      en: [
        "Army of the Dead", "Soul Apocalypse", "Death's Dominion", "Shadow Realm", "Life's End",
        "Dark Ascension", "Soul Devourer", "Death's Judgment", "Shadow Storm", "Life's Bane"
      ],
      ru: [
        "Армия мертвых", "Апокалипсис душ", "Владычество смерти", "Теневой мир", "Конец жизни",
        "Темное вознесение", "Пожиратель душ", "Суд смерти", "Теневая буря", "Погибель жизни"
      ]
    },
    weaknesses: {
      en: [
        "Vulnerable to Light", "Bound to Shadows", "Life Force Dependent", "Dark Energy Leak", "Soul Fragility",
        "Light Sensitivity", "Shadow Bound", "Life Force Drain", "Dark Energy Weakness", "Soul Instability",
        "Light Weakness", "Shadow Dependency", "Life Force Leak", "Dark Energy Fragility", "Soul Vulnerability"
      ],
      ru: [
        "Уязвим к свету", "Привязан к теням", "Зависим от жизненной силы", "Утечка темной энергии", "Хрупкость души",
        "Чувствительность к свету", "Привязанность к теням", "Истощение жизненной силы", "Слабость к темной энергии", "Нестабильность души",
        "Слабость к свету", "Зависимость от теней", "Утечка жизненной силы", "Хрупкость темной энергии", "Уязвимость души"
      ]
    }
  },
  
  // Самурай
  samurai: {
    activeAbilities: {
      en: [
        "Swift Strike", "Blade Dance", "Wind Slash", "Spirit Cut", "Moonlight Blade",
        "Dragon Strike", "Blade Storm", "Wind Step", "Spirit Rush", "Moonlight Flash",
        "Swift Blade", "Blade Wave", "Wind Rush", "Spirit Slash", "Moonlight Strike",
        "Dragon Slash", "Blade Flash", "Wind Blade", "Spirit Storm", "Moonlight Dance",
        "Swift Cut", "Blade Rush", "Wind Storm", "Spirit Flash", "Moonlight Rush",
        "Dragon Rush", "Blade Step", "Wind Flash", "Spirit Dance", "Moonlight Storm"
      ],
      ru: [
        "Быстрый удар", "Танец клинка", "Ветровой удар", "Духовный разрез", "Лунный клинок",
        "Удар дракона", "Буря клинков", "Ветровой шаг", "Духовный рывок", "Лунная вспышка",
        "Быстрый клинок", "Волна клинка", "Ветровой рывок", "Духовный удар", "Лунный удар",
        "Разрез дракона", "Вспышка клинка", "Ветровой клинок", "Духовная буря", "Лунный танец",
        "Быстрый разрез", "Рывок клинка", "Ветровая буря", "Духовная вспышка", "Лунный рывок",
        "Рывок дракона", "Шаг клинка", "Ветровая вспышка", "Духовный танец", "Лунная буря"
      ]
    },
    passiveAbilities: {
      en: [
        "Blade Mastery", "Wind Walker", "Spirit Sense", "Moonlight Grace", "Dragon's Spirit",
        "Blade Guardian", "Wind Dancer", "Spirit Shield", "Moonlight Ward", "Dragon's Grace",
        "Blade Sage", "Wind Master", "Spirit Guide", "Moonlight Master", "Dragon's Shield",
        "Blade Spirit", "Wind Grace", "Spirit Master", "Moonlight Sage", "Dragon's Ward"
      ],
      ru: [
        "Мастерство клинка", "Ходок ветра", "Духовное чутье", "Лунная грация", "Дух дракона",
        "Страж клинка", "Танцор ветра", "Духовный щит", "Лунная защита", "Грация дракона",
        "Мудрец клинка", "Мастер ветра", "Духовный проводник", "Мастер луны", "Щит дракона",
        "Дух клинка", "Грация ветра", "Мастер духа", "Лунный мудрец", "Защита дракона"
      ]
    },
    ultimateAbilities: {
      en: [
        "Thousand Blade Dance", "Dragon's Wrath", "Spirit Storm", "Moonlight Tempest", "Wind Hurricane",
        "Blade Apocalypse", "Dragon's Storm", "Spirit Hurricane", "Moonlight Storm", "Wind Tempest",
        "Blade Hurricane", "Dragon's Tempest", "Spirit Apocalypse", "Moonlight Hurricane", "Wind Storm"
      ],
      ru: [
        "Танец тысячи клинков", "Гнев дракона", "Духовная буря", "Лунный шторм", "Ветровой ураган",
        "Апокалипсис клинков", "Буря дракона", "Духовный ураган", "Лунная буря", "Ветровой шторм",
        "Ураган клинков", "Шторм дракона", "Духовный апокалипсис", "Лунный ураган", "Ветровая буря"
      ]
    },
    weaknesses: {
      en: [
        "Bound by Honor", "Vulnerable to Magic", "Spirit Drain", "Moonlight Weakness", "Wind Resistance",
        "Honor Bound", "Magic Weakness", "Spirit Vulnerability", "Moonlight Sensitivity", "Wind Weakness",
        "Honor Code", "Magic Sensitivity", "Spirit Weakness", "Moonlight Resistance", "Wind Sensitivity"
      ],
      ru: [
        "Связан честью", "Уязвим к магии", "Истощение духа", "Слабость к лунному свету", "Сопротивление ветру",
        "Связан честью", "Слабость к магии", "Уязвимость духа", "Чувствительность к лунному свету", "Слабость к ветру",
        "Кодекс чести", "Чувствительность к магии", "Слабость духа", "Сопротивление лунному свету", "Чувствительность к ветру"
      ]
    }
  },
  
  // Страж Леса
  forestGuardian: {
    activeAbilities: {
      en: [
        "Nature's Strike", "Root Bind", "Leaf Storm", "Vine Whip", "Earth Spike",
        "Forest's Call", "Root Burst", "Leaf Blade", "Vine Trap", "Earth Wave",
        "Nature's Blast", "Root Storm", "Leaf Rush", "Vine Storm", "Earth Burst",
        "Forest's Storm", "Root Wave", "Leaf Trap", "Vine Burst", "Earth Storm",
        "Nature's Storm", "Root Rush", "Leaf Burst", "Vine Wave", "Earth Rush",
        "Forest's Burst", "Root Trap", "Leaf Wave", "Vine Rush", "Earth Trap"
      ],
      ru: [
        "Удар природы", "Связывание корнями", "Буря листьев", "Плеть лозы", "Земляной шип",
        "Зов леса", "Взрыв корней", "Клинок листьев", "Ловушка лозы", "Земляная волна",
        "Взрыв природы", "Буря корней", "Рывок листьев", "Буря лозы", "Земляной взрыв",
        "Буря леса", "Волна корней", "Ловушка листьев", "Взрыв лозы", "Земляная буря",
        "Буря природы", "Рывок корней", "Взрыв листьев", "Волна лозы", "Земляной рывок",
        "Взрыв леса", "Ловушка корней", "Волна листьев", "Рывок лозы", "Земляная ловушка"
      ]
    },
    passiveAbilities: {
      en: [
        "Nature's Blessing", "Root Shield", "Leaf Armor", "Vine Guard", "Earth's Protection",
        "Forest's Grace", "Root Ward", "Leaf Shield", "Vine Armor", "Earth's Guard",
        "Nature's Shield", "Root Armor", "Leaf Ward", "Vine Shield", "Earth's Armor",
        "Forest's Shield", "Root Protection", "Leaf Guard", "Vine Ward", "Earth's Ward"
      ],
      ru: [
        "Благословение природы", "Щит корней", "Броня листьев", "Стража лозы", "Защита земли",
        "Грация леса", "Защита корней", "Щит листьев", "Броня лозы", "Стража земли",
        "Щит природы", "Броня корней", "Защита листьев", "Щит лозы", "Броня земли",
        "Щит леса", "Защита корней", "Стража листьев", "Защита лозы", "Защита земли"
      ]
    },
    ultimateAbilities: {
      en: [
        "Nature's Wrath", "Forest's Fury", "Earth's Storm", "Root Apocalypse", "Leaf Hurricane",
        "Nature's Storm", "Forest's Storm", "Earth's Hurricane", "Root Storm", "Leaf Tempest",
        "Nature's Hurricane", "Forest's Hurricane", "Earth's Tempest", "Root Hurricane", "Leaf Storm"
      ],
      ru: [
        "Гнев природы", "Ярость леса", "Буря земли", "Апокалипсис корней", "Ураган листьев",
        "Буря природы", "Буря леса", "Ураган земли", "Буря корней", "Шторм листьев",
        "Ураган природы", "Ураган леса", "Шторм земли", "Ураган корней", "Буря листьев"
      ]
    },
    weaknesses: {
      en: [
        "Fire Vulnerability", "Winter Weakness", "Drought Sensitivity", "Blight Susceptibility", "Nature's Bane",
        "Fire Weakness", "Winter Sensitivity", "Drought Susceptibility", "Blight Vulnerability", "Nature's Curse",
        "Fire Sensitivity", "Winter Susceptibility", "Drought Vulnerability", "Blight Weakness", "Nature's Doom"
      ],
      ru: [
        "Уязвимость к огню", "Слабость к зиме", "Чувствительность к засухе", "Восприимчивость к порче", "Погибель природы",
        "Слабость к огню", "Чувствительность к зиме", "Восприимчивость к засухе", "Уязвимость к порче", "Проклятие природы",
        "Чувствительность к огню", "Восприимчивость к зиме", "Уязвимость к засухе", "Слабость к порче", "Гибель природы"
      ]
    }
  },
  
  // Пирамант
  pyromancer: {
    activeAbilities: {
      en: [
        "Fireball", "Flame Burst", "Inferno Blast", "Magma Strike", "Phoenix Fire",
        "Blaze Storm", "Flame Wave", "Inferno Rush", "Magma Burst", "Phoenix Blast",
        "Fire Storm", "Flame Burst", "Inferno Storm", "Magma Wave", "Phoenix Storm",
        "Blaze Burst", "Flame Storm", "Inferno Wave", "Magma Storm", "Phoenix Wave",
        "Fire Burst", "Flame Wave", "Inferno Burst", "Magma Burst", "Phoenix Burst",
        "Blaze Wave", "Flame Burst", "Inferno Wave", "Magma Wave", "Phoenix Wave"
      ],
      ru: [
        "Огненный шар", "Взрыв пламени", "Взрыв ада", "Удар магмы", "Огонь феникса",
        "Буря огня", "Волна пламени", "Рывок ада", "Взрыв магмы", "Взрыв феникса",
        "Огненная буря", "Взрыв пламени", "Буря ада", "Волна магмы", "Буря феникса",
        "Взрыв огня", "Буря пламени", "Волна ада", "Буря магмы", "Волна феникса",
        "Огненный взрыв", "Волна пламени", "Взрыв ада", "Взрыв магмы", "Взрыв феникса",
        "Волна огня", "Взрыв пламени", "Волна ада", "Волна магмы", "Волна феникса"
      ]
    },
    passiveAbilities: {
      en: [
        "Fire Mastery", "Flame Shield", "Inferno Ward", "Magma Armor", "Phoenix Grace",
        "Blaze Guardian", "Flame Armor", "Inferno Shield", "Magma Ward", "Phoenix Shield",
        "Fire Shield", "Flame Ward", "Inferno Armor", "Magma Shield", "Phoenix Armor",
        "Blaze Shield", "Flame Guardian", "Inferno Grace", "Magma Guardian", "Phoenix Guardian"
      ],
      ru: [
        "Мастерство огня", "Щит пламени", "Защита ада", "Броня магмы", "Грация феникса",
        "Страж огня", "Броня пламени", "Щит ада", "Защита магмы", "Щит феникса",
        "Огненный щит", "Защита пламени", "Броня ада", "Щит магмы", "Броня феникса",
        "Щит огня", "Страж пламени", "Грация ада", "Страж магмы", "Страж феникса"
      ]
    },
    ultimateAbilities: {
      en: [
        "Apocalypse Flame", "Inferno Storm", "Phoenix Rebirth", "Magma Tempest", "Blaze Hurricane",
        "Fire Apocalypse", "Inferno Hurricane", "Phoenix Storm", "Magma Storm", "Blaze Tempest",
        "Fire Hurricane", "Inferno Tempest", "Phoenix Tempest", "Magma Hurricane", "Blaze Storm"
      ],
      ru: [
        "Апокалипсис пламени", "Буря ада", "Возрождение феникса", "Шторм магмы", "Ураган огня"
      ]
    },
    weaknesses: {
      en: [
        "Water Vulnerability", "Ice Weakness", "Rain Sensitivity", "Frost Susceptibility", "Cold's Bane",
        "Water Weakness", "Ice Sensitivity", "Rain Susceptibility", "Frost Vulnerability", "Cold's Curse",
        "Water Sensitivity", "Ice Susceptibility", "Rain Vulnerability", "Frost Weakness", "Cold's Doom"
      ],
      ru: [
        "Уязвимость к воде", "Слабость к льду", "Чувствительность к дождю", "Восприимчивость к морозу", "Погибель холода",
        "Слабость к воде", "Чувствительность ко льду", "Восприимчивость к дождю", "Уязвимость к морозу", "Проклятие холода",
        "Чувствительность к воде", "Восприимчивость ко льду", "Уязвимость к дождю", "Слабость к морозу", "Гибель холода"
      ]
    }
  },
  
  // Повелитель Приливов
  tideMaster: {
    activeAbilities: {
      en: [
        "Water Blast", "Wave Strike", "Tide Rush", "Ocean Storm", "Tsunami Burst",
        "Sea Strike", "Wave Burst", "Tide Storm", "Ocean Rush", "Tsunami Storm",
        "Water Storm", "Wave Rush", "Tide Burst", "Ocean Burst", "Tsunami Rush",
        "Sea Burst", "Wave Storm", "Tide Wave", "Ocean Wave", "Tsunami Wave",
        "Water Burst", "Wave Wave", "Tide Storm", "Ocean Storm", "Tsunami Burst",
        "Sea Wave", "Wave Burst", "Tide Ocean", "Ocean Burst", "Tsunami Ocean"
      ],
      ru: [
        "Водный взрыв", "Удар волны", "Рывок прилива", "Океанская буря", "Взрыв цунами",
        "Морской удар", "Взрыв волны", "Буря прилива", "Рывок океана", "Буря цунами",
        "Водная буря", "Рывок волны", "Взрыв прилива", "Взрыв океана", "Рывок цунами",
        "Морской взрыв", "Буря волны", "Волна прилива", "Волна океана", "Волна цунами",
        "Водный взрыв", "Волна волны", "Буря прилива", "Океанская буря", "Взрыв цунами",
        "Морская волна", "Взрыв волны", "Океан прилива", "Взрыв океана", "Океан цунами"
      ]
    },
    passiveAbilities: {
      en: [
        "Water Mastery", "Wave Shield", "Tide Ward", "Ocean Armor", "Tsunami Grace",
        "Sea Guardian", "Wave Armor", "Tide Shield", "Ocean Ward", "Tsunami Shield",
        "Water Shield", "Wave Ward", "Tide Armor", "Ocean Shield", "Tsunami Armor",
        "Sea Shield", "Wave Guardian", "Tide Grace", "Ocean Guardian", "Tsunami Guardian"
      ],
      ru: [
        "Мастерство воды", "Щит волны", "Защита прилива", "Броня океана", "Грация цунами",
        "Морской страж", "Броня волны", "Щит прилива", "Защита океана", "Щит цунами",
        "Водный щит", "Защита волны", "Броня прилива", "Щит океана", "Броня цунами",
        "Морской щит", "Страж волны", "Грация прилива", "Страж океана", "Страж цунами"
      ]
    },
    ultimateAbilities: {
      en: [
        "Ocean's Wrath", "Tsunami Storm", "Tide Apocalypse", "Wave Hurricane", "Sea Tempest",
        "Water Apocalypse", "Tsunami Hurricane", "Tide Storm", "Wave Storm", "Sea Hurricane",
        "Water Hurricane", "Tsunami Tempest", "Tide Hurricane", "Wave Tempest", "Sea Storm"
      ],
      ru: [
        "Гнев океана", "Буря цунами", "Апокалипсис прилива", "Ураган волны", "Шторм моря"
      ]
    },
    weaknesses: {
      en: [
        "Land Vulnerability", "Desert Weakness", "Drought Sensitivity", "Earth Susceptibility", "Stone's Bane",
        "Land Weakness", "Desert Sensitivity", "Drought Susceptibility", "Earth Vulnerability", "Stone's Curse",
        "Land Sensitivity", "Desert Susceptibility", "Drought Vulnerability", "Earth Weakness", "Stone's Doom"
      ],
      ru: [
        "Уязвимость к суше", "Слабость к пустыне", "Чувствительность к засухе", "Восприимчивость к земле", "Погибель камня",
        "Слабость к суше", "Чувствительность к пустыне", "Восприимчивость к засухе", "Уязвимость к земле", "Проклятие камня",
        "Чувствительность к суше", "Восприимчивость к пустыне", "Уязвимость к засухе", "Слабость к земле", "Гибель камня"
      ]
    }
  },
  
  // Теневой Клинок
  shadowBlade: {
    activeAbilities: {
      en: [
        "Shadow Strike", "Dark Blade", "Void Slash", "Night Rush", "Shadow Burst",
        "Dark Storm", "Void Strike", "Night Blade", "Shadow Rush", "Dark Burst",
        "Void Storm", "Night Strike", "Shadow Storm", "Dark Rush", "Void Burst",
        "Night Storm", "Shadow Blade", "Dark Storm", "Void Rush", "Night Burst",
        "Shadow Rush", "Dark Blade", "Void Storm", "Night Storm", "Shadow Burst",
        "Dark Rush", "Void Blade", "Night Rush", "Shadow Storm", "Dark Storm"
      ],
      ru: [
        "Теневой удар", "Темный клинок", "Разрез пустоты", "Ночной рывок", "Теневой взрыв",
        "Темная буря", "Удар пустоты", "Ночной клинок", "Теневой рывок", "Темный взрыв",
        "Буря пустоты", "Ночной удар", "Теневая буря", "Темный рывок", "Взрыв пустоты",
        "Ночная буря", "Теневой клинок", "Темная буря", "Рывок пустоты", "Ночной взрыв",
        "Теневой рывок", "Темный клинок", "Буря пустоты", "Ночная буря", "Теневой взрыв",
        "Темный рывок", "Клинок пустоты", "Ночной рывок", "Теневая буря", "Темная буря"
      ]
    },
    passiveAbilities: {
      en: [
        "Shadow Mastery", "Dark Shield", "Void Ward", "Night Armor", "Shadow Grace",
        "Dark Guardian", "Void Shield", "Night Ward", "Shadow Armor", "Dark Ward",
        "Void Armor", "Night Shield", "Shadow Ward", "Dark Armor", "Void Grace",
        "Night Guardian", "Shadow Guardian", "Dark Grace", "Void Guardian", "Night Grace"
      ],
      ru: [
        "Мастерство теней", "Темный щит", "Защита пустоты", "Ночная броня", "Теневая грация",
        "Темный страж", "Щит пустоты", "Ночная защита", "Теневая броня", "Темная защита",
        "Броня пустоты", "Ночной щит", "Теневая защита", "Темная броня", "Грация пустоты",
        "Ночной страж", "Теневой страж", "Темная грация", "Страж пустоты", "Ночная грация"
      ]
    },
    ultimateAbilities: {
      en: [
        "Shadow Apocalypse", "Dark Storm", "Void Hurricane", "Night Tempest", "Shadow Storm",
        "Dark Apocalypse", "Void Storm", "Night Hurricane", "Shadow Tempest", "Dark Hurricane",
        "Void Tempest", "Night Storm", "Shadow Hurricane", "Dark Tempest", "Void Storm"
      ],
      ru: [
        "Теневой апокалипсис", "Темная буря", "Ураган пустоты", "Ночной шторм", "Теневая буря",
        "Темный апокалипсис", "Буря пустоты", "Ночной ураган", "Теневой шторм", "Темный ураган",
        "Шторм пустоты", "Ночная буря", "Теневой ураган", "Темный шторм", "Буря пустоты"
      ]
    },
    weaknesses: {
      en: [
        "Light Vulnerability", "Sun Weakness", "Dawn Sensitivity", "Radiance Susceptibility", "Day's Bane",
        "Light Weakness", "Sun Sensitivity", "Dawn Susceptibility", "Radiance Vulnerability", "Day's Curse",
        "Light Sensitivity", "Sun Susceptibility", "Dawn Vulnerability", "Radiance Weakness", "Day's Doom"
      ],
      ru: [
        "Уязвимость к свету", "Слабость к солнцу", "Чувствительность к рассвету", "Восприимчивость к сиянию", "Погибель дня",
        "Слабость к свету", "Чувствительность к солнцу", "Восприимчивость к рассвету", "Уязвимость к сиянию", "Проклятие дня",
        "Чувствительность к свету", "Восприимчивость к солнцу", "Уязвимость к рассвету", "Слабость к сиянию", "Гибель дня"
      ]
    }
  },
  
  // Солнечный Кователь
  solarForge: {
    activeAbilities: {
      en: [
        "Solar Strike", "Sun Burst", "Light Blade", "Dawn Rush", "Solar Storm",
        "Sun Storm", "Light Strike", "Dawn Blade", "Solar Rush", "Sun Burst",
        "Light Storm", "Dawn Strike", "Solar Blade", "Sun Rush", "Light Burst",
        "Dawn Storm", "Solar Storm", "Sun Blade", "Light Rush", "Dawn Burst",
        "Solar Rush", "Sun Storm", "Light Storm", "Dawn Storm", "Solar Burst",
        "Sun Rush", "Light Blade", "Dawn Rush", "Solar Storm", "Sun Storm"
      ],
      ru: [
        "Солнечный удар", "Взрыв солнца", "Световой клинок", "Рывок рассвета", "Солнечная буря",
        "Буря солнца", "Световой удар", "Клинок рассвета", "Солнечный рывок", "Взрыв солнца",
        "Световая буря", "Удар рассвета", "Солнечный клинок", "Рывок солнца", "Световой взрыв",
        "Буря рассвета", "Солнечная буря", "Клинок солнца", "Световой рывок", "Взрыв рассвета",
        "Солнечный рывок", "Буря солнца", "Световая буря", "Буря рассвета", "Солнечный взрыв",
        "Рывок солнца", "Световой клинок", "Рывок рассвета", "Солнечная буря", "Буря солнца"
      ]
    },
    passiveAbilities: {
      en: [
        "Solar Mastery", "Sun Shield", "Light Ward", "Dawn Armor", "Solar Grace",
        "Sun Guardian", "Light Shield", "Dawn Ward", "Solar Armor", "Sun Ward",
        "Light Armor", "Dawn Shield", "Solar Ward", "Sun Armor", "Light Grace",
        "Dawn Guardian", "Solar Guardian", "Sun Grace", "Light Guardian", "Dawn Grace"
      ],
      ru: [
        "Мастерство солнца", "Солнечный щит", "Световая защита", "Броня рассвета", "Солнечная грация",
        "Страж солнца", "Световой щит", "Защита рассвета", "Солнечная броня", "Защита солнца",
        "Световая броня", "Щит рассвета", "Солнечная защита", "Броня солнца", "Световая грация",
        "Страж рассвета", "Солнечный страж", "Грация солнца", "Световой страж", "Грация рассвета"
      ]
    },
    ultimateAbilities: {
      en: [
        "Solar Apocalypse", "Sun Storm", "Light Hurricane", "Dawn Tempest", "Solar Storm",
        "Sun Apocalypse", "Light Storm", "Dawn Hurricane", "Solar Tempest", "Sun Hurricane",
        "Light Tempest", "Dawn Storm", "Solar Hurricane", "Sun Tempest", "Light Storm"
      ],
      ru: [
        "Солнечный апокалипсис", "Буря солнца", "Световой ураган", "Шторм рассвета", "Солнечная буря",
        "Апокалипсис солнца", "Световая буря", "Ураган рассвета", "Солнечный шторм", "Ураган солнца",
        "Световой шторм", "Буря рассвета", "Солнечный ураган", "Шторм солнца", "Световая буря"
      ]
    },
    weaknesses: {
      en: [
        "Night Vulnerability", "Shadow Weakness", "Dark Sensitivity", "Void Susceptibility", "Night's Bane",
        "Night Weakness", "Shadow Sensitivity", "Dark Susceptibility", "Void Vulnerability", "Night's Curse",
        "Night Sensitivity", "Shadow Susceptibility", "Dark Vulnerability", "Void Weakness", "Night's Doom"
      ],
      ru: [
        "Уязвимость к ночи", "Слабость к теням", "Чувствительность к темноте", "Восприимчивость к пустоте", "Погибель ночи",
        "Слабость к ночи", "Чувствительность к теням", "Восприимчивость к темноте", "Уязвимость к пустоте", "Проклятие ночи",
        "Чувствительность к ночи", "Восприимчивость к теням", "Уязвимость к темноте", "Слабость к пустоте", "Гибель ночи"
      ]
    }
  },
  
  // Призыватель Бурь
  stormCaller: {
    activeAbilities: {
      en: [
        "Storm Strike", "Lightning Burst", "Thunder Blade", "Wind Rush", "Storm Storm",
        "Lightning Storm", "Thunder Strike", "Wind Blade", "Storm Rush", "Lightning Burst",
        "Thunder Storm", "Wind Strike", "Storm Blade", "Lightning Rush", "Thunder Burst",
        "Wind Storm", "Storm Storm", "Lightning Blade", "Thunder Rush", "Wind Burst",
        "Storm Rush", "Lightning Storm", "Thunder Storm", "Wind Storm", "Storm Burst",
        "Lightning Rush", "Thunder Blade", "Wind Rush", "Storm Storm", "Lightning Storm"
      ],
      ru: [
        "Удар бури", "Взрыв молнии", "Клинок грома", "Рывок ветра", "Буря бури",
        "Буря молнии", "Удар грома", "Клинок ветра", "Рывок бури", "Взрыв молнии",
        "Буря грома", "Удар ветра", "Клинок бури", "Рывок молнии", "Взрыв грома",
        "Буря ветра", "Буря бури", "Клинок молнии", "Рывок грома", "Взрыв ветра",
        "Рывок бури", "Буря молнии", "Буря грома", "Буря ветра", "Взрыв бури",
        "Рывок молнии", "Клинок грома", "Рывок ветра", "Буря бури", "Буря молнии"
      ]
    },
    passiveAbilities: {
      en: [
        "Storm Mastery", "Lightning Shield", "Thunder Ward", "Wind Armor", "Storm Grace",
        "Lightning Guardian", "Thunder Shield", "Wind Ward", "Storm Armor", "Lightning Ward",
        "Thunder Armor", "Wind Shield", "Storm Ward", "Lightning Armor", "Thunder Grace",
        "Wind Guardian", "Storm Guardian", "Lightning Grace", "Thunder Guardian", "Wind Grace"
      ],
      ru: [
        "Мастерство бури", "Щит молнии", "Защита грома", "Броня ветра", "Грация бури",
        "Страж молнии", "Щит грома", "Защита ветра", "Броня бури", "Защита молнии",
        "Броня грома", "Щит ветра", "Защита бури", "Броня молнии", "Грация грома",
        "Страж ветра", "Страж бури", "Грация молнии", "Страж грома", "Грация ветра"
      ]
    },
    ultimateAbilities: {
      en: [
        "Storm Apocalypse", "Lightning Storm", "Thunder Hurricane", "Wind Tempest", "Storm Storm",
        "Lightning Apocalypse", "Thunder Storm", "Wind Hurricane", "Storm Tempest", "Lightning Hurricane",
        "Thunder Tempest", "Wind Storm", "Storm Hurricane", "Lightning Tempest", "Thunder Storm"
      ],
      ru: [
        "Апокалипсис бури", "Буря молнии", "Ураган грома", "Шторм ветра", "Буря бури",
        "Апокалипсис молнии", "Буря грома", "Ураган ветра", "Шторм бури", "Ураган молнии",
        "Шторм грома", "Буря ветра", "Ураган бури", "Шторм молнии", "Буря грома"
      ]
    },
    weaknesses: {
      en: [
        "Earth Vulnerability", "Stone Weakness", "Ground Sensitivity", "Mountain Susceptibility", "Earth's Bane",
        "Earth Weakness", "Stone Sensitivity", "Ground Susceptibility", "Mountain Vulnerability", "Earth's Curse",
        "Earth Sensitivity", "Stone Susceptibility", "Ground Vulnerability", "Mountain Weakness", "Earth's Doom"
      ],
      ru: [
        "Уязвимость к земле", "Слабость к камню", "Чувствительность к земле", "Восприимчивость к горам", "Погибель земли",
        "Слабость к земле", "Чувствительность к камню", "Восприимчивость к земле", "Уязвимость к горам", "Проклятие земли",
        "Чувствительность к земле", "Восприимчивость к камню", "Уязвимость к земле", "Слабость к горам", "Гибель земли"
      ]
    }
  },
  
  // Костерез
  boneReaper: {
    activeAbilities: {
      en: [
        "Bone Strike", "Skeleton Burst", "Skull Blade", "Spine Rush", "Bone Storm",
        "Skeleton Storm", "Skull Strike", "Spine Blade", "Bone Rush", "Skeleton Burst",
        "Skull Storm", "Spine Strike", "Bone Blade", "Skeleton Rush", "Skull Burst",
        "Spine Storm", "Bone Storm", "Skeleton Blade", "Skull Rush", "Spine Burst",
        "Bone Rush", "Skeleton Storm", "Skull Storm", "Spine Storm", "Bone Burst",
        "Skeleton Rush", "Skull Blade", "Spine Rush", "Bone Storm", "Skeleton Storm"
      ],
      ru: [
        "Удар кости", "Взрыв скелета", "Клинок черепа", "Рывок позвоночника", "Буря костей",
        "Буря скелета", "Удар черепа", "Клинок позвоночника", "Рывок кости", "Взрыв скелета",
        "Буря черепа", "Удар позвоночника", "Клинок кости", "Рывок скелета", "Взрыв черепа",
        "Буря позвоночника", "Буря костей", "Клинок скелета", "Рывок черепа", "Взрыв позвоночника",
        "Рывок кости", "Буря скелета", "Буря черепа", "Буря позвоночника", "Взрыв кости",
        "Рывок скелета", "Клинок черепа", "Рывок позвоночника", "Буря костей", "Буря скелета"
      ]
    },
    passiveAbilities: {
      en: [
        "Bone Mastery", "Skeleton Shield", "Skull Ward", "Spine Armor", "Bone Grace",
        "Skeleton Guardian", "Skull Shield", "Spine Ward", "Bone Armor", "Skeleton Ward",
        "Skull Armor", "Spine Shield", "Bone Ward", "Skeleton Armor", "Skull Grace",
        "Spine Guardian", "Bone Guardian", "Skeleton Grace", "Skull Guardian", "Spine Grace"
      ],
      ru: [
        "Мастерство костей", "Щит скелета", "Защита черепа", "Броня позвоночника", "Грация кости",
        "Страж скелета", "Щит черепа", "Защита позвоночника", "Броня кости", "Защита скелета",
        "Броня черепа", "Щит позвоночника", "Защита кости", "Броня скелета", "Грация черепа",
        "Страж позвоночника", "Страж кости", "Грация скелета", "Страж черепа", "Грация позвоночника"
      ]
    },
    ultimateAbilities: {
      en: [
        "Bone Apocalypse", "Skeleton Storm", "Skull Hurricane", "Spine Tempest", "Bone Storm",
        "Skeleton Apocalypse", "Skull Storm", "Spine Hurricane", "Bone Tempest", "Skeleton Hurricane",
        "Skull Tempest", "Spine Storm", "Bone Hurricane", "Skeleton Tempest", "Skull Storm"
      ],
      ru: [
        "Апокалипсис костей", "Буря скелета", "Ураган черепа", "Шторм позвоночника", "Буря костей",
        "Апокалипсис скелета", "Буря черепа", "Ураган позвоночника", "Шторм кости", "Ураган скелета",
        "Шторм черепа", "Буря позвоночника", "Ураган кости", "Шторм скелета", "Буря черепа"
      ]
    },
    weaknesses: {
      en: [
        "Life Vulnerability", "Light Weakness", "Healing Sensitivity", "Holy Susceptibility", "Life's Bane",
        "Life Weakness", "Light Sensitivity", "Healing Susceptibility", "Holy Vulnerability", "Life's Curse",
        "Life Sensitivity", "Light Susceptibility", "Healing Vulnerability", "Holy Weakness", "Life's Doom"
      ],
      ru: [
        "Уязвимость к жизни", "Слабость к свету", "Чувствительность к исцелению", "Восприимчивость к святости", "Погибель жизни",
        "Слабость к жизни", "Чувствительность к свету", "Восприимчивость к исцелению", "Уязвимость к святости", "Проклятие жизни",
        "Чувствительность к жизни", "Восприимчивость к свету", "Уязвимость к исцелению", "Слабость к святости", "Гибель жизни"
      ]
    }
  },
  
  // Ткач Снов
  dreamWeaver: {
    activeAbilities: {
      en: [
        "Dream Strike", "Sleep Burst", "Nightmare Blade", "Illusion Rush", "Dream Storm",
        "Sleep Storm", "Nightmare Strike", "Illusion Blade", "Dream Rush", "Sleep Burst",
        "Nightmare Storm", "Illusion Strike", "Dream Blade", "Sleep Rush", "Nightmare Burst",
        "Illusion Storm", "Dream Storm", "Sleep Blade", "Nightmare Rush", "Illusion Burst",
        "Dream Rush", "Sleep Storm", "Nightmare Storm", "Illusion Storm", "Dream Burst",
        "Sleep Rush", "Nightmare Blade", "Illusion Rush", "Dream Storm", "Sleep Storm"
      ],
      ru: [
        "Удар сна", "Взрыв сновидения", "Клинок кошмара", "Рывок иллюзии", "Буря снов",
        "Буря сна", "Удар кошмара", "Клинок иллюзии", "Рывок сна", "Взрыв сновидения",
        "Буря кошмара", "Удар иллюзии", "Клинок сна", "Рывок сновидения", "Взрыв кошмара",
        "Буря иллюзии", "Буря снов", "Клинок сна", "Рывок кошмара", "Взрыв иллюзии",
        "Рывок сна", "Буря сновидения", "Буря кошмара", "Буря иллюзии", "Взрыв сна",
        "Рывок сновидения", "Клинок кошмара", "Рывок иллюзии", "Буря снов", "Буря сна"
      ]
    },
    passiveAbilities: {
      en: [
        "Dream Mastery", "Sleep Shield", "Nightmare Ward", "Illusion Armor", "Dream Grace",
        "Sleep Guardian", "Nightmare Shield", "Illusion Ward", "Dream Armor", "Sleep Ward",
        "Nightmare Armor", "Illusion Shield", "Dream Ward", "Sleep Armor", "Nightmare Grace",
        "Illusion Guardian", "Dream Guardian", "Sleep Grace", "Nightmare Guardian", "Illusion Grace"
      ],
      ru: [
        "Мастерство снов", "Щит сна", "Защита кошмара", "Броня иллюзии", "Грация сна",
        "Страж сна", "Щит кошмара", "Защита иллюзии", "Броня сна", "Защита сновидения",
        "Броня кошмара", "Щит иллюзии", "Защита сна", "Броня сновидения", "Грация кошмара",
        "Страж иллюзии", "Страж сна", "Грация сновидения", "Страж кошмара", "Грация иллюзии"
      ]
    },
    ultimateAbilities: {
      en: [
        "Dream Apocalypse", "Sleep Storm", "Nightmare Hurricane", "Illusion Tempest", "Dream Storm",
        "Sleep Apocalypse", "Nightmare Storm", "Illusion Hurricane", "Dream Tempest", "Sleep Hurricane",
        "Nightmare Tempest", "Illusion Storm", "Dream Hurricane", "Sleep Tempest", "Nightmare Storm"
      ],
      ru: [
        "Апокалипсис снов", "Буря сна", "Ураган кошмара", "Шторм иллюзии", "Буря снов",
        "Апокалипсис сна", "Буря кошмара", "Ураган иллюзии", "Шторм сна", "Ураган сновидения",
        "Шторм кошмара", "Буря иллюзии", "Ураган сна", "Шторм сновидения", "Буря кошмара"
      ]
    },
    weaknesses: {
      en: [
        "Reality Vulnerability", "Awakening Weakness", "Truth Sensitivity", "Clarity Susceptibility", "Reality's Bane",
        "Reality Weakness", "Awakening Sensitivity", "Truth Susceptibility", "Clarity Vulnerability", "Reality's Curse",
        "Reality Sensitivity", "Awakening Susceptibility", "Truth Vulnerability", "Clarity Weakness", "Reality's Doom"
      ],
      ru: [
        "Уязвимость к реальности", "Слабость к пробуждению", "Чувствительность к истине", "Восприимчивость к ясности", "Погибель реальности",
        "Слабость к реальности", "Чувствительность к пробуждению", "Восприимчивость к истине", "Уязвимость к ясности", "Проклятие реальности",
        "Чувствительность к реальности", "Восприимчивость к пробуждению", "Уязвимость к истине", "Слабость к ясности", "Гибель реальности"
      ]
    }
  },
  
  // Жнец Пустоты
  voidReaper: {
    activeAbilities: {
      en: [
        "Void Strike", "Darkness Burst", "Abyss Blade", "Shadow Rush", "Void Storm",
        "Darkness Storm", "Abyss Strike", "Shadow Blade", "Void Rush", "Darkness Burst",
        "Abyss Storm", "Shadow Strike", "Void Blade", "Darkness Rush", "Abyss Burst",
        "Shadow Storm", "Void Storm", "Darkness Blade", "Abyss Rush", "Shadow Burst",
        "Void Rush", "Darkness Storm", "Abyss Storm", "Shadow Storm", "Void Burst",
        "Darkness Rush", "Abyss Blade", "Shadow Rush", "Void Storm", "Darkness Storm"
      ],
      ru: [
        "Удар пустоты", "Взрыв тьмы", "Клинок бездны", "Рывок тени", "Буря пустоты",
        "Буря тьмы", "Удар бездны", "Клинок тени", "Рывок пустоты", "Взрыв тьмы",
        "Буря бездны", "Удар тени", "Клинок пустоты", "Рывок тьмы", "Взрыв бездны",
        "Буря тени", "Буря пустоты", "Клинок тьмы", "Рывок бездны", "Взрыв тени",
        "Рывок пустоты", "Буря тьмы", "Буря бездны", "Буря тени", "Взрыв пустоты",
        "Рывок тьмы", "Клинок бездны", "Рывок тени", "Буря пустоты", "Буря тьмы"
      ]
    },
    passiveAbilities: {
      en: [
        "Void Mastery", "Darkness Shield", "Abyss Ward", "Shadow Armor", "Void Grace",
        "Darkness Guardian", "Abyss Shield", "Shadow Ward", "Void Armor", "Darkness Ward",
        "Abyss Armor", "Shadow Shield", "Void Ward", "Darkness Armor", "Abyss Grace",
        "Shadow Guardian", "Void Guardian", "Darkness Grace", "Abyss Guardian", "Shadow Grace"
      ],
      ru: [
        "Мастерство пустоты", "Щит тьмы", "Защита бездны", "Броня тени", "Грация пустоты",
        "Страж тьмы", "Щит бездны", "Защита тени", "Броня пустоты", "Защита тьмы",
        "Броня бездны", "Щит тени", "Защита пустоты", "Броня тьмы", "Грация бездны",
        "Страж тени", "Страж пустоты", "Грация тьмы", "Страж бездны", "Грация тени"
      ]
    },
    ultimateAbilities: {
      en: [
        "Void Apocalypse", "Darkness Storm", "Abyss Hurricane", "Shadow Tempest", "Void Storm",
        "Darkness Apocalypse", "Abyss Storm", "Shadow Hurricane", "Void Tempest", "Darkness Hurricane",
        "Abyss Tempest", "Shadow Storm", "Void Hurricane", "Darkness Tempest", "Abyss Storm"
      ],
      ru: [
        "Апокалипсис пустоты", "Буря тьмы", "Ураган бездны", "Шторм тени", "Буря пустоты",
        "Апокалипсис тьмы", "Буря бездны", "Ураган тени", "Шторм пустоты", "Ураган тьмы",
        "Шторм бездны", "Буря тени", "Ураган пустоты", "Шторм тьмы", "Буря бездны"
      ]
    },
    weaknesses: {
      en: [
        "Light Vulnerability", "Radiance Weakness", "Dawn Sensitivity", "Sun Susceptibility", "Light's Bane",
        "Light Weakness", "Radiance Sensitivity", "Dawn Susceptibility", "Sun Vulnerability", "Light's Curse",
        "Light Sensitivity", "Radiance Susceptibility", "Dawn Vulnerability", "Sun Weakness", "Light's Doom"
      ],
      ru: [
        "Уязвимость к свету", "Слабость к сиянию", "Чувствительность к рассвету", "Восприимчивость к солнцу", "Погибель света",
        "Слабость к свету", "Чувствительность к сиянию", "Восприимчивость к рассвету", "Уязвимость к солнцу", "Проклятие света",
        "Чувствительность к свету", "Восприимчивость к сиянию", "Уязвимость к рассвету", "Слабость к солнцу", "Гибель света"
      ]
    }
  },
  
  // Алхимик Хаоса
  chaosAlchemist: {
    activeAbilities: {
      en: [
        "Chaos Strike", "Potion Burst", "Elixir Blade", "Brew Rush", "Chaos Storm",
        "Potion Storm", "Elixir Strike", "Brew Blade", "Chaos Rush", "Potion Burst",
        "Elixir Storm", "Brew Strike", "Chaos Blade", "Potion Rush", "Elixir Burst",
        "Brew Storm", "Chaos Storm", "Potion Blade", "Elixir Rush", "Brew Burst",
        "Chaos Rush", "Potion Storm", "Elixir Storm", "Brew Storm", "Chaos Burst",
        "Potion Rush", "Elixir Blade", "Brew Rush", "Chaos Storm", "Potion Storm"
      ],
      ru: [
        "Удар хаоса", "Взрыв зелья", "Клинок эликсира", "Рывок варева", "Буря хаоса",
        "Буря зелья", "Удар эликсира", "Клинок варева", "Рывок хаоса", "Взрыв зелья",
        "Буря эликсира", "Удар варева", "Клинок хаоса", "Рывок зелья", "Взрыв эликсира",
        "Буря варева", "Буря хаоса", "Клинок зелья", "Рывок эликсира", "Взрыв варева",
        "Рывок хаоса", "Буря зелья", "Буря эликсира", "Буря варева", "Взрыв хаоса",
        "Рывок зелья", "Клинок эликсира", "Рывок варева", "Буря хаоса", "Буря зелья"
      ]
    },
    passiveAbilities: {
      en: [
        "Chaos Mastery", "Potion Shield", "Elixir Ward", "Brew Armor", "Chaos Grace",
        "Potion Guardian", "Elixir Shield", "Brew Ward", "Chaos Armor", "Potion Ward",
        "Elixir Armor", "Brew Shield", "Chaos Ward", "Potion Armor", "Elixir Grace",
        "Brew Guardian", "Chaos Guardian", "Potion Grace", "Elixir Guardian", "Brew Grace"
      ],
      ru: [
        "Мастерство хаоса", "Щит зелья", "Защита эликсира", "Броня варева", "Грация хаоса",
        "Страж зелья", "Щит эликсира", "Защита варева", "Броня хаоса", "Защита зелья",
        "Броня эликсира", "Щит варева", "Защита хаоса", "Броня зелья", "Грация эликсира",
        "Страж варева", "Страж хаоса", "Грация зелья", "Страж эликсира", "Грация варева"
      ]
    },
    ultimateAbilities: {
      en: [
        "Chaos Apocalypse", "Potion Storm", "Elixir Hurricane", "Brew Tempest", "Chaos Storm",
        "Potion Apocalypse", "Elixir Storm", "Brew Hurricane", "Chaos Tempest", "Potion Hurricane",
        "Elixir Tempest", "Brew Storm", "Chaos Hurricane", "Potion Tempest", "Elixir Storm"
      ],
      ru: [
        "Апокалипсис хаоса", "Буря зелья", "Ураган эликсира", "Шторм варева", "Буря хаоса",
        "Апокалипсис зелья", "Буря эликсира", "Ураган варева", "Шторм хаоса", "Ураган зелья",
        "Шторм эликсира", "Буря варева", "Ураган хаоса", "Шторм зелья", "Буря эликсира"
      ]
    },
    weaknesses: {
      en: [
        "Order Vulnerability", "Stability Weakness", "Balance Sensitivity", "Harmony Susceptibility", "Order's Bane",
        "Order Weakness", "Stability Sensitivity", "Balance Susceptibility", "Harmony Vulnerability", "Order's Curse",
        "Order Sensitivity", "Stability Susceptibility", "Balance Vulnerability", "Harmony Weakness", "Order's Doom"
      ],
      ru: [
        "Уязвимость к порядку", "Слабость к стабильности", "Чувствительность к балансу", "Восприимчивость к гармонии", "Погибель порядка",
        "Слабость к порядку", "Чувствительность к стабильности", "Восприимчивость к балансу", "Уязвимость к гармонии", "Проклятие порядка",
        "Чувствительность к порядку", "Восприимчивость к стабильности", "Уязвимость к балансу", "Слабость к гармонии", "Гибель порядка"
      ]
    }
  },
  
  // Кузнец Грома
  thunderForger: {
    activeAbilities: {
      en: [
        "Thunder Strike", "Lightning Burst", "Storm Blade", "Tempest Rush", "Thunder Storm",
        "Lightning Storm", "Storm Strike", "Tempest Blade", "Thunder Rush", "Lightning Burst",
        "Storm Storm", "Tempest Strike", "Thunder Blade", "Lightning Rush", "Storm Burst",
        "Tempest Storm", "Thunder Storm", "Lightning Blade", "Storm Rush", "Tempest Burst",
        "Thunder Rush", "Lightning Storm", "Storm Storm", "Tempest Storm", "Thunder Burst",
        "Lightning Rush", "Storm Blade", "Tempest Rush", "Thunder Storm", "Lightning Storm"
      ],
      ru: [
        "Удар грома", "Взрыв молнии", "Клинок бури", "Рывок шторма", "Буря грома",
        "Буря молнии", "Удар бури", "Клинок шторма", "Рывок грома", "Взрыв молнии",
        "Буря бури", "Удар шторма", "Клинок грома", "Рывок молнии", "Взрыв бури",
        "Буря шторма", "Буря грома", "Клинок молнии", "Рывок бури", "Взрыв шторма",
        "Рывок грома", "Буря молнии", "Буря бури", "Буря шторма", "Взрыв грома",
        "Рывок молнии", "Клинок бури", "Рывок шторма", "Буря грома", "Буря молнии"
      ]
    },
    passiveAbilities: {
      en: [
        "Thunder Mastery", "Lightning Shield", "Storm Ward", "Tempest Armor", "Thunder Grace",
        "Lightning Guardian", "Storm Shield", "Tempest Ward", "Thunder Armor", "Lightning Ward",
        "Storm Armor", "Tempest Shield", "Thunder Ward", "Lightning Armor", "Storm Grace",
        "Tempest Guardian", "Thunder Guardian", "Lightning Grace", "Storm Guardian", "Tempest Grace"
      ],
      ru: [
        "Мастерство грома", "Щит молнии", "Защита бури", "Броня шторма", "Грация грома",
        "Страж молнии", "Щит бури", "Защита шторма", "Броня грома", "Защита молнии",
        "Броня бури", "Щит шторма", "Защита грома", "Броня молнии", "Грация бури",
        "Страж шторма", "Страж грома", "Грация молнии", "Страж бури", "Грация шторма"
      ]
    },
    ultimateAbilities: {
      en: [
        "Thunder Apocalypse", "Lightning Storm", "Storm Hurricane", "Tempest Tempest", "Thunder Storm",
        "Lightning Apocalypse", "Storm Storm", "Tempest Hurricane", "Thunder Tempest", "Lightning Hurricane",
        "Storm Tempest", "Tempest Storm", "Thunder Hurricane", "Lightning Tempest", "Storm Storm"
      ],
      ru: [
        "Апокалипсис грома", "Буря молнии", "Ураган бури", "Шторм шторма", "Буря грома",
        "Апокалипсис молнии", "Буря бури", "Ураган шторма", "Шторм грома", "Ураган молнии",
        "Шторм бури", "Буря шторма", "Ураган грома", "Шторм молнии", "Буря бури"
      ]
    },
    weaknesses: {
      en: [
        "Earth Vulnerability", "Ground Weakness", "Stone Sensitivity", "Mountain Susceptibility", "Earth's Bane",
        "Earth Weakness", "Ground Sensitivity", "Stone Susceptibility", "Mountain Vulnerability", "Earth's Curse",
        "Earth Sensitivity", "Ground Susceptibility", "Stone Vulnerability", "Mountain Weakness", "Earth's Doom"
      ],
      ru: [
        "Уязвимость к земле", "Слабость к земле", "Чувствительность к камню", "Восприимчивость к горам", "Погибель земли",
        "Слабость к земле", "Чувствительность к земле", "Восприимчивость к камню", "Уязвимость к горам", "Проклятие земли",
        "Чувствительность к земле", "Восприимчивость к земле", "Уязвимость к камню", "Слабость к горам", "Гибель земли"
      ]
    }
  },
  
  // Проклятый Песками
  sandCursed: {
    activeAbilities: {
      en: [
        "Sand Strike", "Desert Burst", "Dune Blade", "Oasis Rush", "Sand Storm",
        "Desert Storm", "Dune Strike", "Oasis Blade", "Sand Rush", "Desert Burst",
        "Dune Storm", "Oasis Strike", "Sand Blade", "Desert Rush", "Dune Burst",
        "Oasis Storm", "Sand Storm", "Desert Blade", "Dune Rush", "Oasis Burst",
        "Sand Rush", "Desert Storm", "Dune Storm", "Oasis Storm", "Sand Burst",
        "Desert Rush", "Dune Blade", "Oasis Rush", "Sand Storm", "Desert Storm"
      ],
      ru: [
        "Удар песка", "Взрыв пустыни", "Клинок дюны", "Рывок оазиса", "Буря песка",
        "Буря пустыни", "Удар дюны", "Клинок оазиса", "Рывок песка", "Взрыв пустыни",
        "Буря дюны", "Удар оазиса", "Клинок песка", "Рывок пустыни", "Взрыв дюны",
        "Буря оазиса", "Буря песка", "Клинок пустыни", "Рывок дюны", "Взрыв оазиса",
        "Рывок песка", "Буря пустыни", "Буря дюны", "Буря оазиса", "Взрыв песка",
        "Рывок пустыни", "Клинок дюны", "Рывок оазиса", "Буря песка", "Буря пустыни"
      ]
    },
    passiveAbilities: {
      en: [
        "Sand Mastery", "Desert Shield", "Dune Ward", "Oasis Armor", "Sand Grace",
        "Desert Guardian", "Dune Shield", "Oasis Ward", "Sand Armor", "Desert Ward",
        "Dune Armor", "Oasis Shield", "Sand Ward", "Desert Armor", "Dune Grace",
        "Oasis Guardian", "Sand Guardian", "Desert Grace", "Dune Guardian", "Oasis Grace"
      ],
      ru: [
        "Мастерство песка", "Щит пустыни", "Защита дюны", "Броня оазиса", "Грация песка",
        "Страж пустыни", "Щит дюны", "Защита оазиса", "Броня песка", "Защита пустыни",
        "Броня дюны", "Щит оазиса", "Защита песка", "Броня пустыни", "Грация дюны",
        "Страж оазиса", "Страж песка", "Грация пустыни", "Страж дюны", "Грация оазиса"
      ]
    },
    ultimateAbilities: {
      en: [
        "Sand Apocalypse", "Desert Storm", "Dune Hurricane", "Oasis Tempest", "Sand Storm",
        "Desert Apocalypse", "Dune Storm", "Oasis Hurricane", "Sand Tempest", "Desert Hurricane",
        "Dune Tempest", "Oasis Storm", "Sand Hurricane", "Desert Tempest", "Dune Storm"
      ],
      ru: [
        "Апокалипсис песка", "Буря пустыни", "Ураган дюны", "Шторм оазиса", "Буря песка",
        "Апокалипсис пустыни", "Буря дюны", "Ураган оазиса", "Шторм песка", "Ураган пустыни",
        "Шторм дюны", "Буря оазиса", "Ураган песка", "Шторм пустыни", "Буря дюны"
      ]
    },
    weaknesses: {
      en: [
        "Water Vulnerability", "Rain Weakness", "Ocean Sensitivity", "River Susceptibility", "Water's Bane",
        "Water Weakness", "Rain Sensitivity", "Ocean Susceptibility", "River Vulnerability", "Water's Curse",
        "Water Sensitivity", "Rain Susceptibility", "Ocean Vulnerability", "River Weakness", "Water's Doom"
      ],
      ru: [
        "Уязвимость к воде", "Слабость к дождю", "Чувствительность к океану", "Восприимчивость к реке", "Погибель воды",
        "Слабость к воде", "Чувствительность к дождю", "Восприимчивость к океану", "Уязвимость к реке", "Проклятие воды",
        "Чувствительность к воде", "Восприимчивость к дождю", "Уязвимость к океану", "Слабость к реке", "Гибель воды"
      ]
    }
  },
  
  // Ледяной Паладин
  icePaladin: {
    activeAbilities: {
      en: [
        "Ice Strike", "Frost Burst", "Snow Blade", "Glacier Rush", "Ice Storm",
        "Frost Storm", "Snow Strike", "Glacier Blade", "Ice Rush", "Frost Burst",
        "Snow Storm", "Glacier Strike", "Ice Blade", "Frost Rush", "Snow Burst",
        "Glacier Storm", "Ice Storm", "Frost Blade", "Snow Rush", "Glacier Burst",
        "Ice Rush", "Frost Storm", "Snow Storm", "Glacier Storm", "Ice Burst",
        "Frost Rush", "Snow Blade", "Glacier Rush", "Ice Storm", "Frost Storm"
      ],
      ru: [
        "Удар льда", "Взрыв мороза", "Клинок снега", "Рывок ледника", "Буря льда",
        "Буря мороза", "Удар снега", "Клинок ледника", "Рывок льда", "Взрыв мороза",
        "Буря снега", "Удар ледника", "Клинок льда", "Рывок мороза", "Взрыв снега",
        "Буря ледника", "Буря льда", "Клинок мороза", "Рывок снега", "Взрыв ледника",
        "Рывок льда", "Буря мороза", "Буря снега", "Буря ледника", "Взрыв льда",
        "Рывок мороза", "Клинок снега", "Рывок ледника", "Буря льда", "Буря мороза"
      ]
    },
    passiveAbilities: {
      en: [
        "Ice Mastery", "Frost Shield", "Snow Ward", "Glacier Armor", "Ice Grace",
        "Frost Guardian", "Snow Shield", "Glacier Ward", "Ice Armor", "Frost Ward",
        "Snow Armor", "Glacier Shield", "Ice Ward", "Frost Armor", "Snow Grace",
        "Glacier Guardian", "Ice Guardian", "Frost Grace", "Snow Guardian", "Glacier Grace"
      ],
      ru: [
        "Мастерство льда", "Щит мороза", "Защита снега", "Броня ледника", "Грация льда",
        "Страж мороза", "Щит снега", "Защита ледника", "Броня льда", "Защита мороза",
        "Броня снега", "Щит ледника", "Защита льда", "Броня мороза", "Грация снега",
        "Страж ледника", "Страж льда", "Грация мороза", "Страж снега", "Грация ледника"
      ]
    },
    ultimateAbilities: {
      en: [
        "Ice Apocalypse", "Frost Storm", "Snow Hurricane", "Glacier Tempest", "Ice Storm",
        "Frost Apocalypse", "Snow Storm", "Glacier Hurricane", "Ice Tempest", "Frost Hurricane",
        "Snow Tempest", "Glacier Storm", "Ice Hurricane", "Frost Tempest", "Snow Storm"
      ],
      ru: [
        "Апокалипсис льда", "Буря мороза", "Ураган снега", "Шторм ледника", "Буря льда",
        "Апокалипсис мороза", "Буря снега", "Ураган ледника", "Шторм льда", "Ураган мороза",
        "Шторм снега", "Буря ледника", "Ураган льда", "Шторм мороза", "Буря снега"
      ]
    },
    weaknesses: {
      en: [
        "Fire Vulnerability", "Flame Weakness", "Heat Sensitivity", "Lava Susceptibility", "Fire's Bane",
        "Fire Weakness", "Flame Sensitivity", "Heat Susceptibility", "Lava Vulnerability", "Fire's Curse",
        "Fire Sensitivity", "Flame Susceptibility", "Heat Vulnerability", "Lava Weakness", "Fire's Doom"
      ],
      ru: [
        "Уязвимость к огню", "Слабость к пламени", "Чувствительность к жаре", "Восприимчивость к лаве", "Погибель огня",
        "Слабость к огню", "Чувствительность к пламени", "Восприимчивость к жаре", "Уязвимость к лаве", "Проклятие огня",
        "Чувствительность к огню", "Восприимчивость к пламени", "Уязвимость к жаре", "Слабость к лаве", "Гибель огня"
      ]
    }
  },
  
  // Новые классы
  ironJuggernaut: {
    activeAbilities: [
      { en: 'Iron Shield', ru: 'Железный Щит' },
      { en: 'Heavy Strike', ru: 'Тяжелый Удар' },
      { en: 'Metal Storm', ru: 'Металлическая Буря' },
      { en: 'Steel Wall', ru: 'Стальная Стена' },
      { en: 'Iron Fist', ru: 'Железный Кулак' },
      { en: 'Metal Rain', ru: 'Металлический Дождь' },
      { en: 'Steel Tempest', ru: 'Стальной Шторм' },
      { en: 'Iron Wave', ru: 'Железная Волна' },
      { en: 'Metal Crush', ru: 'Металлическое Сокрушение' },
      { en: 'Steel Barrage', ru: 'Стальной Залп' },
      { en: 'Iron Storm', ru: 'Железная Буря' },
      { en: 'Metal Blast', ru: 'Металлический Взрыв' },
      { en: 'Steel Strike', ru: 'Стальной Удар' },
      { en: 'Iron Crush', ru: 'Железное Сокрушение' },
      { en: 'Metal Wall', ru: 'Металлическая Стена' },
      { en: 'Steel Shield', ru: 'Стальной Щит' },
      { en: 'Iron Barrage', ru: 'Железный Залп' },
      { en: 'Metal Fist', ru: 'Металлический Кулак' },
      { en: 'Steel Rain', ru: 'Стальной Дождь' },
      { en: 'Iron Tempest', ru: 'Железный Шторм' },
      { en: 'Metal Wave', ru: 'Металлическая Волна' },
      { en: 'Steel Crush', ru: 'Стальное Сокрушение' },
      { en: 'Iron Blast', ru: 'Железный Взрыв' },
      { en: 'Metal Strike', ru: 'Металлический Удар' },
      { en: 'Steel Storm', ru: 'Стальная Буря' },
      { en: 'Iron Wall', ru: 'Железная Стена' },
      { en: 'Metal Shield', ru: 'Металлический Щит' },
      { en: 'Steel Barrage', ru: 'Стальной Залп' },
      { en: 'Iron Fist', ru: 'Железный Кулак' }
    ],
    passiveAbilities: [
      { en: 'Iron Skin', ru: 'Железная Кожа' },
      { en: 'Metal Core', ru: 'Металлическое Ядро' },
      { en: 'Steel Heart', ru: 'Стальное Сердце' },
      { en: 'Iron Will', ru: 'Железная Воля' },
      { en: 'Metal Soul', ru: 'Металлическая Душа' },
      { en: 'Steel Spirit', ru: 'Стальной Дух' },
      { en: 'Iron Mind', ru: 'Железный Разум' },
      { en: 'Metal Body', ru: 'Металлическое Тело' },
      { en: 'Steel Soul', ru: 'Стальная Душа' },
      { en: 'Iron Spirit', ru: 'Железный Дух' },
      { en: 'Metal Heart', ru: 'Металлическое Сердце' },
      { en: 'Steel Core', ru: 'Стальное Ядро' },
      { en: 'Iron Soul', ru: 'Железная Душа' },
      { en: 'Metal Spirit', ru: 'Металлический Дух' },
      { en: 'Steel Mind', ru: 'Стальной Разум' },
      { en: 'Iron Body', ru: 'Железное Тело' },
      { en: 'Metal Will', ru: 'Металлическая Воля' },
      { en: 'Steel Skin', ru: 'Стальная Кожа' },
      { en: 'Iron Core', ru: 'Железное Ядро' },
      { en: 'Metal Heart', ru: 'Металлическое Сердце' }
    ],
    ultimateAbilities: [
      { en: 'Titan Forge', ru: 'Титановая Кузница' },
      { en: 'Iron Colossus', ru: 'Железный Колосс' },
      { en: 'Metal Titan', ru: 'Металлический Титан' },
      { en: 'Steel Goliath', ru: 'Стальной Голиаф' },
      { en: 'Iron Behemoth', ru: 'Железный Бегемот' },
      { en: 'Metal Leviathan', ru: 'Металлический Левиафан' },
      { en: 'Steel Kraken', ru: 'Стальной Кракен' },
      { en: 'Iron Dragon', ru: 'Железный Дракон' },
      { en: 'Metal Phoenix', ru: 'Металлический Феникс' },
      { en: 'Steel Hydra', ru: 'Стальная Гидра' }
    ],
    weaknesses: [
      { en: 'Vulnerable to Lightning', ru: 'Уязвим к Молнии' },
      { en: 'Weak to Magic', ru: 'Слаб к Магии' },
      { en: 'Slow Movement', ru: 'Медленное Передвижение' },
      { en: 'Heavy Weight', ru: 'Большой Вес' },
      { en: 'Metal Fatigue', ru: 'Металлическая Усталость' },
      { en: 'Rust Vulnerability', ru: 'Уязвимость к Ржавчине' },
      { en: 'Heat Sensitivity', ru: 'Чувствительность к Жаре' },
      { en: 'Cold Weakness', ru: 'Слабость к Холоду' },
      { en: 'Magnetic Attraction', ru: 'Магнитное Притяжение' },
      { en: 'Energy Drain', ru: 'Расход Энергии' }
    ]
  },

  luminarch: {
    activeAbilities: [
      { en: 'Light Beam', ru: 'Световой Луч' },
      { en: 'Radiant Strike', ru: 'Сияющий Удар' },
      { en: 'Solar Flare', ru: 'Солнечная Вспышка' },
      { en: 'Luminous Blast', ru: 'Светящийся Взрыв' },
      { en: 'Bright Wave', ru: 'Яркая Волна' },
      { en: 'Glow Storm', ru: 'Сияющая Буря' },
      { en: 'Light Burst', ru: 'Световая Вспышка' },
      { en: 'Radiant Rain', ru: 'Сияющий Дождь' },
      { en: 'Solar Storm', ru: 'Солнечная Буря' },
      { en: 'Luminous Strike', ru: 'Светящийся Удар' },
      { en: 'Bright Blast', ru: 'Яркий Взрыв' },
      { en: 'Glow Wave', ru: 'Сияющая Волна' },
      { en: 'Light Storm', ru: 'Световая Буря' },
      { en: 'Radiant Burst', ru: 'Сияющая Вспышка' },
      { en: 'Solar Rain', ru: 'Солнечный Дождь' },
      { en: 'Luminous Storm', ru: 'Светящаяся Буря' },
      { en: 'Bright Strike', ru: 'Яркий Удар' },
      { en: 'Glow Blast', ru: 'Сияющий Взрыв' },
      { en: 'Light Wave', ru: 'Световая Волна' },
      { en: 'Radiant Storm', ru: 'Сияющая Буря' },
      { en: 'Solar Burst', ru: 'Солнечная Вспышка' },
      { en: 'Luminous Rain', ru: 'Светящийся Дождь' },
      { en: 'Bright Storm', ru: 'Яркая Буря' },
      { en: 'Glow Strike', ru: 'Сияющий Удар' },
      { en: 'Light Blast', ru: 'Световой Взрыв' },
      { en: 'Radiant Wave', ru: 'Сияющая Волна' },
      { en: 'Solar Storm', ru: 'Солнечная Буря' },
      { en: 'Luminous Burst', ru: 'Светящаяся Вспышка' },
      { en: 'Bright Rain', ru: 'Яркий Дождь' },
      { en: 'Glow Storm', ru: 'Сияющая Буря' }
    ],
    passiveAbilities: [
      { en: 'Light Aura', ru: 'Световая Аура' },
      { en: 'Radiant Soul', ru: 'Сияющая Душа' },
      { en: 'Solar Core', ru: 'Солнечное Ядро' },
      { en: 'Luminous Heart', ru: 'Светящееся Сердце' },
      { en: 'Bright Spirit', ru: 'Яркий Дух' },
      { en: 'Glow Essence', ru: 'Сияющая Сущность' },
      { en: 'Light Soul', ru: 'Световая Душа' },
      { en: 'Radiant Core', ru: 'Сияющее Ядро' },
      { en: 'Solar Heart', ru: 'Солнечное Сердце' },
      { en: 'Luminous Spirit', ru: 'Светящийся Дух' },
      { en: 'Bright Essence', ru: 'Яркая Сущность' },
      { en: 'Glow Soul', ru: 'Сияющая Душа' },
      { en: 'Light Core', ru: 'Световое Ядро' },
      { en: 'Radiant Heart', ru: 'Сияющее Сердце' },
      { en: 'Solar Spirit', ru: 'Солнечный Дух' },
      { en: 'Luminous Essence', ru: 'Светящаяся Сущность' },
      { en: 'Bright Soul', ru: 'Яркая Душа' },
      { en: 'Glow Core', ru: 'Сияющее Ядро' },
      { en: 'Light Heart', ru: 'Световое Сердце' },
      { en: 'Radiant Spirit', ru: 'Сияющий Дух' }
    ],
    ultimateAbilities: [
      { en: 'Solar Apocalypse', ru: 'Солнечный Апокалипсис' },
      { en: 'Light Armageddon', ru: 'Световой Армагеддон' },
      { en: 'Radiant Cataclysm', ru: 'Сияющий Катаклизм' },
      { en: 'Solar Doomsday', ru: 'Солнечный Судный День' },
      { en: 'Luminous Extinction', ru: 'Светящееся Вымирание' },
      { en: 'Bright Annihilation', ru: 'Яркое Уничтожение' },
      { en: 'Glow Oblivion', ru: 'Сияющее Забвение' },
      { en: 'Light Destruction', ru: 'Световое Разрушение' },
      { en: 'Radiant Devastation', ru: 'Сияющее Опустошение' },
      { en: 'Solar Annihilation', ru: 'Солнечное Уничтожение' }
    ],
    weaknesses: [
      { en: 'Vulnerable to Darkness', ru: 'Уязвим к Тьме' },
      { en: 'Weak to Shadow Magic', ru: 'Слаб к Теневой Магии' },
      { en: 'Night Blindness', ru: 'Ночная Слепота' },
      { en: 'Light Sensitivity', ru: 'Чувствительность к Свету' },
      { en: 'Energy Drain', ru: 'Расход Энергии' },
      { en: 'Heat Vulnerability', ru: 'Уязвимость к Жаре' },
      { en: 'Solar Eclipse', ru: 'Солнечное Затмение' },
      { en: 'Light Pollution', ru: 'Световое Загрязнение' },
      { en: 'Radiant Overload', ru: 'Сияющая Перегрузка' },
      { en: 'Bright Exhaustion', ru: 'Яркое Истощение' }
    ]
  },

  sonicAnnihilator: {
    activeAbilities: [
      { en: 'Sonic Boom', ru: 'Звуковой Удар' },
      { en: 'Sound Wave', ru: 'Звуковая Волна' },
      { en: 'Acoustic Blast', ru: 'Акустический Взрыв' },
      { en: 'Resonance Strike', ru: 'Резонансный Удар' },
      { en: 'Echo Burst', ru: 'Эхо Вспышка' },
      { en: 'Vibration Storm', ru: 'Вибрационная Буря' },
      { en: 'Sonic Wave', ru: 'Звуковая Волна' },
      { en: 'Sound Blast', ru: 'Звуковой Взрыв' },
      { en: 'Acoustic Strike', ru: 'Акустический Удар' },
      { en: 'Resonance Burst', ru: 'Резонансная Вспышка' },
      { en: 'Echo Wave', ru: 'Эхо Волна' },
      { en: 'Vibration Blast', ru: 'Вибрационный Взрыв' },
      { en: 'Sonic Burst', ru: 'Звуковая Вспышка' },
      { en: 'Sound Strike', ru: 'Звуковой Удар' },
      { en: 'Acoustic Wave', ru: 'Акустическая Волна' },
      { en: 'Resonance Blast', ru: 'Резонансный Взрыв' },
      { en: 'Echo Strike', ru: 'Эхо Удар' },
      { en: 'Vibration Wave', ru: 'Вибрационная Волна' },
      { en: 'Sonic Strike', ru: 'Звуковой Удар' },
      { en: 'Sound Wave', ru: 'Звуковая Волна' },
      { en: 'Acoustic Burst', ru: 'Акустическая Вспышка' },
      { en: 'Resonance Wave', ru: 'Резонансная Волна' },
      { en: 'Echo Blast', ru: 'Эхо Взрыв' },
      { en: 'Vibration Strike', ru: 'Вибрационный Удар' },
      { en: 'Sonic Wave', ru: 'Звуковая Волна' },
      { en: 'Sound Burst', ru: 'Звуковая Вспышка' },
      { en: 'Acoustic Wave', ru: 'Акустическая Волна' },
      { en: 'Resonance Strike', ru: 'Резонансный Удар' },
      { en: 'Echo Wave', ru: 'Эхо Волна' }
    ],
    passiveAbilities: [
      { en: 'Sound Aura', ru: 'Звуковая Аура' },
      { en: 'Acoustic Soul', ru: 'Акустическая Душа' },
      { en: 'Resonance Core', ru: 'Резонансное Ядро' },
      { en: 'Echo Heart', ru: 'Эхо Сердце' },
      { en: 'Vibration Spirit', ru: 'Вибрационный Дух' },
      { en: 'Sonic Essence', ru: 'Звуковая Сущность' },
      { en: 'Sound Soul', ru: 'Звуковая Душа' },
      { en: 'Acoustic Core', ru: 'Акустическое Ядро' },
      { en: 'Resonance Heart', ru: 'Резонансное Сердце' },
      { en: 'Echo Spirit', ru: 'Эхо Дух' },
      { en: 'Vibration Essence', ru: 'Вибрационная Сущность' },
      { en: 'Sonic Soul', ru: 'Звуковая Душа' },
      { en: 'Sound Core', ru: 'Звуковое Ядро' },
      { en: 'Acoustic Heart', ru: 'Акустическое Сердце' },
      { en: 'Resonance Spirit', ru: 'Резонансный Дух' },
      { en: 'Echo Essence', ru: 'Эхо Сущность' },
      { en: 'Vibration Soul', ru: 'Вибрационная Душа' },
      { en: 'Sonic Core', ru: 'Звуковое Ядро' },
      { en: 'Sound Heart', ru: 'Звуковое Сердце' },
      { en: 'Acoustic Spirit', ru: 'Акустический Дух' }
    ],
    ultimateAbilities: [
      { en: 'Sonic Apocalypse', ru: 'Звуковой Апокалипсис' },
      { en: 'Sound Armageddon', ru: 'Звуковой Армагеддон' },
      { en: 'Acoustic Cataclysm', ru: 'Акустический Катаклизм' },
      { en: 'Resonance Doomsday', ru: 'Резонансный Судный День' },
      { en: 'Echo Extinction', ru: 'Эхо Вымирание' },
      { en: 'Vibration Annihilation', ru: 'Вибрационное Уничтожение' },
      { en: 'Sonic Oblivion', ru: 'Звуковое Забвение' },
      { en: 'Sound Destruction', ru: 'Звуковое Разрушение' },
      { en: 'Acoustic Devastation', ru: 'Акустическое Опустошение' },
      { en: 'Resonance Annihilation', ru: 'Резонансное Уничтожение' }
    ],
    weaknesses: [
      { en: 'Vulnerable to Silence', ru: 'Уязвим к Тишине' },
      { en: 'Weak to Sound Magic', ru: 'Слаб к Звуковой Магии' },
      { en: 'Deafness', ru: 'Глухота' },
      { en: 'Sound Sensitivity', ru: 'Чувствительность к Звуку' },
      { en: 'Energy Drain', ru: 'Расход Энергии' },
      { en: 'Vibration Vulnerability', ru: 'Уязвимость к Вибрации' },
      { en: 'Sonic Overload', ru: 'Звуковая Перегрузка' },
      { en: 'Sound Pollution', ru: 'Звуковое Загрязнение' },
      { en: 'Resonance Overload', ru: 'Резонансная Перегрузка' },
      { en: 'Echo Exhaustion', ru: 'Эхо Истощение' }
    ]
  },

  chronokeeper: {
    activeAbilities: [
      { en: 'Time Stop', ru: 'Остановка Времени' },
      { en: 'Temporal Strike', ru: 'Временной Удар' },
      { en: 'Chrono Blast', ru: 'Хроно Взрыв' },
      { en: 'Time Wave', ru: 'Временная Волна' },
      { en: 'Temporal Burst', ru: 'Временная Вспышка' },
      { en: 'Chrono Storm', ru: 'Хроно Буря' },
      { en: 'Time Blast', ru: 'Временной Взрыв' },
      { en: 'Temporal Wave', ru: 'Временная Волна' },
      { en: 'Chrono Strike', ru: 'Хроно Удар' },
      { en: 'Time Burst', ru: 'Временная Вспышка' },
      { en: 'Temporal Storm', ru: 'Временная Буря' },
      { en: 'Chrono Wave', ru: 'Хроно Волна' },
      { en: 'Time Strike', ru: 'Временной Удар' },
      { en: 'Temporal Blast', ru: 'Временной Взрыв' },
      { en: 'Chrono Burst', ru: 'Хроно Вспышка' },
      { en: 'Time Storm', ru: 'Временная Буря' },
      { en: 'Temporal Wave', ru: 'Временная Волна' },
      { en: 'Chrono Strike', ru: 'Хроно Удар' },
      { en: 'Time Blast', ru: 'Временной Взрыв' },
      { en: 'Temporal Burst', ru: 'Временная Вспышка' },
      { en: 'Chrono Storm', ru: 'Хроно Буря' },
      { en: 'Time Wave', ru: 'Временная Волна' },
      { en: 'Temporal Strike', ru: 'Временной Удар' },
      { en: 'Chrono Blast', ru: 'Хроно Взрыв' },
      { en: 'Time Burst', ru: 'Временная Вспышка' },
      { en: 'Temporal Storm', ru: 'Временная Буря' },
      { en: 'Chrono Wave', ru: 'Хроно Волна' },
      { en: 'Time Strike', ru: 'Временной Удар' },
      { en: 'Temporal Blast', ru: 'Временной Взрыв' },
      { en: 'Chrono Burst', ru: 'Хроно Вспышка' }
    ],
    passiveAbilities: [
      { en: 'Time Aura', ru: 'Временная Аура' },
      { en: 'Temporal Soul', ru: 'Временная Душа' },
      { en: 'Chrono Core', ru: 'Хроно Ядро' },
      { en: 'Time Heart', ru: 'Временное Сердце' },
      { en: 'Temporal Spirit', ru: 'Временной Дух' },
      { en: 'Chrono Essence', ru: 'Хроно Сущность' },
      { en: 'Time Soul', ru: 'Временная Душа' },
      { en: 'Temporal Core', ru: 'Временное Ядро' },
      { en: 'Chrono Heart', ru: 'Хроно Сердце' },
      { en: 'Time Spirit', ru: 'Временной Дух' },
      { en: 'Temporal Essence', ru: 'Временная Сущность' },
      { en: 'Chrono Soul', ru: 'Хроно Душа' },
      { en: 'Time Core', ru: 'Временное Ядро' },
      { en: 'Temporal Heart', ru: 'Временное Сердце' },
      { en: 'Chrono Spirit', ru: 'Хроно Дух' },
      { en: 'Time Essence', ru: 'Временная Сущность' },
      { en: 'Temporal Soul', ru: 'Временная Душа' },
      { en: 'Chrono Core', ru: 'Хроно Ядро' },
      { en: 'Time Heart', ru: 'Временное Сердце' },
      { en: 'Temporal Spirit', ru: 'Временной Дух' }
    ],
    ultimateAbilities: [
      { en: 'Time Apocalypse', ru: 'Временной Апокалипсис' },
      { en: 'Temporal Armageddon', ru: 'Временной Армагеддон' },
      { en: 'Chrono Cataclysm', ru: 'Хроно Катаклизм' },
      { en: 'Time Doomsday', ru: 'Временной Судный День' },
      { en: 'Temporal Extinction', ru: 'Временное Вымирание' },
      { en: 'Chrono Annihilation', ru: 'Хроно Уничтожение' },
      { en: 'Time Oblivion', ru: 'Временное Забвение' },
      { en: 'Temporal Destruction', ru: 'Временное Разрушение' },
      { en: 'Chrono Devastation', ru: 'Хроно Опустошение' },
      { en: 'Time Annihilation', ru: 'Временное Уничтожение' }
    ],
    weaknesses: [
      { en: 'Vulnerable to Time Magic', ru: 'Уязвим к Временной Магии' },
      { en: 'Weak to Temporal Distortion', ru: 'Слаб к Временному Искажению' },
      { en: 'Time Paradox', ru: 'Временной Парадокс' },
      { en: 'Temporal Instability', ru: 'Временная Нестабильность' },
      { en: 'Chrono Overload', ru: 'Хроно Перегрузка' },
      { en: 'Time Distortion', ru: 'Временное Искажение' },
      { en: 'Temporal Exhaustion', ru: 'Временное Истощение' },
      { en: 'Chrono Fatigue', ru: 'Хроно Усталость' },
      { en: 'Time Sensitivity', ru: 'Временная Чувствительность' },
      { en: 'Temporal Vulnerability', ru: 'Временная Уязвимость' }
    ]
  },

  venomlash: {
    activeAbilities: [
      { en: 'Venom Strike', ru: 'Ядовитый Удар' },
      { en: 'Poison Wave', ru: 'Ядовитая Волна' },
      { en: 'Toxin Blast', ru: 'Токсичный Взрыв' },
      { en: 'Venom Burst', ru: 'Ядовитая Вспышка' },
      { en: 'Poison Storm', ru: 'Ядовитая Буря' },
      { en: 'Toxin Wave', ru: 'Токсичная Волна' },
      { en: 'Venom Blast', ru: 'Ядовитый Взрыв' },
      { en: 'Poison Strike', ru: 'Ядовитый Удар' },
      { en: 'Toxin Burst', ru: 'Токсичная Вспышка' },
      { en: 'Venom Storm', ru: 'Ядовитая Буря' },
      { en: 'Poison Wave', ru: 'Ядовитая Волна' },
      { en: 'Toxin Strike', ru: 'Токсичный Удар' },
      { en: 'Venom Burst', ru: 'Ядовитая Вспышка' },
      { en: 'Poison Blast', ru: 'Ядовитый Взрыв' },
      { en: 'Toxin Storm', ru: 'Токсичная Буря' },
      { en: 'Venom Wave', ru: 'Ядовитая Волна' },
      { en: 'Poison Strike', ru: 'Ядовитый Удар' },
      { en: 'Toxin Burst', ru: 'Токсичная Вспышка' },
      { en: 'Venom Blast', ru: 'Ядовитый Взрыв' },
      { en: 'Poison Storm', ru: 'Ядовитая Буря' },
      { en: 'Toxin Wave', ru: 'Токсичная Волна' },
      { en: 'Venom Strike', ru: 'Ядовитый Удар' },
      { en: 'Poison Burst', ru: 'Ядовитая Вспышка' },
      { en: 'Toxin Blast', ru: 'Токсичный Взрыв' },
      { en: 'Venom Storm', ru: 'Ядовитая Буря' },
      { en: 'Poison Wave', ru: 'Ядовитая Волна' },
      { en: 'Toxin Strike', ru: 'Токсичный Удар' },
      { en: 'Venom Burst', ru: 'Ядовитая Вспышка' },
      { en: 'Poison Blast', ru: 'Ядовитый Взрыв' }
    ],
    passiveAbilities: [
      { en: 'Venom Aura', ru: 'Ядовитая Аура' },
      { en: 'Poison Soul', ru: 'Ядовитая Душа' },
      { en: 'Toxin Core', ru: 'Токсичное Ядро' },
      { en: 'Venom Heart', ru: 'Ядовитое Сердце' },
      { en: 'Poison Spirit', ru: 'Ядовитый Дух' },
      { en: 'Toxin Essence', ru: 'Токсичная Сущность' },
      { en: 'Venom Soul', ru: 'Ядовитая Душа' },
      { en: 'Poison Core', ru: 'Ядовитое Ядро' },
      { en: 'Toxin Heart', ru: 'Токсичное Сердце' },
      { en: 'Venom Spirit', ru: 'Ядовитый Дух' },
      { en: 'Poison Essence', ru: 'Ядовитая Сущность' },
      { en: 'Toxin Soul', ru: 'Токсичная Душа' },
      { en: 'Venom Core', ru: 'Ядовитое Ядро' },
      { en: 'Poison Heart', ru: 'Ядовитое Сердце' },
      { en: 'Toxin Spirit', ru: 'Токсичный Дух' },
      { en: 'Venom Essence', ru: 'Ядовитая Сущность' },
      { en: 'Poison Soul', ru: 'Ядовитая Душа' },
      { en: 'Toxin Core', ru: 'Токсичное Ядро' },
      { en: 'Venom Heart', ru: 'Ядовитое Сердце' },
      { en: 'Poison Spirit', ru: 'Ядовитый Дух' }
    ],
    ultimateAbilities: [
      { en: 'Venom Apocalypse', ru: 'Ядовитый Апокалипсис' },
      { en: 'Poison Armageddon', ru: 'Ядовитый Армагеддон' },
      { en: 'Toxin Cataclysm', ru: 'Токсичный Катаклизм' },
      { en: 'Venom Doomsday', ru: 'Ядовитый Судный День' },
      { en: 'Poison Extinction', ru: 'Ядовитое Вымирание' },
      { en: 'Toxin Annihilation', ru: 'Токсичное Уничтожение' },
      { en: 'Venom Oblivion', ru: 'Ядовитое Забвение' },
      { en: 'Poison Destruction', ru: 'Ядовитое Разрушение' },
      { en: 'Toxin Devastation', ru: 'Токсичное Опустошение' },
      { en: 'Venom Annihilation', ru: 'Ядовитое Уничтожение' }
    ],
    weaknesses: [
      { en: 'Vulnerable to Antidotes', ru: 'Уязвим к Противоядиям' },
      { en: 'Weak to Purification Magic', ru: 'Слаб к Магии Очищения' },
      { en: 'Poison Sensitivity', ru: 'Чувствительность к Яду' },
      { en: 'Toxin Overload', ru: 'Токсичная Перегрузка' },
      { en: 'Venom Exhaustion', ru: 'Ядовитое Истощение' },
      { en: 'Poison Fatigue', ru: 'Ядовитая Усталость' },
      { en: 'Toxin Vulnerability', ru: 'Токсичная Уязвимость' },
      { en: 'Venom Sensitivity', ru: 'Ядовитая Чувствительность' },
      { en: 'Poison Instability', ru: 'Ядовитая Нестабильность' },
      { en: 'Toxin Distortion', ru: 'Токсичное Искажение' }
    ]
  }
}; 