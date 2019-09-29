// eslint-disable-next-line
/* eslint-disable */

import { api } from '../../config/api'


export default {
    usuario: {
        buscarDados(user){            
            return api.post('/login',user)
        },
        
    }
}