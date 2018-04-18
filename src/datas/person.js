import PropTypes from 'prop-types';

export const person = {
  basics: {
    name: 'Nicolas Simoes',
    label: 'Ingénieur Logiciel',
    picture: 'https://api.iseplive.fr/storage/student/91/9146.jpg',
    email: 'nico93simo@hotmail.fr',
    phone: '06 38 61 88 43',
    website: 'http://nicolas-simoes.fr',
    summary:[
      'Bientôt diplômé de l\'ISEP en tant qu\'ingénieur logiciel avec une spécialisation dans le web et un goût prononcé pour les nouvelles technologies.',
      'Je suis disponible à partir du mois d\'octobre pour un poste en CDI.'],
    location: {
      address: "112 avenue du général De Gaulle",
      postalCode: "93330",
      city: "Neuilly sur Marne",
      countryCode: "FR",
      region: "Ile de France"
    },
    profiles: [
      {
        network: 'GitHub',
        username: 'nicosim',
        url: 'https://www.github.com/nicosim',
      },
      {
        network: 'LinkedIn',
        username: 'Nicolas Simoes',
        url: 'https://www.linkedin.com/in/nicolas-simoes-466a76b8/',
      },
    ],
  },
  work: [
    {
      company: 'Sopra Banking Software',
      position: 'Ingénieur logiciel en alternance',
      website: 'https://soprabanking.com/',
      logo:'images/sbs.png',
      startDate: '11/2015',
      endDate: '09/2018',
      summary: '',
      highlights: [
        'Assesseur au bureau de vote des DP',
        'Etre force de proposition',
        'Comprendre le besoin client',
        'Développer sur différents languages',
        'Rédiger des documents techniques',
      ],
    },
    {
      company: 'RATP',
      position: 'Developeur WEB en stage',
      website: 'http://ratp.fr',
      logo:'images/ratp.png',
      startDate: '04/2015',
      endDate: '06/2015',
      summary: '',
      highlights: [
        'Créer un intranet en respectant un cahier des charges',
        'Apprendre un nouveau language (C# avec ASP.NET)',
        'Etre en relation direct avec le client',
        'Corriger et mettre à jour une application',
      ],
    },
  ],
  volunteer: [
    {
      organization: 'Association de gymnastique de Gagny',
      position: 'Webmaster',
      website: 'http://usmg-gymnastique.fr',
      startDate: '03/2015',
      endDate: '2018',
      summary:'',
      highlights: [
        '1,000 pounds of food donations', 
        'Event of the Century'
      ],
    },
  ],
  education: [
    {
      institution: 'ISEP',
      area: 'Ecole du numérique',
      studyType: 'Ingénieur logiciel',
      logo:'images/isep.png',
      startDate: '2015',
      endDate: '2018',
      courses: [
        'Algorithmique et programmation avancées',
        'Génie logiciel',
        'Méthodes formelles',
        'Technologies web avancées',
        'Langages et compilation',
        'Architecture et programmation distribuées',
      ],
    },
    {
      institution: 'IUT Paris Descartes',
      area: 'Informatique',
      studyType: 'DUT Informatique',
      startDate: '2013',
      endDate: '2015',
      courses: [
        'Réseau',
        'Management',
        'Développement Logiciel',
        'Développement WEB',
        'Algorithmique',
        'Architecture des ordinateurs',
        'Anglais',
        'Mathématique',
      ],
    },
  ],
  skills: [
    {
      name: 'Java',
      level: 75,
      keywords: [
        'IUT Paris Descartes : Algorithmique - Génération automatique d\'un sudoku',
        'IUT Paris Descartes : Programmation orientée objet - Librairie pour ASCII ART',
        'IUT Paris Descartes : Algorithmique avancée - Application contenant de nombreux jeux de cartes',
      ],
    },
    {
      name: 'C',
      level: 50,
      keywords: [
        'IUT Paris Descartes : Programmation - Répertoire téléphonique avec affichage sur console',
        'Sopra Banking Software : Partie temps réelle développée en C'
      ],
    },
    {
      name: 'React',
      level: 50,
      keywords: [
        'ISEP : Projet de technologie WEB avancé utilisant Spring et React',
        'Perso : Site personnel'
      ],
    },
    {
      name: 'Framework Java J2E',
      level: 75,
      keywords: [
        'ISEP : Projet de technologie WEB avancé utilisant Spring et React', 
        'Sopra Banking : IHM utilisant Struts 2'
      ],
    },
    {
      name: 'Esprit critique',
      level: 75,
      keywords: [
        'Comprendre fonctionnement actuel de l\'application',
        'Comprendre les apports et les défauts des solutions techniques proposées',
        'Apprendre de ses erreurs',
      ],
    },
  ],
  languages: [
    {
      name: 'Français',
      level: 100,
      levelLabel:'Language maternelle'
    },
    {
      name: 'Anglais',
      level: 80,
      levelLabel:'Expert'
    },
    {
      name: 'Espagnol',
      level: 60,
      levelLabel:'Intermédiaire'
    },
    {
      name: 'Japonais',
      level: 20,
      levelLabel:'Débutant'
    },
  ],
  interests: [
    {
      name: 'Manga',
      picture:'images/anime.png',
      keywords: [
        'Dragon Ball',
        'One Piece',
        'Naruto',
        'Bleach',
        'Bakuman',
      ],
    },
    {
      name: 'Culture japonaise',
      picture:'images/japan.jpg',
      keywords: [
        'Yukata',
        'Art martiaux',
        'Respect d\'autrui',
        'Mangas et japanimation',
      ],
    },
    {
      name: 'Voyage',
      picture:'images/travel.jpg',
      keywords: [
        'Espagne',
        'Portugal',
        'Grande Bretagne',
        'Luxembourg',
        'Belgique',
        'Italie',
        'Chine',
        'Thaïlande',
      ],
    },
  ],
};

export const locationType = PropTypes.shape({
  address: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  countryCode: PropTypes.string,
  region: PropTypes.string,
}).isRequired;

export const profileType = PropTypes.shape({
  network: PropTypes.string,
  username: PropTypes.string,
  url: PropTypes.string,
}).isRequired;

export const basicsType = PropTypes.shape({
  name: PropTypes.string,
  label: PropTypes.string,
  picture: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
  location: PropTypes.shape(locationType),
  profiles: PropTypes.arrayOf(profileType),
}).isRequired;

export const workType = PropTypes.arrayOf(PropTypes.shape({
  company: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const volunteerType = PropTypes.arrayOf(PropTypes.shape({
  organization: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const educationType = PropTypes.arrayOf(PropTypes.shape({
  institution: PropTypes.string,
  area: PropTypes.string,
  studyType: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  gpa: PropTypes.string,
  courses: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const awardsType = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.string,
  awarder: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

export const publicationsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  publisher: PropTypes.string,
  releaseDate: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

export const skillsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const languagesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
})).isRequired;

export const interestsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const referencesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  reference: PropTypes.string,
})).isRequired;

export const resumeType = PropTypes.shape({
  basics: basicsType,
  work: workType,
  volunteer: volunteerType,
  education: educationType,
  awards: awardsType,
  publications: publicationsType,
  skills: skillsType,
  languages: languagesType,
  interests: interestsType,
  references: referencesType,
});