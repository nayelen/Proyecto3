

import { printHeader } from './src/components/Header/header';
import { printCardsContainer } from './src/components/cardsContainer/cardsContainer';
import { printFooter } from './src/components/footer/footer';
import './style.css'

const app$$ = document.querySelector("#app");
const main$$ = document.createElement("main");

printHeader(app$$);
app$$.appendChild(main$$);

const home = printCardsContainer()
main$$.appendChild(home)

const callApi = (inputValue) => {
  const accessKey = "KMauSwxeEq3SJt3fgOu1jZ9n6BVLplD7VKVSP7kboio"
  const url = `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=${accessKey}&per_page=30`

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const updated = printCardsContainer(data);
      main$$.removeChild(main$$.lastChild)
      main$$.appendChild(updated)
    })
    .catch((error) => {
      console.log('Error al obtener los datos de la API', error)
    })
}

const search = (ev) => {
  if (ev.key === "Enter") {
    const inputValue = ev.target.value
    callApi(ev.target.value)
    console.log(inputValue)
  }
}
const inputSearch = document.querySelector("input");
inputSearch.addEventListener("keydown", search)

printFooter(app$$)