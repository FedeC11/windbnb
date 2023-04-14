/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/
const $ =selector => document.querySelector(selector); 

const newCard =(obj) => {
    const div =document.createElement('div');
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

export default{
    newCard,
    $
}