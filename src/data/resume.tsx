import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import {
  SiPython,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiCelery,
  SiDocker,
  SiFlutter,
  SiReact,
  SiLanggraph,
  SiGithubactions,
  SiKubernetes,
} from "react-icons/si";

import { FaAws, FaJava } from "react-icons/fa";

export const DATA = {
  name: "Prakhar Tandon",
  initials: "PT",
  url: "https://prakhartandon.dev",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Backend & AI Engineer building production RAG systems, agentic workflows, asynchronous services, and cloud-deployed applications.",
  summary:
    "I’m a Software Engineer with experience in building backend, applied-AI, cloud, and mobile applications. I have worked on production RAG pipelines, LangGraph-based agent workflows, asynchronous services, data ingestion pipelines, and AWS deployments. I’m currently seeking Backend or Applied AI Engineering roles where I can work on reliable, production-facing systems.",
  avatarUrl: "/me.jpeg",
  resumeUrl: "/resume.pdf",
  skills: [
    { name: "Java", icon: FaJava },
    { name: "Python", icon: SiPython },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Django", icon: SiDjango },
    { name: "LangGraph", icon: SiLanggraph },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Redis", icon: SiRedis },
    { name: "Celery", icon: SiCelery },
    { name: "Docker", icon: SiDocker },
    { name: "AWS", icon: FaAws },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Flutter", icon: SiFlutter },
    { name: "React", icon: SiReact },
    { name: "Kubernetes", icon: SiKubernetes },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "prakharpttandon@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pt413",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/tandonprakhar",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:prakharpttandon@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    // {
    //   company: "BarterNow",
    //   href: "https://barternow.in/",
    //   badges: [],
    //   location: "Remote",
    //   title: "Software Development Engineer 1",
    //   logoUrl: "/atomic.png",
    //   start: "August 2026",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
    {
      company: "BrightPath AI",
      badges: ["Backend", "AI", "Cloud", "Android"],
      href: "https://bpai.in/",
      location: "Bengaluru, India",
      title: "Software Engineer",
      logoUrl: "/bpai.svg",
      start: "August 2025",
      end: "August 2026",
      description:
        "Built production RAG workflows covering multi-source ingestion, chunking, embedding generation, vector retrieval, query rewriting, and reranking. Developed LangGraph-based planner, preflight, intent-detection, and tool-selection workflows. Engineered asynchronous services and scheduled processing using FastAPI, Redis, Celery, APScheduler, and PostgreSQL. Containerized and deployed services on AWS EC2 using Docker and GitHub Actions-based CI/CD.",
    },
    {
      company: "RentMyStay",
      href: "https://rentmystay.com/",
      badges: ["Backend", "Cloud", "Android"],
      location: "Bengaluru, India",
      title: "Software Engineer",
      logoUrl: "/rentmystay",
      start: "August 2025",
      end: "August 2026",
      description:
        "Independently developed Flutter applications for Android and iOS, including data-collection and tracking functionality. Managed admin and user moblie applications while directly interacting with the customers.",
    }
  ],
  // education: [
  //   {
  //     school: "Buildspace",
  //     href: "https://buildspace.so",
  //     degree: "s3, s4, sf1, s5",
  //     logoUrl: "/buildspace.jpg",
  //     start: "2023",
  //     end: "2024",
  //   },
  //   {
  //     school: "University of Waterloo",
  //     href: "https://uwaterloo.ca",
  //     degree: "Bachelor's Degree of Computer Science (BCS)",
  //     logoUrl: "/waterloo.png",
  //     start: "2016",
  //     end: "2021",
  //   },
  // ],
  projects: [
    {
      title: "NodePoint",
      dates: "2026",
      active: true,
      description:
        "Built an extensible visual orchestration platform for designing and executing AI workflows through reusable nodes. Replaced individually hardcoded node implementations with a metadata-driven node registry, added backend DAG validation and execution tracking, and enabled configurable branching, API, database, transformation, and LLM operations through a unified workflow interface.",
      technologies: [
        "React",
        "React Flow",
        "Zustand",
        "FastAPI",
        "Python",
        "JavaScript",
        "Docker",
      ],
      links: [
        {
          type: "Case Study",
          href: "LIVE_DEMO_URL",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pt413/NodePoint",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nodepoint.png",
      video: "",
    },
    {
      title: "RAG & Agent Orchestration",
      href: "/projects/production-rag",
      dates: "2025 – 2026",
      active: true,
      description:
        "Owned backend workflows for a production RAG system serving 200,000+ embeddings and integrating data from 3 communication channels—email, WhatsApp, and calls. Built ingestion, chunking, retrieval, query-rewriting, and reranking flows; implemented LangGraph-based planning and tool selection; and automated background processing through Redis, Celery, and 2 scheduled synchronization pipelines.",
      technologies: [
        "Python",
        "FastAPI",
        "LangGraph",
        "PostgreSQL",
        "pgvector",
        "Pinecone",
        "Redis",
        "Celery",
        "Docker",
        "AWS",
      ],
      links: [
        {
          type: "Case Study",
          href: "/projects/production-rag",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rag-architecture.png",
      video: "",
    },
    {
      title: "Semantic Candidate Search System",
      href: "https://github.com/pt413/People_Search_System",
      dates: "2025",
      active: true,
      description:
        "Designed and implemented a semantic people-search system across 193,796 professional profiles. Generated Voyage-3 embeddings, built a FAISS-based retrieval index with persistent ID mapping, and converted 10 natural-language hiring requirements into configurable hard and soft criteria, producing ranked candidate results with structured evaluation outputs.",
      technologies: [
        "Python",
        "FAISS",
        "Voyage AI",
        "MongoDB",
        "Vector Search",
        "YAML",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/pt413/People_Search_System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/people-search-system.png",
      video: "",
    },
    {
      title: "Budget Bachelor",
      href: "https://github.com/pt413/Budget-Bachelor",
      dates: "2025",
      active: true,
      description:
        "Designed and trained a multi-output Random Forest model to generate personalized allocations across 5 financial targets using income, demographic, city-tier, and 4 interest signals. Integrated the model into a Django API and React interface, taking the system from dataset preparation through model serving and product integration; the resulting research was accepted at ICSCSP 2025.",
      technologies: [
        "Python",
        "Django",
        "React",
        "Scikit-learn",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/pt413/Budget-Bachelor",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Research",
          href: "https://drive.google.com/file/d/1nCJ5DsilL5h2Py6HmInpNqxj8Qij9uEK/view?usp=drive_link",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Budget-Bachelor.png",
      video: "",
    },
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    {
      title: "UHack",
      dates: "January 14 - 16, 2023",
      location: "Prayagraj, India",
      description:
        "Developed a mobile application which delivers campus wide events in real time to all students.",
      image:
        "./uhack.jpg",
      mlh: "https://united.ac.in/uhack/",
      links: [],
    },
    {
      title: "Flipkart GRID",
      dates: "July 26 - 29, 2023",
      location: "Bengaluru, India",
      description:
        "Developed a web application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "./flipkart.jpg",
      links: [],
    },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "September 3 - 4, 2023",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [],
    // },
    {
      title: "Uhack 2.0",
      dates: "January 20 - 21, 2024",
      location: "Prayagraj, India",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "./uhack.jpg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "December 11 - 12, 2024",
      location: "Delhi, India",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "./sih.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [],
    },
    {
      title: "OpenCode'24",
      dates: "December 15, 2024 - January 13, 2025",
      location: "Prayagraj, India",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "./opencode.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [],
    },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    {
      title: "UHack 3.0",
      dates: "February 3 - 5, 2025",
      location: "Prayagraj, India",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "./uhack.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [],
    },
    {
      title: "Global AI Hackathon",
      dates: "March 3 - April 14, 2025",
      location: "Online",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      links: [],
    },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
