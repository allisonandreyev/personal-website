// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/personal-website/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of some cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "coming soon!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/cv/";
          },
        },{id: "news-joining-jhu-apl-as-ai-ml-intern-building-ai-agents-summer-26",
          title: 'Joining JHU APL as AI/ML intern building AI Agents Summer ‘26',
          description: "",
          section: "News",},{id: "news-accepted-cvpr-bps-scholarship-full-registration-1-5k-stipend",
          title: 'Accepted CVPR BPS Scholarship (Full Registration + $1.5K Stipend)',
          description: "",
          section: "News",},{id: "news-joining-lockheed-martin-as-cybersecurity-it-intern-in-summer-26",
          title: 'Joining Lockheed Martin as Cybersecurity/IT Intern in Summer ‘26',
          description: "",
          section: "News",},{id: "news-joining-nasa-gsfc-developing-simulation-environments-for-mobile-robots-summer-26",
          title: 'Joining NASA GSFC developing simulation environments for mobile robots Summer ‘26',
          description: "",
          section: "News",},{id: "projects-arxaiv",
          title: 'arxAIv',
          description: "A speculative AI art installation of 100+ fully AI-generated computer vision research papers examining authorship and legitimacy in academia.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/arxaiv/";
            },},{id: "projects-bytebug",
          title: 'ByteBug',
          description: "A $1.60 circuit kit for kids K-8 to build a buzzing, light-up bug using LEDs and a mini vibration motor. 100+ kits distributed through 3 nonprofit partnerships.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/bytebug/";
            },},{id: "projects-grasp",
          title: 'GRASP',
          description: "Open-world tabletop manipulation system using neuro-symbolic reasoning to execute natural language sorting instructions for warehouse environments.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/grasp/";
            },},{id: "projects-harmonic",
          title: 'Harmonic',
          description: "Robot built for &#39;Decode&#39; 25-26 competition for FIRST Tech Challenge.  3/500+ Chesapeake teams selected to compete in Governor&#39;s Cup Invitational.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/harmonic/";
            },},{id: "projects-mit-ideator",
          title: 'MIT Ideator',
          description: "A neuro-symbolic ideation machine that combines LLM seed generation, knowledge graph reasoning, and constraint-based planning to surface diverse, high-quality ideas.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/ideator/";
            },},{id: "projects-signscribe",
          title: 'SignScribe',
          description: "Award-winning bionic robotic hand that translates speech to ASL finger spelling in real time using an open-source ASR kit and rendered GUI through Blender.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/signscribe/";
            },},{id: "projects-whs-cybersec",
          title: 'WHS CyberSec',
          description: "A mini club website I built to store past cybersecurity lectures and upcoming CTFs.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/whscybersec/";
            },},{id: "projects-yurtle",
          title: 'Yurtle',
          description: "Robot built for &#39;Into the Deep&#39; 24-25 competition for FIRST Tech Challenge. Reached playoffs at Chesapeake Championship and selected for national robotics premier event.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/yurtle/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/personal-website/assets/pdf/example_pdf.pdf", "_blank");
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
