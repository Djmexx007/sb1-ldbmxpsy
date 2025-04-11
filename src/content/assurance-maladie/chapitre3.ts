import { Chapter } from '@/types/chapter';

export const chapter3: Chapter = {
  id: 'health-insurance-ch3',
  title: 'Assurance offrant une protection des actifs',
  summary: `
    🎮 Agent, bienvenue dans le monde de la protection des actifs !

    Votre mission : maîtriser l'art de préserver le patrimoine face aux aléas de la santé.

    Dans ce chapitre, vous explorerez :
    - Les secrets de l'assurance maladies graves 🏥
    - L'art de la protection du patrimoine 💎
    - La magie des soins de longue durée ✨
    - Le pouvoir de la préservation des actifs ⚡

    Souvenez-vous : Un patrimoine protégé est un avenir assuré ! 
  `,
  
  quiz: [
    {
      question: "Pourquoi souscrire une assurance maladies graves ?",
      choices: [
        {
          text: "Pour recevoir une somme forfaitaire permettant de préserver ses actifs en cas de maladie grave",
          correct: true,
          explanation: "Cette prestation aide à éviter d'entamer son patrimoine pour payer les soins."
        },
        {
          text: "Pour devenir immunisé contre les maladies",
          correct: false,
          explanation: "L'assurance offre une protection financière, pas médicale !"
        },
        {
          text: "Pour avoir un accès VIP à l'hôpital",
          correct: false,
          explanation: "Elle protège vos finances, pas votre statut à l'hôpital !"
        },
        {
          text: "Pour gagner à la loterie",
          correct: false,
          explanation: "C'est une protection sérieuse, pas un jeu de hasard !"
        }
      ]
    },
    {
      question: "Qu'est-ce que l'assurance soins de longue durée ?",
      choices: [
        {
          text: "Une assurance qui couvre les coûts de soins en cas de perte d'autonomie",
          correct: true,
          explanation: "Elle aide à payer les soins nécessaires sans épuiser son patrimoine."
        },
        {
          text: "Une assurance qui rend immortel",
          correct: false,
          explanation: "Elle couvre les soins, elle ne prolonge pas la vie indéfiniment !"
        },
        {
          text: "Une assurance qui offre des vacances de luxe",
          correct: false,
          explanation: "Elle couvre des soins nécessaires, pas des loisirs !"
        },
        {
          text: "Une assurance qui paie un majordome",
          correct: false,
          explanation: "Elle couvre les soins médicaux, pas le personnel de maison !"
        }
      ]
    },
    {
      question: "Pourquoi le délai de survie est-il important en assurance maladies graves ?",
      choices: [
        {
          text: "Pour confirmer la gravité de la maladie et éviter les réclamations prématurées",
          correct: true,
          explanation: "Ce délai permet de s'assurer que la condition est vraiment grave et stabilisée."
        },
        {
          text: "Pour organiser une fête de guérison",
          correct: false,
          explanation: "C'est une condition contractuelle sérieuse, pas une période festive !"
        },
        {
          text: "Pour battre un record de patience",
          correct: false,
          explanation: "Le délai a un but médical, pas un objectif de performance !"
        },
        {
          text: "Pour économiser de l'argent",
          correct: false,
          explanation: "Le délai sert à valider la condition, pas à faire des économies !"
        }
      ]
    }
  ],

  minigame: {
    type: 'asset-protector',
    title: "Le Protecteur des Actifs",
    description: `
      🎮 Devenez le Protecteur des Actifs dans ce mini-jeu stratégique !
      
      Votre mission :
      - Protégez le patrimoine de vos clients
      - Gérez les maladies graves
      - Optimisez la protection des actifs
      - Préservez la valeur à long terme
      
      Attention aux conditions médicales et aux délais de survie !
    `,
    rewards: {
      xp: 400,
      badge: "Maître des Actifs",
      title: "Gardien du Patrimoine"
    }
  },

  boss: {
    name: "Le Gardien du Trésor",
    description: "Un boss redoutable qui teste votre capacité à protéger les actifs !",
    difficulty: 4,
    quiz: [
      {
        question: "Quelles sont les quatre maladies graves couvertes de base ?",
        choices: [
          { text: "Cancer, crise cardiaque, AVC, pontage coronarien", correct: true, explanation: "Ce sont les quatre maladies de base les plus fréquemment couvertes." },
          { text: "Grippe, diabète, asthme, insomnie", correct: false, explanation: "Ces maladies ne sont pas considérées comme des conditions graves couvertes." },
          { text: "Cancer, rhume, varicelle, dépression", correct: false, explanation: "Les maladies couvertes doivent être potentiellement mortelles." },
          { text: "Appendicite, maux de dos, migraine, eczéma", correct: false, explanation: "Ce ne sont pas des affections graves au sens des polices d'assurance." }
        ]
      },
      {
        question: "Quelle est la conséquence d’une période d’admissibilité de 30 jours ?",
        choices: [
          { text: "Aucune maladie n'est couverte dans les 30 premiers jours suivant la souscription", correct: true, explanation: "C’est une mesure pour éviter l’antisélection par les assurés." },
          { text: "L’assureur rembourse immédiatement toutes les primes", correct: false, explanation: "Ce n’est pas lié au remboursement." },
          { text: "Le client reçoit un bonus", correct: false, explanation: "Ce n’est pas une politique de récompense." },
          { text: "Les prestations doublent en cas de maladie", correct: false, explanation: "Ce serait généreux, mais ce n’est pas la règle." }
        ]
      },
      {
        question: "À quoi sert un avenant 'second événement' ?",
        choices: [
          { text: "Permet une deuxième réclamation après un autre diagnostic admissible", correct: true, explanation: "C’est utile si l’assuré subit deux maladies différentes dans sa vie." },
          { text: "Ajoute une clause d’hospitalisation", correct: false, explanation: "Ce n’est pas sa fonction." },
          { text: "Fait baisser les primes automatiquement", correct: false, explanation: "Il n’a aucun impact direct sur la prime." },
          { text: "Donne accès à des traitements privés", correct: false, explanation: "C’est une clause contractuelle, pas une couverture médicale directe." }
        ]
      }
    ],
    rewards: {
      xp: 800,
      badge: "Maître du Chapitre 3",
      title: "Champion de la Préservation"
    }
  }
};
