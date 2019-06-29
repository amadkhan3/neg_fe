import RetirementSpendingApplicationHeader from '@/views/retirement-spending-application/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import VueApexCharts from 'vue-apexcharts';
import axios from 'axios'
import VueNumberInput from '@chenfengyuan/vue-number-input';
import Loading from './LoadingScreenRetirement.vue'
import Result from './Result.vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

const retirementSpendingDataDefault = {
    firstName: '',
    lastName: '',
    years: 30,
    current: 1000000,
    expenses: 45000,
    living: 3,
    withdrawalOption: 1,
    firstWithdrawalStart: 10,
    firstWithdrawalStartDelta: true,
    firstWithdrawalAmount: 0,
    firstWithdrawalEnd: 20,
    secondWithdrawalStart: 20,
    secondWithdrawalStartDelta: true,
    secondWithdrawalAmount: 0,
    stocks: 60,
    bonds: 30,
    cash: 10,
    lgEquities: 45,
    smEquities: 30,
    iEquities: 25,
    cdRate: 2,
    moneyRate: 0,
    investment: 1,
    withdrawalStrategy: 1,
    bondSelect: 3,
    cashSelect: 2,
    email: '',
    firstname: '',
    lastname: '',
    leadGenTool: false,
    firstnameInput: '',
    lastnameInput: '',
    emailInput: ''
}

const collegeDataDefault = {
    firstName: '',
    lastName: '',
    years: 9,
    current: 100000,
    salary: 50000,
    contributionOption: 1,
    percentageContribution: 10,
    dollarContribution: 0,
    increase: 3,
    stocks: 80,
    bonds: 20,
    cash: 0,
    lgEquities: 45,
    smEquities: 30,
    iEquities: 25,
    cdRate: 2,
    moneyRate: 0,
    investment: 1,
    investmentStrategy: 1,
    targetStocks: 50,
    bondSelect: 3,
    cashSelect: 2,
    email: '',
    firstname: '',
    lastname: '',
    leadGenTool: false,
    firstnameInput: '',
    lastnameInput: '',
    emailInput: ''
}

const retirementSavingDefault = {
    firstName: '',
    lastName: '',
    years: 25,
    current: 100000,
    salary: 50000,
    contributionOption: 1,
    percentageContribution: 10,
    dollarContribution: 0,
    increase: 3,
    stocks: 80,
    bonds: 20,
    cash: 0,
    lgEquities: 45,
    smEquities: 30,
    iEquities: 25,
    cdRate: 2,
    moneyRate: 0,
    investment: 1,
    investmentStrategy: 1,
    bondSelect: 3,
    cashSelect: 2,
    email: '',
    targetStocks: 50,
    firstname: '',
    lastname: '',
    leadGenTool: false,
    firstnameInput: '',
    lastnameInput: '',
    emailInput: ''
}

