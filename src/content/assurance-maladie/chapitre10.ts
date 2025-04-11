import { Chapter } from '@/types/chapter';

export const chapter10: Chapter = {
  id: 'health-insurance-ch10',
  title: 'Le Protecteur du Public',
  summary: `
    🎮 Agent, bienvenue au Bureau des Réclamations !

    Votre mission : maîtriser l'art de la gestion des réclamations et de la protection du public.

    Dans ce chapitre, vous explorerez :
    - Les secrets du processus de réclamation 📝
    - L'art de la documentation 📄
    - La magie de la résolution de conflits ⚖️
    - Le pouvoir des organismes de protection 🛡️

    Souvenez-vous : Une réclamation bien gérée est un client conservé ! 
  `,
  
  quiz: [
    {
      question: "Quelles sont les étapes clés d'une réclamation ?",
      choices: [
        {
          text: "Formulaire, preuves, analyse et paiement",
          correct: true,
          explanation: "Un processus structuré garantit un traitement efficace."
        },
        {
          text: "Danser la macarena trois fois",
          correct: false,
          explanation: "Les réclamations suivent un processus professionnel !"
        },
        {
          text: "Envoyer un pigeon voyageur",
          correct: false,
          explanation: "Les communications modernes sont plus efficaces !"
        },
        {
          text: "Croiser les doigts et espérer",
          correct: false,
          explanation: "Les réclamations nécessitent des actions concrètes !"
        }
      ]
    },
    {
      question: "Que peut faire un client dont la réclamation est refusée ?",
      choices: [
        {
          text: "Demander des explications et contacter un organisme de protection",
          correct: true,
          explanation: "Il existe des recours officiels pour protéger les droits des clients."
        },
        {
          text: "Bouder dans son coin",
          correct: false,
          explanation: "Une approche constructive est toujours préférable !"
        },
        {
          text: "Devenir un super-vilain",
          correct: false,
          explanation: "La vengeance n'est pas une solution professionnelle !"
        },
        {
          text: "Changer de planète",
          correct: false,
          explanation: "Les problèmes doivent être résolus, pas évités !"
        }
      ]
    },
    {
      question: "Quel est le rôle des organismes de protection du public ?",
      choices: [
        {
          text: "Aider les clients à faire valoir leurs droits et résoudre les conflits",
          correct: true,
          explanation: "Ces organismes sont des ressources précieuses pour la protection du consommateur."
        },
        {
          text: "Distribuer des bonbons",
          correct: false,
          explanation: "Leur rôle est sérieux et professionnel !"
        },
        {
          text: "Organiser des fêtes d'assurance",
          correct: false,
          explanation: "Ils ont un rôle de protection, pas d'animation !"
        },
        {
          text: "Donner des cours de danse",
          correct: false,
          explanation: "Leur mission est la protection du consommateur !"
        }
      ]
    }
  ],

  minigame: {
    type: 'claims-master',
    title: "Le Maître des Réclamations",
    description: `
      🎮 Devenez le Maître des Réclamations dans ce mini-jeu stratégique !
      
      Votre mission :
      - Gérez les réclamations efficacement
      - Collectez les documents nécessaires
      - Naviguez dans les processus
      - Protégez les droits des clients
      
      Attention aux délais et aux documents manquants !
    `,
    rewards: {
      xp: 750,
      badge: "Maître des Réclamations",
      title: "Protecteur du Public"
    }
  },

  boss: {
    name: "Le Juge des Réclamations",
    description: "Un boss impartial qui teste votre maîtrise du processus de réclamation !",
    difficulty: 5,
    rewards: {
      xp: 1300,
      badge: "Maître du Chapitre 10",
      title: "Champion des Droits"
    }
  }
};