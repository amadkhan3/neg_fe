import axios from "axios";
import Utils from '@/Utils/Utils.js'

// Validator.extend('leastOneNumberAndLetter', {
//     getMessage: field => 'Password MUST contain at least one number and one letter',
//     validate: value => {
//         if (!value) return false
//         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g.test(value)
//     }
// });

export default {
    data() {
        return {
            oldPassword: '',
            password: '',
            confirmPassword: '',
            errorMsg: null
        }
    },

    props: {
        userInfo: {
            type: Object,
            default: function () {
            }
        }
    },

    methods: {
        onSubmit() {
            this.$validator.validateAll().then(() => {
                if (!this.errors.any()) {

                    axios.put(`/be/api/accounts/currentUser/changePassword`, {
                        oldPassword: this.oldPassword,
                        password: this.password
                    }).then(res => {
                        Utils.logout();
                    }).catch(e => {
                        this.errorMsg = "the old password is wrong !"
                    })
                }
            });
        }
    }
}
