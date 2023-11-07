"use client";

import {
  projectCards,
  toggleLCycle,
  skills1,
  skills2,
  skills3,
  skills4,
} from "./About.data";
import { useState, useEffect } from "react";
import { toggleDarkService } from "@/utils/darkUtils";
import { RiFlagLine, RiMoonFill } from "react-icons/ri";

export function About() {
  const [selectedLang, setSelectedLang] = useState(0);
  const [selectedDark, setSelectedDark] = useState(1);
  const [eleventh, setEleventh] = useState("#FFFFFF");
  const [eleventhA, setEleventhA] = useState(
    "text-white bg-black absolute top-[25vh] left-[32vw] w-[60%] text-sm"
  );
  const [twelfth, setTwelfth] = useState("mt-[15vh] text-white bg-black");
  const [skl1, setSkl1] = useState(skills1);
  const [skl2, setSkl2] = useState(skills2);
  const [skl3, setSkl3] = useState(skills3);
  const [skl4, setSkl4] = useState(skills4);
  const [tgl1, setTgl1] = useState(
    "absolute left-[10vw] bottom-[10vh] transition-all duration-300 text-black hover:text-secondary"
  );
  const [tgl2, setTgl2] = useState(
    "absolute left-[19vw] bottom-[10vh] transition-all duration-300 text-black hover:text-secondary"
  );

  const lblLang1 = ["Acerca de mi", "About me"];

  let toggled = document.getElementById("toggler2");
  useEffect(() => {
    const mainElement = document.getElementById("thirteenth");
    if (mainElement) {
      setEleventh(selectedDark === 1 ? "#FFFFFF" : "#000000");
      setEleventhA(
        selectedDark === 1
          ? "text-black bg-white absolute top-[25vh] left-[32vw] w-[60%] text-sm"
          : "text-white bg-black absolute top-[25vh] left-[32vw] w-[60%] text-sm"
      );
      mainElement.style.backgroundColor = eleventh;
      mainElement.className = eleventhA;
      if (!toggleLCycle[0].init) {
        toggled?.click();
        setSkl1(skills1);
        setSkl2(skills2);
        setSkl3(skills3);
        setSkl4(skills4);
        setTgl1(
          "absolute left-[10vw] bottom-[10vh] transition-all duration-300 text-white hover:text-secondary"
        );
        setTgl2(
          "absolute left-[19vw] bottom-[10vh] transition-all duration-300 text-white hover:text-secondary"
        );
        toggleLCycle[0].init = true;
      }
    }
  }, [eleventh, eleventhA, selectedDark, toggled, skl1, skl2, skl3, skl4]);

  const toggleLanguage = () => {
    setSelectedLang(selectedLang === 0 ? 1 : 0);
  };

  const toggleDarkMode = () => {
    setSelectedDark(selectedDark === 0 ? 1 : 0);
    const mainElement = document.getElementById("thirteenth");
    if (mainElement) {
      setEleventh(selectedDark === 1 ? "#FFFFFF" : "#000000");
      setEleventhA(
        selectedDark === 1
          ? "text-black bg-white absolute top-[25vh] left-[32vw] w-[60%] text-sm"
          : "text-white bg-black absolute top-[25vh] left-[32vw] w-[60%] text-sm"
      );
      mainElement.style.backgroundColor = eleventh;
      mainElement.className = eleventhA;
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

      if (skl1?.length > 0) {
        for (let j = 0; j < skl1?.length; j++) {
          tmpid2 = "x" + j.toString();
          tmpski = document.getElementById(tmpid2);
          if (tmpski) {
            tmpski.className =
              selectedDark === 1
                ? "text-white bg-black"
                : "text-black bg-white";
          }
        }
      }

      if (skl2?.length > 0) {
        for (let j = 0; j < skl2?.length; j++) {
          tmpid2 = "y" + j.toString();
          tmpski = document.getElementById(tmpid2);
          if (tmpski) {
            tmpski.className =
              selectedDark === 1
                ? "text-white bg-black"
                : "text-black bg-white";
          }
        }
      }

      if (skl3?.length > 0) {
        for (let j = 0; j < skl3?.length; j++) {
          tmpid2 = "z" + j.toString();
          tmpski = document.getElementById(tmpid2);
          if (tmpski) {
            tmpski.className =
              selectedDark === 1
                ? "text-white bg-black"
                : "text-black bg-white";
          }
        }
      }

      if (skl4?.length > 0) {
        for (let j = 0; j < skl4?.length; j++) {
          tmpid2 = "a" + j.toString();
          tmpski = document.getElementById(tmpid2);
          if (tmpski) {
            tmpski.className =
              selectedDark === 1
                ? "text-white bg-black"
                : "text-black bg-white";
          }
        }
      }

      let tmpCycle = [
        "sn1",
        "sn2",
        "sn3",
        "sn4",
        "toggler1",
        "toggler2",
        "nv1",
      ];
      for (let i = 0; i < tmpCycle.length; i++) {
        tmpski = document.getElementById(tmpCycle[i]);
        if (
          tmpski &&
          tmpCycle[i] !== "toggler1" &&
          tmpCycle[i] !== "toggler2"
        ) {
          tmpski.className =
            selectedDark === 1
              ? "transition-all duration-300 hover:text-secondary text-black"
              : "transition-all duration-300 hover:text-secondary text-white";
        } else {
          if (tmpski && tmpCycle[i] === "toggler2") {
            tmpski.className =
              selectedDark === 1
                ? "absolute left-[19vw] bottom-[10vh] transition-all duration-300 text-black hover:text-secondary"
                : "absolute left-[19vw] bottom-[10vh] transition-all duration-300 text-white hover:text-secondary";
          } else {
            if (tmpski && tmpCycle[i] === "toggler1") {
              tmpski.className =
                selectedDark === 1
                  ? "absolute left-[10vw] bottom-[10vh] transition-all duration-300 text-black hover:text-secondary"
                  : "absolute left-[10vw] bottom-[10vh] transition-all duration-300 text-white hover:text-secondary";
            } else {
              if (tmpski && tmpCycle[i] === "nv1") {
                tmpski.className =
                  selectedDark === 1
                    ? "flex items-center justify-between w-full px-4 py-3 md:py-8 md:flex-col md:justify-center gap-y-10 md:px-4 md:h-max bg-white/10 text-black backdrop-blur-sm md:rounded-full"
                    : "flex items-center justify-between w-full px-4 py-3 md:py-8 md:flex-col md:justify-center gap-y-10 md:px-4 md:h-max bg-black/10 text-white backdrop-blur-sm md:rounded-full";
              }
            }
          }
        }
      }
    }
  };

  return (
    <div id="eleventh" className="h-[120vh] w-[100vw] text-black bg-lightcyan">
      <h1
        id="twelfth"
        className={`${twelfth} text-center mt-8 mb-16 text-lg w-full h-full`}
      >
        {lblLang1[selectedLang]}
      </h1>
      <div
        id="thirteenth"
        className="absolute top-[25vh] left-[25vw] w-[60%] bg-white"
      >
        {projectCards.map((item, index) => (
          <div key={item.id} className="ml-4 first-letter:mt-4">
            <h2 id={index.toString()} key={item.id}>
              {item.name[selectedLang]}
            </h2>
            <ul className="skills flex flex-row">
              {item.id === 1 && skl1
                ? skl1?.map((skill, skillIndex) => (
                    <li
                      id={`x${skillIndex.toString()}`}
                      key={skillIndex}
                      className="skill text-black bg-white"
                    >
                      {skill.icon}
                      <p className="ml-4 text-xs"> {skill.text} </p>
                    </li>
                  ))
                : null}
            </ul>
            <ul className="skills2 flex flex-row">
              {item.id === 1 && skl2
                ? skl2?.map((skill, skillIndex) => (
                    <li
                      id={`y${skillIndex.toString()}`}
                      key={skillIndex}
                      className="skill text-black bg-white"
                    >
                      {skill.icon}
                      <p className="ml-4 text-xs"> {skill.text} </p>
                    </li>
                  ))
                : null}
            </ul>
            <ul className="skills3 flex flex-row">
              {item.id === 1 && skl3
                ? skl3?.map((skill, skillIndex) => (
                    <li
                      id={`z${skillIndex.toString()}`}
                      key={skillIndex}
                      className="skill text-black bg-white"
                    >
                      {skill.icon}
                      <p className="ml-4 text-xs"> {skill.text} </p>
                    </li>
                  ))
                : null}
            </ul>
            <ul className="skills4 flex flex-row">
              {item.id === 1 && skl4
                ? skl4?.map((skill, skillIndex) => (
                    <li
                      id={`a${skillIndex.toString()}`}
                      key={skillIndex}
                      className="skill text-black bg-white"
                    >
                      {skill.icon}
                      <p className="ml-4 text-xs"> {skill.text} </p>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        ))}
      </div>
      <h3
        id="toggler1"
        className="absolute left-[10vw] bottom-[10vh] transition-all duration-300 text-white hover:text-secondary"
        onClick={toggleLanguage}
      >
        <RiFlagLine size="30" />
      </h3>
      <h3
        id="toggler2"
        className="absolute left-[19vw] bottom-[10vh] transition-all duration-300 text-white hover:text-secondary"
        onClick={toggleDarkMode}
      >
        <RiMoonFill size="30" />
      </h3>
    </div>
  );
}
