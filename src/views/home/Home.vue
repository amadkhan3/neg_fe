<template>
    <div class="container" id="app">
        <Header></Header>
        <div class="container app-wrapper home-page">

            <section class="home-section-1">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="header-text-1">
                            Educate and Engage Clients & Prospects.<br/> Build Stickier Relationships.

                        </div>
                        <div class="header-text-2">
                            <h4>Affordable Client-Facing Software for Financial
                                Advisor Websites</h4>
                        </div>
                        <router-link class="btn btn-primary btn-lg" tag="button" to="/signup">30 Days Free</router-link>
                    </div>
                    <!--<div class="right-section-bg mb-2">-->
                    <!--<img src="./assets/section1.png" height="481"/>-->
                    <!--</div>-->
                </div>
            </section>

            <section class="home-section-2 text-center">
                <div class="row">
                    <div class="col-sm-12">
                        <div>
                            <h2>Why Client Facing Software?</h2>
                        </div>
                        <div class="banner">
                            <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen frameborder="0" height="298"
                                    src="https://www.youtube.com/embed/dKeFFlFVJE4?autoplay=0&loop=1&playlist=dKeFFlFVJE4"
                                    width="530"></iframe>
                            <!---<img src="./assets/section2.png" width="100%"/>-->
                            <!-- <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen frameborder="0" height="298"
                                    src="https://www.youtube.com/embed/dKeFFlFVJE4?autoplay=0&loop=1&playlist=dKeFFlFVJE4"
                                    width="530"></iframe> -->

                            <!--<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0"-->
                            <!--height="720"-->
                            <!--src="https://www.youtube.com/embed/dKeFFlFVJE4"-->
                            <!--width="1280"></iframe>-->

                        </div>
                    </div>
                </div>
            </section>

            <section class="home-section-3 text-center">
                <div class="row">
                    <div class="col-sm-12">
                        <div>
                            <h2>Our Products</h2>
                            <h6 class="description">Intuitive educational apps that may be easily integrated into your
                                website</h6>
                        </div>
                    </div>
                </div>
                <div class="row functions-area justify-content-md-center">
                    <div class="col-lg-4 col-md-12 text-center">
                        <div class="title">College Savings App</div>
                        <div>
                            <img class="function-image" src="./assets/5-layers.png"/>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 text-center">
                        <div class="title">Retirement Savings App</div>
                        <div>
                            <img class="function-image" src="./assets/10-layers.png"/>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 text-center">
                        <div class="title">Retirement Spending App</div>
                        <div>
                            <img class="function-image" src="./assets/6-layers.png"/>
                        </div>
                    </div>
                </div>
            </section>

            <section class="home-section-4 text-center">
                <div class="row">
                    <div class="col-sm-12">
                        <div>
                            <h2 class="title">What You Will Get</h2>
                        </div>
                    </div>
                </div>

                <div class="notes-list row justify-content-md-center">
                    <div class="col-sm-6 text-center">
                        <ul class="list-unstyled text-left">
                            <li>Realistic Down Market Testing</li>
                            <li>Easily Test the Impact of Variables One at a Time</li>
                            <li>White Labeled Subscription</li>
                            <li>Search Engine Optimization and Lead Generation</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 text-center">
                        <ul class="list-unstyled text-left">
                            <li>Client friendly interface</li>
                            <li>Unique functionality vs. Monte Carlo apps</li>
                            <li>Powerful Simulation Engine (5000 sims in 5 seconds)</li>
                            <li>Clear, Tangible, Quantifiable Results</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="home-section-5 text-center">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="title">Can Your Apps Do This?</h2>
                        <h6 class="description">Unique features and functionality</h6>
                    </div>
                </div>
            </section>

            <section class="home-section-6 text-center">
                <div class="row align-items-center">
                    <div class="col-md-12 col-lg-6 home-section-bg">
                        <div class="text-left">
                            <h2 class="banner-title-1">Make Down-Market Simulation Results Tangible and
                                Quantifiable</h2>
                            <h6 class="banner-des-1">All of our apps present results in a single concise table that
                                helps
                                answer your clients’ most worrisome question – “If things go badly in the markets,
                                will we still be okay?</h6>
                            <div class="banner-btn">
                                <router-link class="btn btn-primary btn-lg" tag="button" to="/contact">Schedule a Demo
                                </router-link>
                                <router-link class="btn btn-primary btn-lg none-background not-first-buton" tag="button"
                                             to="/signup">Free Trial
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 home-section-bg">
                        <img height="100%" src="./assets/section6.png"/>
                    </div>
                </div>
            </section>


            <section class="home-section-7 text-center">
                <div class="row align-items-center">
                    <div class="col-md-12 col-lg-6 home-section-bg">
                        <img height="100%" src="./assets/section7.png"/>
                    </div>
                    <div class="col-md-12 col-lg-6 home-section-bg">
                        <div class="text-left">
                            <h2 class="banner-title-1">Test Different Withdrawal Strategies</h2>
                            <h6 class="banner-des-1">Nearly all Monte Carlo software used by FAs today implicitly
                                applies constant
                                allocation with annual rebalancing to generate “probability of success” results.
                                Nest Egg Guru’s Retirement Spending app is the only app that allows you to
                                test different spending strategies in order to demonstrate how important the
                                choice of withdrawal strategy may be in making client portfolios last.</h6>
                            <div class="banner-btn">
                                <router-link class="btn btn-primary btn-lg" tag="button" to="/contact">Schedule a Demo
                                </router-link>
                                <router-link class="btn btn-primary btn-lg none-background not-first-buton" tag="button"
                                             to="/signup">Free Trial
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="home-section-8 text-center">
                <div class="row align-items-center">
                    <div class="col-md-12 col-lg-6 home-section-bg">
                        <div class="text-left">
                            <h2 class="banner-title-1">Illustrate Glidepath Saving Strategies</h2>
                            <h6 class="banner-des-1">Nest Egg Guru’s College Savings and Retirement Savings apps allow
                                clients to test declining equity glidepath strategies vs. constant allocation savings
                                strategies.</h6>
                            <div class="banner-btn">
                                <router-link class="btn btn-primary btn-lg" tag="button" to="/contact">Schedule a Demo
                                </router-link>
                                <router-link class="btn btn-primary btn-lg none-background not-first-buton" tag="button"
                                             to="/signup">Free Trial
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 home-section-bg text-left">
                        <img src="./assets/imgpsh_fullsize_anim3.png" height="100%" />
                    </div>
                </div>
            </section>

            <section class="home-section-9 position-relative">
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <div><h2 class="title d-inline-block">How to Incorporate Nest Egg Guru into your Business</h2>
                        </div>
                        <h6 class="description d-inline-block">To maximize the effectiveness of the subscription, FAs
                            are
                            encouraged to incorporate Nest Egg Guru into their HOME page as call-to-action (CTA),such as
                            the
                            two examples below </h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <div class="banner-btn">
                            <router-link class="btn btn-primary btn-lg mr-5 mt-5" tag="button" to="/contact">Schedule a
                                Demo
                            </router-link>
                            <router-link class="btn btn-primary btn-lg none-background mt-5" tag="button" to="/signup">
                                Free
                                Trial
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>

            <section class="home-section-10 position-relative">
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <div><h2 class="header-title d-inline-block mt-4">Separate & Bundled Pricing</h2></div>
                    </div>
                </div>
                <div class="row functions-area justify-content-md-center">
                    <div class="col-md-12 col-lg-3 text-center">
                        <div class="title">College Savings App</div>
                        <div>
                            <img class="function-image" src="./assets/5-layers.png"/>
                        </div>

                        <div class="small-description"></div>

                        <div class="price">
                            $135/<span>year</span>
                        </div>

                        <div class="price">
                            <router-link class="btn btn-primary btn-lg none-background not-first-buton ml-0"
                                         tag="button"
                                         to="/signup">Try It Now
                            </router-link>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-3 text-center">
                        <div class="title">Retirement Savings APP
                        </div>
                        <div>
                            <img class="function-image" src="./assets/10-layers.png"/>
                        </div>
                        <div class="small-description"></div>

                        <div class="price">
                            $135/<span>year</span>
                        </div>

                        <div class="price">
                            <router-link class="btn btn-primary btn-lg none-background not-first-buton ml-0"
                                         tag="button"
                                         to="/signup">Try It Now
                            </router-link>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-3 text-center">
                        <div class="title">Retirement Spending APP
                        </div>
                        <div>
                            <img class="function-image" src="./assets/6-layers.png"/>
                        </div>
                        <div class="small-description"></div>

                        <div class="price">
                            $135/<span>year</span>
                        </div>

                        <div class="price">
                            <router-link class="btn btn-primary btn-lg none-background not-first-buton ml-0"
                                         tag="button"
                                         to="/signup">Try It Now
                            </router-link>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-3 text-center special-plan">
                        <div class="title">ALL IN ONE</div>
                        <div class="sale-off">
                            <div>Save</div>
                            <span>26%</span>
                        </div>
                        <div class="price">
                            $300/<span>year</span>
                        </div>

                        <div class="price">
                            <router-link class="btn btn-primary btn-lg ml-0" tag="button" to="/signup">Try It Now
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>

            <section class="home-section-11 position-relative">
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <div><h2 class="header-title d-inline-block">AS FEATURED IN…</h2></div>
                    </div>
                </div>
                <div class="row companies justify-content-md-center">
                    <div class="col-lg-2 text-center">
                        <div class="company-logo company-1"></div>
                    </div>
                    <div class="col-lg-2 text-center">
                        <div class="company-logo company-2"></div>
                    </div>
                    <div class="col-lg-2 text-center">
                        <div class="company-logo company-3"></div>
                    </div>
                    <div class="col-lg-2 text-center">
                        <div class="company-logo company-4"></div>
                    </div>
                    <div class="col-lg-2 text-center">
                        <div class="company-logo company-5"></div>
                    </div>
                </div>

                <div class="row companies second-line justify-content-md-center">
                    <div class="col-lg-2 text-center">
                        <div class="company-logo company-6"></div>
                    </div>
                    <div class="col-lg-2 text-center">
                        <div class="company-logo company-7"></div>
                    </div>
                    <div class="col-lg-2 text-center">
                        <div class="company-logo company-8"></div>
                    </div>
                    <div class="col-lg-2 text-center">
                        <div class="company-logo company-9"></div>
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </div>
</template>

<script src="./Home.js">
</script>

<style lang="scss" src="./Home.scss"></style>
