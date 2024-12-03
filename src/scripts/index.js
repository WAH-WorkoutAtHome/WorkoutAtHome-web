import "regenerator-runtime";
import "../styles/style.css";
import "../styles/responsive.css";
import App from "./views/app";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  header: document.querySelector("header"),
  content: document.querySelector("#mainContent"),
  footer: document.querySelector("footer"),
});

window.addEventListener("hashchange", async () => {
  await app.renderPage();
});

window.addEventListener("load", async () => {
  await app.renderPage();
});
