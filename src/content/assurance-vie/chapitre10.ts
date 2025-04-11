import { Chapter } from '@/types/chapter';

export const chapter10: Chapter = {
  id: 'life-insurance-ch10',
  title: 'Évaluation de la Situation et des Besoins du Client',
  summary: `
    🎮 Agent, bienvenue au Centre d'Analyse des Besoins !

    Votre mission : maîtriser l'art d'évaluer avec précision les besoins d'assurance de vos clients.

    Dans ce chapitre, vous explorerez :
    - Les secrets de l'analyse financière 💰
    - L'art de l'évaluation des besoins 📊
    - La magie de la recommandation personnalisée ✨
    - Le pouvoir de la protection optimale 🛡️

    Souvenez-vous : Une bonne évaluation est la clé d'une protection adaptée ! 
  `,
  
  quiz: [
    {
      question: "Pourquoi est-il crucial d'évaluer les besoins du client avant de recommander une assurance ?",
      choices: [
        {
          text: "Pour proposer une protection adaptée à sa situation spécifique",
          correct: true,
          explanation: "Une évaluation précise permet de recommander la meilleure solution pour le client."
        },
        {
          text: "Pour battre un record de questions posées",
          correct: false,
          explanation: "L'évaluation sert à comprendre les besoins, pas à établir des records !"
        },
        {
          text: "Pour remplir plus de paperasse",
          correct: false,
          explanation: "L'évaluation est un outil essentiel, pas une formalité administrative !"
        },
        {
          text: "Pour faire durer le rendez-vous plus longtemps",
          correct: false,
          explanation: "Le but est d'être efficace et pertinent, pas de perdre du temps !"
        }
      ]
    },
    {
      question: "Quels éléments clés doit-on analyser lors de l'évaluation des besoins ?",
      choices: [
        {
          text: "Situation familiale, revenus, dettes et objectifs financiers",
          correct: true,
          explanation: "Ces facteurs permettent de déterminer les besoins réels de protection."
        },
        {
          text: "Marque de voiture préférée",
          correct: false,
          explanation: "Les préférences en matière de voiture ne sont pas pertinentes pour l'assurance vie !"
        },
        {
          text: "Collection de timbres",
          correct: false,
          explanation: "Les hobbies ne sont généralement pas pertinents pour évaluer les besoins d'assurance !"
        },
        {
          text: "Équipe de sport favorite",
          correct: false,
          explanation: "Les préférences sportives n'influencent pas les besoins en assurance !"
        }
      ]
    },
    {
      question: "Comment déterminer le montant d'assurance vie nécessaire ?",
      choices: [
        {
          text: "En calculant les besoins financiers futurs et les obligations actuelles",
          correct: true,
          explanation: "Le montant doit couvrir les besoins réels de la famille et les obligations financières."
        },
        {
          text: "En utilisant un dé à 20 faces",
          correct: false,
          explanation: "Le montant d'assurance doit être calculé scientifiquement, pas au hasard !"
        },
        {
          text: "En copiant le voisin",
          correct: false,
          explanation: "Chaque situation est unique et nécessite une évaluation personnalisée !"
        },
        {
          text: "En choisissant un chiffre rond",
          correct: false,
          explanation: "Le montant doit être basé sur des calculs précis, pas sur l'esthétique du nombre !"
        }
      ]
    }
  ],

  minigame: {
    type: 'needs-analyzer',
    title: "L'Analyste des Besoins",
    description: `
      🎮 Devenez l'Analyste des Besoins dans ce mini-jeu stratégique !
      
      Votre mission :
      - Évaluez différents profils clients
      - Analysez les situations financières
      - Calculez les besoins en assurance
      - Recommandez les meilleures solutions
      
      Attention aux situations complexes et aux besoins cachés !
    `,
    rewards: {
      xp: 750,
      badge: "Maître de l'Analyse",
      title: "Expert des Besoins"
    }
  },

  boss: {
    name: "L'Architecte des Solutions",
    description: "Un boss redoutable qui teste votre capacité à évaluer précisément les besoins !",
    difficulty: 5,
    rewards: {
      xp: 1300,
      badge: "Maître du Chapitre 10",
      title: "Champion de l'Évaluation"
    }
  }
};