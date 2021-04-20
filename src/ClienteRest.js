import axios from 'axios'

function crearCliente(url) {
    return {
        // GET
        get: async (id) => {
            try {
                return await axios.get(url, {
                    params: {
                        id: id
                    }
                })
            } catch (error) {
                throw error.response
            }
        },
        
        //POST
        post: async (producto) => {
            try {
                return await axios.post(url, producto)
            } catch (error) {
                throw error.response
            }
        },

        // DELETE
        delete: async (id) => {
            try {
                return await axios.delete(url + id)                            
            } catch (error) {
                throw error.response
            }
        },

        // PUT
        put: async (id, producto) => {
            try {
                return await axios.put(url + id, producto)    
            } catch (error) {
                throw error.response
            }
        }
        
    }
}



export { crearCliente }