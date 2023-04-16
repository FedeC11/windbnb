import data from "./data.js";
import dom from "./dom.js";

const botonFiltro =dom.$('#boton')
const titleBuscar= document.querySelectorAll('.Title-buscar')
const datos = await data.getData();

/* datos.forEach(element => {
    const card = dom.newCard(element);
    dom.tarjetas.appendChild(card)
}) */
dom.muestraTarjetas(datos)
const ciudades =data.getCity(datos)
dom.insertCitys(ciudades,'#opciones')
let filtered=null;
const catMenu = [...dom.$('#opciones').children];

catMenu.forEach(element => {
     //agregar clase seleccionada
    element.addEventListener('click',() =>{
        let lista ="";
        titleBuscar.forEach(elem =>{
            let nomBus="";
            if(element.textContent.includes('Vaasa')){
                nomBus="Vaasa, Finland"
                lista="Vaasa";
            }else if(element.textContent.includes('Helsinki')){
                nomBus='Helsinki, Finland'
                lista="Helsinki";
            }else if(element.textContent.includes('Turku')){
                nomBus='Turku, Finland'
                lista="Turku";
            }else {
                nomBus='Oulu, Finland'
                lista="Oulu";
            }
            elem.textContent=nomBus
        })
        if(element.classList.contains('seleccionado')){
            element.classList.remove('seleccionado')
        }
        else{
            element.classList.add('seleccionado')
        
        }
        
        filtered = data.filtrar(datos,lista)
        
        
    })
})
botonFiltro.addEventListener('click', () => {
    dom.muestraTarjetas(filtered)
    console.log(filtered)
})