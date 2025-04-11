import { Chapter } from '@/types/chapter';

export const chapter4: Chapter = {
  id: 'health-insurance-ch4',
  title: 'Assurance offrant une protection de l\'épargne',
  summary: `
    🎮 Agent, bienvenue dans le monde de la protection de l'épargne !

    Votre mission : maîtriser l'art de protéger les économies contre les imprévus de santé.

    Dans ce chapitre, vous explorerez :
    - Les secrets de l'assurance maladie complémentaire 💊
    - L'art de la protection des économies 💰
    - La magie des avantages fiscaux ✨
    - Le pouvoir des régimes collectifs 🛡️

    Souvenez-vous : Une épargne bien protégée est une retraite assurée ! 
  `,
  
  quiz: [
    {
      question: "Pourquoi est-il important d'avoir une assurance maladie complémentaire ?",
      choices: [
        {
          text: "Pour éviter d'épuiser son épargne en cas de dépenses médicales imprévues",
          correct: true,
          explanation: "Elle protège vos économies en couvrant les frais médicaux non couverts par le régime public."
        },
        {
          text: "Pour avoir des médicaments gratuits à vie",
          correct: false,
          explanation: "L'assurance couvre une partie des frais, elle ne rend pas tout gratuit !"
        },
        {
          text: "Pour faire plaisir à son médecin",
          correct: false,
          explanation: "L'assurance est pour votre protection financière, pas pour le plaisir du médecin !"
        },
        {
          text: "Pour collectionner des cartes d'assurance",
          correct: false,
          explanation: "Les cartes d'assurance ne sont pas des objets de collection !"
        }
      ]
    },
    {
      question: "Quelle est la différence entre une franchise et une coassurance ?",
      choices: [
        {
          text: "La franchise est un montant fixe initial, la coassurance un pourcentage de partage des coûts",
          correct: true,
          explanation: "La franchise se paie d'abord, puis la coassurance s'applique sur le reste."
        },
        {
          text: "La franchise donne droit à des frites gratuites",
          correct: false,
          explanation: "Les franchises d'assurance n'ont rien à voir avec la restauration !"
        },
        {
          text: "La coassurance est une assurance pour votre cousine",
          correct: false,
          explanation: "La coassurance est un partage des coûts, pas une assurance familiale !"
        },
        {
          text: "Il n'y a pas de différence, c'est juste pour compliquer les choses",
          correct: false,
          explanation: "Chaque terme a un sens précis et important !"
        }
      ]
    },
    {
      question: "Quel est l'avantage fiscal principal d'une assurance maladie collective ?",
      choices: [
        {
          text: "Les primes payées par l'employeur sont un avantage non imposable pour l'employé",
          correct: true,
          explanation: "C'est un avantage social qui n'augmente pas votre revenu imposable."
        },
        {
          text: "Elle transforme les impôts en chocolat",
          correct: false,
          explanation: "Les avantages fiscaux sont financiers, pas alimentaires !"
        },
        {
          text: "Elle permet d'éviter tous les impôts",
          correct: false,
          explanation: "L'avantage est spécifique aux primes d'assurance, pas à tous les impôts !"
        },
        {
          text: "Elle donne un bonus au comptable",
          correct: false,
          explanation: "Les avantages fiscaux bénéficient à l'employé, pas au comptable !"
        }
      ]
    }
  ],

  minigame: {
    type: 'savings-guardian',
    title: "Le Gardien de l'Épargne",
    description: `
      🎮 Devenez le Gardien de l'Épargne dans ce mini-jeu stratégique !
      
      Votre mission :
      - Protégez l'épargne de vos clients
      - Gérez les dépenses médicales
      - Optimisez les avantages fiscaux
      - Maximisez la protection financière
      
      Attention aux franchises et aux maximums annuels !
    `,
    rewards: {
      xp: 450,
      badge: "Maître de l'Épargne",
      title: "Protecteur des Économies"
    }
  },

  boss: {
    name: "Le Gardien du Trésor",
    description: "Un boss redoutable qui teste votre capacité à protéger l'épargne !",
    difficulty: 4,
    rewards: {
      xp: 850,
      badge: "Maître du Chapitre 4",
      title: "Champion de l'Épargne"
    }
  }
};