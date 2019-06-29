import axios from 'axios'
import _ from 'lodash'

export default {
    data() {
        return {
            isValid: false,
            companyData: null
        }
    },
    mounted() {
        this.$nextTick(() => {
            // calculator
            // collegeSavingApplication
            // retirementSavingApplication
            // retirementSpendingApplication
            {/*<!--<router-view v-if="appType === 1" path="/college-saving-application"></router-view>-->*/}
            {/*<!--<router-view v-if="appType === 2" path="/retirement-saving-application"></router-view>-->*/}
            {/*<!--<router-view v-if="appType === 3" path="/retirement-spending-application"></router-view>-->*/}

            let appName = _.get(this, '$router.history.current.name', null)
            axios.get(`/be/api/public/validateAppsByCompanyName`).then(res => {
                let data = res.data
                this.companyData = data
                let homePage = data.homePage
                if (!data.isValid || (!data.activeCollegeSavingApp && !data.activeRetirementSavingApp && !data.activeRetirementSpendApp)) {
                    window.location.href = homePage
                } else {
                    if (appName === 'calculator') {
                        // this.isValid = true
                        if (data.activeCollegeSavingApp) {
                            this.isValid = true
                            this.$router.push({ name: 'collegeSavingApplication'})
                            // this.$router.push('/college-saving-application')
                            return
                        }

                        if (data.activeRetirementSavingApp) {
                            this.isValid = true
                            this.$router.push({ name: 'retirementSavingApplication'})
                            // this.$router.push('/retirement-saving-application')
                            return
                        }

                        if (data.activeRetirementSpendApp) {
                            this.isValid = true
                            this.$router.push({ name: 'retirementSpendingApplication'})
                            // this.$router.push('/retirement-spending-application')
                            return
                        }


                        window.location.href = homePage
                    } else {
                        if (appName === 'collegeSavingApplication' && data.activeCollegeSavingApp) {
                            this.isValid = true
                            return
                        }

                        if (appName === 'retirementSavingApplication' && data.activeRetirementSavingApp) {
                            this.isValid = true
                            return
                        }

                        if (appName === 'retirementSpendingApplication' && data.activeRetirementSpendApp) {
                            this.isValid = true
                            return
                        }
                        window.location.href = homePage
                    }

                }
            })
        })
    }
}
