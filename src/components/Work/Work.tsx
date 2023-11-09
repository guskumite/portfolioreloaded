"use client";
import { projectCards } from "./Work.data";
import { useState } from "react";
import { toggleDarkService } from "@/utils/darkUtils";
import { RiFlagLine, RiMoonFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export function Work() {
  const [selectedLang, setSelectedLang] = useState(0);
  const [selectedDark, setSelectedDark] = useState(1);
  const [eightClassName, setEightClassName] = useState("mt-[15vh] text-white");
  const [ninthId, setNinthId] = useState("");

  const lblLang1 = ["Mis proyectos", "My projects"];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
    ],
  };

  const toggleLanguage = () => {
    setSelectedLang(selectedLang === 0 ? 1 : 0);
  };

  const getDocs = (id: string) => {
    if (typeof window !== "undefined") {
      return document.getElementById(id);
    } else return null;
  };

  const toggleDarkMode = () => {
    setSelectedDark(selectedDark === 0 ? 1 : 0);
    const mainElement = getDocs("ninth") as HTMLElement;
    if (mainElement) {
      setNinthId(selectedDark === 1 ? "#393A47" : "#BEBDB9");
      mainElement.style.backgroundColor = ninthId;
    }
    setEightClassName(toggleDarkService(selectedDark, "eight"));
    const eightElement = getDocs("eight") as HTMLElement;
    if (eightElement) {
      eightElement.className = eightClassName;
    }

    let tmpidx;
    for (let i = 0; i < projectCards.length; i++) {
      tmpidx = getDocs(i.toString()) as HTMLElement;
      if (tmpidx) {
        tmpidx.className = selectedDark === 1 ? "text-black" : "text-white";
      }
    }
  };

  return (
    <div id="ninth" className="h-[100vh]">
      <h1 id="eight" className={`${eightClassName} text-center mt-8 mb-16`}>
        {lblLang1[selectedLang]}
      </h1>
      <div className="absolute left-[25vw] w-[60vw]">
        <Slider {...settings}>
          {projectCards.map((project) => (
            <div key={project.id} className="project-thumbnail">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <h2 id={`${project.id.toString()}`} className="text-white">
                  {" "}
                  {project.name}{" "}
                </h2>
                <Image
                  src={project.thumbnailUrl}
                  alt={project.name}
                  height={200}
                  width={400}
                />
              </a>
              <div className="skills flex flex-row">
                {project.skills?.map((skill, index) => (
                  <div key={index} className="skill">
                    {skill.icon}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <h3
        className="absolute left-[10vw] bottom-[10vh] transition-all duration-300 hover:text-secondary"
        onClick={toggleLanguage}
      >
        <RiFlagLine size="30" />
      </h3>
      <h3
        className="absolute left-[19vw] bottom-[10vh] transition-all duration-300 hover:text-secondary"
        onClick={toggleDarkMode}
      >
        <RiMoonFill size="30" />
      </h3>
    </div>
  );
}
