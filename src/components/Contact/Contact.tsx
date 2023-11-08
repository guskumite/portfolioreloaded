"use client";
import { useState, useEffect } from "react";
import { toggleDarkService } from "@/utils/darkUtils";
import { RiFlagLine, RiMoonFill } from "react-icons/ri";

export function Mailer() {
  const [selectedLang, setSelectedLang] = useState(0);
  const [selectedDark, setSelectedDark] = useState(1);

  let toggleLCycle = [{ init: false }];
  const frmlbl1 = ["Contactame", "Contact Me"];
  const frmlbl2 = ["Nombre", "Name"];
  const frmlbl3 = ["Correo electrónico", "Email"];
  const frmlbl4 = ["Mensaje", "Message"];
  const rowparam = 4;
  const sendparam = ["Enviar", "Send"];

  const getDocs = (id: string) => {
    if (typeof window !== "undefined") {
      return document.getElementById(id);
    } else return null;
  };

  const toggleLanguage = () => {
    setSelectedLang(selectedLang === 0 ? 1 : 0);
  };

  const toggleDarkMode = () => {
    setSelectedDark(selectedDark === 0 ? 1 : 0);
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

  //    useEffect(() => {
  //        const mainElement = document.getElementById("");
  //        if (mainElement) {
  //          setEleventh(selectedDark === 1 ? "#FFFFFF" : "#000000");
  //          setEleventhA(
  //            selectedDark === 1
  //              ? "text-black bg-white absolute top-[25vh] left-[32vw] w-[60%] text-sm"
  //              : "text-white bg-black absolute top-[25vh] left-[32vw] w-[60%] text-sm"
  //          );
  //          mainElement.style.backgroundColor = eleventh;
  //          mainElement.className = eleventhA;
  //          if (!toggleLCycle[0].init) {
  //            toggled?.click();
  //            setSkl1(skills1);
  //            setSkl2(skills2);
  //            setSkl3(skills3);
  //            setSkl4(skills4);
  //            setTgl1(
  //              "absolute left-[10vw] bottom-[10vh] transition-all duration-300 text-white hover:text-secondary"
  //            );
  //            setTgl2(
  //              "absolute left-[19vw] bottom-[10vh] transition-all duration-300 text-white hover:text-secondary"
  //            );
  //            toggleLCycle[0].init = true;
  //          }
  //        }
  //      }, [eleventh, eleventhA, selectedDark, toggled, skl1, skl2, skl3, skl4]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`h-[25%] mt-4 absolute top-[3rem] pt-8 border-zinc-500 w-full md:w-3/4`}
      >
        <h2 className={`ml-[39%] font-bold text-lg mb-2`}>
          {frmlbl1[selectedLang]}
        </h2>
        <div className="w-[48%] ml-32 border-2 border-zinc-500 border-solid">
          <input
            className="ml-[2%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-md
               md:text-sm hover:bg-blue-300"
            autoComplete="off"
            required={true}
            placeholder=""
            id="Name"
            type="text"
          />
          <input
            className="ml-[2%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-md
               md:text-sm hover:bg-blue-300"
            autoComplete="off"
            required={true}
            placeholder=""
            id="Email"
            type="text"
          />
          <textarea
            className="ml-[2%] w-[89%] mt-[1%] mb-[1%] h-[7rem] bg-[lightblue] border-solid custom-placeholder
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
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
