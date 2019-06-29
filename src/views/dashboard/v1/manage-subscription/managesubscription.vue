<template>
    <div class="content-inner manage-subscription">

        <div>
            <b-modal centered class="text-center" hide-footer hide-header ref="cancelModal" size="lg">
                <div class="d-block text-center">
                    <p class="modal-title">Cancel Trial Subscription for This App</p>
                    <p class="modal-content">Thank you for trying Nest Egg Guru. Click “Confirm” to cancel your free
                        trial.</p>
                    <p class="modal-content" style="margin-top:10px;">Your credit card will not be charged and your
                        access to the applications will be deactivated.</p>
                </div>
                <div class="modal-btn-box">
                    <b-button @click="$refs.cancelModal.hide()" class="mt-3 modal-btns cancel-btn"
                              variant="default">Cancel
                    </b-button>
                    <b-button @click="cancelSubCallback" class="mt-2 modal-btns purchase-btn" variant="success">
                        Confirm
                    </b-button>
                </div>
            </b-modal>
        </div>
        <div>
            <b-modal centered class="text-center" hide-footer hide-header ref="congratsModal" size="lg">
                <div class="d-block text-center">
                    <p class="modal-title">Congratulations!</p>
                    <p class="modal-content">You have activated a subscription to Nest Egg Guru’s {{activeAppName}}
                        app. Please check your email to know the ways you can use this app. </p>
                </div>
                <div class="modal-btn-box">
                    <!-- <b-button class="mt-3 modal-btns cancel-btn" variant="default" @click="hideModal2">Cancel</b-button> -->
                    <b-button @click="$refs.congratsModal.hide()" class="mt-2 modal-btns purchase-btn"
                              variant="success">Ok
                    </b-button>
                </div>
            </b-modal>
        </div>


        <b-modal centered class="text-center" hide-footer hide-header ref="invalidCardModal" size="lg">
            <div class="d-block text-center">
                <p class="modal-title">Error!</p>
                <p class="modal-content">Your card is invalid</p>
            </div>
            <div class="modal-btn-box">
                <!-- <b-button class="mt-3 modal-btns cancel-btn" variant="default" @click="hideModal2">Cancel</b-button> -->
                <b-button @click="gotoAddCard" class="mt-2 modal-btns purchase-btn"
                          variant="success">Ok
                </b-button>
            </div>
        </b-modal>


        <loading :active.sync="isLoading"
                 :is-full-page="false" color="#007bff"
                 loader="dots"></loading>

        <div v-if="isLoaded">

            <div style="margin-left:20px">
                <p class="header-text">
                    Select the free trial subscriptions you wish to activate or try all three apps as a bundled suite.
                </p>


                <div :class="isValidActiveSub(bundleSub) ? 'w-100' : ''" class="row Rectangle-195">
                    <div :class="isValidActiveSub(bundleSub) ? 'col-lg-4' : 'col-lg-7'" class="centered-box ">
                        <img src="./assets/images/3-apps@2x.png"/>
                        <p class="icons-text">Buy all 3 apps as a bundle for</p>
                    </div>
                    <div :class="isValidActiveSub(bundleSub) ? 'col-lg-4' : 'col-lg-5'" class="centered-box border-left  text-center">
                        <div style="display: flex;
          justify-content: center;
          align-items: center;">
                            <span class="price">$300</span><span class="per-time">per year</span>
                        </div>

                        <div v-if="isDisableBundleSub">
                            <button class="btn btn btn-default cancel-btn btn-secondary" style="border: none;" type="button">purchase</button>
                        </div>

                        <div v-else>
                            <div>
                                <div v-if="bundleSub">

                                    <div v-if="!isValidActiveSub(bundleSub)">
                                        <p class="expiry-msg">You have expired the trial. Let buy and enjoy this app.
                                        <p>
                                        <div class="pkg-btn-box">
                                            <button @click="trialBundleApp" class="btn btn-success purchase-btn">Purchase
                                            </button>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div class="pkg-btn-box">
                                            <button class="btn btn-success active-btn">Active</button>
                                        </div>
                                        <span @click="cancelSubForm(bundleSub.id)"
                                              class="cancel">Cancel Trial Subscription</span>

                                        <div class="active-time bundle-app expiry-msg position-absolute"
                                             v-if="bundleSub.status === 'active'">
                                            Active to: {{getTime(bundleSub, bundleSub)}}
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <b-button @click="trialBundleApp" class="btn btn-danger trial-btn" id="showBtn">Free
                                        Trial
                                    </b-button>
                                </div>
                            </div>
                        </div>



                        <!--<b-button id="showBtn" class="btn btn-success purchase-btn">purchase</b-button>-->
                    </div>

                    <div class="centered-box border-left col-lg-4" v-if="isValidActiveSub(bundleSub)">
                        <div style="padding-left: 20px; font-size: 12px;"><p>Your annual subscription is set to renew
                            on</p>
                            <p><strong>{{getTime(bundleSub)}}</strong></p>
                            <p>You will receive a reminder notification 10 days prior to this date</p></div>
                    </div>
                </div>





                <p class="notice">Promo codes only apply to the initial purchase of a 3-app bundle. They do not apply
                    when adding apps to an existing one or two-app subscriptions.</p>
            </div>
            <div class="row">
                <div class="col centered-box package-box">
                    <div class="img-box">
                        <img src="./assets/images/college-savings@3x.png"/>
                    </div>
                    <p class="package-title">College Savings App</p>
                    <!-- <div class="">
                        <p>Your annual subscription is set to renew on</p>
                        <p><strong>dd/mm/yyyy</strong></p>
                        <p>You will receive a reminder  notification 10 days prior to this date</p>
                    </div>
                    <div class="pkg-btn-box">
                        <button class="btn btn-success active-btn" @click="showModal2">Active</button>
                    </div> -->

                    <!--<span @click="showModal" class="cancel">Cancel Subscription</span>-->


                    <div v-if="isBundleSubInActive">
                        <div class="price-box">
                            <span class="price">$135</span><span class="per-time">per year</span>
                        </div>
                        <div class="pkg-btn-box">
                            <button class="btn btn-default cancel-btn">Free Trial</button>
                        </div>
                    </div>

                    <div v-else>
                        <div v-if="collegeSub">

                            <div v-if="!isValidActiveSub(collegeSub)">
                                <div class="price-box">
                                    <span class="price">$135</span><span class="per-time">per year</span>
                                </div>
                                <p class="expiry-msg">You have expired the trial. Let buy and enjoy this app.
                                <p>
                                <div class="pkg-btn-box">
                                    <button @click="trialCollegeSavingApp" class="btn btn-success purchase-btn">
                                        Purchase
                                    </button>
                                </div>
                            </div>
                            <div v-else>

                                <div class="">
                                    <p>Your annual subscription is set to renew on</p>
                                    <p><strong>{{getTime(collegeSub)}}</strong></p>
                                    <p>You will receive a reminder notification 10 days prior to this date</p>
                                </div>


                                <div class="pkg-btn-box">
                                    <button class="btn btn-success active-btn">Active</button>
                                </div>
                                <span @click="cancelSubForm(collegeSub.id)"
                                      class="cancel">Cancel Trial Subscription</span>
                            </div>
                        </div>

                        <div v-else>
                            <div class="price-box">
                                <span class="price">$135</span><span class="per-time">per year</span>
                            </div>
                            <div class="pkg-btn-box">
                                <button @click="trialCollegeSavingApp" class="btn btn-danger trial-btn">Free Trial
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col centered-box package-box">
                    <div class="img-box">
                        <img src="./assets/images/Retirement-Savings-App@3x.png"/>
                    </div>
                    <p class="package-title">Retirement Savings App</p>
                    <!-- <div class="">
                        <p>Your annual subscription is set to renew on</p>
                        <p><strong>dd/mm/yyyy</strong></p>
                        <p>You will receive a reminder  notification 10 days prior to this date</p>
                    </div>
                    <div class="pkg-btn-box">
                        <button class="btn btn-success active-btn" @click="showModal2">Active</button>
                    </div> -->

                    <!--<span @click="showModal" class="cancel">Cancel Subscription</span>-->


                    <div v-if="isBundleSubInActive">
                        <div class="price-box">
                            <span class="price">$135</span><span class="per-time">per year</span>
                        </div>
                        <div class="pkg-btn-box">
                            <button class="btn btn-default cancel-btn">Free Trial</button>
                        </div>
                    </div>

                    <div v-else>
                        <div v-if="retirementSavingSub">

                            <div v-if="!isValidActiveSub(retirementSavingSub)">
                                <div class="price-box">
                                    <span class="price">$135</span><span class="per-time">per year</span>
                                </div>
                                <p class="expiry-msg">You have expired the trial. Let buy and enjoy this app.
                                <p>
                                <div class="pkg-btn-box">
                                    <button @click="trialRetirementSavingApp" class="btn btn-success purchase-btn">
                                        Purchase
                                    </button>
                                </div>
                            </div>
                            <div v-else>

                                <div class="">
                                    <p>Your annual subscription is set to renew on</p>
                                    <p><strong>{{getTime(retirementSavingSub)}}</strong></p>
                                    <p>You will receive a reminder notification 10 days prior to this date</p>
                                </div>

                                <div class="pkg-btn-box">
                                    <button class="btn btn-success active-btn">Active</button>
                                </div>
                                <span @click="cancelSubForm(retirementSavingSub.id)" class="cancel">Cancel Trial Subscription</span>

                            </div>
                        </div>

                        <div v-else>
                            <div class="price-box">
                                <span class="price">$135</span><span class="per-time">per year</span>
                            </div>
                            <div class="pkg-btn-box">
                                <button @click="trialRetirementSavingApp" class="btn btn-danger trial-btn">Free Trial
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col centered-box package-box">
                    <div class="img-box">
                        <img src="./assets/images/Retirement-Spending-App@3x.png"/>
                    </div>
                    <p class="package-title">Retirement Spending App</p>
                    <!-- <div class="">
                        <p>Your annual subscription is set to renew on</p>
                        <p><strong>dd/mm/yyyy</strong></p>
                        <p>You will receive a reminder  notification 10 days prior to this date</p>
                    </div>
                    <div class="pkg-btn-box">
                        <button class="btn btn-success active-btn" @click="showModal2">Active</button>
                    </div> -->

                    <!--<span @click="showModal" class="cancel">Cancel Subscription</span>-->


                    <div v-if="isBundleSubInActive">
                        <div class="price-box">
                            <span class="price">$135</span><span class="per-time">per year</span>
                        </div>
                        <div class="pkg-btn-box">
                            <button class="btn btn-default cancel-btn">Free Trial</button>
                        </div>
                    </div>

                    <div v-else>
                        <div v-if="retirementSpendingSub">
                            <div v-if="!isValidActiveSub(retirementSpendingSub)">
                                <div class="price-box">
                                    <span class="price">$135</span><span class="per-time">per year</span>
                                </div>
                                <p class="expiry-msg">You have expired the trial. Let buy and enjoy this app.
                                <p>
                                <div class="pkg-btn-box">
                                    <button @click="trialRetirementSpendApp" class="btn btn-success purchase-btn">
                                        Purchase
                                    </button>
                                </div>
                            </div>
                            <div v-else>

                                <div class="">
                                    <p>Your annual subscription is set to renew on</p>
                                    <p><strong>{{getTime(retirementSpendingSub)}}</strong></p>
                                    <p>You will receive a reminder notification 10 days prior to this date</p>
                                </div>


                                <div class="pkg-btn-box">
                                    <button class="btn btn-success active-btn">Active</button>
                                </div>
                                <span @click="cancelSubForm(retirementSpendingSub.id)" class="cancel">Cancel Trial Subscription</span>
                            </div>
                        </div>

                        <div v-else>
                            <div class="price-box">
                                <span class="price">$135</span><span class="per-time">per year</span>
                            </div>
                            <div class="pkg-btn-box">
                                <button @click="trialRetirementSpendApp" class="btn btn-danger trial-btn">Free Trial
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="notice-heading">Subscription Upgrades</p>
            <p class="footer-notice">Advisors who initially subscribe to one or two Nest Egg Guru planning apps may
                upgrade to add the other apps) at any time during the year. The cost of the new apps will be pro-rated
                to the number of whole months remaining in your initial annual subscription and will renew at the full
                price on the initial anniversary date.</p>
            <p class="notice-heading">Subscription Downgrades</p>
            <p class="footer-notice">Subscribers who initially purchased the planning app bundle, but only wish to renew
                for one or two apps may do so within the 10 day period prior to the anniversary date. Cancellations are
                permitted within 10 days of the renewal date. Downgrades and refunds are not permitted on or after the
                renewal date.</p>

        </div>

    </div>

