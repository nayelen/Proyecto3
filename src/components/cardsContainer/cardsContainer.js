import { response } from '../../data/mockResponse';
import './cardsContainer.css';

export const printCardsContainer = (data) => {
  const cardsContainer = document.createElement('section');
  const photos = (data && data.results) || response.results;

  if (!Array.isArray(photos) || photos.length === 0) {
    const errorMessage = document.createElement('p')
    errorMessage.textContent = 'No se han encontrado imágenes.'
    cardsContainer.appendChild(errorMessage)
    return cardsContainer
  }
  console.log(photos)
  for (const photo of photos) {
    const card = document.createElement("div");
    card.className = "card";
    const img = document.createElement("img");
    img.src = photo.urls.regular;
    img.className = "photo";
    const divDescription = document.createElement("div");
    const name = document.createElement("p");
    name.textContent = photo.user.first_name;
    const profile = document.createElement("img");
    profile.src = photo.user.profile_image.small;
    profile.className = "profile";
    console.log(img)
    cardsContainer.appendChild(card);
    card.appendChild(img)
    card.appendChild(divDescription);
    divDescription.appendChild(profile);
    divDescription.appendChild(name);

  }
  return cardsContainer
}