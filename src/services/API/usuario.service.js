// eslint-disable-next-line
/* eslint-disable */

import { api } from '../../config/api'


export default {
    usuario: {
        listausuarios(){            
            return api.get('/users')
        },
        
    }
}