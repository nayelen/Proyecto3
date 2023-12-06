import './cardsContainer.css';

export const printCardsContainer = (data) => {
  const cardsContainer = document.createElement('section');
  const photos = (data && data.results)


  if (!Array.isArray(photos) || photos.length === 0) {
    const errorMessage = document.createElement('p')
    errorMessage.textContent = 'No se han encontrado imágenes.'
    cardsContainer.appendChild(errorMessage)
    return cardsContainer
  }
  for (const photo of photos) {
    const card = document.createElement("div");
    card.className = "card";
    const img = document.createElement("img");
    img.src = photo.urls.regular;
    img.className = "photo";
    console.log(img)
    cardsContainer.appendChild(card);
    card.appendChild(img)
  }
  return cardsContainer
}