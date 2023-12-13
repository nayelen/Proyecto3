import "./header.css";

export const printHeader = (app$$) => {
  const header = document.createElement("nav");
  const aLogo = document.createElement('a');
  aLogo.href = 'https://www.pinterest.es/'
  const logo = document.createElement("img");
  const navList = document.createElement("ul");
  const inputSearch = document.createElement("input");
  const profileDiv = document.createElement("div");
  const profileNotifications = document.createElement("img")
  const profileMessages = document.createElement("img");
  const profile = document.createElement("img");

  logo.src = "/public/logo-pint.webp";
  logo.className = "logo";
  navList.innerHTML = `
  <li><a class="link" href="#home">Inicio</a></li>
  <li><a class="link" href="#today">Hoy</a></li>
  <li><a class="link" href="#create">Crear</a></li>`
  inputSearch.placeholder = "🔍 Search"
  profileDiv.className = "profile-container"
  profileNotifications.src = "/public/campana.webp"
  profileMessages.src = "/public/mensajes.webp"
  profile.src = "/public/profile.webp"


  app$$.appendChild(header);
  header.appendChild(aLogo);
  aLogo.appendChild(logo);
  header.appendChild(navList);
  header.appendChild(inputSearch);
  header.appendChild(profileDiv);
  profileDiv.appendChild(profileNotifications);
  profileDiv.appendChild(profileMessages);
  profileDiv.appendChild(profile);

}