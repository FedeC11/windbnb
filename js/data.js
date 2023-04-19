/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)

  return data;
}
const getCity = (data) => {
  let ciudades = data.map(elem =>elem.city)
  ciudades = new Set(ciudades)
  ciudades =[...ciudades]
  return ciudades
}
const filtrar=(arreglo, filtro) =>{
  let filtered =arreglo.filter(elem =>elem.city === filtro)
  return filtered;
}
const FiltrarGuest=(arreglo,filtro)=>{
  let filtered = arreglo.filter(elem =>elem.maxGuests >= filtro)
  return filtered
}

export default {
  getData,
  getCity,
  filtrar,
  FiltrarGuest
}