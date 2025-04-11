import { Chapter } from '@/types/chapter';

export const chapter2: Chapter = {
  id: 'health-insurance-ch2',
  title: 'Assurance offrant une protection du revenu',
  summary: `
    🎮 Agent, bienvenue dans le monde de la protection du revenu !

    Votre mission : maîtriser l'art de protéger le revenu en cas d'invalidité.

    Dans ce chapitre, vous explorerez :
    - Les secrets de l'assurance invalidité 💰
    - L'art des différentes sources de protection 🛡️
    - La magie des polices individuelles ✨
    - Le pouvoir des garanties spéciales ⚡

    Souvenez-vous : Un revenu protégé est un avenir assuré ! 
  `,
  
  quiz: [
    {
      question: "Qu'est-ce que l'assurance invalidité ?",
      choices: [
        {
          text: "Une assurance qui remplace le revenu en cas d'incapacité de travail",
          correct: true,
          explanation: "Elle assure un revenu continu même si vous ne pouvez pas travailler."
        },
        {
          text: "Une assurance qui double votre salaire",
          correct: false,
          explanation: "Elle remplace une partie du revenu perdu, elle ne l'augmente pas !"
        },
        {
          text: "Une assurance qui vous trouve un nouveau travail",
          correct: false,
          explanation: "Elle protège votre revenu, elle ne cherche pas d'emploi !"
        },
        {
          text: "Une assurance qui paie vos vacances",
          correct: false,
          explanation: "Elle couvre la perte de revenu, pas les loisirs !"
        }
      ]
    },
    {
      question: "Quelle est la différence entre une police non résiliable et résiliable ?",
      choices: [
        {
          text: "La non résiliable garantit le maintien des conditions et primes",
          correct: true,
          explanation: "Elle offre la meilleure garantie de stabilité à long terme."
        },
        {
          text: "La non résiliable est plus colorée",
          correct: false,
          explanation: "La différence est dans les garanties, pas dans l'apparence !"
        },
        {
          text: "La résiliable dure plus longtemps",
          correct: false,
          explanation: "C'est l'inverse, la non résiliable offre plus de stabilité !"
        },
        {
          text: "Il n'y a aucune différence",
          correct: false,
          explanation: "Il y a des différences importantes dans les garanties !"
        }
      ]
    },
    {
      question: "Quels facteurs influencent la prime d'une assurance invalidité ?",
      choices: [
        {
          text: "Âge, profession, santé et montant de protection choisi",
          correct: true,
          explanation: "Ces facteurs déterminent le niveau de risque et donc le coût."
        },
        {
          text: "La couleur préférée du client",
          correct: false,
          explanation: "Les préférences personnelles n'affectent pas le risque !"
        },
        {
          text: "Le nombre d'amis sur les réseaux sociaux",
          correct: false,
          explanation: "La popularité n'influence pas le risque d'invalidité !"
        },
        {
          text: "La marque de voiture du client",
          correct: false,
          explanation: "Le type de véhicule n'affecte pas le risque d'invalidité !"
        }
      ]
    }
  ],

  minigame: {
    type: 'income-guardian',
    title: "Le Gardien du Revenu",
    description: `
      🎮 Devenez le Gardien du Revenu dans ce mini-jeu stratégique !
      
      Votre mission :
      - Protégez les revenus de vos clients
      - Gérez différents types de polices
      - Optimisez les délais de carence
      - Maximisez les prestations
      
      Attention aux exclusions et aux conditions particulières !
    `,
    rewards: {
      xp: 350,
      badge: "Maître du Revenu",
      title: "Protecteur des Revenus"
    }
  },

 boss: {
  name: "🧠 Le Démon Déductif",
  description: "Il teste ta logique jusqu’à l’épuisement mental. Seuls les agents capables d’analyser finement les types de polices et leurs prestations peuvent le vaincre.",
  difficulty: 4,
  quiz: [
    {
      question: "Quelle est la principale caractéristique d’une police non résiliable ?",
      choices: [
        { text: "L’assureur peut l’annuler à tout moment", correct: false, explanation: "C’est justement l’inverse : l’assureur NE peut PAS résilier la police unilatéralement." },
        { text: "Les primes peuvent augmenter chaque année", correct: false, explanation: "Non, les primes sont fixes pour la durée du contrat." },
        { text: "Le titulaire a droit au renouvellement sans modification", correct: true, explanation: "Exact ! C’est le plus haut niveau de garantie pour l’assuré." },
        { text: "Elle couvre uniquement les accidents de travail", correct: false, explanation: "Elle peut couvrir plus que cela, ce n’est pas sa spécificité." }
      ]
    },
    {
      question: "Qu’est-ce qui distingue une assurance invalidité individuelle d’une assurance hypothécaire ?",
      choices: [
        { text: "Les prestations sont versées directement au prêteur", correct: false, explanation: "Cela s’applique à l’assurance hypothécaire." },
        { text: "Le bénéficiaire est l’institution financière", correct: false, explanation: "Encore une fois, c’est typique des assurances de prêt." },
        { text: "L’assuré décide de l’utilisation des prestations", correct: true, explanation: "Oui ! C’est un des avantages majeurs de l’assurance invalidité individuelle." },
        { text: "Elle est automatiquement incluse dans tous les prêts", correct: false, explanation: "Faux. Elle doit être souscrite volontairement." }
      ]
    },
    {
      question: "Quel facteur influence directement la prime d’une assurance invalidité ?",
      choices: [
        { text: "La couleur des yeux", correct: false, explanation: "Même si ça serait original, ce n’est pas un critère utilisé !" },
        { text: "L’âge et le sexe", correct: true, explanation: "Exact. Les données actuarielles montrent que ces facteurs influencent les risques d’invalidité." },
        { text: "Le lieu de vacances préféré", correct: false, explanation: "Aucun lien avec l’évaluation du risque." },
        { text: "Le type de carte de crédit détenue", correct: false, explanation: "Inutile dans ce contexte." }
      ]
    },
    {
      question: "Que permet un avenant de garantie d’assurabilité future ?",
      choices: [
        { text: "Augmenter la prestation sans nouvelle preuve médicale", correct: true, explanation: "Exactement ! C’est un outil précieux pour les jeunes assurés." },
        { text: "Réduire les primes automatiquement", correct: false, explanation: "Non, cela dépend d'autres facteurs." },
        { text: "Changer de bénéficiaire sans consentement", correct: false, explanation: "Le bénéficiaire est défini contractuellement." },
        { text: "Recevoir un paiement en cas de guérison", correct: false, explanation: "Ce n’est pas le rôle de cet avenant." }
      ]
    },
    {
      question: "Qu’est-ce qu’un délai de carence dans une police d’invalidité ?",
      choices: [
        { text: "Le temps pendant lequel l’assureur traite la demande", correct: false, explanation: "C’est la période avant le début des versements, pas une étape administrative." },
        { text: "La période entre la souscription et la couverture réelle", correct: false, explanation: "Ce serait plutôt une période d’attente générale." },
        { text: "Le temps entre le début de l’invalidité et le début des prestations", correct: true, explanation: "Parfait ! C’est bien cette période spécifique." },
        { text: "La durée maximale de la police", correct: false, explanation: "La durée de la police est une autre notion." }
      ]
    }
  ],
  rewards: {
    xp: 500,
    badge: "Logicien Vainqueur",
    title: "Maître de l’Analyse"
  }
}
   };


