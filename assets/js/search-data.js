// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of some cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "coming soon!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joining-nasa-gsfc-developing-simulation-environments-for-mobile-robots-summer-26",
          title: 'Joining NASA GSFC developing simulation environments for mobile robots Summer ‘26',
          description: "",
          section: "News",},{id: "news-invited-by-sasa-to-the-white-house-office-of-science-amp-amp-technology-policy-to-discuss-first-amp-amp-recf-programs-and-the-stem-pipeline",
          title: 'Invited by SASA to the White House Office of Science &amp;amp;amp; Technology Policy...',
          description: "",
          section: "News",},{id: "news-keynote-speaker-at-the-national-space-club-amp-amp-foundation-luncheon",
          title: 'Keynote speaker at the National Space Club &amp;amp;amp; Foundation Luncheon',
          description: "",
          section: "News",},{id: "news-attending-yc-ai-startup-school-2026",
          title: 'Attending YC AI Startup School 2026',
          description: "",
          section: "News",},{id: "news-wrapped-up-my-nasa-gsfc-internship-presented-cortex-at-the-code-525-branch-presentation-and-the-national-space-club-poster-session",
          title: 'Wrapped up my NASA GSFC internship — presented CORTEx at the Code 525...',
          description: "",
          section: "News",},{id: "news-launched-coursecat-a-canvas-lms-companion-app-for-students",
          title: 'Launched CourseCat, a Canvas LMS companion app for students',
          description: "",
          section: "News",},{id: "projects-arxaiv",
          title: 'arxAIv',
          description: "A speculative AI art installation of 100+ fully AI-generated computer vision research papers examining authorship and legitimacy in academia.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/arxaiv/";
            },},{id: "projects-bytebug",
          title: 'ByteBug',
          description: "A $1.60 circuit kit for kids K-8 to build a buzzing, light-up bug using LEDs and a mini vibration motor. 100+ kits distributed through 3 nonprofit partnerships.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bytebug/";
            },},{id: "projects-coursecat",
          title: 'CourseCat',
          description: "A Canvas LMS AI companion app giving students a smarter, unified dashboard for assignments, grades, and schedule in one place.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coursecat/";
            },},{id: "projects-earudite",
          title: 'Earudite',
          description: "A crowdsourcing platform that collects speech training data from Quiz Bowl questions to improve automatic speech recognition systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/earudite/";
            },},{id: "projects-grasp",
          title: 'GRASP',
          description: "Open-world tabletop manipulation system using neuro-symbolic reasoning to execute natural language sorting instructions for warehouse environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/grasp/";
            },},{id: "projects-harmonic",
          title: 'Harmonic',
          description: "Robot built for &#39;Decode&#39; 25-26 competition for FIRST Tech Challenge.  3/500+ Chesapeake teams selected to compete in Governor&#39;s Cup Invitational.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/harmonic/";
            },},{id: "projects-mit-ideator",
          title: 'MIT Ideator',
          description: "A neuro-symbolic ideation machine that combines LLM seed generation, knowledge graph reasoning, and constraint-based planning to surface diverse, high-quality ideas.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ideator/";
            },},{id: "projects-nasa-rl-sim",
          title: 'NASA RL Sim',
          description: "Reinforcement learning simulator for NASA Goddard&#39;s CORTEx TurtleBot 4 terrain-adaptive navigation project, training and visualizing a CMAC/TD3 rover-navigation agent in real time. 90.2% arrival rate on a Raspberry Pi 4 with a provably-safe control stack and an 88 KB camera-free terrain classifier.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nasarl/";
            },},{id: "projects-signscribe",
          title: 'SignScribe',
          description: "Award-winning bionic robotic hand that translates speech to ASL finger spelling in real time using an open-source ASR kit and rendered GUI through Blender.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/signscribe/";
            },},{id: "projects-whs-cybersec",
          title: 'WHS CyberSec',
          description: "A mini club website I built to store past cybersecurity lectures and upcoming CTFs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/whscybersec/";
            },},{id: "projects-yurtle",
          title: 'Yurtle',
          description: "Robot built for &#39;Into the Deep&#39; 24-25 competition for FIRST Tech Challenge. Reached playoffs at Chesapeake Championship and selected for national robotics premier event.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/yurtle/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%6C%69%73%6F%6E%6D%61%6E%64%72%65%79%65%76@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=vlQeprIAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/allisonandreyev", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/allisonandreyev", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
