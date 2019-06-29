import moment from 'moment'
import axios from 'axios';

const FORMAT_TIME = 'DD/MM/YYYY'

export default {
    data () {
        return {
            today: moment().format(FORMAT_TIME),
            message: 'Please enter your payment infomation',
            cardData: {
                number: '',
                cvc: '',
                month: '',
                year: '2019'
            }
        }
    },
    methods: {
        showErrorModal () {
            this.$refs.errorMsg.show()
        },
        nextPage () {
            this.$router.push('/dashboard/subscription')
        },
        onSubmit () {
            this.$validator.validateAll().then(() => {
                if (!this.errors.any()) {
                    // let thiz = this
                    axios.post(`/be/api/accounts/currentUser/applyToken`, this.cardData)
                        .then(res => {
                            this.$refs.successModal.show()
                        })
                        .catch(e => {
                            this.message = 'The card information is invalid'
                            this.showErrorModal()
                        })
                }
            });
        }
    },
    computed: {
        dateOfCard () {
            if (!this.cardData.month || this.cardData.month === '') return null

            let mom = moment()
            mom.set('month', (+this.cardData.month) - 1)
            mom.set('year', this.cardData.year)
            mom.set('date', 1)
            mom.set('hour', 23)
            mom.set('minute', 59)
            mom.set('second', 59)
            mom = mom.endOf('month')
            return mom.format(FORMAT_TIME);
        }
    },
    name: 'payment',
    components: {
    }
}
