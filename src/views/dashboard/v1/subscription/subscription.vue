<template>
    <div class="content-inner subscription-area">
        <div>
            <b-table class="table-style" style="border: 0.5px solid #c7c7c7" :items="items">
                <span slot="Subscriber_Email_Address" slot-scope="data" v-html="data.value"></span>
                <!-- <span slot="Subdomain" slot-scope="data" v-html="data.value"></span> -->
            </b-table>
        </div>
    </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
    import Header from '@/components/backend/header/Header.vue';
    import Footer from '@/components/backend/footer/Footer.vue';
    import axios from 'axios';

    export default {
    
    data() {
      return {
        items: [
        //   { ID: '00311123', Subcriber_Email_Address: '<span style="color:#0091eb">Kalani.Huerta@tesca-finance.com</span>', Subcriptions: 'Planning App Suite', Subdomain: '<span style="color:#0091eb">www.tesca-finance.nesteggguru.com</span>', Purchase_Date: '11/20/2018', Next_Renewal: '11/20/2019' },
        //   { ID: '00311124', Subcriber_Email_Address: '<span style="color:#0091eb">Cara.Nami@gondar.com</span>', Subcriptions: 'Retirement Spending App', Subdomain: '<span style="color:#0091eb">www.gondar-bounty.nesteggguru.com</span>', Purchase_Date: '09/20/2018', Next_Renewal: '09/20/2019' },
        //   { ID: '00311125', Subcriber_Email_Address: '<span style="color:#0091eb">JohnCalo@vwallet.com</span>', Subcriptions: 'Document Guru', Subdomain: '<span style="color:#0091eb">www.vwallet-crypto.nesteggguru.com</span>', Purchase_Date: '12/13/2018', Next_Renewal: '12/13/2019' },
        //   { ID: '00311126', Subcriber_Email_Address: '<span style="color:#0091eb">Tomtom@citadelfinance.com</span>', Subcriptions: 'Relationship App Suite', Subdomain: '<span style="color:#0091eb">www.citadelfinance.nesteggguru.com</span>', Purchase_Date: '11/04/2018', Next_Renewal: '11/04/2018' },
        //   { ID: '00311127', Subcriber_Email_Address: '<span style="color:#0091eb">David99@msmarvel.com</span>', Subcriptions: 'Passwords Guru', Subdomain: '<span style="color:#0091eb">www.msmarvel.nesteggguru.com</span>', Purchase_Date: '06/20/2018', Next_Renewal: '06/20/2019' },
        ]
      }
    },

    name: "subscription",
    mounted () {
        axios.get('/be/api/accounts').then(res => {
            res.data.map((r)=> {
                const {id, username} = r;
                this.items.push({ID: id, Subscriber_Email_Address: `<span @click="loginImpersonate(${username})" style="cursor:pointer; color:#0091eb">${username}</span>`});
            })
        })
    },
    methods: {
        loginImpersonate (username) {
            console.log(username)
            axios.get(`/be/login/impersonate?username=${username}`).then(res => {
                console.log(res)
            })
        },
    },
        components: {
            HelloWorld,
            Header,
            Footer
        }
    };

</script>

<style src="./subscription.scss" lang="scss"></style>