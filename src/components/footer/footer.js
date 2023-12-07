import "./footer.css";

export const printFooter = (app$$) => {
  const footer = document.createElement("footer");
  const h3Footer = document.createElement("h3");
  h3Footer.textContent = 'Created by Nadia Perez with 🤍 ©2023'
  const gitImage = document.createElement("img");
  gitImage.src = './public/github.png';
  const gitLink = document.createElement("a");
  gitLink.href = 'https://github.com/nayelen'

  app$$.appendChild(footer);
  footer.appendChild(h3Footer);
  footer.appendChild(gitLink);
  gitLink.appendChild(gitImage)

}