import { Chapter } from '@/types/chapter';

export const chapter8: Chapter = {
  id: 'life-insurance-ch8',
  title: 'Assurance Vie en Entreprise',
  summary: `
    🎮 Agent, bienvenue dans le monde stratégique de l'assurance vie corporative !

    Votre mission : maîtriser l'art de protéger les entreprises et leurs acteurs clés.

    Dans ce chapitre, vous explorerez :
    - Les secrets de l'assurance personne clé 👥
    - L'art des conventions de rachat 📜
    - La magie de la protection d'entreprise 🏢
    - Le pouvoir des stratégies corporatives ⚡

    Souvenez-vous : Une entreprise bien protégée est une entreprise qui prospère ! 
  `,
  
  quiz: [
    {
      question: "Pourquoi une entreprise devrait-elle souscrire une assurance sur une personne clé ?",
      choices: [
        {
          text: "Pour compenser la perte financière liée au décès d'un employé essentiel",
          correct: true,
          explanation: "L'assurance personne clé protège l'entreprise contre la perte d'un élément crucial."
        },
        {
          text: "Pour organiser de meilleures fêtes de bureau",
          correct: false,
          explanation: "L'assurance sert à protéger l'entreprise, pas à financer des événements sociaux !"
        },
        {
          text: "Pour avoir un meilleur classement boursier",
          correct: false,
          explanation: "L'assurance protège contre les risques, elle n'influence pas directement la cote boursière !"
        },
        {
          text: "Pour impressionner les concurrents",
          correct: false,
          explanation: "L'assurance est un outil de protection, pas de prestige !"
        }
      ]
    },
    {
      question: "Quel est le but principal d'une convention de rachat financée par l'assurance ?",
      choices: [
        {
          text: "Permettre aux actionnaires survivants de racheter les parts d'un actionnaire décédé",
          correct: true,
          explanation: "La convention assure une transition harmonieuse de la propriété de l'entreprise."
        },
        {
          text: "Organiser des ventes aux enchères d'actions",
          correct: false,
          explanation: "La convention est un outil de planification successorale, pas une vente aux enchères !"
        },
        {
          text: "Créer un club d'investissement exclusif",
          correct: false,
          explanation: "C'est un outil de protection d'entreprise, pas un club social !"
        },
        {
          text: "Spéculer sur le marché boursier",
          correct: false,
          explanation: "La convention sert à la continuité de l'entreprise, pas à la spéculation !"
        }
      ]
    },
    {
      question: "Comment l'assurance vie peut-elle aider à rembourser une dette commerciale ?",
      choices: [
        {
          text: "En fournissant le capital nécessaire au remboursement si le dirigeant décède",
          correct: true,
          explanation: "L'assurance garantit le remboursement de la dette même en cas de décès."
        },
        {
          text: "En transformant la dette en actions",
          correct: false,
          explanation: "L'assurance rembourse la dette, elle ne la transforme pas !"
        },
        {
          text: "En faisant disparaître magiquement la dette",
          correct: false,
          explanation: "L'assurance fournit les fonds pour le remboursement, elle n'efface pas la dette !"
        },
        {
          text: "En négociant avec les extraterrestres",
          correct: false,
          explanation: "L'assurance est un outil financier sérieux, pas de la science-fiction !"
        }
      ]
    }
  ],

  minigame: {
    type: 'corporate-guardian',
    title: "Le Gardien Corporatif",
    description: `
      🎮 Devenez le Gardien Corporatif dans ce mini-jeu stratégique !
      
      Votre mission :
      - Protégez les personnes clés
      - Structurez les conventions de rachat
      - Gérez les dettes commerciales
      - Optimisez la protection d'entreprise
      
      Attention aux risques corporatifs et aux transitions d'entreprise !
    `,
    rewards: {
      xp: 650,
      badge: "Maître Corporatif",
      title: "Gardien des Entreprises"
    }
  },

  boss: {
    name: "Le Titan du Commerce",
    description: "Un boss redoutable qui teste votre maîtrise de l'assurance vie en entreprise !",
    difficulty: 5,
    rewards: {
      xp: 1100,
      badge: "Maître du Chapitre 8",
      title: "Champion Corporatif"
    }
  }
};