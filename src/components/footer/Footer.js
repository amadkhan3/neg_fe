import Utils from '@/Utils/Utils.js'


export default {
    data () {
        return {
            isReadyLogin: false
        }
    },

    mounted () {
    },

    methods: {
        logout () {
            Utils.logout()
        }
    }
}
