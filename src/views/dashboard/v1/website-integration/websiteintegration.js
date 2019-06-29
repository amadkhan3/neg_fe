import HelloWorld from "@/components/HelloWorld.vue";
import Header from '@/components/backend/header/Header.vue';
import Footer from '@/components/backend/footer/Footer.vue';
import axios from "axios";

export default {
    name: "websiteintegration",
    components: {
        HelloWorld,
        Header,
        Footer
    },
    data() {
        return {
            companyData: null
        }
    },
    mounted() {
        // axios.get(`/be/api/accounts/getCurrentUserInfo`).then(res => {
        //     this.userInfo = res.data
        // })

        axios.get(`/be/api/accounts/validateApps`).then(res => {
            let data = res.data
            this.companyData = data
        })
    },
    computed: {
        collegeSubText() {
            return '<!-- College Savings Application -->\n' +
                `<iframe frameborder="1" height="100%" src="${this.domainUrl}/college-saving-application" width="420"></iframe>`
        },
        retirementSavingSubText() {
            return '<!-- Retirement Savings Application -->\n' +
                `<iframe frameborder="1" height="100%" src="${this.domainUrl}/retirement-saving-application" width="420"></iframe>`
        },
        retirementSpendingSubText() {
            return '<!-- Retirement Spending Application -->\n' +
                `<iframe frameborder="1" height="100%" src="${this.domainUrl}/retirement-spending-application" width="420"></iframe>`
        },
        domainUrl() {
            let protocol = process.env.VUE_APP_MODE === "production" ? 'https://' : 'http://'
            return protocol + this.companyData.user.companyDomain + '.' + process.env.VUE_APP_SITE_DOMAIN
        }
    },
};
