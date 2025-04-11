import { Chapter } from '@/types/chapter';

export const chapter4: Chapter = {
  id: 'life-insurance-ch4',
  title: 'L\'Univers des Possibilités',
  summary: `
    🎮 Agent, bienvenue dans le monde fascinant de l'assurance vie universelle !

    Préparez-vous à découvrir un produit aussi flexible qu'un contorsionniste et aussi mystérieux que l'univers lui-même !

    Dans ce chapitre, vous explorerez :
    - Le mariage parfait entre protection et investissement 💑
    - La danse des primes flexibles 💃
    - Le coffre-fort fiscal qui fait rager les impôts 🏦
    - Les secrets du compte de placement caché 🎯

    Souvenez-vous : Dans l'univers de la VU, la flexibilité est votre super-pouvoir ! 
  `,
  
  quiz: [
    {
      question: "Qu'est-ce qui caractérise l'assurance vie universelle ?",
      choices: [
        {
          text: "C'est une assurance permanente combinée à un véhicule de placement",
          correct: true,
          explanation: "Exactement ! C'est ce qui la rend unique et flexible."
        },
        {
          text: "C'est une assurance qui couvre l'univers entier",
          correct: false,
          explanation: "Même si le nom est trompeur, elle ne couvre pas les extraterrestres !"
        },
        {
          text: "C'est une assurance qui vous permet de voyager dans l'espace",
          correct: false,
          explanation: "Pour ça, il faudrait voir avec Elon Musk..."
        },
        {
          text: "C'est une assurance qui parle toutes les langues de l'univers",
          correct: false,
          explanation: "La traduction universelle n'est pas incluse dans le contrat !"
        }
      ]
    },
    {
      question: "Quelle est la différence entre une prestation de type 1 et de type 2 ?",
      choices: [
        {
          text: "Type 1 est nivelé, Type 2 inclut la valeur de placement",
          correct: true,
          explanation: "Bravo ! Le Type 2 combine le capital de base et la valeur accumulée."
        },
        {
          text: "Type 1 est en français, Type 2 en klingon",
          correct: false,
          explanation: "Les prestations sont toujours dans la langue du contrat !"
        },
        {
          text: "Type 1 sent la vanille, Type 2 le chocolat",
          correct: false,
          explanation: "Les prestations n'ont pas d'arôme particulier..."
        },
        {
          text: "Type 1 est pour les humains, Type 2 pour les superhéros",
          correct: false,
          explanation: "Les deux types sont disponibles pour tous les terriens !"
        }
      ]
    },
    {
      question: "Quel est l'avantage fiscal principal de la VU ?",
      choices: [
        {
          text: "Les gains ne sont pas imposés tant qu'ils restent dans la police",
          correct: true,
          explanation: "C'est l'un des grands avantages de ce produit !"
        },
        {
          text: "Elle transforme vos impôts en chocolat",
          correct: false,
          explanation: "Malheureusement, la magie fiscale a ses limites..."
        },
        {
          text: "Elle fait disparaître le fisc dans un trou noir",
          correct: false,
          explanation: "Le fisc est plus résistant que ça !"
        },
        {
          text: "Elle vous téléporte dans un paradis fiscal",
          correct: false,
          explanation: "La téléportation n'est pas une option fiscale légale !"
        }
      ]
    }
  ],

  minigame: {
    type: 'universal-manager',
    title: "Le Maître de l'Univers",
    description: `
      🎮 Devenez le Maître de l'Univers dans ce mini-jeu de gestion !
      
      Votre mission :
      - Équilibrez protection et investissement
      - Gérez les flux de primes flexibles
      - Optimisez les rendements du compte de placement
      - Surfez sur les vagues du marché
      
      Attention aux fluctuations économiques qui peuvent affecter vos placements !
    `,
    rewards: {
      xp: 250,
      badge: "Maître de l'Universel",
      title: "Architecte des Possibilités"
    }
  },

  boss: {
    name: "Le Gardien de l'Univers",
    description: "Un boss cosmique qui teste votre maîtrise de l'assurance vie universelle !",
    difficulty: 5,
    rewards: {
      xp: 800,
      badge: "Maître du Chapitre 4",
      title: "Seigneur de l'Univers"
    }
  }
};