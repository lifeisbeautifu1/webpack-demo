import { sum } from "./sum";
import "./style.css";
import Avatar from "./avatar.jpeg";

console.log(sum(2, 3));

const component = () => {
  const element = document.createElement("div");

  const image = new Image();
  image.src = Avatar;

  element.innerHTML = ["Hello", "webpack"].join(" ");
  element.classList.add("hello");
  element.appendChild(image);

  return element;
};

document.body.appendChild(component());
