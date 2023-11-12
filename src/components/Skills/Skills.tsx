"use client";

import { projectCards } from "./Skills.data";
import { projectCards2 } from "./Skills.data";
import { useState, useEffect } from "react";
import { toggleDarkService } from "@/utils/darkUtils";
import { RiFlagLine, RiMoonFill } from "react-icons/ri";
import ProgressBar from "@/utils/progressBar";
import { toggleLCycle } from "../About/About.data";

export function Skills() {
  const [selectedLang, setSelectedLang] = useState(0);
  const [selectedDark, setSelectedDark] = useState(1);
  const [fourteenth, setFourteenth] = useState("#FFFFFF");
  const [fourteenthA, setFourteenthA] = useState(
    "text-white bg-black absolute top-[25vh] left-[32vw] w-[60%] text-sm"
  );
  const [fifteenth, setFifteenth] = useState("#FFFFFF");
  const [fifteenthA, setFifteenthA] = useState(
    "text-white bg-black absolute top-[170vh] left-[32vw] w-[60%] text-sm"
  );
  const [twelfth, setTwelfth] = useState("mt-[15vh] text-white bg-black");
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemsClassName, setItemsClassName] = useState(
    "first-letter:mt-4 mb-4 text-sm text-white bg-black"
  );
  const [itemsClassName2, setItemsClassName2] = useState(
    "first-letter:mt-4 mb-4 text-sm text-white bg-black"
  );

  const lblLang1 = ["Habilidades", "Skills"];

  const toggleLanguage = () => {
    setSelectedLang(selectedLang === 0 ? 1 : 0);
  };

  const getDocs = (id: string) => {
    if (typeof window !== "undefined") {
      return document.getElementById(id);
    } else return null;
  };

  let toggled = getDocs("toggler2") as HTMLElement;
  useEffect(() => {
    setSelectedLang(0);
    setSelectedDark(1);
    setFourteenth("#FFFFFF");
    setFourteenthA(
      "text-white bg-black absolute top-[25vh] left-[32vw] w-[60%] text-sm"
    );
    setFifteenth("#FFFFFF");
    setFifteenthA(
      "text-white bg-black absolute top-[170vh] left-[32vw] w-[60%] text-sm"
    );
    setTwelfth("mt-[15vh] text-white bg-black");
    setIsLoaded(true);
    if (!toggleLCycle[0].init) {
      toggled?.click();
      toggleLCycle[0].init = true;
    }
  }, [toggled]);

  const toggleDarkMode = () => {
    setSelectedDark(selectedDark === 0 ? 1 : 0);
    const mainElement = getDocs("fifteenth") as HTMLElement;
    if (mainElement) {
      setFourteenth(selectedDark === 1 ? "#FFFFFF" : "#000000");
      setFourteenthA(
        selectedDark === 1
          ? "text-black bg-white absolute top-[25vh] left-[32vw] w-[60%] text-sm"
          : "text-white bg-black absolute top-[25vh] left-[32vw] w-[60%] text-sm"
      );
      mainElement.style.backgroundColor = fourteenth;
      mainElement.className = fourteenthA;
      const mainElement2 = getDocs("sixteenth") as HTMLElement;
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
      const twelfthElement = getDocs("twelfth") as HTMLElement;
      if (twelfthElement) {
        twelfthElement.className = twelfth;
      }

      let tmpidx;
      for (let i = 0; i < projectCards.length; i++) {
        tmpidx = getDocs(i.toString()) as HTMLElement;
        if (tmpidx) {
          setItemsClassName(
            selectedDark === 1
              ? "first-letter:mt-4 mb-4 text-sm text-black bg-white"
              : "first-letter:mt-4 mb-4 text-sm text-white bg-black"
          );
          tmpidx.className = itemsClassName;
        }
      }

      for (let i = 0; i < projectCards2.length; i++) {
        tmpidx = getDocs("x" + i.toString()) as HTMLElement;
        if (tmpidx) {
          setItemsClassName2(
            selectedDark === 1
              ? "first-letter:mt-4 mb-4 text-sm text-black bg-white"
              : "first-letter:mt-4 mb-4 text-sm text-white bg-black"
          );
          tmpidx.className = itemsClassName2;
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
          <div key={item.id} className={itemsClassName}>
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
          <div key={item.id} className={itemsClassName2}>
            <h2 id={`x{index.toString()}`} key={item.id}>
              {item.name[selectedLang]}
              {<ProgressBar completed={item.completed} />}
            </h2>
          </div>
        ))}
      </div>
      <h3
        className="text-black absolute left-[10vw] bottom-[10vh] transition-all duration-300 hover:text-zinc-500"
        onClick={toggleLanguage}
      >
        <RiFlagLine size="30" />
      </h3>
      <h3
        className="text-black absolute left-[19vw] bottom-[10vh] transition-all duration-300 hover:text-zinc-500"
        onClick={toggleDarkMode}
      >
        <RiMoonFill size="30" />
      </h3>
    </div>
  );
}
