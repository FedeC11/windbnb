import data from "./data.js";
import dom from "./dom.js";
// boton del  filtro
const botonFiltro =dom.$('#boton')
 //para menu de ciudades
const titleBuscar= document.querySelectorAll('.Title-buscar')
// se leeen los datos de el json
const datos = await data.getData();
//para el menu  de guest
const guest =dom.$('#addGuest')
//se crean las tarjetas globales
dom.muestraTarjetas(datos)
//filtro de ciudades
const ciudades =data.getCity(datos)
 //se inserta  ciudades
dom.insertCitys(ciudades,'#opciones')
//se seleccione guestMenu
const guestMenu=dom.$('#guestMenu')
//agregar el evento para menu correcto


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
//este es el fitro de busqueda boton 
const cityMenu=dom.$('#cityMenu')
const cityBoton=dom.$('#cityBoton')
//muestra tarjetas filtradas
botonFiltro.addEventListener('click', () => {
    dom.muestraTarjetas(filtered)
})
//oculta o muestra menu seleccionados
const contGuest =dom.$('#contGuest')
const city =dom.$('#city')
guest.addEventListener("click", () =>{

    guestMenu.classList.remove('hidden')
    cityMenu.classList.add('hidden')
})
cityBoton.addEventListener("click", () =>{
    guestMenu.classList.add('hidden')
    cityMenu.classList.remove('hidden')
    
    
})
contGuest.addEventListener("click", () =>{

    guestMenu.classList.remove('hidden')
    cityMenu.classList.add('hidden')    
})
city.addEventListener("click", () =>{
    guestMenu.classList.add('hidden')
    cityMenu.classList.remove('hidden')
})
//contador de guest
let contadorAdultos=0;
 let contadorChildren=0;
    const masAdults =dom.$('#masAdults')
    const menosAdults =dom.$('#menosAdults')
    const masChildren =dom.$('#masChildren')
    const menosChildren =dom.$('#menosChildren')
    const contAdults =dom.$('#contAdults')
    const contChildren =dom.$('#contChildren');
    
    masAdults.addEventListener('Click',()=>{
        contadorAdultos++;
        console.log(contadorAdultos);
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
 

 

