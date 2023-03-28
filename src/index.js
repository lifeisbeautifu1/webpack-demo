import printMe from "./print";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = ["Hello", "webpack"].join(" ");

  const button = document.createElement("button");

  button.addEventListener("click", printMe);
  button.innerHTML = "Click me";

  element.appendChild(button);

  return element;
};

document.body.appendChild(component());
