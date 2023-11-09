"use client";

import { useState, useEffect } from "react";
import { toggleLCycle } from "../About/About.data";
import { RiFlagLine, RiMoonFill } from "react-icons/ri";

export function Academlo() {
  const [selectedDark, setSelectedDark] = useState(1);
  const [selectedLang, setSelectedLang] = useState(0);
  const [main2, setMain2] = useState(
    "text-black bg-slate-500 h-full mt-4 absolute top-[0.5rem] pt-8 border-zinc-500 w-full"
  );
  const [acabtn1, setAcabtn1] = useState(
    "absolute top-[15rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  );

  const [acabtn2, setAcabtn2] = useState(
    "absolute top-[10rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  );

  const academloMainSite = [
    "Página principal de Academlo",
    "Main page of Academlo",
  ];
  const academloInstagram = ["Academlo en Instagram", "Academlo in Instagram"];
  const academloOne = "https://www.academlo.com";
  const academloTwo = "https://www.instagram.com/academlohq/";

  const toggleLanguage = () => {
    setSelectedLang(selectedLang === 0 ? 1 : 0);
  };

  const getDocs = (id: string) => {
    if (typeof window !== "undefined") {
      return document.getElementById(id);
    } else return null;
  };

  let mainElement;
  const toggleDarkMode = () => {
    setSelectedDark(selectedDark === 0 ? 1 : 0);
    setMain2(
      selectedDark === 1
        ? "text-black bg-slate-500 h-full mt-4 absolute top-[0.5rem] pt-8 border-zinc-500 w-full"
        : "text-slate-500 bg-black h-full mt-4 absolute top-[0.5rem] pt-8 border-black w-full"
    );
    mainElement = getDocs("acamain2") as HTMLElement;
    if (mainElement) {
      mainElement.className = main2;
    }
    setAcabtn1(
      selectedDark === 1
        ? "absolute top-[15rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        : "absolute top-[15rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
    );
    mainElement = getDocs("acabtn1") as HTMLElement;
    if (mainElement) {
      mainElement.className = acabtn1;
    }
    setAcabtn2(
      selectedDark === 1
        ? "absolute top-[10rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        : "absolute top-[10rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
    );
    mainElement = getDocs("acabtn2") as HTMLElement;
    if (mainElement) {
      mainElement.className = acabtn2;
    }
  };

  let toggled = getDocs("toggler2") as HTMLElement;
  useEffect(() => {
    let mainElement = getDocs("acamain2") as HTMLElement;
    if (mainElement) {
      mainElement.className = main2;
    }
    mainElement = getDocs("acabtn1") as HTMLElement;
    if (mainElement) {
      mainElement.className = acabtn1;
    }
    mainElement = getDocs("acabtn2") as HTMLElement;
    if (mainElement) {
      mainElement.className = acabtn2;
    }
    if (!toggleLCycle[0].init) {
      toggled?.click();
      toggleLCycle[0].init = true;
    }
  }, [main2, acabtn1, acabtn2, toggled]);

  return (
    <div>
      <section
        id="acamain2"
        className={`text-black bg-slate-700 h-full mt-4 absolute top-[0.5rem] pt-8 border-black w-full`}
      >
        <button
          id="acabtn1"
          className="absolute top-[15rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href={academloOne} target="_blank" rel="noopener noreferrer">
            {academloMainSite[selectedLang]}
          </a>
        </button>
        <button
          id="acabtn2"
          className="absolute top-[10rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href={academloTwo} target="_blank" rel="noopener noreferrer">
            {academloInstagram[selectedLang]}
          </a>
        </button>
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
      </section>
    </div>
  );
}
