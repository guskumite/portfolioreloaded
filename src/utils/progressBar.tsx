import React from "react";

const ProgressBar = (props: any) => {
  const { completed } = props;
  let bar1 = [];
  let bar2 = "";
  let percent = Math.round(completed / 5);
  for (let i = 0; i < percent; i++) {
    bar1.push("🟢");
  }
  bar2 = bar1.join("");
  return (
    <h2>
      {bar2} {completed}%
    </h2>
  );
};

export default ProgressBar;
