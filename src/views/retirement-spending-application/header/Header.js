export default {
    name: "RetirementSpendingApplicationHeader",
    data() {
        return {
            title: ''
        }
    },
    mounted() {
        // collegeSavingApplication
        // retirementSavingApplication
        // retirementSpendingApplication

        let appName = _.get(this, '$router.history.current.name', null)
        switch (appName) {
            case 'collegeSavingApplication':
                this.title = 'College Savings App'
                break;
            case 'retirementSavingApplication':
                this.title = 'Retirement Saving App'
                break;
            case 'retirementSpendingApplication':
                this.title = 'Retirement Spending App'
                break;
        }
    },
    props: {
        companyData: {}
    },
};
