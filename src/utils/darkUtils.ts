export const toggleDarkService = (selectedDark: number, id: string) => {
  const genericElement = document.getElementById(id);
  let returnedClassName = "";
  if (genericElement) {
    if (id === "first") {
      genericElement.style.backgroundColor =
        selectedDark === 1 ? "#393A47" : "#90EE90";
    }
    if (id === "second") {
      returnedClassName = genericElement
        ? selectedDark === 1
          ? "bg-[#131424]/60 w-full z-10"
          : "bg-[#E0FFFF]/60 w-full z-10"
        : "";
    }

    if (id === "third") {
      returnedClassName = genericElement
        ? selectedDark === 1
          ? "mb-5 text-3xl leading-tight md:mb-10 md:text-xl"
          : "mb-5 text-3xl text-black leading-tight md:mb-10 md:text-xl"
        : "";
    }
    if (id === "fourth") {
      returnedClassName = genericElement
        ? selectedDark === 0
          ? "my-3 text-3xl text-center text-white md:text-left md:text-lg"
          : "my-3 text-3xl text-black text-center md:text-left md:text-lg"
        : "";
    }
    if (id === "fifth") {
      returnedClassName = genericElement
        ? selectedDark === 0
          ? "max-w-sm  mb-10 text-xl text-black md:max-w-2xl md:mx-0 md:mb-16 md:text-xl"
          : "max-w-sm  mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-16 md:text-xl"
        : "";
    }
    if (id === "sixth") {
      returnedClassName = genericElement
        ? selectedDark === 0
          ? "text-black px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
          : "px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
        : "";
    }
    if (id === "seventh") {
      returnedClassName = genericElement
        ? selectedDark === 0
          ? "text-black px-6 py-3 my-2 transition-all border-2 cursor-pointer border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
          : "px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
        : "";
    }
    if (id === "eight") {
      returnedClassName = genericElement
        ? selectedDark === 1
          ? "mt-[15vh] text-black"
          : "mt-[15vh] text-white"
        : "";
    }
    if (id === "twelfth") {
      returnedClassName = genericElement
        ? selectedDark === 1
          ? "mt-[15vh] text-black bg-white"
          : "mt-[15vh] text-white bg-black"
        : "";
    }
  }
  return returnedClassName;
};
