import { Chapter } from '@/types/chapter';

export const chapter5: Chapter = {
  id: 'health-insurance-ch5',
  title: 'Assurance offrant une protection aux entreprises',
  summary: `
    🎮 Agent, bienvenue dans le monde de la protection d'entreprise !

    Votre mission : maîtriser l'art de protéger les entreprises contre les aléas de la santé.

    Dans ce chapitre, vous explorerez :
    - Les secrets de la protection des frais généraux 💼
    - L'art de la protection des personnes clés 👥
    - La magie des conventions de rachat 📜
    - Le pouvoir des régimes collectifs 🏢

    Souvenez-vous : Une entreprise bien protégée est une entreprise qui dure ! 
  `,
  
  quiz: [
    {
      question: "Pourquoi une entreprise devrait-elle souscrire une assurance frais généraux ?",
      choices: [
        {
          text: "Pour couvrir les dépenses fixes pendant l'invalidité du propriétaire",
          correct: true,
          explanation: "Elle permet de maintenir l'entreprise en activité malgré l'absence du propriétaire."
        },
        {
          text: "Pour payer les vacances des employés",
          correct: false,
          explanation: "Les frais généraux concernent les dépenses essentielles, pas les extras !"
        },
        {
          text: "Pour acheter une machine à café dernier cri",
          correct: false,
          explanation: "L'assurance couvre les dépenses existantes, pas les nouveaux achats !"
        },
        {
          text: "Pour organiser la fête de Noël",
          correct: false,
          explanation: "Les événements festifs ne sont pas des frais généraux essentiels !"
        }
      ]
    },
    {
      question: "Qu'est-ce qu'une convention de rachat d'actions ?",
      choices: [
        {
          text: "Un accord prévoyant le rachat des parts d'un propriétaire invalide",
          correct: true,
          explanation: "Elle assure la stabilité de l'entreprise et protège la valeur des parts."
        },
        {
          text: "Une collection de cartes d'actions rares",
          correct: false,
          explanation: "Ce n'est pas un jeu de collection, c'est un outil de protection d'entreprise !"
        },
        {
          text: "Un concours de trading entre associés",
          correct: false,
          explanation: "La convention protège l'entreprise, elle n'organise pas de concours !"
        },
        {
          text: "Une fête pour célébrer l'achat d'actions",
          correct: false,
          explanation: "C'est un document légal sérieux, pas un événement festif !"
        }
      ]
    },
    {
      question: "Pourquoi protéger une personne clé dans l'entreprise ?",
      choices: [
        {
          text: "Pour compenser la perte financière liée à son absence",
          correct: true,
          explanation: "Certains employés sont essentiels au succès de l'entreprise."
        },
        {
          text: "Pour lui offrir une cape de super-héros",
          correct: false,
          explanation: "La protection est financière, pas vestimentaire !"
        },
        {
          text: "Pour la rendre immortelle",
          correct: false,
          explanation: "L'assurance protège contre les conséquences, pas contre les événements !"
        },
        {
          text: "Pour qu'elle gagne au loto",
          correct: false,
          explanation: "L'assurance n'est pas un jeu de hasard !"
        }
      ]
    }
  ],

  minigame: {
    type: 'business-protector',
    title: "Le Protecteur d'Entreprise",
    description: `
      🎮 Devenez le Protecteur d'Entreprise dans ce mini-jeu stratégique !
      
      Votre mission :
      - Gérez les risques d'entreprise
      - Protégez les personnes clés
      - Structurez les conventions de rachat
      - Optimisez les régimes collectifs
      
      Attention aux imprévus qui peuvent affecter la stabilité de l'entreprise !
    `,
    rewards: {
      xp: 500,
      badge: "Maître des Entreprises",
      title: "Gardien du Commerce"
    }
  },

  boss: {
    name: "Le Titan des Affaires",
    description: "Un boss redoutable qui teste votre maîtrise de la protection d'entreprise !",
    difficulty: 5,
    rewards: {
      xp: 900,
      badge: "Maître du Chapitre 5",
      title: "Champion des Entreprises"
    }
  }
};