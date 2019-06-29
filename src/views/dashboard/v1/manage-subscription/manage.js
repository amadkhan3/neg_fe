import axios from 'axios'
import _ from 'lodash'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import moment from 'moment'

export default {

    name: "managesubscription",

    data() {
        return {
            cancelSubId: null,
            isLoading: false,
            isLoaded: false,
            subs: [],
            activeAppName: 'College Savings'
        }
    },
    components: {
        Loading
    },
    computed: {
        isDisableBundleSub() {
            if (this.collegeSub && this.isValidActiveSub(this.collegeSub)) return true;
            if (this.retirementSavingSub && this.isValidActiveSub(this.retirementSavingSub)) return true;
            if (this.retirementSpendingSub && this.isValidActiveSub(this.retirementSpendingSub)) return true;

            return false;
        },
        collegeSub() {
            let collegeSub = _.sortBy(this.subs, ['start']).reverse().find(item => {
                return item.plan.nickname === 'financialCollegeSavingYearly'
            })
            return collegeSub
        },

        retirementSavingSub() {
            let collegeSub = _.sortBy(this.subs, ['start']).reverse().find(item => {
                return item.plan.nickname === 'financialRetirementSavingYearly'
            })
            return collegeSub
        },

        retirementSpendingSub() {
            let sub = _.sortBy(this.subs, ['start']).reverse().find(item => {
                return item.plan.nickname === 'financialRetirementSpendingYearly'
            })
            return sub
        },

        bundleSub() {
            let sub = _.sortBy(this.subs, ['start']).reverse().find(item => {
                return item.plan.id === 'financialProfessionalYearly'
            })
            return sub
        },

        isBundleSubInActive() {
            return this.isValidActiveSub(this.bundleSub)
        },

        isValidActiveCollegeSub() {
            let collegeSub = this.collegeSub
            if (!collegeSub) return false

            let status = collegeSub.status
            if (status === 'trialing' || status === 'active') {
                return true
            }
        },
    },

    mounted() {
        this.$nextTick(() => {
            this.loadData()
        })
    },

    methods: {
        getTime(sub){
            let time = sub.currentPeriodStart
            let mom = moment(+(time + '000'))
            if (sub.status === 'trialing') {
                mom = mom.add(1, 'y')
            }
            return mom.format('MMM Do YYYY')
        },

        isValidActiveSub(sub) {
            if (!sub) return false

            let status = sub.status
            if (status === 'trialing' || status === 'active') {
                return true
            }
        },

        cancelSubForm(subId) {

            this.cancelSubId = subId

            // this.$swal({
            //     title: '<i>Custom HTML</i>',
            //     // add a custom html tags by defining a html method.
            //     html:
            //         'This is an <em> emaphazied text </em>, ' +
            //         '<a href="#">links</a> ' +
            //         '<strong>And other tags</strong>',
            //     showCloseButton: true,
            //     showCancelButton: true,
            //     focusConfirm: false,
            // })

            this.$refs.cancelModal.show()
            // this.isLoading = true
            // axios.delete(`/be/api/accounts/currentUser/cancelSub?subId=${subId}`).then(res => {
            //     this.subs = res.data
            //     this.loadData()
            // })
        },

        hideModal(key) {
            this.$refs[key].hide()
        },

        cancelSubCallback() {
            this.isLoading = true
            this.$refs.cancelModal.hide()
            axios.delete(`/be/api/accounts/currentUser/cancelSub?subId=${this.cancelSubId}`).then(res => {
                this.subs = res.data
                this.loadData()
            })
        },
        gotoAddCard() {
            this.$router.push('/dashboard/user/payments')
        },
        loadData() {
            return axios.get(`/be/api/accounts/currentUser/getStripeSubs`).then(res => {
                this.subs = res.data
                this.isLoaded = true
                this.isLoading = false
            })
        },
        trialCollegeSavingApp() {
            this.isLoading = true
            axios.post(`/be/api/accounts/currentUser/addCollegeSavingSub`).then(res => {
                // this.$swal("The subscription is started!", "", "success")
                this.loadData().then(() => {
                    this.$nextTick(() => {
                        this.activeAppName = 'College Savings'
                        this.$refs.congratsModal.show()
                    })
                })

            }).catch(error => {
                // this.$swal("Your card is invalid", "", "error").then((value) => {
                //     this.gotoAddCard()
                // });
                this.$refs.invalidCardModal.show();
            })
        },
        trialRetirementSavingApp() {
            this.isLoading = true
            axios.post(`/be/api/accounts/currentUser/addRetirementSavingSub`).then(res => {
                // this.$swal("The subscription is started!", "", "success")
                this.loadData().then(() => {
                    this.$nextTick(() => {
                        this.activeAppName = 'Retirement Savings'
                        this.$refs.congratsModal.show()
                    })
                })
            }).catch(error => {
                this.$swal("Your card is invalid", "", "error").then((value) => {
                    this.gotoAddCard()
                });
            })
        },
        trialRetirementSpendApp() {
            this.isLoading = true
            axios.post(`/be/api/accounts/currentUser/addRetirementSpendSub`).then(res => {
                // this.$swal("The subscription is started!", "", "success")
                this.loadData().then(() => {
                    this.$nextTick(() => {
                        this.activeAppName = 'Retirement Spending'
                        this.$refs.congratsModal.show()
                    })
                })
            }).catch(error => {
                this.$swal("Your card is invalid", "", "error").then((value) => {
                    this.gotoAddCard()
                });
            })
        },
        trialBundleApp() {
            this.isLoading = true
            axios.post(`/be/api/accounts/currentUser/addBundleSub`).then(res => {
                // this.$swal("The subscription is started!", "", "success")
                this.loadData().then(() => {
                    this.$nextTick(() => {
                        this.activeAppName = '3 apps as a bundle'
                        this.$refs.congratsModal.show()
                    })
                })
            }).catch(error => {
                this.$swal("Your card is invalid", "", "error").then((value) => {
                    this.gotoAddCard()
                });
            })
        }
    }
}
