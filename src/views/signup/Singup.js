import axios from 'axios'
import qs from "qs";
import store from '@/store'
import {CURRENT_USER_KEY} from '../../main'

export default {
    data() {
        return {
            advisorEmail: '',
            firstName: '',
            lastName: '',
            companyName: '',
            password: '',
            isShowPassword: false
        }
    },
    methods: {
        back() {
            this.$router.push('/')
        },
        onSubmit() {
            this.$validator.validate().then(valid => {
                if (valid) {
                    // do stuff if not valid.
                    axios.post(`/be/signup`, this.$data).then(() => {
                        const data = qs.stringify({
                            username: this.advisorEmail,
                            password: this.password
                        });
                        const headers = {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                        };

                        axios({
                            method: 'post',
                            url: '/be/login',
                            data: data,
                            headers
                        }).then(res => {
                            axios
                                .get('/be/currentUser')
                                .then(res => {
                                    window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(res.data))
                                    store.commit('setCurrentUser', res.data)
                                    let nextUrl = '/dashboard/user/accounts'
                                    this.$router.push({path: nextUrl})
                                })
                                .catch(e => {
                                })
                        }).catch(e => {
                        })
                    }).catch(e => {
                        console.error('error', e)
                    })
                } else {
                    console.error(`error validate`)
                }
            });
        }
    }
}
