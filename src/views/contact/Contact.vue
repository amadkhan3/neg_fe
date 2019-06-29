<template>
    <div id="app" class="container">
        <Header></Header>
        <div class="container contact-page">
            <div class="row contactDiv1 relative">
                <img class="background-img" src="./assets/images/contact-bg-1.png"/>

                <h2 class="fs-30">Want to schedule a one-on-one demo or just talk shop? <br />
                    We would love to hear from you</h2>
            </div>

            <div class="row contactDiv2 triple-gap-top triple-gap-bottom">
                <div class="container cont-form">
                <div class="row">
                    <div class="col-lg-6 triple-pad-right formDiv">

                        <form action="">
                            <div class="container">
                                <div class="row contact-form pad-bottom">
                                <div class="col-lg-6 fieldDiv double-padded">
                                    <label>First Name</label>
                                    <input type="text" class="txt"/>
                                </div>
                                <div class="col-lg-6 fieldDiv double-padded">
                                    <label>Last Name</label>
                                    <input type="text" class="txt"/>
                                </div>
                                <div class="col-lg-6 fieldDiv double-padded">
                                    <label>Email</label>
                                    <input type="email" class="txt"/>
                                </div>
                                <div class="col-lg-6 fieldDiv double-padded">
                                    <label>Phone</label>
                                    <input type="text" class="txt"/>
                                </div>
                                <div class="col-lg-12 fieldDiv double-padded">
                                    <label>Subject Line</label>
                                    <v-select :options="[
                                    {label: 'Schedule Demo', value: 'scheduleDemo'},
                                    {label: 'Billing', value: 'billing'},
                                    {label: 'SignUp and Renewal', value: 'signup'},
                                    {label: 'Suggestion', value: 'suggestion'},
                                    {label: 'Technical Difficulty', value: 'technical Difficulty'},
                                    {label: 'Other', value: 'other'},
                                    ]" :value="subjectData">
                                        <!--<option></option>-->
                                        <!--<option>Schedule Demo</option>-->
                                        <!--<option>Billing</option>-->
                                        <!--<option>Signup and Renewal</option>-->
                                        <!--<option>Suggestion</option>-->
                                        <!--<option>Techinal Difficulty</option>-->
                                        <!--<option>Other</option>-->


                                        <template slot="option" slot-scope="option">
                                            <span class="align-middle">{{ option.label }}</span>
                                        </template>
                                    </v-select>
                                </div>
                                <div class="col-lg-12 fieldDiv double-padded">
                                    <label>Message</label>
                                    <textarea class="txtArea"></textarea>
                                </div>

                                    <div class="col-lg-12 fieldDiv" style="padding: 40px 15px;">
                                    <input type="button" value="Submit" class="bTn pull-right bg-green color-white"/>
                                </div>
                            </div>
                            </div>

                        </form>
                    </div>
                    <div class="col-lg-6 triple-pad-left infoDiv cont-info ">
                        <div class="full border-gray radius5 padding-25">
                            <h3 class="color-green fs-22 triple-gap-bottom contact-us">CONTACT US</h3>
                            <div class="full triple-gap-bottom">
                                <h4 class="fs-20 bold-font"><img src="./assets/images/phoneIco.png"/>Phone number</h4>
                                <span class="fs-18 small">(808) 529-9644</span>
                            </div>
                            <div class="full triple-gap-bottom">
                                <h4 class="fs-20 bold-font"><img src="./assets/images/emailIco.png"/>Email</h4>
                                <span class="fs-18 color-green small">guru@NestEggGuru.com</span>
                            </div>
                            <div class="full">
                                <div class="full triple-gap-bottom f-l color-grey notes">
                                    <span>“A problem with Monte Carlo tools that is exacerbated today is that they can often
                                    paint an unrealistic picture of returns. For example, an average expected return for
                                    cash of 2% is unrealistic (since the return on cash today is closer to 0%).
                                    This carries important implications for sequence risk for retirees, because the order
                                    you incur returns has a significant impact on the potential success of a given
                                        strategy.”</span>
                                    <strong>- Wade Pfau, Ph.D.</strong>
                                </div>
                                <div class="full triple-gap-bottom f-l color-grey notes">
                                    <span>“We need to recognize that in planning our clients' future, we're dealing with ambiguity,
                                    not risk…The bottom line for investors today is being less concerned with the probability
                                    of success and more concerned with the consequences of failure. And the bottom line
                                    for brokers, reps and other financial advisors is finding ways to model portfolios
                                    realistically.”</span>
                                    <strong>- Harold Evensky, CFP, AIF</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /sr
    import HelloWorld from "@/components/HelloWorld.vue";
    import Header from '@/components/header/Header.vue';
    import Footer from '@/components/footer/Footer.vue';

    export default {
        name: "contact",
        data() {
            return {
                subjectData: {label: 'Schedule Demo', value: 'scheduleDemo'}
            }
        },
        components: {
            HelloWorld,
            Header,
            Footer
        }
    };
</script>

<style lang="scss" src="./Contact.scss"></style>
