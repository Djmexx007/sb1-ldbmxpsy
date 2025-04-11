import { Chapter } from '@/types/chapter';

export const chapter6: Chapter = {
  id: 'life-insurance-ch6',
  title: 'La Guilde des Assurés',
  summary: `
    🎮 Agent, bienvenue dans le monde fascinant de l'assurance collective !

    Découvrez comment les guildes modernes (entreprises) protègent leurs membres avec des stratégies d'assurance groupe.

    Dans ce chapitre, vous explorerez :
    - Les secrets des contrats de groupe 🏢
    - L'art de la protection collective 🛡️
    - Les avantages d'être dans une guilde d'assurés 💪
    - Les stratégies de conversion pour les aventuriers solitaires 🔄

    Souvenez-vous : L'union fait la force, surtout en assurance ! 
  `,
  
  quiz: [
    {
      question: "Pourquoi l'assurance collective est-elle généralement moins chère ?",
      choices: [
        {
          text: "Le risque est réparti sur un grand nombre de personnes",
          correct: true,
          explanation: "Exactement ! C'est le principe de la mutualisation du risque à grande échelle."
        },
        {
          text: "Les assureurs font des soldes de groupe",
          correct: false,
          explanation: "Ce n'est pas une question de soldes, mais de répartition du risque !"
        },
        {
          text: "Les employés partagent la même police d'assurance",
          correct: false,
          explanation: "Chacun a sa propre protection, même si le contrat est collectif."
        },
        {
          text: "L'employeur connaît un sort magique de réduction",
          correct: false,
          explanation: "La magie n'a rien à voir avec les tarifs avantageux !"
        }
      ]
    },
    {
      question: "Que se passe-t-il avec l'assurance collective quand on quitte son emploi ?",
      choices: [
        {
          text: "On peut la convertir en assurance individuelle sans preuve médicale",
          correct: true,
          explanation: "C'est le droit de transformation, une option très importante !"
        },
        {
          text: "Elle nous suit comme un animal de compagnie fidèle",
          correct: false,
          explanation: "L'assurance collective est liée à l'emploi, elle ne vous suit pas automatiquement."
        },
        {
          text: "Elle disparaît dans un nuage de fumée",
          correct: false,
          explanation: "Elle se termine, mais vous avez des options de conversion."
        },
        {
          text: "Elle devient une carte de collection rare",
          correct: false,
          explanation: "Les polices d'assurance ne sont pas des cartes à collectionner !"
        }
      ]
    },
    {
      question: "Quel est l'avantage principal de l'assurance vie complémentaire collective ?",
      choices: [
        {
          text: "Augmenter sa protection à moindre coût avec peu de formalités",
          correct: true,
          explanation: "C'est l'avantage clé : plus de protection, facilement accessible !"
        },
        {
          text: "Recevoir un badge 'Super Assuré'",
          correct: false,
          explanation: "Les badges sont cool, mais ce n'est pas un avantage réel de l'assurance !"
        },
        {
          text: "Avoir accès au salon VIP des assurés",
          correct: false,
          explanation: "Il n'existe pas de salon VIP pour les assurés collectifs !"
        },
        {
          text: "Débloquer des achievements spéciaux",
          correct: false,
          explanation: "L'assurance n'est pas un jeu vidéo, même si on aime la gamifier !"
        }
      ]
    }
  ],

  minigame: {
    type: 'guild-master',
    title: "Le Maître de Guilde",
    description: `
      🎮 Devenez le Maître de Guilde dans ce mini-jeu de gestion !
      
      Votre mission :
      - Gérez une guilde d'assurés
      - Optimisez les protections collectives
      - Négociez les meilleures conditions
      - Aidez les membres à convertir leur protection
      
      Attention aux départs et aux nouveaux membres !
    `,
    rewards: {
      xp: 350,
      badge: "Maître de Guilde",
      title: "Protecteur Collectif"
    }
  },

  boss: {
    name: "Le Grand Administrateur",
    description: "Un boss méticuleux qui teste votre compréhension des contrats collectifs !",
    difficulty: 4,
    rewards: {
      xp: 800,
      badge: "Maître du Chapitre 6",
      title: "Champion de la Collectivité"
    }
  }
};