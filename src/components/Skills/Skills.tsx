"use client";

import { projectCards } from "./Skills.data";
import { projectCards2 } from "./Skills.data";
import { useState } from "react";
import { toggleDarkService } from "@/utils/darkUtils";
import { RiFlagLine, RiMoonFill } from "react-icons/ri";
import ProgressBar from "@/utils/progressBar";

export function Skills() {
  const [selectedLang, setSelectedLang] = useState(0);
  const [selectedDark, setSelectedDark] = useState(1);
  const [fourteenth, setFourteenth] = useState("#FFFFFF");
  const [fourteenthA, setFourteenthA] = useState(
    "text-white bg-black absolute top-[25vh] left-[32vw] w-[60%] text-sm"
  );
  const [fifteenth, setFifteenth] = useState("#FFFFFF");
  const [fifteenthA, setFifteenthA] = useState(
    "text-white bg-black absolute top-[130vh] left-[32vw] w-[60%] text-sm"
  );
  const [twelfth, setTwelfth] = useState("mt-[15vh] text-white bg-black");

  const lblLang1 = ["Habilidades", "Skills"];

  const toggleLanguage = () => {
    setSelectedLang(selectedLang === 0 ? 1 : 0);
  };

  const toggleDarkMode = () => {
    setSelectedDark(selectedDark === 0 ? 1 : 0);
    const mainElement = document.getElementById("fifteenth");
    if (mainElement) {
      setFourteenth(selectedDark === 1 ? "#FFFFFF" : "#000000");
      setFourteenthA(
        selectedDark === 1
          ? "text-black bg-white absolute top-[25vh] left-[32vw] w-[60%] text-sm"
          : "text-white bg-black absolute top-[25vh] left-[32vw] w-[60%] text-sm"
      );
      mainElement.style.backgroundColor = fourteenth;
      mainElement.className = fourteenthA;
      const mainElement2 = document.getElementById("sixteenth");
      if (mainElement2) {
        setFifteenth(selectedDark === 1 ? "#FFFFFF" : "#000000");
        setFifteenthA(
          selectedDark === 1
            ? "text-black bg-white absolute top-[170vh] left-[32vw] w-[60%] text-sm"
            : "text-white bg-black absolute top-[170vh] left-[32vw] w-[60%] text-sm"
        );
        mainElement2.style.backgroundColor = fifteenth;
        mainElement2.className = fifteenthA;
      }

      setTwelfth(toggleDarkService(selectedDark, "twelfth"));
      const twelfthElement = document.getElementById("twelfth");
      if (twelfthElement) {
        twelfthElement.className = twelfth;
      }

      let tmpidx;
      let tmpski;
      let tmpid2;
      for (let i = 0; i < projectCards.length; i++) {
        tmpidx = document.getElementById(i.toString());
        if (tmpidx) {
          tmpidx.className = selectedDark === 1 ? "text-white" : "text-black";
        }
      }
    }
  };

  return (
    <div id="eleventh h-[70vh]">
      <h1
        id="twelfth"
        className={`${twelfth} text-center mt-8 mb-16 text-lg w-full h-full`}
      >
        {lblLang1[selectedLang]}
      </h1>
      <div
        id="fifteenth"
        className="absolute top-[25vh] left-[32vw] w-[80%] bg-white"
      >
        {projectCards.map((item, index) => (
          <div key={item.id} className="ml-4 first-letter:mt-4 mb-4 text-sm">
            <h2 id={index.toString()} key={item.id}>
              {item.name[selectedLang]}
              {<ProgressBar completed={item.completed} />}
            </h2>
          </div>
        ))}
      </div>
      <div
        id="sixteenth"
        className="absolute top-[170vh] left-[32vw] w-[80%] bg-white"
      >
        {projectCards2.map((item, index) => (
          <div key={item.id} className="ml-4 first-letter:mt-4 mb-4 text-sm">
            <h2 id={index.toString()} key={item.id}>
              {item.name[selectedLang]}
              {<ProgressBar completed={item.completed} />}
            </h2>
          </div>
        ))}
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
