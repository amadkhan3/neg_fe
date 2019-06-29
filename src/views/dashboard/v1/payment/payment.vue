<template>
    <div class="payment-area">
        <b-modal centered class="message-modal" hide-footer hide-header ref="errorMsg" size="lg">
            <div class="modal-title text-center">
                <span class="">Error!</span>
            </div>
            <div class="content-msg">
                Your card information is invalid.
            </div>

            <div class="footer-btns text-center">
                <button @click="$refs.errorMsg.hide()" class="btn btn-primary btn-change" type="button">OK</button>
            </div>
        </b-modal>

        <div class="content-inner text-center">
            <b-modal hide-footer hide-header ref="successModal" size="lg">

                <div class="d-block" style="padding:0 30px 20px;">
                    <p class="modal-title">Thanks for joining Nest Egg Guru</p>
                    <p class="modal-content">
                        Your account is now active. You may cancel any time during the free trial period. An email confirmation has been sent to the address associated with your account.
                        After 30 days, your credit card will be charged for the subscriptions you choose to activate. Click NEXT to activate your trial subscriptions.
                    </p>
                    <div class="modal-btn-box">
                        <b-button @click="nextPage" class="mt-2 modal-btns purchase-btn" variant="success">Next</b-button>
                    </div>
                </div>
            </b-modal>

            <div class="wrapper-content-inner ">
                <p class="col-12 top-tagline grey-font">Use this form if you need to update your payment information.</p>

                <div class="col-md-7 col-12 float-left">
                    <ul class="payment-area">
                        <p class="charges">Charges auto-renew </p> <p class="cancelled"> (Unless cancelled before next renewal date) </p>
                        <li>
                            <img alt="Visa" src="./assets/images/ic_visa.svg"/>
                        </li>
                        <li>
                            <img alt="Master Card" src="./assets/images/ic_mastercard.svg"/>
                        </li>
                        <li>
                            <img alt="Discover" src="./assets/images/ic_discover.svg"/>
                        </li>
                        <li>
                            <img alt="American Express" src="./assets/images/ic_american_express.svg"/>
                        </li>
                    </ul>
                </div>
                <div class="col-md-5 col-12 float-left">
                    <div class="need-help">
                        <div class="col-3 float-left" style="padding: 0;">
                            <i class="fas fa-phone-volume"></i>
                        </div>
                        <div class="col-9 float-left" style="padding: 0;">
                            <h4>Need help? Calling us at</h4>
                            <a href="tel:1.808.529.9644">1.808.529.9644</a>
                        </div>
                    </div>
                </div>


                <div class="row col-12">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="creditcard">Credit Card Number</label>
                            <input aria-describedby="creditcard" class="form-control" id="creditcard"
                                   name="creditcard" v-model="cardData.number" v-validate="'required|credit_card'"
                                   placeholder="yyyy yyyy yyyy yyyy" type="text"/>
                            <span class="error-text">{{ errors.first('creditcard') ? 'The card number is invalid' : ''}}</span>
                        </div>
                    </div>
                </div>

                <div class="row col-12">
                    <div class="col-sm-4 float-left">
                        <div class="form-group">
                            <label for="verificationcode">Verification Code <i class="fa fa-info-circle"></i> </label>
                            <input aria-describedby="verificationcode" class="form-control" id="verificationcode"
                                   v-model="cardData.cvc" v-validate="'required|digits:3'"
                                   name="verificationcode"
                                   placeholder="" type="text"/>
                            <span class="error-text">{{ errors.first('verificationcode') ? 'The card CVC is invalid' : ''}}</span>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="row">
                            <div class="col-sm-6 ">
                                <div class="form-group">
                                    <label for="Month">Month</label>
                                    <input aria-describedby="Month"  class="form-control" id="month"
                                           max="12" min="1" name="month" placeholder="" type="number"
                                           v-model="cardData.month"
                                           v-validate="'required|numeric|min_value:1|max_value:12'"/>

                                    <span class="error-text">{{ errors.first('month') ? 'The month value is invalid' : ''}}</span>

                                    <div v-if="dateOfCard">
                                        <input ref="today" type="hidden" v-model="today"/>
                                        <input name="dateOfCard" type="hidden" v-model="dateOfCard" v-validate="'date_format:dd/MM/yyyy|after:today'"/>
                                        <span class="error-text">{{ errors.first('dateOfCard') ? 'Your card\'s expiration date is in the past' : ''}}</span>
                                    </div>


                                </div>
                            </div>
                            <div class="col-sm-6 ">
                                <div class="form-group">
                                    <label for="Year">Year</label>
                                    <select class="form-control" id="Year" name="year" v-model="cardData.year">
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row col-12" style="margin-top: 30px;">
                    <div class="col-sm-12">
                        <p class="info">Nest Egg Guru uses Stripe as a third party credit card processor; a certified
                            PCI Service Provider
                            Level
                            1. This is
                            the most stringent level of certification available. <strong>We store no credit card
                                information on
                                the
                                Nest Egg Guru web
                                servers in an effort to provide our customers with the highest level of
                                security.</strong></p>
                    </div>
                </div>

                <div class=" submit-wrap">
                    <input class="btn btn-change btn-back" name="back" type="submit" value="Back"/>
                    <input @click="onSubmit" class="btn btn-change" name="save" type="submit" value="Save"/>

                </div>
            </div>


        </div>
    </div>

</template>


<script src="./payment.js"></script>
<style lang="scss" src="./payment.scss"></style>
