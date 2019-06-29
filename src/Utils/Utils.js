import axios from 'axios'
import store from '@/store'
import {CURRENT_USER_KEY} from "../main";

class Utils {
    static logout () {
        axios.get('/be/logout')
        window.localStorage.removeItem(CURRENT_USER_KEY)
        store.commit('setCurrentUser', null)
        window.location.href = '/'
    }
}

export default Utils
