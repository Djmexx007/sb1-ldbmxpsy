import { Chapter } from '@/types/chapter';

export const chapter2: Chapter = {
  id: 'life-insurance-ch2',
  title: 'Les Chroniques Temporaires',
  summary: `
    🎮 Agent, votre nouvelle mission vous attend !

    Plongez dans le monde fascinant de l'assurance vie temporaire, où le temps est votre meilleur allié... ou votre pire ennemi !

    Dans ce chapitre, vous découvrirez :
    - Comment jouer avec le temps sans être Doctor Strange 🕰️
    - Les secrets des polices qui disparaissent comme des messages d'espion 📜
    - L'art de protéger les gens sans vider leur compte en banque 💰

    Souvenez-vous : Une assurance temporaire, c'est comme un parachute - mieux vaut l'avoir et ne pas en avoir besoin, que l'inverse ! 
  `,
  
  quiz: [
    {
      question: "Qu'arrive-t-il à la fin de la période d'une assurance vie temporaire si l'assuré est toujours vivant ?",
      choices: [
        {
          text: "Aucun paiement n'est effectué",
          correct: true,
          explanation: "C'est exact ! L'assurance temporaire ne verse une prestation qu'en cas de décès pendant la période de couverture."
        },
        {
          text: "L'assureur organise une fête surprise",
          correct: false,
          explanation: "Les assureurs sont sympas, mais pas à ce point !"
        },
        {
          text: "On gagne un bon point et un autocollant",
          correct: false,
          explanation: "La survie est sa propre récompense dans ce cas !"
        },
        {
          text: "L'assuré reçoit un t-shirt 'J'ai survécu à mon assurance temporaire'",
          correct: false,
          explanation: "Ce serait cool, mais non, rien n'est versé à l'échéance."
        }
      ]
    },
    {
      question: "Quelle est la différence entre une police conjointe-premier décès et dernier décès ?",
      choices: [
        {
          text: "La prestation est versée au premier ou au dernier décès selon le type",
          correct: true,
          explanation: "Exactement ! C'est la principale différence entre ces deux types de polices."
        },
        {
          text: "L'une est écrite en rouge, l'autre en bleu",
          correct: false,
          explanation: "La couleur du contrat n'a rien à voir avec le type de police !"
        },
        {
          text: "L'une sent la vanille, l'autre le chocolat",
          correct: false,
          explanation: "Les polices d'assurance n'ont malheureusement pas d'odeur particulière."
        },
        {
          text: "L'une est plus lourde que l'autre",
          correct: false,
          explanation: "Le poids du contrat n'est pas un critère de différenciation !"
        }
      ]
    },
    {
      question: "Pourquoi l'assurance temporaire est-elle moins chère que l'assurance permanente ?",
      choices: [
        {
          text: "Elle ne couvre qu'une période déterminée sans valeur de rachat",
          correct: true,
          explanation: "C'est exact ! La durée limitée et l'absence de valeur de rachat réduisent son coût."
        },
        {
          text: "Les assureurs font des soldes d'été",
          correct: false,
          explanation: "Les assureurs ne font pas de soldes saisonnières !"
        },
        {
          text: "Elle est fabriquée avec des matériaux recyclés",
          correct: false,
          explanation: "L'assurance n'est pas un produit physique !"
        },
        {
          text: "C'est la version 'lite' de l'assurance vie",
          correct: false,
          explanation: "Même si c'est drôle, ce n'est pas la vraie raison !"
        }
      ]
    }
  ],

  minigame: {
    type: 'time-guardian',
    title: "Le Gardien du Temps",
    description: `
      🎮 Devenez le Gardien du Temps dans ce mini-jeu palpitant !
      
      Votre mission :
      - Gérez différents contrats temporaires
      - Surveillez les échéances et les renouvellements
      - Transformez les polices au bon moment
      - Évitez les périodes sans couverture
      
      Attention aux clients qui oublient de renouveler leur police !
    `,
    rewards: {
      xp: 150,
      badge: "Maître du Temps",
      title: "Chronométreur des Polices"
    }
  },

  boss: {
    name: "Le Seigneur des Échéances",
    description: "Un boss méticuleux qui teste votre maîtrise des contrats temporaires et de leurs subtilités !",
    difficulty: 4,
    rewards: {
      xp: 600,
      badge: "Maître du Chapitre 2",
      title: "Dompteur du Temps"
    }
  }
};