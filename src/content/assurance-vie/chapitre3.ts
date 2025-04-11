import { Chapter } from '@/types/chapter';

export const chapter3: Chapter = {
  id: 'life-insurance-ch3',
  title: 'Les Gardiens de l\'Éternité',
  summary: `
    🎮 Agent, bienvenue dans le royaume de l'assurance vie permanente !

    Préparez-vous à découvrir le monde fascinant où les polices ne meurent jamais (tant que vous payez vos primes) !

    Dans ce chapitre, vous explorerez :
    - Le combat épique : Temporaire VS Permanente ⚔️
    - Les trésors cachés appelés "valeurs de rachat" 💎
    - Le mystérieux T-100, l'hybride qui défie le temps 🕰️
    - Les participations secrètes qui font grossir votre police 🌱

    Souvenez-vous : Dans le monde de l'assurance permanente, la patience est votre meilleure alliée ! 
  `,
  
  quiz: [
    {
      question: "Quelle est la principale différence entre l'assurance temporaire et permanente ?",
      choices: [
        {
          text: "L'assurance permanente offre une couverture à vie avec valeur de rachat",
          correct: true,
          explanation: "Exactement ! C'est la caractéristique fondamentale qui distingue ces deux types d'assurance."
        },
        {
          text: "L'assurance permanente inclut un abonnement Netflix gratuit",
          correct: false,
          explanation: "Les assureurs sont généreux, mais pas à ce point !"
        },
        {
          text: "L'assurance permanente vous rend immortel",
          correct: false,
          explanation: "Si seulement c'était possible..."
        },
        {
          text: "L'assurance permanente est écrite avec une encre qui ne s'efface jamais",
          correct: false,
          explanation: "La permanence concerne la durée de la couverture, pas le support physique !"
        }
      ]
    },
    {
      question: "Que peut faire un assuré avec les participations de sa police ?",
      choices: [
        {
          text: "Les encaisser, réduire ses primes, capitaliser ou acheter plus d'assurance",
          correct: true,
          explanation: "Bravo ! Ce sont les quatre options principales pour utiliser les participations."
        },
        {
          text: "Les échanger contre des cartes Pokémon",
          correct: false,
          explanation: "Même si certaines cartes Pokémon valent cher, ce n'est pas une option !"
        },
        {
          text: "Les utiliser comme monnaie au casino",
          correct: false,
          explanation: "Les participations ne sont pas des jetons de casino !"
        },
        {
          text: "Les donner à son voisin préféré",
          correct: false,
          explanation: "Les participations sont liées à votre police et ne sont pas transférables ainsi."
        }
      ]
    },
    {
      question: "Qu'est-ce qui caractérise l'assurance vie T-100 ?",
      choices: [
        {
          text: "Couverture jusqu'à 100 ans avec primes fixes mais sans valeur de rachat",
          correct: true,
          explanation: "C'est exact ! C'est un hybride entre la temporaire et la permanente."
        },
        {
          text: "Elle vous garantit de vivre jusqu'à 100 ans",
          correct: false,
          explanation: "L'assurance prolonge la protection, pas la vie !"
        },
        {
          text: "Elle coûte exactement 100 dollars par mois",
          correct: false,
          explanation: "Le prix varie selon plusieurs facteurs, ce n'est pas fixé à 100$ !"
        },
        {
          text: "Elle vous donne 100 vies comme dans les jeux vidéo",
          correct: false,
          explanation: "Malheureusement, nous ne sommes pas dans un jeu vidéo !"
        }
      ]
    }
  ],

  minigame: {
    type: 'value-builder',
    title: "L'Architecte des Valeurs",
    description: `
      🎮 Devenez l'Architecte des Valeurs dans ce mini-jeu stratégique !
      
      Votre mission :
      - Gérez une police d'assurance vie entière
      - Optimisez l'utilisation des participations
      - Construisez la valeur de rachat
      - Équilibrez protection et accumulation
      
      Attention aux fluctuations du marché qui peuvent affecter vos participations !
    `,
    rewards: {
      xp: 200,
      badge: "Maître de la Permanence",
      title: "Architecte de l'Éternité"
    }
  },

  boss: {
    name: "L'Éternel Gardien",
    description: "Un boss immortel qui teste votre compréhension des assurances permanentes !",
    difficulty: 4,
    rewards: {
      xp: 700,
      badge: "Maître du Chapitre 3",
      title: "Champion de l'Éternité"
    }
  }
};