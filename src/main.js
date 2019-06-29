import Vue from 'vue'
import App from './App.vue'
import router from './router'
import routerForCalculator from './only_apps_router'
import store from './store'
// import fonts
import './fonts/helveticaneue/style.css'
import './fonts/lato/style.css'
import './fonts/opensans/style.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import VueBus from 'vue-bus'

import VueApexCharts from 'vue-apexcharts'

import {library} from "@fortawesome/fontawesome-svg-core";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VeeValidate, {Validator} from 'vee-validate';
import vSelect from 'vue-select'
import VueSwal from 'vue-swal'
import VueNumeric from 'vue-numeric'
import Clipboard from 'v-clipboard'

export const CURRENT_USER_KEY = "currentUser"

library.add(faInfoCircle)

window.$ = window.jQuery = require('jquery')
require('bootstrap/dist/js/bootstrap.js')

Vue.use(BootstrapVue)
Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.use(VueBus)
Vue.use(VueApexCharts)
Vue.use(VeeValidate)
Vue.use(Clipboard)
Vue.component('v-select', vSelect)
Vue.component('default-layout', {
    template: '<div>Archive component</div>'
})
Vue.component('apexchart', VueApexCharts)
let tempRouter = null

if (process.env.VUE_APP_ONLY_APPS === 'true') {
    tempRouter = routerForCalculator
} else {
    tempRouter = router
}

new Vue({
    router: tempRouter,
    store,
    render: h => h(App)
}).$mount('#app')

Vue.use(VueNumeric)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueSwal)

// // check authenticate
axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    console.info('axios.interceptors.response', error, error.response.status)
    if (error.response.status === 401) {
        window.localStorage.clear()
        if (window.location.pathname !== '/login') {
            window.location.href = '/'
        }
    }
    return Promise.reject(error)
})

let currentUser = window.localStorage.getItem('currentUser')
if (currentUser) {
    store.commit('setCurrentUser', JSON.parse(currentUser))
}


axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    if (error.config.url.startsWith("/be")) {
        if (error.response.data.status === 401) {
            // no permission
            axios.get(`/be/currentUser`).then(res => {
                if (res.data.error === true) {
                    window.localStorage.removeItem(CURRENT_USER_KEY)
                    window.location.href = '/login'
                }
            })
        }
    }
    return Promise.reject(error);
});

Validator.extend('leastOneNumberAndLetter', {
    getMessage: field => 'Password MUST contain at least one number and one letter',
    validate: value => {
        if (!value) return false
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g.test(value)
    }
});


Validator.extend("uniqueEmail", {
    validate: value =>
        new Promise(resolve => {
            axios.get(`/be/api/accounts/validate/checkAvailableUserEmail`, {
                params: {
                    email: value
                }
            }).then(res => {
                let result = res.data
                if (result) {
                    return resolve({
                        valid: true
                    });
                } else {
                    return resolve({
                        valid: false,
                        data: {
                            message: `Email ${value} is already taken.`
                        }
                    });
                }

            })
        }),
    getMessage: (field, params, data) => data.message
});


Validator.extend("uniqueCompanyName", {
    validate: value =>
        new Promise(resolve => {
            axios.get(`/be/api/accounts/validate/checkAvailableCompanyName`, {
                params: {
                    name: value
                }
            }).then(res => {
                let result = res.data
                if (result) {
                    return resolve({
                        valid: true
                    });
                } else {
                    return resolve({
                        valid: false,
                        data: {
                            message: `Company name ${value} is already exist.`
                        }
                    });
                }

            })
        }),
    getMessage: (field, params, data) => data.message
});
