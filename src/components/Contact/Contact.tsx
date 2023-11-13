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
    "text-black bg-zinc-400 h-full mt-4 absolute top-[0.5rem] pt-8 border-zinc-500 w-full"
  );

  const frmlbl1 = ["Contactame", "Contact Me"];
  const frmlbl2 = ["Nombre", "Name   "];
  const frmlbl3 = ["Correo", "Your"];
  const frmlbl3a = ["electrónico", "E-mail"];
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
        ? "flex flex-cols text-black bg-zinc-400 h-full mt-4 absolute top-[0.5rem] pt-8 border-zinc-500 w-full"
        : "flex flex-cols text-zinc-400 bg-black h-full mt-4 absolute top-[0.5rem] pt-8 border-black w-full"
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
        className={`flex flex-cols text-black bg-zinc-400 h-full mt-4 absolute top-[0.1rem] pt-8 border-black w-full`}
      >
        <h2
          className={`absolute top-[0rem] ml-[39%] mt-[10%] font-bold text-lg mb-2`}
        >
          {frmlbl1[selectedLang]}
        </h2>
        <div className="w-[99%] absolute top-[7rem] left-[-3.5rem] md:left-[1.3rem]">
          <label className="absolute left-[4rem] mt-1 text-xs">
            {" "}
            {frmlbl2[selectedLang]}
          </label>
          <input
            className={`w-[23.7rem] absolute left-[7.7rem] bg-[gray] border-solid custom-placeholder text-md
                     md:text-sm hover:bg-zinc-300`}
            autoComplete="off"
            required={true}
            placeholder=""
            id="Name"
            type="text"
          />
        </div>
        <div
          className={`w-[99%] absolute top-[8.7rem] left-[-3.5rem] md:left-[1.3rem]`}
        >
          <div className="grid grid-rows-2">
            <label className="absolute left-[4rem] text-xs">
              {frmlbl3[selectedLang]}
            </label>
            <label className="absolute left-[4rem] top-[1rem] text-xs">
              {frmlbl3a[selectedLang]}
            </label>
          </div>
          <input
            className={`w-[23.7rem] absolute left-[7.6rem] bg-[gray] border-solid custom-placeholder text-md
                        md:text-sm hover:bg-zinc-300`}
            autoComplete="off"
            required={true}
            placeholder=""
            id="Email"
            type="text"
          />
        </div>
        <div className="w-[80%] absolute top-[10.7rem] left-[-4.2rem] md:left-[0.5rem]">
          <label className="absolute left-[4.5rem] mt-2 text-xs">
            {frmlbl4[selectedLang]}
          </label>
          <textarea
            className="absolute left-[8.5rem] w-[60%] h-[7rem] bg-[gray] border-solid custom-placeholder
                        text-md md:text-sm hover:bg-zinc-300"
            rows={4}
            autoComplete="off"
            required={true}
            placeholder=""
            id="Message"
          />
        </div>
        <div className="absolute top-[17rem] left-[13.5rem] grid grid-cols-[1fr,1fr] gap-2">
          <button
            className="mt-4 mb-4 bg-zinc-600 text-black text-lg
                        border-solid border-gray-400 md:ml-[30%]
                        md:w-[60%] md:text-sm hover:bg-zinc-300"
          >
            {sendparam[selectedLang]}
          </button>
          <div className="mt-4 h-[2rem] bg-zinc-300 hover:bg-zinc-50">
            <a
              href="https://www.google.com/maps/@4.6764292,-74.0652613,15z?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              {whereIam[selectedLang]}
            </a>
          </div>
        </div>
      </form>

      <h3
        id="toggler1"
        className="absolute left-[10vw] bottom-[10vh] transition-all duration-300 text-white hover:text-zinc-500"
        onClick={toggleLanguage}
      >
        <RiFlagLine size="30" />
      </h3>
      <h3
        id="toggler2"
        className="absolute left-[19vw] bottom-[10vh] transition-all duration-300 text-white hover:text-zinc-500"
        onClick={toggleDarkMode}
      >
        <RiMoonFill size="30" />
      </h3>
    </div>
  );
}