</template>

<script src="./manage.js"></script>

<!--<script>-->
<!--// @ is an alias to /sr-->
<!--import HelloWorld from "@/components/HelloWorld.vue";-->
<!--import Header from '@/components/backend/header/Header.vue';-->
<!--import Footer from '@/components/backend/footer/Footer.vue';-->

<!--export default {-->
<!--methods: {-->
<!--showModal() {-->
<!--this.$refs.myModalRef.show()-->
<!--},-->
<!--hideModal() {-->
<!--this.$refs.myModalRef.hide()-->
<!--},-->
<!--showModal2() {-->
<!--this.$refs.congratsModal.show()-->
<!--},-->
<!--hideModal2() {-->
<!--this.$refs.congratsModal.hide()-->
<!--},-->
<!--olduserflow5() {-->
<!--this.$router.push({ path: '/dashboard/olduserflow5' })-->
<!--},-->
<!--olduserflow1() {-->
<!--this.$router.push({ path: '/dashboard/olduserflow1' })-->
<!--}-->
<!--},-->
<!--name: "managesubscription",-->
<!--components: {-->
<!--HelloWorld,-->
<!--Header,-->
<!--Footer-->
<!--}-->
<!--};-->

<!--</script>-->
<style lang="scss" src="./managesubscription.scss"></style>
