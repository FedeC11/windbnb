import data from "./data.js";
import dom from "./dom.js";

const botonFiltro =dom.$('#boton')
const titleBuscar= document.querySelectorAll('.Title-buscar')
const datos = await data.getData();
const guest =dom.$('#addGuest')
console.log(guest)
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
guest.addEventListener("click", () =>{
    dom.addGuest("#opciones")
    
})
let contadorAdultos=0;
 let contadorChildren=0;
    const masAdults =dom.$('#masAdults')
    const menosAdults =dom.$('#menosAdults')
    const masChildren =dom.$('#masChildren')
    const menosChildren =dom.$('#menosChildren')
    console.log(masAdults)
    const contAdults =dom.$('#contAdults')
    const contChildren =dom.$('#contChildren');
    
    masAdults.addEventListener('Click',()=>{
        contadorAdultos++;
        console.log(contadorAdultos)
        contAdults.innerHTML=contadorAdultos
    })
    menosAdults.addEventListener('Click',()=>{
        console.log("entre")
        if(contadorAdultos > 0){
            contadorAdultos--;
        }
        contAdults.innerHTML=contadorAdultos
    masChildren.addEventListener('Click',()=>{
        contadorChildren++
        contchildren.innerHTML=contadorAdultos
    })
    menosChildren.addEventListener('Click',()=>{
        if(contadorChildren > 0){
            contadorChildren--;
        }
        contChildren.innerHTML=contadorAdultos
    })
    })
 

 

