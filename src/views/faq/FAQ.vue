<template>
    <div class="container faq-page" id="app">
    <Header></Header>
    <div class="faq-page-contain main-page w-100">
        <section class="main-banner with-padding">
            <div class="row align-items-center">
                <div class="col-sm-8">
                    <div class="banner-title">Frequently Asked Questions
                    </div>
                    <div class="banner-desc">The most common questions about Nest Egg Guru. If you still have questions,
                        <div class="email-us">
                            <a href="mailto: trial@nesteggguru.com">email us.</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-1 with-padding">
            <div class="row">
                <div class="col-sm-4">
                    <h6 class="small-title">I. INCORPORATING NEST EGG GURU INTO YOUR PRACTICE</h6>
                </div>
                <div class="col-sm-4">
                    <h6 class="small-title">II. ABOUT YOUR SUBSCRIPTION</h6>
                </div>
                <div class="col-sm-4">
                    <h6 class="small-title">III. ABOUT THE COLLEGE AND RETIREMENT PLANNING APPS</h6>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <ul class="list-unstyled faq-list">
                        <li>What value does nest egg guru add to my practice?</li>
                        <li>Has nest egg guru been approved by finra?</li>
                        <li>Where should nest egg guru appear on my website?</li>
                        <li>Can/must subscribers use the nest egg guru logo?</li>
                        <li>Can nest egg guru boost traffic to my website?</li>
                        <li>Can you show me an example of how nest egg guru appears on a real advisory website?</li>
                        <li>Will nest egg guru replace my financial planning software?</li>
                        <li>Does nest egg guru integrate with account aggregation software?</li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <ul class="list-unstyled faq-list">
                        <li>Can i white label my subscription to nest egg guru?</li>
                        <li>How long does it take from the time i subscribe to begin using the app?</li>
                        <li>How easy is to edit my account profile?</li>
                        <li>How do i get nest egg guru’s apps into my website?</li>
                        <li>Can you recommend a good call to action?</li>
                        <li>How does the lead generation feature work?</li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <ul class="list-unstyled faq-list">
                        <li>How should advisors use nest egg guru’s college and retirement planning apps?</li>
                        <li>Who are the ideal users of nest egg guru’s college and retirement planning apps?</li>
                        <li>What is the biggest difference between nest egg guru and other retirement planning apps that
                            employ monte carlo simulations?
                        </li>
                        <li>What are some of the other features that distinguish nest egg guru from other college and
                            retirement planning aps?
                        </li>
                        <li>What are the underlying components of the stock, bond, and cash allocations that are used in
                            the simulations?
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section-2 with-padding">
            <div class="row title text-center">
                <div class="col-sm-12">
                    <h5 class="display-inline-block">I. HOW TO INCORPORATE NEST EGG GURU INTO MY PRACTICE</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div role="tablist" class="neg-accordion">

                        <b-card :key="`${accordionPart1Key}_${index}`" v-for="(item, index) in listQuestions[0]" no-body
                                :class="shownAccordionId === `${accordionPart1Key}_${index}` ? 'shown' : ''">
                            <b-card-header header-tag="div" class="" role="tab">
                                <span class="panel-header" href="#" v-b-toggle="`${accordionPart1Key}_${index}`"
                                      variant="info">{{item.title}}</span>
                            </b-card-header>
                            <b-collapse @hide="onHiddenAccordionId(`${accordionPart1Key}_${index}`)"
                                        @show="setActiveAccordionId(`${accordionPart1Key}_${index}`)"
                                        :id="`${accordionPart1Key}_${index}`" :accordion="`my-accordion-0`"
                                        role="tabpanel">
                                <b-card-body>
                                    <p class="card-text" v-html="item.value">
                                    </p>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                    </div>
                </div>
            </div>
        </section>

        <section class="section-2 with-padding">
            <div class="row title text-center">
                <div class="col-sm-12">
                    <h5 class="display-inline-block">II. ABOUT MY SUBSCRIPTION</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div role="tablist" class="neg-accordion">

                        <b-card :key="`${accordionPart2Key}_${index}`" v-for="(item, index) in listQuestions[1]" no-body
                                :class="shownAccordionId === `${accordionPart2Key}_${index}` ? 'shown' : ''">
                            <b-card-header header-tag="div" class="" role="tab">
                                <span class="panel-header" href="#" v-b-toggle="`${accordionPart2Key}_${index}`"
                                      variant="info">{{item.title}}</span>
                            </b-card-header>
                            <b-collapse @hide="onHiddenAccordionId(`${accordionPart2Key}_${index}`)"
                                        @show="setActiveAccordionId(`${accordionPart2Key}_${index}`)"
                                        :id="`${accordionPart2Key}_${index}`" :accordion="`my-accordion-0`"
                                        role="tabpanel">
                                <b-card-body>
                                    <p class="card-text" v-html="item.value">
                                    </p>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                    </div>
                </div>
            </div>
        </section>

        <section class="section-2 with-padding">
            <div class="row title text-center">
                <div class="col-sm-12">
                    <h5 class="display-inline-block">III. ABOUT THE COLLEGE AND RETIREMENT APPS
                    </h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div role="tablist" class="neg-accordion">

                        <b-card :key="`${accordionPart3Key}_${index}`" v-for="(item, index) in listQuestions[2]" no-body
                                :class="shownAccordionId === `${accordionPart3Key}_${index}` ? 'shown' : ''">
                            <b-card-header header-tag="div" class="" role="tab">
                                <span class="panel-header" href="#" v-b-toggle="`${accordionPart3Key}_${index}`"
                                      variant="info">{{item.title}}</span>
                            </b-card-header>
                            <b-collapse @hide="onHiddenAccordionId(`${accordionPart3Key}_${index}`)"
                                        @show="setActiveAccordionId(`${accordionPart3Key}_${index}`)"
                                        :id="`${accordionPart3Key}_${index}`"
                                        :accordion="`my-accordion-0`" role="tabpanel">
                                <b-card-body>
                                    <p class="card-text" v-html="item.value">
                                    </p>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                    </div>
                </div>
            </div>
        </section>
    </div>
    <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/header/Header.vue';
    import Footer from '@/components/footer/Footer.vue';

    export default {
        name: "faq",
        components: {
            Header,
            Footer
        },
        data() {
            return {
                accordionPart1Key: 'key_part1',
                accordionPart2Key: 'key_part2',
                accordionPart3Key: 'key_part3',
                shownAccordionId: null,
                listQuestions: [
                    [
                        {
                            title: 'WHAT VALUE DOES NEST EGG GURU ADD TO MY PRACTICE?',
                            value: 'The purpose of all present and future apps produced by Nest Egg Guru is to help FAs increase engagement with the clients and prospects and to help cement the advisor-client relationship.<br/>' +
                                '<br/>' +
                                'Nest Egg Guru has observed that the financial advisory space is undergoing rapid evolution and disruption. Clients and prospects are becoming more sophisticated and increasingly demand tangible value for the fees they pay. Additionally, they are no longer impressed with book-length “financial plans” that they will never read after leaving your office. Instead, they want to be educated and actively engaged in the planning process. Our apps help FAs address this paradigm shift.'
                        },
                        {
                            title: 'HAS NEST EGG GURU BEEN APPROVED BY FINRA?',
                            value: 'Nest Egg Guru’s software has been submitted to FINRA by subscribers and was deemed to be permitted for use. An example of a FINRA review letter is available upon request.<br/>' +
                                '<br/>' +
                                'For reference, FINRA does not “approve” any advisor software, nor will the agency review software submitted by the company that produces it. FINRA will only review software submitted by FINRA member B-Ds. Advisors and B-Ds should be wary of any software vendor that implies that its software has been “FINRA-approved.”'
                        },
                        {
                            title: 'WHERE SHOULD NEST EGG GURU APPEAR ON MY WEBSITE?',
                            value: 'Nest Egg Guru’s apps are designed to be 100% client-facing. As such they are intended to be featured prominently on the HOME page of the advisor’s website to increase client and prospect engagement and to showcase the advisor’s value-added services and expertise. [NOTE: Placing the CTA for the Nest Egg Guru college and retirement apps on any website page other than the home page is likely to significantly reduce the usage and marketing effectiveness of the applications.]<br/>' +
                                '<br/>'
                        },
                        {
                            title: 'CAN/MUST SUBSCRIBERS USE THE NEST EGG GURU LOGO?',
                            value: 'All subscribers are absolutely welcome to use the Nest Egg Guru logo in their website design schemes though there is no requirement to do so. Advisors are free to custom design how Nest Egg Guru’s apps are presented on their websites.<br/>' +
                                '<br/>'
                        },
                        {
                            title: 'CAN NEST EGG GURU BOOST TRAFFIC TO MY WEBSITE?',
                            value: 'Absolutely, especially if you use the embed code. A primary purpose of client/prospect engagement software is to encourage visitors to your website to stay on your site instead of bouncing quickly to the next one. When visitors to your site are using the apps on your site, it will signal search engines that you have worthy content and will boost our search engine optimization (SEO).<br/>' +
                                '<br/>' +
                                'As you will see, Nest Egg Guru also has lead generation functionality that may be turned on or off depending upon the FA’s preference.<br/>' +
                                '<br/>'
                        },
                        {
                            title: 'CAN YOU SHOW ME AN EXAMPLE OF HOW NEST EGG GURU APPEARS ON A REAL ADVISORY WEBSITE?',
                            value: 'Go to <a href="www.FPHawaii.com">www.FPHawaii.com</a> . Nest Egg Guru is embedded on the home page (scroll down ) and may be opened by clicking the CTA “TEST YOUR PREPAREDNESS”.<br/>' +
                                '<br/>' +
                                'The applications are also included on the “Client Resources” page of the Financial Planning Hawaii website. On this page they are presented as three separate subdomain links.'
                        },
                        {
                            title: 'WILL NEST EGG GURU REPLACE MY FINANCIAL PLANNING SOFTWARE?',
                            value: 'No. Nest Egg Guru is not intended to replace complex, comprehensive advisor-facing financial planning software.<br/>' +
                                '<br/>' +
                                'We describe Nest Egg Guru’s college savings, retirement savings, and retirement spending apps as “client education and engagement” software, rather than planning software. Nest Egg Guru is intended to make complex planning concepts tangible and to make it easy for users to test the relative impact of changing variables that are within their control.<br/>' +
                                '<br/>' +
                                'If anything, Nest Egg Guru is affordably priced to complement advisors’ broader, more expensive deep-dive financial planning software.'
                        },
                        {
                            title: 'DOES NEST EGG GURU INTEGRATE WITH ACCOUNT AGGREGATION SOFTWARE?',
                            value: 'Not yet, though this is a feature that we are exploring.<br/>' +
                                '<br/>'
                        }
                    ],
                    [
                        {
                            title: 'CAN I WHITE LABEL MY SUBSCRIPTION TO NEST EGG GURU?',
                            value: 'Yes. Our goal in creating Nest Egg Guru was to give advisors a high degree of flexibility to white-label the application. FAs have complete control over how the applications appear on their websites, and of how their contact info is presented to advisors.<br/>' +
                                '<br/>' +
                                'When a clients or prospects run the application, they will see your logo. When the save as a PDF or print their results they will see your complete contact information and bio. Your firm’s custom disclosure info will appear whenever the application is running and is printed on all reports.'
                        },
                        {
                            title: 'HOW LONG DOES IT TAKE FROM THE TIME I SUBSCRIBE TO BEGIN USING THE APP?',
                            value: 'You may begin using the applications immediately after making payment. When you sign into your account at NestEggGuru.com, you will see at the top of the “MY ACCOUNT” page a line that reads, “USE THIS LINK TO BEGIN RUNNING YOUR WHITE LABEL SUBSCRIPTION TO NEST EGG GURU https://.nesteggguru.com “ This URL (also called a “subdomain link”) offers immediate access to the college and retirement planning applications and may be shared with clients and prospects via email.<br/>' +
                                '<br/>' +
                                'In terms of how long it takes to get Nest Egg Guru incorporated into your website, it depends upon the responsiveness and availability of your website designer, but the integration itself is simple. Nest Egg Guru’s service team is available to communicate with your website designer as needed.'
                        },
                        {
                            title: 'HOW EASY IS TO EDIT MY ACCOUNT PROFILE?',
                            value: 'To make changes to your profile, simply click on the green “EDIT” button when you are signed in to your account. Click the green “SAVE” button when you are done making changes.<br/>' +
                                '<br/>' +
                                'You may edit your contact information, bio, logo and firm disclosure information any time.<br/>' +
                                '<br/>'
                        },
                        {
                            title: 'HOW DO I GET NEST EGG GURU’S APPS INTO MY WEBSITE?',
                            value: 'When you sign in to your account at NestEggGuru.com, you will see that we provide two ways to build the apps into your advisor website. The easiest way is to simply give your Nest Egg Guru URL [https://.nesteggguru.com ] to your website designer to link to an image or call-to-action (CTA) on your home page.<br/>' +
                                '<br/>' +
                                'Additionally, we also provide the option of hard-coding Nest Egg Guru into your website via the “EMBED CODE” that is also provided on your account page. The advantage of using the embed code is that it can help with search engine optimization by keeping the user of the app on your website. In contrast, the URL actually runs the application on Nest Egg Guru’s website. Most website designers should have no problem implementing the embed code. If questions arise, you are welcome to have your website designer contact us.'
                        }, {
                        title: 'CAN YOU RECOMMEND A GOOD CALL TO ACTION?',
                        value: 'Examples of strong CTAs that may help boost client and prospect engagement include the following –<br/>' +
                            '<br/>' +
                            '<strong>TEST YOUR PREPAREDNESS<br/>' +
                            'WILL I HAVE ENOUGH?<br/>' +
                            'ARE YOU PREPARED?<br/>' +
                            'IF THE MARKETS GO BADLY, WILL I BE OKAY?</strong>'
                    },
                        {
                            title: 'HOW DOES THE LEAD GENERATION FEATURE WORK?',
                            value: 'The lead gen functionality is turned off in the default setting for Nest Egg Guru’s college and retirement planning apps. To turn it on, users may click the green “EDIT” button, check the box next to “TURN LEAD GEN ON,” and then click the green “SAVE” button.<br/>' +
                                '<br/>' +
                                'When turned on, Nest Egg Guru prompts app users to enter their names and email addresses to receive their results the first time they run the simulations. The app will then send the results to the user via email and the FA receives a notice that a new lead has been generated along with the user’s name and email address.<br/>' +
                                '<br/>' +
                                'The client or prospect is only prompted to enter name and email address the first time he/she runs the apps. Thereafter, a cookie is planted that lets Nest Egg Guru know the user has visited the site before and provided his/her email address.<br/>' +
                                '<br/>' +
                                'The lead gen tool may be turned on or off any time, in accordance with subscriber preferences.'
                        }
                    ],
                    [
                        {
                            title: 'HOW SHOULD ADVISORS USE NEST EGG GURU’S COLLEGE AND RETIREMENT PLANNING APPS?',
                            value: 'Unlike many competing college and retirement apps that project the user’s target “number” or “probability of success”, Nest Egg Guru believes it is more instructive to provide users with a full range of simulation results into which their real-world investment experiences may be reasonably likely to fall. In doing so, Nest Egg Guru users are encouraged to pay greatest heed to the bottom 50% of the simulation results in evaluating their preparedness (i.e., hope for the best, but plan for the worst).<br/>' +
                                '<br/>' +
                                'Once a user has run the simulation based upon his or her current inputted information, he or she is encouraged to run additional simulations to show how changing factors that are within his/her control (e.g., asset allocation, investment expenses, time horizon, saving/spending strategy, etc.) may affect the results.<br/>' +
                                '<br/>'
                        },
                        {
                            title: 'WHO ARE THE IDEAL USERS OF NEST EGG GURU’S COLLEGE AND RETIREMENT PLANNING APPS?',
                            value: 'Nest Egg Guru was designed as a tool for financial advisors to share with their clients. The input and results from the application are intuitive enough allow Nest Egg Guru to be offered as a white-labeled client-facing portal in the advisor’s website.<br/>' +
                                '<br/>' +
                                'In terms of fit, it is important to understand the concept of “model risk.” The greater the similarity between the user’s real world portfolio and Nest Egg Guru’s underlying portfolio model, the more applicable the output is likely to be. The ideal fit for Nest Egg Guru is a user whose equity portfolio consists of a diversified mix of index funds and whose bond component is comprised of individual fixed income investments (e.g., CDs, municipal bonds, fixed annuity contracts, etc.).'
                        },
                        {
                            title: 'WHAT IS THE BIGGEST DIFFERENCE BETWEEN NEST EGG GURU AND OTHER RETIREMENT PLANNING APPS THAT EMPLOY MONTE CARLO SIMULATIONS?',
                            value: 'Nearly all competing Monte Carlo apps frame their results in terms of probabilities of success or failure. However, a number of recent research papers and articles have challenged the value of assigning probabilities to inherently unpredictable outcomes, such as future investment returns.<br/>' +
                                '<br/>' +
                                'In contrast, Nest Egg Guru believes the highest purpose of a retirement planning app is not to serve as a crystal ball, but rather to show users how their retirement savings and spending strategies may hold up under adverse conditions. By focusing users on the bottom half of the simulation results, Nest Egg Guru is not predicting dire conditions, but it is able to help users assess their preparedness and to show them how changing variables that within their control may impact their results. In our opinion, this is extremely valuable information.'
                        },
                        {
                            title: 'WHAT ARE SOME OF THE OTHER FEATURES THAT DISTINGUISH NEST EGG GURU FROM OTHER COLLEGE AND RETIREMENT PLANNING APS?',
                            value: 'Recent published academic research has shown that how one’s asset allocation changes as retirement approaches can have a significant impact on their portfolio values at retirement. Nest Egg Guru’s Retirement Saving app is the only advisor subscription app that allows users to test and compare constant allocation model portfolios and to the declining-equity glidepath strategies used in most target-date mutual funds.<br/>' +
                                '<br/>' +
                                'Similarly, research has also shown that the manner in which one spends down a retirement portfolio may be among the most important factors in determining sustainability and remaining balances left for heirs. Nest Egg Guru permits users to test four different commonly applied withdrawal strategies.<br/>' +
                                '<br/>' +
                                'While most retirement spending applications focus on generating a single probability of sustainability and/or helping users determine a maximum safe withdrawal rate, Nest Egg Guru believes that such emphasis may lead to inefficient spending strategies that, under normal economic conditions, may lead to overly large remainders for heirs (i.e., too frugal spending by the retirees). By presenting remaining balance data along with the sustainability results, Nest Egg Guru is unique in that it enables users to quantify the trade-off between withdrawal rate and sustainability and withdrawal rate and the amount that may be left for one’s heirs.<br/>' +
                                '<br/>' +
                                'Nest Egg Guru is also the only retirement planning software that is available as a fully functional white label client-portal.<br/>' +
                                '<br/>'
                        },
                        {
                            title: 'WHAT ARE THE UNDERLYING COMPONENTS OF THE STOCK, BOND, AND CASH ALLOCATIONS THAT ARE USED IN THE SIMULATIONS?',
                            value: 'Nest Egg Guru’s data set consists of monthly returns from 1970 through 2014. Large cap stocks are represented by the monthly returns from the S&P 500 Index. Small and mid-cap returns are represented by monthly returns from the Russell 2000 Index. Foreign stocks are represented by monthly return data from the MSCI EAFE Index.<br/>' +
                                '<br/>' +
                                'For bonds, users may choose either the Merrill Lynch U.S. Corporate Bond Index or the 10-year treasury index as their proxy. The proxy for cash is the one-year treasury index. However, due to the historic low current level of interest rates, the bond and cash indices have been suppressed from the bootstrapping simulations and users are instead required to enter the return they realistically expect to be able to earn on bonds and cash today.'
                        }

                    ]
                ]
            }
        },
        methods: {
            setActiveAccordionId(id) {
                this.shownAccordionId = id
            },
            onHiddenAccordionId(id) {
                if (this.shownAccordionId === id) {
                    this.shownAccordionId = null
                }
            }
        }
    }
</script>


<style lang="scss" src="./faq.scss">
</style>
