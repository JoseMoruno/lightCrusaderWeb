export const SECTIONS = [
  { id: "about", label: "Sobre el juego" },
  { id: "walkthrough", label: "Guía paso a paso" },
  { id: "magic", label: "Magia" },
  { id: "items", label: "Objetos" },
  { id: "equipment", label: "Equipamiento" },
];

export const GUIDE_CONTENT = {
  about: {
    title: "Sobre el juego",
    subtitle: "Historia, ficha técnica y curiosidades de Light Crusader",
    blocks: [
      {
        heading: "La historia",
        text: "Toma el papel de Sir David, un caballero que llega al reino de Green Row tras la llamada del rey Weeden por una extraña ola de desapariciones entre los habitantes. Descubre los planes del hechicero Bloodroke y evita que despierte al antiguo demonio Ramiah en esta aventura en perspectiva isométrica."
      },
      {
        heading: "Información",
        text: "Desarrollado por Treasure con musica compuesta por Aki Hata y publicado por Sega en 1995 para Sega Mega Drive / Genesis. Combina exploración de mazmorras, combate en tiempo real y puzles físicos en una perspectiva isométrica además de un sistema de magia basado en combinación elemental."
      },
      {
        heading: "Curiosidades",
        text: "Fue el último título de Treasure para Mega Drive y supuso un giro notable respecto a su catálogo habitual de acción rápida y estética anime, apostando por un RPG/aventura de acción inspirado en un mundo de fantasía occidental. En su desarrollo inicial llegó a anunciarse bajo el nombre provisional de Relayer. En el juego aparece el fantasma del rey Garriott (un guiño a Richard Garriott, creador de la saga Ultima)."
      }
    ]
  },
  walkthrough: {
    title: "Guía paso a paso",
    subtitle: "Recorrido por zonas y mazmorra",
    underConstruction: true,
    constructionTitle: "EN CONSTRUCCIÓN",
    constructionText: "El recorrido paso a paso aún no está disponible. Estará pronto."
  },
  magic: {
    title: "Magia",
    subtitle: "Hechizos y sus combinaciones elementales",
    blocks: [
      {
        heading: "Sistema de combinaciones",
        text: "En Light Crusader puedes lanzar hechizos básicos con un solo elemento o puedes combinarlos para desatar efectos más potentes."
      }
    ],
    spellsTableHeader: {
      name: "Hechizo",
      elements: "Elementos",
      description: "Descripción"
    },
    spells: [
      {
        name: "Wind",
        elements: ["AIR"],
        description: "Lanza un tajo de viento."
      },
      {
        name: "Fire",
        elements: ["FIRE"],
        description: "Lanza una bola de fuego."
      },
      {
        name: "Earthquake",
        elements: ["EARTH"],
        description: "Provoca un pequeño terremoto."
      },
      {
        name: "Heal",
        elements: ["WATER"],
        description: "Cura 10 PV a David por uso."
      },
      {
        name: "Fire Wind",
        elements: ["AIR", "FIRE"],
        description: "Lanza una bola de fuego teledirigida."
      },
      {
        name: "Thunder",
        elements: ["AIR", "EARTH"],
        description: "Invoca un rayo."
      },
      {
        name: "Ice",
        elements: ["AIR", "WATER"],
        description: "Congela a un enemigo."
      },
      {
        name: "Meteor",
        elements: ["FIRE", "EARTH"],
        description: "Lanza una roca gigante."
      },
      {
        name: "Cure",
        elements: ["FIRE", "WATER"],
        description: "Cura el veneno."
      },
      {
        name: "Guardian",
        elements: ["EARTH", "WATER"],
        description: "Un hada protege a David durante un corto periodo."
      },
      {
        name: "Needlecrack",
        elements: ["AIR", "FIRE", "EARTH"],
        description: "Dispara 5 lásers hacia delante y hacia los lados."
      },
      {
        name: "Confuse",
        elements: ["AIR", "FIRE", "WATER"],
        description: "Bolas de fuego giratorias diezman al enemigo."
      },
      {
        name: "Turn Undead",
        elements: ["AIR", "EARTH", "WATER"],
        description: "Elimina al instante a los no muertos."
      },
      {
        name: "Shield",
        elements: ["FIRE", "EARTH", "WATER"],
        description: "Un escudo protege a David durante un corto periodo."
      },
      {
        name: "Judgement",
        elements: ["AIR", "FIRE", "EARTH", "WATER"],
        description: "Inflige daño imparable a todos los enemigos."
      }
    ]
  },
  items: {
    title: "Objetos",
    subtitle: "Objetos consumibles y de apoyo",
    underConstruction: true,
    constructionTitle: "EN CONSTRUCCIÓN",
    constructionText: "El catálogo de objetos aún no está disponible. Volverá pronto."
  },
  equipment: {
    title: "Equipamiento",
    subtitle: "Armas, armaduras y guantes de Sir David",
    blocks: [
      {
        heading: "Categorías de equipo",
        text: "El equipo principal se divide en armas (Weapons), armaduras (Armor) y guantes (Gloves). La lista se ordena en función del poder de la pieza de equipo, siendo las primeras las más débiles y las últimas las más poderosas."
      }
    ],
    equipmentTableHeader: {
      name: "Nombre",
      whereToFind: "Dónde se encuentran",
      special: "Especial"
    },
    equipmentCategories: [
      {
        id: "weapons",
        title: "Weapons",
        items: [
          {name: "Long Sword", whereToFind: "Arma inicial", special: "N/A", image: "/images/longSword.png"},
          {name: "Rapier", whereToFind: "Piso B1", special: "N/A", image: "/images/rapier.png"},
          {name: "Thunder", whereToFind: "Piso B2", special: "N/A", image: "/images/thunder.png"},
          {name: "Lightning", whereToFind: "Piso B3", special: "N/A", image: "/images/lightning.png"},
          {name: "Relayer", whereToFind: "Tienda (1500g)", special: "N/A", image: "/images/relayer.png"},
          {name: "Crystal", whereToFind: "Piso B5", special: "Probabilidad de castear Ice cuando golpea", image: "/images/crystal.png"},
          {name: "Holy Sword", whereToFind: "Piso B6", special: "Probabilidad de castear Turn Undead cuando golpea", image: "/images/holySword.png"},
          {name: "Light Crusader", whereToFind: "Piso B4", special: "N/A", image: "/images/lightCrusader.png"}
        ]
      },
      {
        id: "armor",
        title: "Armor",
        items: [
          {name: "Plate", whereToFind: "Armadura inicial", special: "N/A", image: "/images/plate.png"},
          {name: "Chain Mail", whereToFind: "Piso B3", special: "N/A", image: "/images/chainMail.png"},
          {name: "Bronze", whereToFind: "Tienda (2000g)", special: "N/A", image: "/images/bronze.png"},
          {name: "Dragon", whereToFind: "Piso B4", special: "N/A", image: "/images/dragon.png"},
          {name: "Pidge", whereToFind: "Piso B6", special: "N/A", image: "/images/pidge.png" },
          {name: "Dillo", whereToFind: "Hackeando un Save State", special: "N/A", image: "/images/dillo.png"},
          {name: "Geddon", whereToFind: "Monstruos del piso B5 (Soldiers, Boss)", special: "N/A", image: "/images/geddon.png"},
          {name: "Gold Armor", whereToFind: "Monstruos del piso B2 (Lillipads)", special: "N/A", image: "/images/goldArmor.png"}
        ]
      },
      {
        id: "gloves",
        title: "Gloves",
        items: [
          {name: "Gloves", whereToFind: "Guanteletes iniciales", special: "N/A", image: "/images/gloves.png"},
          {name: "Gauntlets", whereToFind: "Piso B2", special: "N/A", image: "/images/gauntlets.png"},
          {name: "Power", whereToFind: "Piso B3", special: "N/A", image: "/images/power.png"},
          {name: "Kaiser", whereToFind: "Tienda (1000g)", special: "N/A", image: "/images/kaiser.png"},
          {name: "Iron Gloves", whereToFind: "Piso B5", special: "N/A", image: "/images/ironGloves.png"},
          {name: "Power Gloves", whereToFind: "Monstruos del piso B5 (Ninjas)", special: "N/A", image: "/images/powerGloves.png"},
          {name: "Mitt", whereToFind: "Monstruos del piso B5 (Cowboys, Ninjas)", special: "N/A", image: "/images/witt.png"},
          {name: "Scratcher", whereToFind: "Monstruos del piso B5 (Ninjas)", special: "N/A", image: "/images/scratcher.png"}
        ]
      }
    ]
  }
};