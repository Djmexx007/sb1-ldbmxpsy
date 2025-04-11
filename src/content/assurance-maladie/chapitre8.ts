import { Chapter } from '@/types/chapter';

export const chapter8: Chapter = {
  id: 'health-insurance-ch8',
  title: 'Le Conseiller Stratégique',
  summary: `
    🎮 Agent, bienvenue au Centre des Recommandations !

    Votre mission : maîtriser l'art de recommander la protection parfaite pour chaque client.

    Dans ce chapitre, vous explorerez :
    - Les secrets de l'analyse des besoins 🎯
    - L'art de l'optimisation des primes 💰
    - La magie de l'adaptation des contrats ✨
    - Le pouvoir de la communication claire 🗣️

    Souvenez-vous : Une bonne recommandation change une vie ! 
  `,
  
  quiz: [
    {
      question: "Sur quoi repose une bonne recommandation d'assurance ?",
      choices: [
        {
          text: "L'évaluation des besoins, la situation financière et les objectifs du client",
          correct: true,
          explanation: "Une recommandation efficace prend en compte tous ces aspects essentiels."
        },
        {
          text: "Le produit le plus cher du catalogue",
          correct: false,
          explanation: "Le prix n'est pas le critère principal de recommandation !"
        },
        {
          text: "La couleur préférée du client",
          correct: false,
          explanation: "Les préférences esthétiques n'influencent pas le choix de la protection !"
        },
        {
          text: "Le produit le plus facile à vendre",
          correct: false,
          explanation: "La facilité de vente ne doit pas guider la recommandation !"
        }
      ]
    },
    {
      question: "Comment peut-on ajuster une prime pour respecter le budget du client ?",
      choices: [
        {
          text: "Modifier le délai de carence, la durée ou le montant des prestations",
          correct: true,
          explanation: "Ces ajustements permettent d'équilibrer protection et budget."
        },
        {
          text: "Négocier avec un magicien",
          correct: false,
          explanation: "Les ajustements de prime suivent des règles précises, pas de magie !"
        },
        {
          text: "Payer en chocolat",
          correct: false,
          explanation: "Les primes se paient en argent, pas en nature !"
        },
        {
          text: "Croiser les doigts très fort",
          correct: false,
          explanation: "La superstition n'a pas sa place dans l'ajustement des primes !"
        }
      ]
    },
    {
      question: "Que doit faire le représentant face à des modifications imposées par l'assureur ?",
      choices: [
        {
          text: "Expliquer clairement les changements et obtenir l'accord du client",
          correct: true,
          explanation: "La transparence et le consentement du client sont essentiels."
        },
        {
          text: "Les cacher dans les petits caractères",
          correct: false,
          explanation: "La dissimulation d'information est contraire à l'éthique et illégale !"
        },
        {
          text: "Blâmer la météo",
          correct: false,
          explanation: "Les modifications ont des raisons précises qui doivent être expliquées !"
        },
        {
          text: "Changer de sujet",
          correct: false,
          explanation: "Éviter le sujet ne résout pas la situation !"
        }
      ]
    }
  ],

  minigame: {
    type: 'recommendation-master',
    title: "Le Maître des Recommandations",
    description: `
      🎮 Devenez le Maître des Recommandations dans ce mini-jeu stratégique !
      
      Votre mission :
      - Analysez les profils clients
      - Optimisez les protections
      - Équilibrez budget et couverture
      - Communiquez efficacement
      
      Attention aux contraintes budgétaires et aux besoins spéciaux !
    `,
    rewards: {
      xp: 650,
      badge: "Maître Conseiller",
      title: "Stratège des Solutions"
    }
  },

  boss: {
    name: "L'Architecte des Polices",
    description: "Un boss exigeant qui teste votre capacité à créer des recommandations parfaites !",
    difficulty: 5,
    rewards: {
      xp: 1100,
      badge: "Maître du Chapitre 8",
      title: "Champion des Recommandations"
    }
  }
};