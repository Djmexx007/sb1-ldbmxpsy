import { Chapter } from '@/types/chapter';

export const chapter11: Chapter = {
  id: 'health-insurance-ch11',
  title: 'Le Professionnel Éthique',
  summary: `
    🎮 Agent, bienvenue au Temple de l'Éthique Professionnelle !

    Votre mission : maîtriser l'art d'être un conseiller exemplaire et responsable.

    Dans ce chapitre, vous explorerez :
    - Les secrets de l'éthique professionnelle 🤝
    - L'art du service client irréprochable 👥
    - La magie de la communication transparente ✨
    - Le pouvoir de la responsabilité professionnelle ⚖️

    Souvenez-vous : Un bon conseiller est celui qu'on recommande encore dans 10 ans ! 
  `,
  
  quiz: [
    {
      question: "Quelles sont les responsabilités fondamentales d'un conseiller ?",
      choices: [
        {
          text: "Agir dans l'intérêt du client avec honnêteté et transparence",
          correct: true,
          explanation: "L'intérêt du client est toujours la priorité absolue."
        },
        {
          text: "Vendre le plus de polices possible",
          correct: false,
          explanation: "La quantité ne doit jamais primer sur la qualité du service !"
        },
        {
          text: "Devenir une célébrité de l'assurance",
          correct: false,
          explanation: "La notoriété n'est pas un objectif professionnel !"
        },
        {
          text: "Collectionner les cartes de visite",
          correct: false,
          explanation: "Le réseautage n'est pas une fin en soi !"
        }
      ]
    },
    {
      question: "Comment maintenir une relation professionnelle éthique ?",
      choices: [
        {
          text: "Respecter la confidentialité et communiquer clairement sans pression",
          correct: true,
          explanation: "Le respect et la transparence sont les piliers d'une relation professionnelle."
        },
        {
          text: "Devenir le meilleur ami du client",
          correct: false,
          explanation: "Une relation professionnelle doit rester professionnelle !"
        },
        {
          text: "Organiser des fêtes d'assurance",
          correct: false,
          explanation: "Les relations professionnelles ne sont pas des événements sociaux !"
        },
        {
          text: "Raconter des blagues d'assurance",
          correct: false,
          explanation: "L'humour ne remplace pas le professionnalisme !"
        }
      ]
    },
    {
      question: "Pourquoi est-il crucial de documenter ses recommandations ?",
      choices: [
        {
          text: "Pour assurer un suivi précis et protéger les intérêts du client et du conseiller",
          correct: true,
          explanation: "La documentation protège toutes les parties et assure un service de qualité."
        },
        {
          text: "Pour gagner un concours d'écriture",
          correct: false,
          explanation: "La documentation sert à la protection, pas à la créativité !"
        },
        {
          text: "Pour remplir plus de papier",
          correct: false,
          explanation: "La documentation a un but précis, ce n'est pas de la bureaucratie gratuite !"
        },
        {
          text: "Pour impressionner le patron",
          correct: false,
          explanation: "La documentation sert les intérêts du client, pas l'impression managériale !"
        }
      ]
    }
  ],

  minigame: {
    type: 'ethics-master',
    title: "Le Maître de l'Éthique",
    description: `
      🎮 Devenez le Maître de l'Éthique dans ce mini-jeu final !
      
      Votre mission :
      - Gérez des situations éthiques complexes
      - Prenez les bonnes décisions professionnelles
      - Maintenez des standards élevés
      - Protégez les intérêts des clients
      
      Attention aux dilemmes éthiques et aux conflits d'intérêts !
    `,
    rewards: {
      xp: 800,
      badge: "Maître de l'Éthique",
      title: "Gardien des Valeurs"
    }
  },

  boss: {
    name: "Le Sage de l'Assurance",
    description: "Le boss final qui teste votre maîtrise complète de l'assurance maladie et accident !",
    difficulty: 5,
    rewards: {
      xp: 1500,
      badge: "Maître du Module",
      title: "Champion de l'Assurance"
    }
  }
};