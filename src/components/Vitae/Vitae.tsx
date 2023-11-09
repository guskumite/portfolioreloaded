"use client";
import { useState, useEffect } from "react";
import { RiFlagLine, RiMoonFill } from "react-icons/ri";
import { toggleLCycle } from "../About/About.data";

export function Vitae() {
  const [selectedLang, setSelectedLang] = useState(0);
  const [selectedDark, setSelectedDark] = useState(1);
  const [main2, setMain2] = useState(
    "text-black bg-slate-500 h-full mt-4 absolute top-[0.5rem] pt-8 border-zinc-500 w-full"
  );
  const [vitbtn, setVitbtn] = useState(
    "absolute top-[15rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  );

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
    mainElement = getDocs("vitmain2") as HTMLElement;
    if (mainElement) {
      mainElement.className = main2;
    }
    setVitbtn(
      selectedDark === 1
        ? "absolute top-[15rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        : "absolute top-[15rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
    );
    mainElement = getDocs("vitbtn") as HTMLElement;
    if (mainElement) {
      mainElement.className = vitbtn;
    }
  };

  let toggled = getDocs("toggler2") as HTMLElement;
  useEffect(() => {
    let mainElement = getDocs("vitmain2") as HTMLElement;
    if (mainElement) {
      mainElement.className = main2;
    }
    mainElement = getDocs("vitbtn") as HTMLElement;
    if (mainElement) {
      mainElement.className = vitbtn;
    }
    if (!toggleLCycle[0].init) {
      toggled?.click();
      toggleLCycle[0].init = true;
    }
  }, [main2, vitbtn, toggled]);

  const theCV = "/assets/hv_gamr_v118.pdf";
  const download = "hv_gamr_v118.pdf";
  const btnlbl1 = ["Descargar HV", "Download CV"];
  return (
    <div>
      <section
        id="vitmain2"
        className={`text-black bg-slate-700 h-full mt-4 absolute top-[0.5rem] pt-8 border-black w-full`}
      >
        <button
          id="vitbtn"
          className="absolute top-[15rem] left-[5rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href={theCV} download={download}>
            {btnlbl1[selectedLang]}
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
