import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiAxios,
  SiRedux,
  SiTailwindcss,
  SiDjango,
  SiVite,
  SiNodedotjs,
} from "react-icons/si";

export const projectCards = [
  {
    id: 0,
    name: "Online Store",
    thumbnailUrl: "/assets/academlostore.png",
    projectUrl: "https://bodegacool.netlify.app",
    skills: [
      {
        icon: <SiJavascript size="30" />,
      },
      {
        icon: <SiCss3 size="30" />,
      },
      {
        icon: <SiHtml5 size="30" />,
      },
    ],
  },
  {
    id: 1,
    name: "Pokedex",
    thumbnailUrl: "/assets/pokedex.png",
    projectUrl: "https://guskumitenopokedex.netlify.app/pokedex",
    skills: [
      {
        icon: <SiReact size="30" />,
      },
      {
        icon: <SiRedux size="30" />,
      },
      {
        icon: <SiAxios size="30" />,
      },
      {
        icon: <SiTailwindcss size="30" />,
      },
    ],
  },
  {
    id: 2,
    name: "User's CRUD",
    thumbnailUrl: "/assets/userscrud.png",
    projectUrl: "https://theuserscrud.netlify.app",
    skills: [
      {
        icon: <SiReact size="30" />,
      },
      {
        icon: <SiDjango size="30" />,
      },
      {
        icon: <SiAxios size="30" />,
      },
      {
        icon: <SiTailwindcss size="30" />,
      },
    ],
  },
  {
    id: 3,
    name: "A real Amazon bookstore funnel",
    thumbnailUrl: "/assets/amazonstore.png",
    projectUrl: "https://myfavoritebooksapp.netlify.app",
    skills: [
      {
        icon: <SiReact size="30" />,
      },
      {
        icon: <SiVite size="30" />,
      },
    ],
  },
  {
    id: 4,
    name: "A simple weather channel",
    thumbnailUrl: "/assets/weatherchannel.png",
    projectUrl: "https://aniceweatherchannel.netlify.app",
    skills: [
      {
        icon: <SiReact size="30" />,
      },
    ],
  },
  {
    id: 5,
    name: "A backend for airport flight information",
    thumbnailUrl: "/assets/airportbackend.png",
    projectUrl: "https://github.com/guskumite/learningtofly",
    skills: [
      {
        icon: <SiNodedotjs size="30" />,
      },
    ],
  },
];
