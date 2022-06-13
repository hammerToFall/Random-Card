/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//import { read } from "@popperjs/core";

window.onload = function() {
  let numero = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
  let palo = ["♦", "♥", "♠", "♣"];
  let header = document.querySelector("#card-header");
  let footer = document.querySelector("#card-footer");
  let body = document.querySelector(".body");

  const random = value => {
    let index = Math.floor(Math.random() * value.length);
    return value[index];
  };
  const symbol = random(palo);

  if (symbol == "♦" || symbol == "♥") {
    header.style.color = "red";
    footer.style.color = "red";
  }

  body.textContent = random(numero);
  header.textContent = symbol;
  footer.textContent = symbol;
};
