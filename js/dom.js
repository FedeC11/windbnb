/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/
const $ =selector => document.querySelector(selector); 
const newEl =etiqueta =>document.createElement(etiqueta);
const tarjetas =$('#Tarjetas');

const newCard =(obj) => {
    const div =newEl('div');
    div.className='card-img';
    div.innerHTML=`
    <div class="card col ">
  <img src="${obj.photo}" class="card-img-top" alt="...">
  <div class="card-body">
            <span>SUPERHOST</span>
            <span>${obj.type}</span>
            <span> ${obj.beds}beds</span>
            <span>${obj.rating}</span>
            <h5 class="card-title">${obj.title}</h5>
          </div>
    </div>`
    return div;
}
const  insertCitys =(citys, donde) =>{
  const menu =$(donde)
  citys.forEach( element => {
    const li =newEl('li')
    li.innerHTML = `<a class="text-decoration-none text-reset" href="#${element}"><span class="material-symbols-outlined">location_on </span> ${element}, Finland</a>`;
    menu.appendChild(li)
    return menu;
  });
}

const muestraTarjetas= arre =>{
  tarjetas.innerHTML="";
  arre.forEach(element => {
    const card = newCard(element);
    tarjetas.appendChild(card)
})
}

export default{
    newCard,
    $,
    insertCitys,
    tarjetas,
    muestraTarjetas
}