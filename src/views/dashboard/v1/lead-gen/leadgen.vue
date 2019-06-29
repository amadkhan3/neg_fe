<template>

    <div class="content-inner lead-gen col-lg-10 offset-lg-1">
        <div>
        <b-modal size="lg" ref="myModalRef" hide-header hide-footer>
            <div style="padding:20px;" class="d-block">
                <p class="modal-title">Email Confirm</p>
                <p class="modal-content">Please complete this form in order to receive your first results report. You will only be prompted to enter this info one time. While the advisor who has provided this app for your use will receive notification that a report has been delivered, the advisor will not receive a copy of the report itself. The advisor’s contact information will appear on the report if you have questions.</p>
                <div>
                    <b-form style="margin-top:20px;">
                        <div class="row">
                            <div class="col">
                                <b-form-group
                                    label="First Name*"
                                    label-for="fname"
                                    description=""
                                >
                                    <b-form-input
                                    id="fname"
                                    placeholder="First Name" />
                                </b-form-group>
                            </div>
                            <div class="col">
                                <b-form-group
                                    
                                    label="Last Name*"
                                    label-for="lname"
                                    description=""
                                >
                                    <b-form-input
                                    id="lname"
                                    placeholder="Last Name" />
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <b-form-group
                                    label="Email"
                                    label-for="email"
                                    description=""
                                >
                                    <b-form-input
                                    id="email"
                                    type="email"
                                    placeholder="Email" />
                                </b-form-group>
                            </div>
                        </div>
                    </b-form>
                </div>
            </div>
            <div class="modal-btn-box">
                <b-button class="mt-3 btns" variant="default" @click="hideModal">Cancel</b-button>
                <b-button class="mt-2 btns" variant="success" @click="hideModal">Confirm</b-button>
            </div>
        </b-modal>
    </div>
        <a href="#" style="float:right;" v-bind:class="{ active: isActive }" id="btn-toggle" @click="handleToggle">
            <img src="./assets/images/bt_Switch_on.svg" />
            <img src="./assets/images/bt_Switch_off.svg" />
        </a>
        <!--<b-button size="sm" style="float:right;" @click="handleToggle">Toggle</b-button>-->
        <div v-if="pageVisible == true">
            <p class="headings">Lead Gen Tool Status</p>
            <p class="leadgen-content">When turned on, this is a useful, unintrusive tool that will capture the names and email addresses of prospective clients who visit your site and run Nest Egg Guru</p>
            <p class="headings">How it works:</p>
            <p class="leadgen-content">
                The first time a site visitor inputs data into Nest Egg Guru and clicks the "SUBMIT" button, a popup-up notice will appear requesting their first name, last name, and email address. <span class="popup-link">[SEE POP-UP MESSAGE]</span> Upon entering this information, the first results report will be delivered to the visitor's email inbox. Site visitors will only be prompted to enter this data one time. Thereafter, a planted cookie will recognize that they have run the app before.

                Each time a new site visitor enters his/her data into the pop-up form, you will receive an email notification that reads, "Congratulations, your subscription to Nest Egg Guru has produced a new lead!" and it will provide you with the person's name and email address. This data will also automatically populate into the Leads Record below.
            </p>
            <br>
            <p class="headings">Leads Record</p>
                <div style="" class="export-btn" @click="showModal">
                    <img src="./assets/images/ic_export-file@3x.png" />
                    &nbsp;
                    <span>Export csv</span>
                </div>
                <!-- <b-button size="sm" style="float:right;" @click="showModal">Export</b-button> -->
            <br>
            <div style="border: 1px solid #eee;margin-top: 20px;
    max-height: 200px;
    overflow-y: auto;">
                <b-table class="lead-table" small style="font-size: 16px;"  fixed :items="items" />
            </div>
        </div>
    </div>

</template>


<script>
    // @ is an alias to /sr
    import HelloWorld from "@/components/HelloWorld.vue";
    import Header from '@/components/backend/header/Header.vue';
    import Footer from '@/components/backend/footer/Footer.vue';

    export default {
        data() {

            return {
                isActive: false,
                modalVisible: false,
                pageVisible: true,
                items: [
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                    { Date: '11/20/2018', Name: 'Kalani Huerta', Email: 'Kalani Huerta@gamil.com' },
                ]
            };
        },
        methods: {
            showModal() {
                this.$refs.myModalRef.show()
            },
            hideModal() {
                this.$refs.myModalRef.hide()
            },
            handleToggle() {
                this.isActive = !this.isActive;
                // if(this.pageVisible == false) {
                //     this.pageVisible = true;
                // }
                // else {
                //     this.pageVisible = false;
                // }
            }
        },
        name: "leadgen",
        components: {
            HelloWorld,
            Header,
            Footer
        }
    };

</script>
<style lang="scss" src="./leadgen.scss"></style>


