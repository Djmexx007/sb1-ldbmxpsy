import { Chapter } from '@/types/chapter';

export const chapter5: Chapter = {
  id: 'life-insurance-ch5',
  title: 'Les Power-Ups de l\'Assurance',
  summary: `
    🎮 Agent, bienvenue dans l'arsenal des avenants !

    Découvrez comment transformer une simple police d'assurance en un super-héros de la protection financière !

    Dans ce chapitre, vous explorerez :
    - La collection d'add-ons qui boostent vos polices 🎯
    - Les super-pouvoirs cachés des garanties complémentaires 💪
    - L'art de personnaliser la protection comme un pro 🛠️
    - Les combos secrets pour une protection maximale 🔄

    Souvenez-vous : Un avenant bien choisi peut faire toute la différence ! 
  `,
  
  quiz: [
    {
      question: "Qu'est-ce qu'un avenant en assurance vie ?",
      choices: [
        {
          text: "Une option facultative qu'on peut ajouter à une police pour l'adapter aux besoins",
          correct: true,
          explanation: "Exactement ! C'est comme un DLC pour votre police d'assurance."
        },
        {
          text: "Un petit oiseau qui apporte les polices d'assurance",
          correct: false,
          explanation: "Les polices sont livrées par courrier, pas par des oiseaux !"
        },
        {
          text: "Une danse traditionnelle des assureurs",
          correct: false,
          explanation: "Les assureurs dansent peut-être, mais ce n'est pas ça un avenant !"
        },
        {
          text: "Un rituel secret pour invoquer un remboursement",
          correct: false,
          explanation: "Pas besoin de rituels, juste d'une bonne planification !"
        }
      ]
    },
    {
      question: "Quel avenant double la prestation en cas de décès accidentel ?",
      choices: [
        {
          text: "L'avenant en cas de décès accidentel",
          correct: true,
          explanation: "C'est exact ! Il double la mise si le décès est accidentel."
        },
        {
          text: "L'avenant Doubleur Magique",
          correct: false,
          explanation: "La magie n'a rien à voir avec les avenants !"
        },
        {
          text: "L'avenant Coup de Chance",
          correct: false,
          explanation: "Un décès accidentel n'est jamais une chance..."
        },
        {
          text: "L'avenant 2x Combo",
          correct: false,
          explanation: "Ce n'est pas un jeu vidéo, même si ça y ressemble parfois !"
        }
      ]
    },
    {
      question: "Pourquoi utiliser des avenants plutôt que plusieurs polices séparées ?",
      choices: [
        {
          text: "Pour optimiser les coûts et simplifier la gestion",
          correct: true,
          explanation: "Bravo ! C'est plus efficace et souvent moins cher."
        },
        {
          text: "Pour impressionner ses amis avec un gros contrat",
          correct: false,
          explanation: "La taille du contrat n'impressionne que les juristes !"
        },
        {
          text: "Pour faire travailler plus les arbres",
          correct: false,
          explanation: "Au contraire, ça utilise moins de papier !"
        },
        {
          text: "Pour battre le record du monde du plus grand nombre d'avenants",
          correct: false,
          explanation: "Ce record n'existe pas, et ce ne serait pas très utile !"
        }
      ]
    }
  ],

  minigame: {
    type: 'avenant-master',
    title: "Le Maître des Avenants",
    description: `
      🎮 Devenez le Maître des Avenants dans ce mini-jeu stratégique !
      
      Votre mission :
      - Composez la police parfaite pour chaque client
      - Combinez les avenants de manière optimale
      - Gérez votre budget de protection
      - Évitez la sur-assurance
      
      Attention aux besoins changeants de vos clients !
    `,
    rewards: {
      xp: 300,
      badge: "Maître des Add-ons",
      title: "Architecte des Garanties"
    }
  },

  boss: {
    name: "Le Collectionneur d'Avenants",
    description: "Un boss obsédé par la perfection qui teste votre maîtrise des garanties complémentaires !",
    difficulty: 4,
    rewards: {
      xp: 750,
      badge: "Maître du Chapitre 5",
      title: "Champion des Avenants"
    }
  }
};