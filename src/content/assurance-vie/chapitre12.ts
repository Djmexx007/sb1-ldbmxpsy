import { Chapter } from '@/types/chapter';

export const chapter12: Chapter = {
  id: 'life-insurance-ch12',
  title: 'Suivi et Mise à Jour des Besoins du Client',
  summary: `
    🎮 Agent, bienvenue au Centre de Suivi Client !

    Votre mission : maîtriser l'art du suivi et de la mise à jour des besoins clients.

    Dans ce chapitre, vous explorerez :
    - Les secrets du suivi client efficace 🔄
    - L'art de la relation à long terme 🤝
    - La magie de l'adaptation continue ✨
    - Le pouvoir de la fidélisation 💫

    Souvenez-vous : Un bon suivi transforme un client en ambassadeur ! 
  `,
  
  quiz: [
    {
      question: "Pourquoi est-il important de faire un suivi régulier avec les clients ?",
      choices: [
        {
          text: "Pour s'assurer que leur protection reste adaptée à leur situation changeante",
          correct: true,
          explanation: "Les besoins évoluent avec le temps et la protection doit suivre ces changements."
        },
        {
          text: "Pour avoir plus de rendez-vous",
          correct: false,
          explanation: "Le suivi sert à protéger le client, pas à remplir l'agenda !"
        },
        {
          text: "Pour vendre plus de produits",
          correct: false,
          explanation: "L'objectif est d'assurer une protection adéquate, pas de maximiser les ventes !"
        },
        {
          text: "Pour respecter une règle administrative",
          correct: false,
          explanation: "Le suivi est une responsabilité professionnelle, pas une formalité !"
        }
      ]
    },
    {
      question: "Quand devrait-on effectuer un suivi avec un client ?",
      choices: [
        {
          text: "Après des changements importants dans sa vie et au moins une fois par an",
          correct: true,
          explanation: "Les événements de vie et une révision annuelle sont des moments clés pour le suivi."
        },
        {
          text: "Uniquement quand il y a un nouveau produit",
          correct: false,
          explanation: "Le suivi ne dépend pas des nouveaux produits mais des besoins du client !"
        },
        {
          text: "Seulement en cas de réclamation",
          correct: false,
          explanation: "Le suivi doit être proactif, pas réactif !"
        },
        {
          text: "Quand on s'ennuie au bureau",
          correct: false,
          explanation: "Le suivi est une responsabilité professionnelle sérieuse !"
        }
      ]
    },
    {
      question: "Que doit-on vérifier lors d'un suivi client ?",
      choices: [
        {
          text: "La pertinence de la couverture, les bénéficiaires et les changements de situation",
          correct: true,
          explanation: "Un suivi complet examine tous les aspects de la protection du client."
        },
        {
          text: "Uniquement le montant des primes",
          correct: false,
          explanation: "Le coût n'est qu'un aspect parmi d'autres à vérifier !"
        },
        {
          text: "Si le client a changé de couleur préférée",
          correct: false,
          explanation: "Le suivi se concentre sur les éléments pertinents à la protection !"
        },
        {
          text: "Le nombre de likes sur ses réseaux sociaux",
          correct: false,
          explanation: "Les réseaux sociaux ne sont pas pertinents pour évaluer les besoins d'assurance !"
        }
      ]
    }
  ],

  minigame: {
    type: 'client-guardian',
    title: "Le Gardien des Clients",
    description: `
      🎮 Devenez le Gardien des Clients dans ce mini-jeu stratégique !
      
      Votre mission :
      - Gérez un portefeuille de clients
      - Identifiez les moments clés pour le suivi
      - Adaptez les protections selon les besoins
      - Maintenez des relations durables
      
      Attention aux changements de situation et aux besoins non identifiés !
    `,
    rewards: {
      xp: 850,
      badge: "Maître du Suivi",
      title: "Gardien des Relations"
    }
  },

  boss: {
    name: "Le Sage des Relations",
    description: "Un boss redoutable qui teste votre capacité à maintenir des relations clients durables !",
    difficulty: 5,
    rewards: {
      xp: 1500,
      badge: "Maître du Chapitre 12",
      title: "Champion du Suivi Client"
    }
  }
};