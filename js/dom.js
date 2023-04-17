/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/
const $ =selector => document.querySelector(selector); 
const newEl =etiqueta =>document.createElement(etiqueta);
const tarjetas =$('#Tarjetas');

const newCard =(obj) => {
    const div =newEl('div');
    div.className='d-flex flex-wrap mb-3 gap-3   ';
    const beds= `<span class="type"> ${obj.beds} beds</span>`;
    div.innerHTML=`
    <div class="card col">
    <div class="imagen">
    <img src="${obj.photo}" class="w-100 " alt="...">
    </div>
  <div class=" card-body d-flex align-items-center gap-1 px-1 flex-nowgrap justify-content-between" >
           <div>
            ${obj.superHost ==true ? '<span class="border rounded-pill p-2 superhost">SUPERHOST</span>':''}
            
            <span class="type">${obj.type}</span>
            ${obj.beds > 0 ? beds:''}
            </div>
            <span class="rating star justify-content-end "><span class="material-symbols-outlined material-symbols-outlinedd   ">
            star
            </span> ${obj.rating}</span>
            
          </div>
          <h5 class="card-title card-content">${obj.title}</h5>
    </div>`
    return div;
}
const  insertCitys =(citys, donde) =>{
  const menu =$(donde)
  const div=newEl('div')
  div.setAttribute('id','cityMenu');

  citys.forEach( element => {
    const li =newEl('li')
    li.className="mb-3"
    li.innerHTML = `<a class="text-decoration-none text-reset lista" href="#${element}"><span class="material-symbols-outlined added">location_on </span> ${element}, Finland</a>`;
    div.appendChild(li)
    return div;
  });
  menu.appendChild(div)
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