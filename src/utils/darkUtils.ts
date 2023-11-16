export const toggleDarkService = (selectedDark: number, id: string) => {
  const genericElement = document.getElementById(id);
  let returnedClassName = "";
  if (genericElement) {
    if (id === "first") {
      genericElement.style.backgroundColor =
        selectedDark === 1 ? "#FFFFFF" : "#000000";
    }
    if (id === "second") {
      returnedClassName = genericElement
        ? selectedDark === 1
          ? "bg-['#000000'] w-full z-10"
          : "bg-['#FFFFFF'] w-full z-10"
        : "";
    }

    if (id === "third") {
      returnedClassName = genericElement
        ? selectedDark === 1
          ? "mb-5 text-lg text-white leading-tight md:mb-10 md:text-xl bg-gray-400 bg-opacity-100"
          : "mb-5 text-lg text-black leading-tight md:mb-10 md:text-xl bg-gray-400 bg-opacity-100"
        : "";
    }
    if (id === "fourth") {
      returnedClassName = genericElement
        ? selectedDark === 0
          ? "my-3 text-3xl text-center text-white md:text-left md:text-lg bg-zinc-800 bg-opacity-100"
          : "my-3 text-3xl text-black text-center md:text-left md:text-lg bg-zinc-200 bg-opacity-100"
        : "";
    }
    if (id === "fifth") {
      returnedClassName = genericElement
        ? selectedDark === 0
          ? "max-w-sm  mb-10 text-lg text-black md:max-w-2xl md:mx-0 md:mb-16 md:text-xl bg-gray-400 bg-opacity-100"
          : "max-w-sm  mb-10 text-lg text-white md:max-w-2xl md:mx-0 md:mb-16 md:text-xl bg-gray-400 bg-opacity-100"
        : "";
    }
    if (id === "sixth") {
      returnedClassName = genericElement
        ? selectedDark === 0
          ? "text-black px-6 py-3 my-2 transition-all cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
          : "text-white px-6 py-3 my-2 transition-all cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
        : "";
    }
    if (id === "seventh") {
      returnedClassName = genericElement
        ? selectedDark === 0
          ? "text-black px-6 py-3 my-2 transition-all cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
          : "text-white px-6 py-3 my-2 transition-all cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
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
