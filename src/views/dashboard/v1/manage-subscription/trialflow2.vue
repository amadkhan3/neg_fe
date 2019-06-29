<template>
    <div class="content-inner trial-flow-2">
        <div>
            <b-modal size="lg" class="text-center" ref="myModalRef" hide-header hide-footer>
                <div class="d-block text-center">
                    <p class="modal-title">Cancel Trial Subscription for This App</p>
                    <p class="modal-content">Thank you for trying Nest Egg Guru. Click “Confirm” to cancel your free trial.</p>
                    <p style="margin-top:10px;" class="modal-content">Your credit card will not be charged and your access to the applications will be deactivated.</p>
                </div>
                <div class="modal-btn-box">
                    <b-button class="mt-3 modal-btns cancel-btn" variant="default" @click="hideModal">Cancel</b-button>
                    <b-button class="mt-2 modal-btns purchase-btn" variant="success" @click="hideModal">Confirm</b-button>
                </div>
            </b-modal>
        </div>
        <div>
            <b-modal size="lg" class="text-center" ref="congratsModal" hide-header hide-footer>
                <div class="d-block text-center">
                    <p class="modal-title">Congratulations!</p>
                    <p class="modal-content">You have activated a subscription to Nest Egg Guru’s College Savings app. Please check your email to know the ways you can use this app. </p>
                </div>
                <div class="modal-btn-box">
                    <!-- <b-button class="mt-3 modal-btns cancel-btn" variant="default" @click="hideModal2">Cancel</b-button> -->
                    <b-button class="mt-2 modal-btns purchase-btn" variant="success" @click="hideModal2">Ok</b-button>
                </div>
            </b-modal>
        </div>
        <div style="margin-left:20px">
        <p class="header-text">
            Select the free trial subscriptions you wish to activate or try all three apps as a bundled suite.
        </p>
        <div class="row Rectangle-195">
            <div class="centered-box col-lg-7">
                <img src="./assets/images/3-apps@2x.png" />
                <p class="icons-text">Buy all 3 apps as a bundle for</p>
            </div>
            <div class="centered-box border-left col-lg-5">
                <div style="display: flex;
          justify-content: center;
          align-items: center;">
                <span class="price">$300</span><span class="per-time">per year</span>
                </div>
                <b-button id="showBtn" class="btn btn-success active-btn">Active</b-button>
                <p style="margin-top:10px;"><span @click="showModal" class="cancel">Cancel Trial Subscription</span></p>
            </div>
        </div>
        <p class="notice">Promo codes only apply to the initial purchase of a 3-app bundle. They do not apply when adding apps to an existing one or two-app subscriptions.</p>
        </div>
        <div class="row">
            <div class="col centered-box package-box">
                <div class="img-box">
                    <img src="./assets/images/college-savings@3x.png" />
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
                <div class="price-box">
                    <span class="price">$135</span><span class="per-time">per year</span>
                </div>
                <div class="pkg-btn-box">
                    <button class="btn btn-default cancel-btn">Free Trial</button>
                </div>
                <!-- <span @click="showModal" class="cancel">Cancel Subscription</span> -->
            </div>
            <div class="col centered-box package-box">
                <div class="img-box">
                    <img src="./assets/images/Retirement-Savings-App@3x.png" />
                </div>
                <p class="package-title">Retirement Savings App</p>
                <div class="price-box">
                    <span class="price">$135</span><span class="per-time">per year</span>
                </div>
                <div class="pkg-btn-box">
                    <button class="btn btn-default cancel-btn">Free Trial</button>
                </div>
            </div>
            <div class="col centered-box package-box">
                <div class="img-box">
                    <img src="./assets/images/Retirement-Spending-App@3x.png" />
                </div>
                <p class="package-title">Retirement Spending App</p>
                <div class="price-box">
                    <span class="price">$135</span><span class="per-time">per year</span>
                </div>
                <div class="pkg-btn-box">
                    <button class="btn btn-default cancel-btn">Free Trial</button>
                </div>
            </div>
        </div>
        <p class="notice-heading">Subscription Upgrades</p>
        <p class="footer-notice">Advisors who initially subscribe to one or two Nest Egg Guru planning apps may upgrade to add the other apps) at any time during the year. The cost of the new apps will be pro-rated to the number of whole months remaining in your initial annual subscription and will renew at the full price on the initial anniversary date.</p>
        <p class="notice-heading">Subscription Downgrades</p>
        <p class="footer-notice">Subscribers who initially purchased the planning app bundle, but only wish to renew for one or two apps may do so within the 10 day period prior to the anniversary date. Cancellations are permitted within 10 days of the renewal date. Downgrades and refunds are not permitted on or after the renewal date.</p>
        
    </div>

</template>


<script>
    // @ is an alias to /sr
    import HelloWorld from "@/components/HelloWorld.vue";
    import Header from '@/components/backend/header/Header.vue';
    import Footer from '@/components/backend/footer/Footer.vue';

    export default {
        methods: {
        showModal() {
            this.$refs.myModalRef.show()
        },
        hideModal() {
            this.$refs.myModalRef.hide()
        },
          showModal2() {
            this.$refs.congratsModal.show()
        },
        hideModal2() {
            this.$refs.congratsModal.hide()
        },
        olduserflow5() {
            this.$router.push({ path: '/dashboard/olduserflow5' })
        },
        olduserflow1() {
            this.$router.push({ path: '/dashboard/olduserflow1' })
        }
    },
        name: "trialflow2",
        components: {
            HelloWorld,
            Header,
            Footer
        }
    };

</script>
<style lang="scss" src="./trialflow2.scss"></style>