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

  logo.src = "https://res.cloudinary.com/dhi3dpcab/image/upload/v1702916656/pictures%20proyects/logo-pint_czangz.webp";
  logo.className = "logo";
  navList.innerHTML = `
  <li><a class="link" href="#home">Inicio</a></li>
  <li><a class="link" href="#today">Hoy</a></li>
  <li><a class="link" href="#create">Crear</a></li>`
  inputSearch.placeholder = "🔍 Search"
  profileDiv.className = "profile-container"
  profileNotifications.src = "https://res.cloudinary.com/dhi3dpcab/image/upload/v1702916652/pictures%20proyects/campana_s7x6gg.webp"
  profileMessages.src = "https://res.cloudinary.com/dhi3dpcab/image/upload/v1702916658/pictures%20proyects/mensajes_nykw0h.webp"
  profile.src = "https://res.cloudinary.com/dhi3dpcab/image/upload/v1702916660/pictures%20proyects/profile_bhw9he.webp"


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