import { Chapter } from '@/types/chapter';

export const chapter6: Chapter = {
  id: 'health-insurance-ch6',
  title: 'L\'Évaluateur des Risques',
  summary: `
    🎮 Agent, bienvenue au Bureau d'Évaluation des Risques !

    Votre mission : maîtriser l'art délicat d'évaluer et d'accepter les risques en assurance.

    Dans ce chapitre, vous explorerez :
    - Les secrets de l'analyse des risques 🔍
    - L'art de la sélection médicale 🏥
    - La magie de la tarification 💰
    - Le pouvoir de la note de couverture provisoire ✨

    Souvenez-vous : Un bon évaluateur voit le risque avant qu'il ne devienne un problème ! 
  `,
  
  quiz: [
    {
      question: "Pourquoi l'assureur effectue-t-il une sélection des risques ?",
      choices: [
        {
          text: "Pour évaluer le risque et fixer une prime équitable",
          correct: true,
          explanation: "L'évaluation permet de protéger l'assureur et les autres assurés."
        },
        {
          text: "Pour tester la patience du client",
          correct: false,
          explanation: "La sélection des risques est un processus sérieux, pas un test de patience !"
        },
        {
          text: "Pour collectionner des informations médicales",
          correct: false,
          explanation: "Les informations sont utilisées pour l'évaluation, pas pour une collection !"
        },
        {
          text: "Pour faire travailler les médecins",
          correct: false,
          explanation: "Les examens médicaux servent à évaluer le risque, pas à occuper les médecins !"
        }
      ]
    },
    {
      question: "Qu'est-ce qu'une note de couverture provisoire ?",
      choices: [
        {
          text: "Une protection temporaire pendant l'étude du dossier",
          correct: true,
          explanation: "Elle offre une protection immédiate en attendant la décision finale."
        },
        {
          text: "Un mot d'excuse pour le retard",
          correct: false,
          explanation: "C'est un véritable contrat temporaire, pas une excuse !"
        },
        {
          text: "Une note de musique d'assurance",
          correct: false,
          explanation: "La note n'a rien à voir avec la musique !"
        },
        {
          text: "Un bulletin scolaire pour l'assureur",
          correct: false,
          explanation: "C'est un document légal, pas une évaluation scolaire !"
        }
      ]
    },
    {
      question: "Que doit faire le représentant face aux informations du client ?",
      choices: [
        {
          text: "Les transmettre fidèlement sans les modifier",
          correct: true,
          explanation: "L'intégrité des informations est cruciale pour une bonne évaluation."
        },
        {
          text: "Les embellir un peu",
          correct: false,
          explanation: "Modifier les informations est contraire à l'éthique et illégal !"
        },
        {
          text: "Les traduire en emoji",
          correct: false,
          explanation: "Les informations doivent rester professionnelles et précises !"
        },
        {
          text: "Les transformer en histoire drôle",
          correct: false,
          explanation: "L'évaluation des risques est un processus sérieux !"
        }
      ]
    }
  ],

  minigame: {
    type: 'risk-evaluator',
    title: "L'Évaluateur de Risques",
    description: `
      🎮 Devenez l'Évaluateur de Risques dans ce mini-jeu stratégique !
      
      Votre mission :
      - Analysez les profils de risque
      - Évaluez les conditions médicales
      - Déterminez les primes appropriées
      - Gérez les couvertures provisoires
      
      Attention aux déclarations incomplètes et aux risques cachés !
    `,
    rewards: {
      xp: 550,
      badge: "Maître Évaluateur",
      title: "Oracle des Risques"
    }
  },

  boss: {
    name: "Le Grand Souscripteur",
    description: "Un boss méticuleux qui teste votre capacité à évaluer les risques avec précision !",
    difficulty: 5,
    rewards: {
      xp: 950,
      badge: "Maître du Chapitre 6",
      title: "Champion de l'Évaluation"
    }
  }
};