import axios from 'axios'
import myUpload from 'vue-image-crop-upload'
import {CONSTANTS, EventBus} from '@/Utils/eventbus.js'
import {Validator} from 'vee-validate'

const extendOptions = { hasTarget: true }
Validator.extend('uniqueEmailForEdit', {
    validate: (value, [userId]) => {
        return new Promise(resolve => {
            axios.get(`/be/api/accounts/validate/checkAvailableUserEmail`, {
                params: {
                    email: value,
                    userId
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
                    })
                }
            })
        })
    },
    getMessage: (field, params, data) => data.message }, extendOptions)

export default {
    data () {
        return {
            showUserAvatar: false,
            showCompanyAvatar: false,
            params: {
            },
            headers: {
                smail: '*_~'
            },
            userInfo: {
                'id': null,
                'avatar': null,
                'companyAvatar': null,
                'username': '',
                'firstName': '',
                'lastName': '',
                'companyName': '',
                'companyDomain': '',
                'client': null,
                'phone': null,
                'personalProfile': null,
                'firmDisclosure': null,
                'website': null,
                'advisorPhone': null,
                'advisorEmail': '',
                'address1': null,
                'address2': null,
                'city': null,
                'state': null,
                'zipCode': null,
                'role': 'CUSTOMER',
                'disabled': false,
                'displayName': ''
            }
        }
    },

    props: {
    },
    components: {
        'my-upload': myUpload
    },
    computed: {
        validateEmailString () {
            return { required: true, email: true, uniqueEmailForEdit: '222' }
        },
        domainUrl() {
            let protocol = process.env.VUE_APP_MODE === "production" ? 'https://' : 'http://'
            return protocol + this.userInfo.companyDomain + '.' + process.env.VUE_APP_SITE_DOMAIN
        }
    },
    mounted () {
        axios.get(`/be/api/accounts/getCurrentUserInfo`).then(res => {
            this.userInfo = res.data
        })
    },

    methods: {

        gotoCard () {
            this.$refs.successModal.hide()
            let user = this.userInfo
            if (!user.cardToken) {
                this.$router.push(`/dashboard/user/payments`)
            }
        },
        onSubmit () {
            this.$validator.validate().then(valid => {
                if (valid) {
                    // do stuff if not valid.
                    axios.put(`/be/api/accounts/currentUser/profile`, this.userInfo)
                        .then(res => {
                            EventBus.$emit(CONSTANTS.RELOAD_USER_INFO);
                            // this.$swal("Your changes is applied!", "", "success").then(() => {
                            //     let user = this.userInfo
                            //     if (!user.cardToken) {
                            //         this.$router.push(`/dashboard/user/payments`)
                            //     }
                            // })
                            this.$refs.successModal.show()
                        }).catch(e => {
                            this.errorMsg = 'the old password is wrong !'
                        })
                } else {
                    console.error(`error validate`)
                }
            });
        },
        cropUserAvatarSuccess (imgDataUrl, field) {
            console.log('-------- crop success --------')
            this.userInfo.avatar = imgDataUrl
        },
        cropCompanyAvatarSuccess (imgDataUrl, field) {
            console.log('-------- crop success --------')
            this.userInfo.companyAvatar = imgDataUrl
        },
        cropUploadSuccess (jsonData, field) {
            console.log('-------- upload success --------')
            console.log(jsonData)
            console.log('field: ' + field)
        },
        cropUploadFail (status, field) {
            console.log('-------- upload fail --------')
            console.log(status)
            console.log('field: ' + field)
        }
    }
}