export default {
    name: 'retirementSpendingApplication',
    components: {
        RetirementSpendingApplicationHeader,
        Footer,
        VueSlider,
        VueApexCharts,
        'number-input': VueNumberInput,
        'loading-component': Loading,
        'result-component': Result
    },
    computed: {
        series () {
            return [this.calData.stocks, this.calData.bonds, this.calData.cash]
        },
        series2 () {
            return [this.calData.lgEquities, this.calData.smEquities, this.calData.iEquities]
        }
    },
    props: {
        appType: {
            type: String,
            default: () => {
                return '3'
            }
        },
        companyData: {}
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
    methods: {
        vueSelectChange (key, valueObj) {
            console.info(key, valueObj)
            this.calData[key] = valueObj.value
        },
        printpdf () {
            this.$router.push({ path: '/print-pdf-retirement' })
        },
        loadingPage () {
            this.$router.push({ path: '/loading-screen' })
        },
        showInputs () {
            this.inputs = true
            this.results = false
        },
        showResults () {
            this.results = true
            this.inputs = false
        },
        resetInput () {
            let defaultData = {}

            switch (this.appType) {
            case '1':
                defaultData = { ...collegeDataDefault }
                break

            case '2':
                defaultData = { ...retirementSavingDefault }
                break

            case '3':
                defaultData = { ...retirementSpendingDataDefault }
                break
            }

            this.calData = defaultData
            this.pageStatus = 1
        },
        changeInput () {
            this.pageStatus = 1
        },
        onSubmit () {
            let errorElements = window.$('.error-item')
            if (errorElements.length > 0) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(errorElements[0]).offset().top - 50
                }, 500)
                return
            }

            this.pageStatus = 2

            let url = `/be/api/calculators/retirement/premium`

            switch (this.appType) {
            case '1':
                url = `/be/api/calculators/saving/college/premium`
                break
            case '2':
                url = `/be/api/calculators/saving/premium`
                break
            case '3':
                url = `/be/api/calculators/retirement/premium`
                break
            }

            axios.post(url, this.calData).then(res => {
                this.pageStatus = 3
                this.resultData = res.data
            })
        }
    },
    data: function () {
        let defaultData = {}

        switch (this.appType) {
        case '1':
            defaultData = { ...collegeDataDefault }
            break
        case '2':
            defaultData = { ...retirementSavingDefault }
            break
        case '3':
            defaultData = { ...retirementSpendingDataDefault }
            break
        }

        return {
            firstWithdrawalStartDelta: { label: 'Increase', value: true },
            secondWithdrawalStartDelta: { label: 'Increase', value: true },
            pageStatus: 1, // 1: tab1, 2: loading, 3: result
            inputs: true,
            results: false,
            rangeValue: `${50}%`,
            title: '',
            chartOptions: {
                labels: ['Stocks', 'Bonds', 'Cash'],
                colors: ['#1ecc6a', '#f0d319', '#ff7171'],
                plotOptions: {
                    pie: {
                        height: 200,
                        size: 100,
                        customScale: 0.5,
                        offsetX: 120,
                        offsetY: -105,
                        expandOnClick: true,
                        dataLabels: {
                            enabled: false
                        }
                    }
                },
                legend: {
                    position: 'left',
                    verticalAlign: 'top',
                    offsetY: -20,
                    itemMargin: {
                        horizontal: 7,
                        vertical: 0
                    }
                },
                responsive: [{
                    breakpoint: 1000,
                    options: {
                        plotOptions: {
                            pie: {
                                size: 50,
                                customScale: 0.5,
                                offsetX: 0,
                                offsetY: 0,
                                expandOnClick: true,
                                dataLabels: {
                                    offset: 0
                                }
                            }
                        },
                        legend: {
                            position: 'left'
                        }
                    }
                }],
                dataLabels: {
                    enabled: false
                }
            },
            chartOptions2: {
                labels: [
                    'Large U.S. Stocks',
                    'Mid & Small U.S. Stocks',
                    'Mid & Small U.S. Stocks'
                ],
                colors: ['#1ecc6a', '#f0d319', '#ff7171'],
                plotOptions: {
                    pie: {
                        height: 200,
                        size: 100,
                        customScale: 0.5,
                        offsetX: 70,
                        offsetY: -80,
                        expandOnClick: true,
                        dataLabels: {
                            enabled: false
                        }
                    }
                },
                legend: {
                    position: 'left',
                    verticalAlign: 'top',
                    offsetY: -20,
                    itemMargin: {
                        horizontal: 7,
                        vertical: 0
                    }
                },
                responsive: [{
                    breakpoint: 1000,
                    options: {
                        plotOptions: {
                            pie: {
                                size: 50,
                                customScale: 0.5,
                                offsetX: 0,
                                offsetY: 0,
                                expandOnClick: true,
                                dataLabels: {
                                    offset: 0
                                }
                            }
                        },
                        legend: {
                            position: 'left'
                        }
                    }
                }],
                dataLabels: {
                    enabled: false
                }
            },
            calData: defaultData,
            resultData: null
        }
    }
}
