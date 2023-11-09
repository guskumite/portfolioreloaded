"use client";
import { useState, useEffect } from "react";
import { toggleDarkService } from "@/utils/darkUtils";
import { RiFlagLine, RiMoonFill } from "react-icons/ri";
import { toggleLCycle } from "../About/About.data";
import imgMap from "../../../public/assets/maps1.png";
import Image from "next/image";
import Link from "next/link";

export function Mailer() {
  const [selectedLang, setSelectedLang] = useState(0);
  const [selectedDark, setSelectedDark] = useState(1);
  const [main2, setMain2] = useState(
    "text-black bg-slate-500 h-full mt-4 absolute top-[0.5rem] pt-8 border-zinc-500 w-full md:w-3/4"
  );

  const frmlbl1 = ["Contactame", "Contact Me"];
  const frmlbl2 = ["Nombre", "Name"];
  const frmlbl3 = ["Correo", "Email"];
  const frmlbl3a = ["electrónico", ""];
  const frmlbl4 = ["Mensaje", "Message"];
  const rowparam = 4;
  const sendparam = ["Enviar", "Send"];
  const whereIam = ["Ubicación", "Location"];

  const getDocs = (id: string) => {
    if (typeof window !== "undefined") {
      return document.getElementById(id);
    } else return null;
  };

  const toggleLanguage = () => {
    setSelectedLang(selectedLang === 0 ? 1 : 0);
  };

  const toggleDarkMode = () => {
    let mainElement;
    setSelectedDark(selectedDark === 0 ? 1 : 0);
    setMain2(
      selectedDark === 1
        ? "text-black bg-slate-500 h-full mt-4 absolute top-[0.5rem] pt-8 border-zinc-500 w-full md:w-3/4"
        : "text-slate-500 bg-black h-full mt-4 absolute top-[0.5rem] pt-8 border-black w-full md:w-3/4"
    );
    mainElement = getDocs("frmmain2") as HTMLElement;
    if (mainElement) {
      mainElement.className = main2;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const message = e.target.Message.value;

    const URLWSP = "https://api.whatsapp.com/send?phone=573102612868&text=";
    const envio =
      URLWSP + "Name: " + name + " Email: " + email + " Message: " + message;
    window.open(envio, "_blank");
    return 0;
  };

  let toggled = getDocs("toggler2") as HTMLElement;
  useEffect(() => {
    let mainElement = getDocs("frmmain2") as HTMLElement;
    if (mainElement) {
      mainElement.className = main2;
    }
    if (!toggleLCycle[0].init) {
      toggled?.click();
      toggleLCycle[0].init = true;
    }
  }, [main2, toggled]);

  return (
    <div id="frmmain1">
      <form
        id="frmmain2"
        onSubmit={handleSubmit}
        className={`text-black bg-slate-500 h-full mt-4 absolute top-[0.5rem] pt-8 border-black w-full md:w-3/4`}
      >
        <div className="absolute top-[19rem] left-[17rem] bg-blue-300 hover:bg-zinc-50">
          <a
            href="https://www.google.com/maps/@4.6764292,-74.0652613,15z?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            {whereIam[selectedLang]}
          </a>
        </div>
        <h2 className={`ml-[39%] font-bold text-lg mb-2`}>
          {frmlbl1[selectedLang]}
        </h2>
        <div className="w-[48%] ml-32 border-2 border-transparent border-solid">
          <label className="absolute top-[4.7rem] left-[4.7rem] text-xs">
            {" "}
            {frmlbl2[selectedLang]}
          </label>
          <label className="absolute top-[6.1rem] left-[4.7rem] text-xs">
            {frmlbl3[selectedLang]}
          </label>
          <label className="absolute top-[6.8rem] left-[4.7rem] text-xs">
            {frmlbl3a[selectedLang]}
          </label>
          <label className="absolute top-[8rem] left-[4.7rem] text-xs">
            {frmlbl4[selectedLang]}
          </label>

          <input
            className="ml-[8%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-md
               md:text-sm hover:bg-blue-300"
            autoComplete="off"
            required={true}
            placeholder=""
            id="Name"
            type="text"
          />
          <input
            className="ml-[8%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-md
               md:text-sm hover:bg-blue-300"
            autoComplete="off"
            required={true}
            placeholder=""
            id="Email"
            type="text"
          />
          <textarea
            className="ml-[8%] w-[89%] mt-[1%] mb-[1%] h-[7rem] bg-[lightblue] border-solid custom-placeholder
               text-md md:text-sm hover:bg-blue-300"
            rows={4}
            autoComplete="off"
            required={true}
            placeholder=""
            id="Message"
          />
          <button
            className="ml-[25%] mt-4 mb-4 bg-cyan-600 w-[5rem] text-black text-lg
               border-solid border-gray-400 md:ml-[10%]
                 md:w-3/4 md:text-sm hover:bg-blue-300"
          >
            {sendparam[selectedLang]}
          </button>
        </div>
      </form>
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
