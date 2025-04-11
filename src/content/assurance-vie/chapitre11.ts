import { Chapter } from '@/types/chapter';

export const chapter11: Chapter = {
  id: 'life-insurance-ch11',
  title: 'Présentation des Recommandations au Client',
  summary: `
    🎮 Agent, bienvenue au Centre de Présentation !

    Votre mission : maîtriser l'art de présenter des recommandations claires et convaincantes.

    Dans ce chapitre, vous explorerez :
    - Les secrets d'une présentation efficace 🎯
    - L'art de la communication claire 💬
    - La magie de la persuasion positive ✨
    - Le pouvoir de l'écoute active 👂

    Souvenez-vous : Une bonne présentation transforme l'analyse en action ! 
  `,
  
  quiz: [
    {
      question: "Quel est l'objectif principal d'une présentation de recommandations ?",
      choices: [
        {
          text: "Expliquer clairement la solution qui répond aux besoins spécifiques du client",
          correct: true,
          explanation: "La présentation doit établir un lien clair entre les besoins et la solution proposée."
        },
        {
          text: "Impressionner le client avec des termes techniques",
          correct: false,
          explanation: "Le jargon technique peut confondre plutôt qu'éclairer le client !"
        },
        {
          text: "Vendre le produit le plus cher",
          correct: false,
          explanation: "L'objectif est de répondre aux besoins, pas de maximiser les ventes !"
        },
        {
          text: "Terminer la rencontre le plus vite possible",
          correct: false,
          explanation: "La qualité de la présentation est plus importante que sa durée !"
        }
      ]
    },
    {
      question: "Quelle est la meilleure façon de gérer une objection sur le prix ?",
      choices: [
        {
          text: "Expliquer la valeur et décomposer les coûts en montants plus digestibles",
          correct: true,
          explanation: "Montrer la valeur et rendre le coût plus compréhensible aide à surmonter cette objection."
        },
        {
          text: "Offrir une réduction immédiate",
          correct: false,
          explanation: "Les prix en assurance sont réglementés et ne peuvent pas être négociés ainsi !"
        },
        {
          text: "Ignorer l'objection et continuer la présentation",
          correct: false,
          explanation: "Les objections doivent toujours être adressées directement !"
        },
        {
          text: "Dire que tous les autres clients paient ce prix",
          correct: false,
          explanation: "La comparaison avec d'autres clients n'est pas pertinente pour justifier un prix !"
        }
      ]
    },
    {
      question: "Pourquoi est-il recommandé de présenter deux options au client ?",
      choices: [
        {
          text: "Pour donner au client un sentiment de contrôle et de choix éclairé",
          correct: true,
          explanation: "Offrir des options permet au client de prendre une décision active plutôt que passive."
        },
        {
          text: "Pour doubler les chances de vente",
          correct: false,
          explanation: "Le but est d'aider le client à choisir, pas de multiplier les ventes !"
        },
        {
          text: "Pour compliquer la décision",
          correct: false,
          explanation: "Les options doivent simplifier, pas compliquer la décision !"
        },
        {
          text: "Pour montrer qu'on a beaucoup de produits",
          correct: false,
          explanation: "La quantité de produits n'est pas un argument de vente pertinent !"
        }
      ]
    }
  ],

  minigame: {
    type: 'presentation-master',
    title: "Le Maître de la Présentation",
    description: `
      🎮 Devenez le Maître de la Présentation dans ce mini-jeu stratégique !
      
      Votre mission :
      - Préparez des présentations convaincantes
      - Gérez les objections avec habileté
      - Adaptez votre communication
      - Guidez les clients vers la meilleure décision
      
      Attention aux malentendus et aux explications confuses !
    `,
    rewards: {
      xp: 800,
      badge: "Maître Présentateur",
      title: "Expert en Communication"
    }
  },

  boss: {
    name: "L'Oracle des Solutions",
    description: "Un boss redoutable qui teste votre capacité à présenter des recommandations parfaites !",
    difficulty: 5,
    rewards: {
      xp: 1400,
      badge: "Maître du Chapitre 11",
      title: "Champion de la Présentation"
    }
  }
};