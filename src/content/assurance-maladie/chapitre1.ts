import { Chapter } from '@/types/chapter';

export const chapter1: Chapter = {
  id: 'life-insurance-ch1',
  title: 'La Grande Aventure de la Mortalité',
  summary: `
    🎮 Bienvenue, Agent d'Assurance en formation !

    Vous entrez dans le royaume périlleux de l’assurance vie, où chaque décision peut sauver un foyer de la ruine !

    Dans ce chapitre, vous découvrirez :
    - Les ravages financiers du destin 💀
    - Les contre-attaques magiques des polices d’assurance 🛡️
    - Les premières techniques des héros du risque 🧙‍♂️

    Préparez-vous à affronter la Faucheuse Financière et à devenir un véritable Gardien de la Stabilité !
  `,

  quiz: [
    {
      question: "🌟 Qu'est-ce qui menace le plus rapidement la stabilité d'une famille après la perte d'un soutien principal ?",
      choices: [
        {
          text: "Une chute brutale du niveau de vie, avec incapacité à couvrir les dépenses essentielles",
          correct: true,
          explanation: "La perte de revenu peut entraîner des défauts de paiement, des pertes de logement et une précarité immédiate."
        },
        {
          text: "L’annulation des comptes de streaming",
          correct: false,
          explanation: "Ce n’est qu’un ajustement mineur, pas un enjeu vital."
        },
        {
          text: "L'arrêt de la livraison hebdomadaire de sushi",
          correct: false,
          explanation: "Une perte certes triste, mais loin d’être la plus critique pour la survie financière."
        },
        {
          text: "La fin du luxe pour le chat de la maison",
          correct: false,
          explanation: "Minou devra patienter, mais ce n’est pas l’enjeu majeur ici."
        }
      ]
    },
    {
      question: "🌍 Quelle stratégie de gestion du risque t’empêche de finir accroché à un parachute qui refuse de s’ouvrir ?",
      choices: [
        {
          text: "L’évitement du risque",
          correct: true,
          explanation: "Éviter le saut en parachute, c’est éliminer le risque dès le départ : la stratégie la plus radicale !"
        },
        {
          text: "La méthode YOLO",
          correct: false,
          explanation: "YOLO est synonyme d'imprudence, pas de stratégie de gestion du risque."
        },
        {
          text: "Le camouflage ninja",
          correct: false,
          explanation: "Même un ninja bien caché ne gère pas mieux le risque s’il saute sans plan."
        },
        {
          text: "L'attitude autruche",
          correct: false,
          explanation: "Ignorer un danger ne le fait pas disparaître — au contraire !"
        }
      ]
    },
    {
      question: "💼 Quel est l’impact du décès d’un employé clé dans une entreprise ?",
      choices: [
        {
          text: "La fragilisation de la structure et de la continuité des opérations",
          correct: true,
          explanation: "La disparition d’une personne-clé peut désorganiser toute la production et impacter la croissance."
        },
        {
          text: "La machine à café perd son utilisateur principal",
          correct: false,
          explanation: "La cafetière survivra... mais peut-être pas les affaires."
        },
        {
          text: "Le bureau devient moins décoré",
          correct: false,
          explanation: "L’esthétique est secondaire : les finances passent avant."
        },
        {
          text: "Les mascottes de l’équipe perdent un fan",
          correct: false,
          explanation: "Tant pis pour les peluches, l’entreprise doit surtout rester à flot."
        }
      ]
    }
  ],

  minigame: {
    type: 'risk-manager',
    title: "🛡️ Le Gestionnaire de Risques",
    description: `
      🎮 Mission : protéger une famille contre les dangers de la vie !

      En tant que Gardien de la Prévoyance, vous devez :
      - Détecter les risques financiers dans différentes scènes
      - Choisir les meilleures protections (assurance, prévention, etc.)
      - Équilibrer budget, protection et imprévus pour survivre à l’année

      Bonus : Des événements aléatoires viendront pimenter l’aventure !
    `,
    rewards: {
      xp: 100,
      badge: "Protecteur Novice",
      title: "Gardien des Polices"
    }
  },

  boss: {
    name: "☠️ Le Faucheur Financier",
    description: "Un boss redoutable qui attaque votre ignorance sur les impacts financiers du décès. Il apparaît dans une dernière épreuve interactive où chaque bonne réponse lui enlève des points de vie !",
    difficulty: 3,
    quiz: [
      {
        question: "Quel est le rôle principal d'une assurance vie dans une planification successorale ?",
        choices: [
          {
            text: "Permettre une distribution équitable de l'héritage",
            correct: false,
            explanation: "Ce n'est pas son rôle principal, même si cela peut en faire partie."
          },
          {
            text: "Payer les droits de succession et stabiliser le revenu des survivants",
            correct: true,
            explanation: "C’est le but principal : assurer la continuité financière après un décès."
          },
          {
            text: "Offrir un capital pour investir dans l'immobilier",
            correct: false,
            explanation: "Ce n’est pas l’objectif principal d’une assurance vie."
          },
          {
            text: "Éviter de rédiger un testament",
            correct: false,
            explanation: "Un testament reste essentiel, assurance vie ou non."
          }
        ]
      }
    ],
    rewards: {
      xp: 500,
      badge: "Maître du Chapitre 1",
      title: "Vainqueur du Faucheur"
    }
  }
};
