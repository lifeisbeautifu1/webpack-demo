import { sum } from "./sum";

console.log(sum(2, 3));

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = ["Hello", "webpack"].join(" ");

  return element;
};

document.body.appendChild(component());
