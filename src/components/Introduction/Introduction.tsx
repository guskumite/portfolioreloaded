import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiFlagLine } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";
import { toggleDarkService } from "@/utils/darkUtils";

const lblLang1 = ["Bienvenidos a mi portafolio,", "Welcome to my portfolio"];
const lblLang2 = [
  "Soy Gustavo Molano, desarrollador Backend y Frontend",
  "I am Gustavo Molano, a Backend and Frontend developer",
];
const lblLang3 = [
  "En este portafolio muestro los principales proyectos desarrollados a lo largo de mi trayectoria de aprendizaje en Academlo",
  "In this portfolio I show the main projects I have developed during my learning route at Academlo",
];
const lblLang4 = ["Ver proyectos", "See projects"];
const lblLang5 = ["Contacta conmigo", "Contact me"];
let firstClassName = "";
let secondClassName = "";
let thirdClassName =
  "mb-5 text-sm text-black leading-tight md:mb-10 md:text-xl bg-gray-400 bg-opacity-100";
let fifthClassName =
  "max-w-sm  mb-10 text-lg text-black md:max-w-2xl md:mx-0 md:mb-16 md:text-xl bg-gray-400 bg-opacity-100";
let sixthClassName =
  "text-black px-6 py-3 my-2 transition-all cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50";
let seventhClassName =
  "text-black px-6 py-3 my-2 transition-all cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50";

export function Introduction() {
  const [selectedLang, setSelectedLang] = useState(0);
  const [selectedDark, setSelectedDark] = useState(1);
  const [fourthClassName, setFourthClassName] = useState("");

  const toggleLanguage = () => {
    setSelectedLang(selectedLang === 0 ? 1 : 0);
  };

  const toggleDarkMode = () => {
    setSelectedDark(selectedDark === 0 ? 1 : 0);
    firstClassName = toggleDarkService(selectedDark, "first");
    secondClassName = toggleDarkService(selectedDark, "second");
    thirdClassName = toggleDarkService(selectedDark, "third");
    setFourthClassName(toggleDarkService(selectedDark, "fourth"));
    const fourthElement = document.getElementById("fourth");
    if (fourthElement) {
      fourthElement.className = fourthClassName;
    }
    fifthClassName = toggleDarkService(selectedDark, "fifth");
    sixthClassName = toggleDarkService(selectedDark, "sixth");
    seventhClassName = toggleDarkService(selectedDark, "seventh");
  };

  // comment: to reflect changes on buttons hover, version 1.0.8

  return (
    <div id="second" className={secondClassName}>
      <div className="w-full h-full bg-gradient-to-r from-['#000000'] to-['#FFFFFF']">
        <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
          <motion.div
            className="hidden w-auto h-auto mx-auto md:block"
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          ></motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <h1 id="third" className={thirdClassName} onClick={toggleLanguage}>
              {lblLang1[selectedLang]} <br />
              <span className="text-zinc-500" onClick={toggleLanguage}>
                {lblLang2[selectedLang]}
              </span>
            </h1>
            <p id="fifth" className={fifthClassName} onClick={toggleLanguage}>
              {lblLang3[selectedLang]}
            </p>

            <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
              <button className="z-20 mt-4 bg-zinc-500 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded">
                {" "}
                <a id="sixth" href="/works" className={sixthClassName}>
                  {lblLang4[selectedLang]}{" "}
                </a>
              </button>
              <button className="z-20 mt-4 bg-zinc-500 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded">
                {" "}
                <a id="seventh" href="/contact" className={seventhClassName}>
                  {lblLang5[selectedLang]}{" "}
                </a>
              </button>
              <h3
                className="absolute left-[10vw] bottom-[10vh] transition-all duration-300 hover:bg-zinc-500"
                onClick={toggleLanguage}
              >
                <RiFlagLine size="30" />
              </h3>
              <h3
                className="absolute left-[16vw] bottom-[10vh] transition-all duration-300 hover:bg-zinc-500"
                onClick={toggleDarkMode}
              >
                <RiMoonFill size="30" />
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
