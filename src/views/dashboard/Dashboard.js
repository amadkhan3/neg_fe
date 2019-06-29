import Utils from '@/Utils/Utils.js'
import HelloWorld from "@/components/HelloWorld.vue";
import Header from '@/components/backend/header/Header.vue';
import Footer from '@/components/backend/footer/Footer.vue';
import axios from "axios";
import {CONSTANTS, EventBus} from '@/Utils/eventbus.js';

export default {
    data() {
        return {
            latestTime: new Date(),
            userInfo: {}
        }
    },
    name: "dashboard",
    mounted() {
        this.loadData();
        EventBus.$on(CONSTANTS.RELOAD_USER_INFO, () => {
            this.loadData();
        });

        if (this.$router.history.current.path === '/dashboard') {
            this.$router.push('/dashboard/user')
        }
    },
    components: {
        HelloWorld,
        Header,
        Footer
    },
    methods: {
        loadData() {
            axios.get(`/be/api/accounts/getCurrentUserInfo`).then(res => {
                this.userInfo = res.data
                this.latestTime = new Date()
            })
        },
        logout() {
            Utils.logout()
        }
    }
}
