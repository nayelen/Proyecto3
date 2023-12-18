import "./footer.css";

export const printFooter = (app$$) => {
  const footer = document.createElement("footer");
  const h3Footer = document.createElement("h3");
  h3Footer.textContent = 'Created by Nadia Perez with 🤍 ©2023'
  const gitImage = document.createElement("img");
  gitImage.src = 'https://res.cloudinary.com/dhi3dpcab/image/upload/v1702916654/pictures%20proyects/github_fosmps.webp';
  const gitLink = document.createElement("a");
  gitLink.href = 'https://github.com/nayelen'

  app$$.appendChild(footer);
  footer.appendChild(h3Footer);
  footer.appendChild(gitLink);
  gitLink.appendChild(gitImage)

}