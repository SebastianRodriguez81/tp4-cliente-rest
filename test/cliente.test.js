import { crearCliente } from '../src/ClienteRest.js'

async function main() {
  const cliente = crearCliente('http://localhost:3000/productos/')
  let respuesta

  // probando método GET sin identificador
  try {
    respuesta = await cliente.get()
    console.log(respuesta.data)
  } catch (error) {
    throw error.status
  }

  // probando método GET con identificador
  try {
    respuesta = await cliente.get(4)
    console.log(respuesta.data)
  } catch (error) {
    throw error.status
  }

  // probando método POST
  try {
    const producto = {
      "id": 6,
      "nombre": "Papas Pringles Tradicional",
      "precio": 300,
      "stock": 40
    }
    respuesta = await cliente.post(producto)
    console.log(respuesta.data)
  } catch (error) {
    throw error.status
  }

  // probando método DELETE
  try {
    respuesta = await cliente.delete(7)
    console.log(respuesta.data)
  } catch (error) {
    throw new Error('Error en el método DELETE. Código: ' + error.status)
  }

  // probando método PUT
  try {
    const producto = {
      "id": 4,
      "nombre": "Cerveza Heineken 1 L",
      "precio": 220,
      "stock": 400
    }
    
    respuesta = await cliente.put(producto.id, producto)
  } catch (error) {
    throw new Error('Error en el método PUT. Código: ' + error.status)
  }

}

main()