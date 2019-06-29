import axios from 'axios'
import store from '@/store'
import qs from 'qs'
import { CURRENT_USER_KEY } from '../../main'

export default {
    data () {
        return {
            userName: '',
            password: '',
            rememberMe: false,
            isLoginFail: false,
            isShowPassword: false
        }
    },

    methods: {
        back () {
            this.$router.push('/')
        },
        login () {
            this.isLoginFail = false
            this.$validator.validateAll().then(() => {
                if (!this.errors.any()) {
                    let thiz = this

                    const data = qs.stringify({
                        username: this.userName,
                        password: this.password,
                        'rememberMe': this.rememberMe
                    })
                    const headers = {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }
                    axios({
                        method: 'post',
                        url: '/be/login',
                        data: data,
                        headers
                    }).then(res => {
                        axios
                            .get('/be/currentUser')
                            .then(res => {
                                console.log(res, thiz)
                                window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(res.data))
                                store.commit('setCurrentUser', res.data)
                                let nextUrl = '/'
                                if (res.data.user.role === 'CUSTOMER') {
                                    nextUrl = '/dashboard/user'
                                }
                                else {
                                    nextUrl = '/dashboard/admin'
                                }
                                if (thiz.$route.query.nextUrl) {
                                    nextUrl = thiz.$route.query.nextUrl
                                }
                                this.$router.push({ path: nextUrl })
                            })
                            .catch(e => {
                                console.error(e, 'no authenticate', e.response.status)
                                window.localStorage.removeItem(CURRENT_USER_KEY)
                            })
                    }).catch(e => {
                        this.isLoginFail = true
                        this.errorMsg = e.message
                        window.localStorage.removeItem(CURRENT_USER_KEY)
                    })
                    // call form submission logic
                }
            })
        }
    }
}
