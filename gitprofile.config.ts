// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AriannaDeNardo', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['AriannaDeNardo/portfolio'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Professional Statement',
          description: 'My thoughts and words on professionalism', 
          description:'In all things I am propelled by an unwavering curiosity and desire to understand the world around me. I have a keen analytical sense and bring an ability to build meaningful connections, provide valuable context and engage in thoughtful intellection.',          
          imageUrl:'https://www.freepik.com/icon/medal_3672556',
        },
        {
          title: 'NIST Security Framework',
          description:
            'NIST Security Framework Response.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/d/1s2QG_sgF6SrCcCkI1g2C3dp-FPbaqdQD/edit?usp=drive_link&ouid=109528587178979917847&rtpof=true&sd=true',
        },
        {
          title: 'Conduct a security audit',
          description:
            'Fictional company, non-fiction security audit.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/d/1LX47eHeomrKv_iQ6DpKOhmFnFH8qFiU8/edit?usp=drive_link&ouid=109528587178979917847&rtpof=true&sd=true',
        },   
       {
          title: 'Linux Basics',
          description:
            'Basically a Linux champion.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/d/1VdPMx-ibpVK2rpfXU50JwMdMIUs3AkIr/edit?usp=drive_link&ouid=109528587178979917847&rtpof=true&sd=true',
        },
        {
          title: 'Full Network Recommendation',
          description:
            'Full breakdown of a company network and best security recommendations.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/d/1RMhUHzIAYAqAL445cSuz0TLCpSqo6vHA/edit?usp=drive_link&ouid=109528587178979917847&rtpof=true&sd=true',
        },    
      ],
    },
  },
  seo: {
    title: 'Portfolio of Arianna DeNardo',
    description: 'Showcasing my competence and expertise',
    imageURL: '',
  },
  social: {
    linkedin: 'arianna-denardo',
    phone: '',
    email: 'aridenard@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'MySQL',
    'Git',
    'PHPUnit',
    'CSS',
  ],
  experiences: [
    {
      company: 'Habitual Beauty',
      position: 'Owner/Esthetician',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://habitualbeautystudio.com',
    },
    {
      company: 'Mollys Wax Shop',
      position: 'Esthetician',
      from: 'July 2014',
      to: 'October 2021',
      companyLink: 'https://mollyswaxshop.com',
    },
  ],
  certifications: [
    {
      name: 'Working on It',
      body: '',
      year: '',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'East Carolina University',
      degree: 'BSBA-MIS',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Wake Tech Community College',
      degree: 'Associate',
      from: '2014',
      to: '2016',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
