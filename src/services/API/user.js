// eslint-disable-next-line
/* eslint-disable */

import { api } from '../../config/api'


export default {
    usuario: {
        login(user){
            return api.post('/login',user)
        },
    }
}