import {
  RiHome4Line,
  RiAccountPinCircleLine,
  RiAddFill,
  RiBriefcase2Line,
  RiChatPollLine,
  RiDownloadCloud2Fill,
  RiBuilding2Fill,
} from "react-icons/ri";

export const dataNavbar = [
  {
    name: "home",
    path: "/",
    icon: <RiHome4Line size="30" />,
  },
  {
    name: "about",
    path: "/about",
    icon: <RiAccountPinCircleLine size="30" />,
  },
  {
    name: "skills",
    path: "/skills",
    icon: <RiAddFill size="30" />,
  },

  {
    name: "projects",
    path: "/works",
    icon: <RiChatPollLine size="30" />,
  },

  {
    name: "contact",
    path: "/contact",
    icon: <RiBriefcase2Line size="30" />,
  },
  {
    name: "vitae",
    path: "/vitae",
    icon: <RiDownloadCloud2Fill size="30" />,
  },
  {
    name: "academlo",
    path: "/academlo",
    icon: <RiBuilding2Fill size="30" />,
  },
];
