import data from "./data.js";
import dom from "./dom.js";

const tarjetas = dom.$('#Tarjetas');
console.log(tarjetas)
const datos = await data.getData();

datos.forEach(element => {
    const card = dom.newCard(element);
    console.log(card);
    tarjetas.appendChild(card)
})
