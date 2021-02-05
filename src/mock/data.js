import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Brandon | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Brandon',
  subtitle: 'Software Developer',
  cta: `Let's Connect`,
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Web development student with a passion for building dynamic user experiences. Experience with a varienty of tools both frontend and backend. Currently learning SEO, iOS "Swift", and React JS. Looking to transition into an internship or entry level developer position.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Chime Detroit',
    info: 'Fully responsive real estate website.',
    info2: 'HTML, CSS styled components, React.JS, React Router, and React Hooks.',
    url: 'https://chime-detroit.herokuapp.com/',
    repo: 'https://github.com/collins777/chime-detroit', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Crown Clothing',
    info: 'Fully functional ecommerce website.',
    info2: 'React.JS, Firebase, React Router, Redux, and Sass.',
    url: 'https://crwn-clothing-777.herokuapp.com/',
    repo: 'https://github.com/collins777/crwn-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Instagram Clone',
    info: 'Fully functioning Instagram clone',
    info2: 'React.JS, React Hooks,Firebase, Sass. ',
    url: '',
    repo: 'https://github.com/collins777/instagram-clone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'bmc1793@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'www.linkedin.com/collins777',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'www.github.com/collins777',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
