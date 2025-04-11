import { Chapter } from '@/types/chapter';

export const chapter9: Chapter = {
  id: 'health-insurance-ch9',
  title: 'Le Gardien des Contrats',
  summary: `
    🎮 Agent, bienvenue au Centre de Suivi !

    Votre mission : maîtriser l'art du suivi et de l'évolution des contrats d'assurance.

    Dans ce chapitre, vous explorerez :
    - Les secrets du suivi client 🔄
    - L'art du renouvellement 📅
    - La magie des modifications de contrat ✨
    - Le pouvoir du remplacement stratégique 🔄

    Souvenez-vous : Un contrat qui évolue est un client qui reste ! 
  `,
  
  quiz: [
    {
      question: "Pourquoi est-il important de faire un suivi régulier des contrats ?",
      choices: [
        {
          text: "Pour adapter la protection aux changements de vie du client",
          correct: true,
          explanation: "La vie évolue, les besoins changent, le contrat doit suivre !"
        },
        {
          text: "Pour avoir plus de réunions",
          correct: false,
          explanation: "Le suivi sert à protéger le client, pas à remplir l'agenda !"
        },
        {
          text: "Pour collectionner des signatures",
          correct: false,
          explanation: "Le suivi vise l'adaptation de la protection, pas la paperasse !"
        },
        {
          text: "Pour battre le record de modifications",
          correct: false,
          explanation: "Les modifications doivent être pertinentes, pas nombreuses !"
        }
      ]
    },
    {
      question: "Que doit-on vérifier lors d'un remplacement de contrat ?",
      choices: [
        {
          text: "Les différences de couverture et éviter les périodes sans protection",
          correct: true,
          explanation: "Le remplacement doit être avantageux et sécuritaire pour le client."
        },
        {
          text: "La couleur du nouveau contrat",
          correct: false,
          explanation: "L'apparence du contrat n'a aucune importance !"
        },
        {
          text: "Le poids du papier utilisé",
          correct: false,
          explanation: "Les aspects matériels ne sont pas pertinents !"
        },
        {
          text: "Le nombre de pages",
          correct: false,
          explanation: "La quantité de pages n'est pas un critère de qualité !"
        }
      ]
    },
    {
      question: "Quelle est la meilleure pratique pour le renouvellement ?",
      choices: [
        {
          text: "Prévenir le client à l'avance et revoir ses besoins",
          correct: true,
          explanation: "Une approche proactive permet d'optimiser la protection."
        },
        {
          text: "Attendre que le client appelle",
          correct: false,
          explanation: "Le conseiller doit être proactif dans le suivi !"
        },
        {
          text: "Envoyer un message télépathique",
          correct: false,
          explanation: "La communication doit être claire et professionnelle !"
        },
        {
          text: "Laisser le contrat se renouveler tout seul",
          correct: false,
          explanation: "Le renouvellement mérite une attention particulière !"
        }
      ]
    }
  ],

  minigame: {
    type: 'contract-guardian',
    title: "Le Gardien des Contrats",
    description: `
      🎮 Devenez le Gardien des Contrats dans ce mini-jeu stratégique !
      
      Votre mission :
      - Gérez les renouvellements
      - Optimisez les modifications
      - Évitez les périodes sans protection
      - Maximisez la satisfaction client
      
      Attention aux échéances et aux changements de situation !
    `,
    rewards: {
      xp: 700,
      badge: "Maître du Suivi",
      title: "Gardien des Polices"
    }
  },

  boss: {
    name: "Le Chronométreur Suprême",
    description: "Un boss méticuleux qui teste votre maîtrise du timing et du suivi !",
    difficulty: 5,
    rewards: {
      xp: 1200,
      badge: "Maître du Chapitre 9",
      title: "Champion du Suivi"
    }
  }
};