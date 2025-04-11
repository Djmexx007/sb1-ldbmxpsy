import { Chapter } from '@/types/chapter';

export const chapter7: Chapter = {
  id: 'health-insurance-ch7',
  title: 'Le Maître des Contrats',
  summary: `
    🎮 Agent, bienvenue dans le labyrinthe fiscal des contrats d'assurance !

    Votre mission : maîtriser l'art complexe des différents types de contrats et leur traitement fiscal.

    Dans ce chapitre, vous explorerez :
    - Les secrets des contrats individuels et collectifs 📄
    - L'art de la fiscalité des prestations 💰
    - La magie des avantages fiscaux ✨
    - Le pouvoir des règles spéciales pour entreprises 🏢

    Souvenez-vous : Un bon agent connaît ses contrats sur le bout des doigts ! 
  `,
  
  quiz: [
    {
      question: "Quelle est la principale différence entre un contrat individuel et collectif ?",
      choices: [
        {
          text: "Le contrat individuel est personnalisé tandis que le collectif est standardisé pour un groupe",
          correct: true,
          explanation: "Les contrats individuels offrent plus de flexibilité mais sont généralement plus coûteux."
        },
        {
          text: "Le contrat individuel est écrit à la main",
          correct: false,
          explanation: "Le format du contrat n'a rien à voir avec son type !"
        },
        {
          text: "Le contrat collectif nécessite une fête d'entreprise",
          correct: false,
          explanation: "Les contrats collectifs sont des outils professionnels, pas des événements sociaux !"
        },
        {
          text: "Le contrat individuel est plus petit en taille",
          correct: false,
          explanation: "La taille physique du contrat n'est pas pertinente !"
        }
      ]
    },
    {
      question: "Comment sont imposées les prestations d'invalidité payées par l'employeur ?",
      choices: [
        {
          text: "Elles sont imposables pour l'employé si l'employeur paie les primes",
          correct: true,
          explanation: "C'est une règle fiscale fondamentale : qui paie la prime détermine l'imposition."
        },
        {
          text: "Elles sont toujours non imposables",
          correct: false,
          explanation: "L'imposition dépend de qui paie les primes !"
        },
        {
          text: "Elles sont imposables uniquement les jours fériés",
          correct: false,
          explanation: "L'imposition ne dépend pas du calendrier !"
        },
        {
          text: "Elles sont imposables selon l'humeur du fisc",
          correct: false,
          explanation: "Les règles fiscales sont précises et non arbitraires !"
        }
      ]
    },
    {
      question: "Quel est l'avantage fiscal des primes d'assurance maladie pour une entreprise ?",
      choices: [
        {
          text: "Elles sont généralement déductibles d'impôt pour l'entreprise",
          correct: true,
          explanation: "C'est une dépense d'entreprise légitime qui peut être déduite."
        },
        {
          text: "Elles transforment les impôts en crédits-vacances",
          correct: false,
          explanation: "Les avantages fiscaux sont financiers, pas des avantages en nature !"
        },
        {
          text: "Elles donnent droit à un trophée fiscal",
          correct: false,
          explanation: "Il n'existe pas de trophées pour les déductions fiscales !"
        },
        {
          text: "Elles permettent d'éviter tous les impôts",
          correct: false,
          explanation: "Les déductions sont spécifiques et limitées, pas une exemption totale !"
        }
      ]
    }
  ],

  minigame: {
    type: 'tax-master',
    title: "Le Maître des Impôts",
    description: `
      🎮 Devenez le Maître des Impôts dans ce mini-jeu stratégique !
      
      Votre mission :
      - Naviguez dans le labyrinthe fiscal
      - Optimisez les avantages fiscaux
      - Gérez différents types de contrats
      - Maximisez les bénéfices pour vos clients
      
      Attention aux pièges fiscaux et aux règles spéciales !
    `,
    rewards: {
      xp: 600,
      badge: "Maître Fiscal",
      title: "Expert des Contrats"
    }
  },

  boss: {
    name: "L'Inspecteur Suprême",
    description: "Un boss redoutable qui teste votre maîtrise des contrats et de la fiscalité !",
    difficulty: 5,
    rewards: {
      xp: 1000,
      badge: "Maître du Chapitre 7",
      title: "Champion Fiscal"
    }
  }
};