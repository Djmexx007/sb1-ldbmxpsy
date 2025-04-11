import { Chapter } from '@/types/chapter';

export const chapter7: Chapter = {
  id: 'life-insurance-ch7',
  title: 'Imposition et Stratégies Fiscales',
  summary: `
    🎮 Agent, bienvenue au Bureau des Stratégies Fiscales !

    Votre mission : maîtriser l'art complexe de l'imposition en assurance vie.

    Dans ce chapitre, vous explorerez :
    - Les secrets de l'exonération fiscale 💰
    - L'art de la planification successorale 📋
    - La magie des stratégies corporatives 🏢
    - Le pouvoir des avantages fiscaux ⚖️

    Souvenez-vous : Une bonne stratégie fiscale est la clé d'une protection optimale ! 
  `,
  
  quiz: [
    {
      question: "Quelle est la règle générale concernant l'imposition de la prestation de décès ?",
      choices: [
        {
          text: "Elle n'est pas imposable lorsque versée à un bénéficiaire désigné",
          correct: true,
          explanation: "La prestation de décès est généralement libre d'impôt quand un bénéficiaire est nommé dans la police."
        },
        {
          text: "Elle est toujours imposable à 50%",
          correct: false,
          explanation: "La prestation de décès n'est généralement pas imposable !"
        },
        {
          text: "Elle dépend de la phase de la lune",
          correct: false,
          explanation: "L'imposition suit des règles précises, pas des phénomènes astronomiques !"
        },
        {
          text: "Elle varie selon l'humeur du fisc",
          correct: false,
          explanation: "Les règles fiscales sont objectives et définies par la loi !"
        }
      ]
    },
    {
      question: "Dans quel cas la prestation pourrait-elle devenir imposable ?",
      choices: [
        {
          text: "Quand la police est versée à la succession sans bénéficiaire désigné",
          correct: true,
          explanation: "Sans bénéficiaire désigné, la prestation fait partie de la succession et peut être imposée."
        },
        {
          text: "Si on paie les primes en chocolat",
          correct: false,
          explanation: "Le mode de paiement des primes n'affecte pas l'imposition de la prestation !"
        },
        {
          text: "Si l'assuré aimait trop les jeux vidéo",
          correct: false,
          explanation: "Les loisirs de l'assuré n'ont aucun impact sur l'imposition !"
        },
        {
          text: "Si la police a été signée un vendredi 13",
          correct: false,
          explanation: "La date de signature n'a aucun effet sur le traitement fiscal !"
        }
      ]
    },
    {
      question: "Quelle est l'utilité fiscale principale de l'assurance vie en entreprise ?",
      choices: [
        {
          text: "Permettre le transfert d'un capital libre d'impôt au décès d'un actionnaire",
          correct: true,
          explanation: "L'assurance vie permet une transmission efficace fiscalement en contexte d'entreprise."
        },
        {
          text: "Réduire les impôts sur le café du bureau",
          correct: false,
          explanation: "L'assurance vie n'a rien à voir avec les dépenses courantes de l'entreprise !"
        },
        {
          text: "Obtenir plus de vacances fiscales",
          correct: false,
          explanation: "L'assurance vie n'influence pas les congés des employés !"
        },
        {
          text: "Rendre l'entreprise invisible au fisc",
          correct: false,
          explanation: "L'assurance vie offre des avantages légaux, pas de l'évasion fiscale !"
        }
      ]
    }
  ],

  minigame: {
    type: 'tax-strategist',
    title: "Le Stratège Fiscal",
    description: `
      🎮 Devenez le Stratège Fiscal dans ce mini-jeu captivant !
      
      Votre mission :
      - Optimisez les stratégies fiscales
      - Gérez les transferts de patrimoine
      - Maximisez les avantages fiscaux
      - Protégez le capital des clients
      
      Attention aux pièges fiscaux et aux règles complexes !
    `,
    rewards: {
      xp: 600,
      badge: "Maître Fiscal",
      title: "Stratège de l'Imposition"
    }
  },

  boss: {
    name: "Le Gardien du Fisc",
    description: "Un boss redoutable qui teste votre maîtrise des stratégies fiscales !",
    difficulty: 5,
    rewards: {
      xp: 1000,
      badge: "Maître du Chapitre 7",
      title: "Champion Fiscal"
    }
  }
};