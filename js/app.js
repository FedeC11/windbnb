import data from "./data.js";
import dom from "./dom.js";

const tarjetas = dom.$('#Tarjetas');

const datos = await data.getData();

datos.forEach(element => {
    const card = dom.newCard(element);
    tarjetas.appendChild(card)
})

const ciudades =data.getCity(datos)
dom.insertCitys(ciudades,'#opciones')
console.log(ciudades)

const catMenu = [...dom.$('#opciones').children];
console.log(catMenu)