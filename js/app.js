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
//Filtro de ciudades
let lista ="";
const catMenu = [...dom.$('#cityMenu').children];
catMenu.forEach(element => {
//agregar clase seleccionada
element.addEventListener('click',() =>{
        
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
        
        
        
    })
})
//este es el fitro de busqueda boton 
const cityMenu=dom.$('#cityMenu')
const cityBoton=dom.$('#cityBoton')
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
let contadorGlobal=0;    
masAdults.addEventListener('click',()=>{
       if(contadorGlobal<10){
        contadorAdultos++;
        contadorGlobal++;
       }
        contAdults.innerHTML=contadorAdultos
        
})
menosAdults.addEventListener('click',()=>{
        if(contadorAdultos > 0){
            contadorAdultos--;
            contadorGlobal--;
        }
        contAdults.innerHTML=contadorAdultos
        
})
masChildren.addEventListener('click',()=>{
        if(contadorGlobal<10){
            contadorChildren++;
            contadorGlobal++;
           }
        contChildren.innerHTML=contadorChildren
        
})
menosChildren.addEventListener('click',()=>{
        if(contadorChildren > 0){
            contadorChildren--;
            contadorGlobal--;
        }
        contChildren.innerHTML=contadorChildren
        
})
//Filtro de guest
let FiltroGuest=null;
//muestra tarjetas filtradas
botonFiltro.addEventListener('click', () => {
    console.log(lista)
    console.log(contadorGlobal)
    if(lista !="" && contadorGlobal != 0){
        console.log("entre con 2 variables")
        let filtroDoble=null
        filtered = data.filtrar(datos,lista,)
        filtroDoble =data.FiltrarGuest(filtered,contadorGlobal)
        dom.muestraTarjetas(filtroDoble)
    }else if(lista!=""){
        filtered=data.filtrar(datos,lista)
        dom.muestraTarjetas(filtered)
    }
    else if(contadorGlobal!=0){
        FiltroGuest=data.FiltrarGuest(datos,contadorGlobal) 
        dom.muestraTarjetas(FiltroGuest)
    }
    else{
        dom.muestraTarjetas(datos)
    }
    lista=""
    contadorGlobal=0
    contadorAdultos=0
    contadorChildren=0
    contChildren.innerHTML=contadorChildren
    contAdults.innerHTML=contadorAdultos


})
 

 

