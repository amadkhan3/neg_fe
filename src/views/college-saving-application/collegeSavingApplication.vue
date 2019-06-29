<template>
    <div class="content-inner container" id="app">
        <CollegeSavingApplicationHeader></CollegeSavingApplicationHeader>
        <b-container class="college-saving-application">
            <b-row class="row-no-margin">
                <div class="container-display-inline-center">
                    <h2>COLLEGE SAVINGS APPLICATION</h2>
                </div>
            </b-row>
            <b-row class="row-no-margin">
                <div class="container-display-inline-center no-padding">
                    <p class="small-font">
                        <span>Powered by</span>
                        <span>
              <a class="green-color" href>Nest Egg Guru</a>
            </span>
                    </p>
                </div>
            </b-row>
            <b-row class="padding-bottom-30 row-no-margin">
                <b-col class="container-display-inline-right">
                    <button @click="showInputs" class="green-button large-button white-color">INPUTS</button>
                </b-col>
                <b-col class="container-display-inline-left">
                    <button @click="showResults" class="white-button light-grey">RESULT</button>
                </b-col>
            </b-row>
            <div v-if="inputs == true">
                <b-row class="row-no-margin">
                    <hr>
                </b-row>
                <b-row class="row-no-margin">
                    <p>
                        The College Savings App inputs require less than 1 minute to enter and are divided into three
                        sections -
                        your savings data, your portfolio details, and the accumulation strategy you wish to illustrate.
                    </p>
                </b-row>

                <section>
                    <b-row class="row-no-margin">
                        <span class="section-headline">THIS REPORT IS BEING PREPARED FOR:</span>
                    </b-row>
                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">First Name</span>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input full-width content-padding" type="text" value="John">
                        </b-col>
                    </b-row>
                    <b-row class="form-group row-no-margin" style="padding-top:0 !important;">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Last Name</span>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input full-width content-padding" type="text" value="Carter">
                        </b-col>
                    </b-row>
                </section>

                <section>
                    <b-row class="padding-top-10 row-no-margin">
                        <span class="section-headline">BASIC COLLEGE SAVINGS DATA</span>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Years Until Matriculation:</span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="years-until-matriculation"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="years-until-matriculation"
                                       title="How many years until your child enters college?"/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input one-third-width green-color-input" type="text" value="8">
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Enter current college savings:</span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="enter-current-college-savings"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="enter-current-college-savings"
                                       title="Include 529 Plan and ESA balances along with any other savings earmarked for college expenses."/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input one-third-width green-color-input" type="text" value="$100,000">
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Expected annual contribution:</span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="expected-annual-contribution"/>
            </span>
                            <b-tooltip placement="topright" target="expected-annual-contribution"
                                       title="Enter the dollar amount that you plan to save each year for college.

"/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input one-third-width green-color-input" type="text" value="$100,000">
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Enter the % by which you expect to increase your contribution amount each year.</span>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input one-third-width green-color-input" type="text" value="3%">
                        </b-col>
                    </b-row>
                </section>

                <section>
                    <b-row class="padding-top-10 row-no-margin">
                        <span class="section-headline">COLLEGE SAVINGS PORTFOLIO DETAILS</span>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Enter your current Broad Asset Allocation (must add up to 100%)</span>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="show-btn form-input one-third-width green-color-input" max="100"
                                   min="0" style="text-align:center;height:32px; margin-bottom:10px;width:79px;"
                                   type="number"
                                   value="45">
                            <input class="form-input one-third-width green-color-input" max="100"
                                   min="0" style="text-align:center;height:32px; margin-bottom:10px;width:79px;"
                                   type="number" value="30">
                            <input class="form-input one-third-width green-color-input" max="100"
                                   min="0" style="text-align:center;height:32px; margin-bottom:10px;width:79px;"
                                   type="number" value="25">
                        </b-col>
                        <b-col>
                            <apexchart :options="chartOptions" :series="series" height="200" id="chart" type="donut"
                                       width="500"></apexchart>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
            <span class="form-label">
              Enter your current
              <b>Detailed Stock Allocation</b> (must add up to 100%)
            </span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="detailed-stockallocation"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="detailed-stockallocation"
                                       title="This input represents the detailed composition of your stock allocation. If this input is left unchanged, the application will assume a detailed stock allocation of 45% large cap, 30% mid- and small cap, and 25% foreign stock."/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input one-third-width green-color-input" max="100"
                                   min="0" style="text-align:center;height:32px; margin-bottom:10px;width:79px;"
                                   type="number" value="45">
                            <input class="form-input one-third-width green-color-input" max="100"
                                   min="0" style="text-align:center;height:32px; margin-bottom:10px;width:79px;"
                                   type="number" value="30">
                            <input class="form-input one-third-width green-color-input" max="100"
                                   min="0" style="text-align:center;height:32px; margin-bottom:10px;width:79px;"
                                   type="number" value="25">
                        </b-col>
                        <b-col>
                            <apexchart :options="chartOptions2" :series="series" height="200" id="chart2" type="donut"
                                       width="500"></apexchart>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
            <span class="form-label">
              Enter an expected constant fixed rate of return that you may reasonably expect to
              earn on the “bond” portion of your nest egg:
            </span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="bond-portion"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="bond-portion"
                                       title="As a proxy for the bond portion of your college savings portfolio, it is suggested that users enter the rate of return they can reasonably expect to get on a 10-year treasury or a 5 year CD."/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input one-third-width green-color-input" type="text" value="2">
                            <span class="green-color percentage">%</span>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
            <span class="form-label">
              Enter an expected constant fixed rate of return that you may reasonably expect to
              earn on the cash or stable value portion of your nest egg:
            </span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="stable-value-portion"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="stable-value-portion"
                                       title="The default for this input has been set to 0% to reflect the current low interest rate environment. Users are free to change it to reflect what they think they can earn on cash."/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input one-third-width green-color-input" type="text" value="0">
                            <span class="green-color percentage">%</span>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
            <span class="form-label">
              Enter your nest egg’s estimated annual investment expenses (expressed as a % of
              your total nest egg value):
            </span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="estimated-annual"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="estimated-annual"
                                       title="Research has shown that investment expenses can have a signficant impact on wealth accumulation and sustainability. Failing to properly account for the impact of expenses may produce overly optimistic results. Be sure to account for ALL internal and extern"/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input one-third-width green-color-input" type="text" value="1.5">
                            <span class="green-color percentage">%</span>
                        </b-col>
                    </b-row>
                </section>

                <section>
                    <b-row class="padding-top-10 row-no-margin">
                        <span class="section-headline">COLLEGE SAVINGS ACCUMULATION</span>
                    </b-row>
                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Choose a college savings accumulation investment strategy:</span>
                        </b-col>
                    </b-row>
                    <b-row class="form-group row-no-margin"
                           style="padding-top:12px !important;padding-bottom:12px !important;">
                        <b-form-radio name="collegeSavingAccumulation" value="A">
                            Maintain your current broad allocation until
                            matriculation.<span class="tooltip-container" style="padding: 0 0 0 10px"><font-awesome-icon
                                icon="info-circle" id="maintain"/></span>
                        </b-form-radio>

                        <b-tooltip placement="topright"
                                   target="maintain"
                                   title="This election assumes that you maintain your current portfolio allocation until the funds are needed to pay for college expenses."/>
                    </b-row>
                    <b-row class="form-group row-no-margin" inline
                           style="padding-top:12px !important;padding-bottom:12px !important;">
                        <b-form-radio name="collegeSavingAccumulation" value="A">
                            Apply an age-based declining glidepath strategy
                            until matriculation. Enter the target stock allocation you would like to have when your
                            child is ready to
                            attend college:<span class="tooltip-container" style="padding: 0 0 0 10px"><font-awesome-icon
                                icon="info-circle" id="age-based"/></span>
                        </b-form-radio>
                        <p class="warn-notice" style="margin-left:40px;">NOTE : When selecting this strategy, the
                            current stock allocation MUST be higher than the target stock allocation at
                            matriculation.</p>
                        <b-tooltip placement="topright"
                                   target="age-based"
                                   title="This election is intended to model the declining equity glidepath strategies commonly applied in Age-Based 529 Plan portfolios. These portfolios commonly transition to 0% equities upon matriculation."/>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Target Stock Allocation Upon Matriculation:</span>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input one-third-width green-color-input" type="text"
                                   v-model="rangeValue">
                        </b-col>
                        <b-col>
                            <b-form-input id="range-1" max="100" min="0" type="range" v-model="rangeValue"/>
                        </b-col>
                    </b-row>
                    <section class="padding-top-bottom-150px">
                        <b-row class="row-no-margin">
                            <b-col class="container-display-inline-right">
                                <button @click="loadingPage" class="btn purchase-btn"
                                        style="color:#fff;width:129px;height:40px;">Submit
                                </button>
                            </b-col>
                        </b-row>
                    </section>
                </section>
            </div>
            <div v-if="results == true">
                <p class="results-sub-heading">UNDERSTANDING THE COLLEGE SAVINGS APP RESULTS</p>
                <p class="results-text">Providing a range of results is more informative and instructive for college
                    savings planning than generating a single projected value derived from an expected annual rate of
                    return estimate. In the real world, investment returns are not constant from one year to the next,
                    so families should account for the possibility of negative return years in their planning,
                    especially as the matriculation date approaches. The 5,000 simulations that are generated in this
                    analysis represent a broad range of potential outcomes.</p>
                <p class="results-text">Users of this app are encouraged to evaluate college savings preparedness by
                    considering the results that lie between the 50% (median) and 1% result values. This range is
                    intended to provide a reasonable estimate of where the user’s portfolio value may fall in the event
                    that future returns turn out to be less robust than the historical norm. This is consistent with the
                    financial planning concept that investors should approach long term financial goals from the
                    perspective of “hope for the best, but prepare for the worst”. While future investment returns are
                    inherently undpredictable, users are encouraged to explore how changing the various inputs that are
                    within their control may impact their results.</p>
                <p class="results-text">The College Savings App may be particularly useful for families who utilize 529
                    college savings plans, but may be applied to other education funding portfolios as well. Users
                    should be aware that the greater their real world portfolio differs from the allocation models
                    illustrated in this application, the less useful/applicable the results may be.</p>
                <p class="results-sub-heading">COLLEGE SAVINGS APPLICATION RESULTS SUMMARY</p>
                <div class="row" style=" margin-left: 0px;">
                    <div class="col centered-box Rectangle-599" style="margin-right:28px;">
                        <p class="box-text">Based upon an initial contribution rate of 10% per year and an expected
                            contribution increase rate of 3% per year, your total contributions to your college saving
                            portfolio are projected to be:</p>
                        <div>
                            <p class="price">$50,796</p>
                            <p class="box-bottom-text">This is the total projected amount you will contribute to the
                                portfolio from now until matriculation.</p>
                        </div>
                    </div>
                    <div class="col centered-box Rectangle-599" style="margin-right:28px;">
                        <p class="box-text">Based upon an initial contribution rate of 10% per year and an expected
                            contribution increase rate of 3% per year, your total contributions to your college saving
                            portfolio are projected to be:</p>
                        <div><p class="price">$50,796</p>
                            <p class="box-bottom-text">This is the total projected amount you will contribute to the
                                portfolio from now until matriculation.</p>
                        </div>
                    </div>
                    <div class="col centered-box Rectangle-599 warn" style="margin-right:28px;">
                        <p class="box-text">Based upon an initial contribution rate of 10% per year and an expected
                            contribution increase rate of 3% per year, your total contributions to your college saving
                            portfolio are projected to be:</p>

                        <div><p class="price-warn">$50,796</p>
                            <p class="box-bottom-text">This is the total projected amount you will contribute to the
                                portfolio from now until matriculation.</p>
                        </div>
                    </div>
                    <div class="col centered-box Rectangle-599 warn">
                        <p class="box-text">Based upon an initial contribution rate of 10% per year and an expected
                            contribution increase rate of 3% per year, your total contributions to your college saving
                            portfolio are projected to be:</p>

                        <div><p class="price-warn">$50,796</p>
                            <p class="box-bottom-text">This is the total projected amount you will contribute to the
                                portfolio from now until matriculation.</p>
                        </div>
                    </div>
                    <p class="results-sub-heading" style="margin-top:30px;">UNDERSTANDING THE COLLEGE SAVINGS APP
                        RESULTS</p>
                    <p class="results-dark-text">The table below shows the range of nest egg values at retirement that
                        were generated from the 5,000 simulations . The median result represents the college savings
                        balance at matriculation for the 2,500th best/worst simulation result. The 10%, 5%, and 1% nest
                        egg values represent the bottom 500th, 250th, and 50th simulation results, respectively.</p>
                    <br>
                    <p class="results-dark-text">Users should understand that these results do not represent
                        probabilities and are not intended to be predictive. They do, however, provide valuable insight
                        into how one might fare if future investment returns are unaccommodating.</p>
                    <br>


                </div>
                <div class="row">
                    <b-col md="4" offset-md="8">
                        <div class="export-btn" style="margin-bottom:20px;">
                            <span @click="printpdf" style="cursor:pointer !important;">Print this page</span>

                            <span @click="printpdf" style="margin-left:30px">Save as PDF</span>
                        </div>
                    </b-col>
                </div>
                <div class="col table-style">
                    <b-table :items="items" bordered fixed small/>
                </div>
                <div class="row" style="margin-bottom: 50px;">
                    <div class="col-6 offset-7">
                        <b-button class="mt-2 cancel-btn" variant="default">Change Input</b-button>
                        <b-button class="mt-2 purchase-btn" style="margin-left:40px;" variant="success">Reset</b-button>
                    </div>
                </div>
                <div class="row">
                    <p style="font-size: 24px;margin-bottom: 20px;">IMPORTANT DISCLOSURES:</p>
                    <p class="results-bottom-txt">The simulation results produced by this application are hypothetical
                        in nature, do not reflect actual investment results, and provide no assurance of future returns.
                        Instead, the application is intended as an educational tool to help users generally assess their
                        planning preparedness and to help them understand how changing the various inputs that are
                        within their control may impact the results. While we believe the information presented may be
                        instructive in helping users plan for their financial goals, it is important to understand that
                        no application is a crystal ball and that the apps are not intended to predict future
                        returns.</p>
                    <p class="results-bottom-txt">Similarly, it is important to understand the limitations of this or
                        any other planning application. First, while considerable thought has gone into designing
                        portfolio models that realistically represent individual investor experiences, the degree to
                        which the index models used to produce the simulations may differ from the actual users’
                        portfolios may affect the applicability of the results. Second, the choice of indices and the
                        time periods from which the monthly index return data were sampled may have a significant effect
                        on the outcomes and might produce different results if different indices and/or time periods
                        were chosen. Third, because the simulation results are derived from random sampling of
                        historical monthly returns data, there is an underlying assumption that future returns will at
                        least be somewhat similar to what they have been in the recent past. Fourth, users should be
                        aware that, as with all simulation-based applications, results may vary from one simulation to
                        the next and over time. Lastly, while we believe the methodology chosen in this application has
                        certain advantages, other apps using different methodologies may produce different results.</p>
                    <p class="results-bottom-txt">The 5,000 simulation results presented herein were produced using a
                        sampling methodology called “bootstrapping”. The simulations were generated from monthly equity
                        index return data from 1970-2016. The S&P 500 Index is employed as the proxy for large cap U.S.
                        Stocks, international stocks are represented by the MSCI EAFE Index, and small and mid-cap
                        stocks are represented by the Russell 2000 Index. The application also holds monthly index data
                        for the Merrill Lynch U.S. Corporate Bond Index, 10-year treasuries, and one year treasuries.
                        However, as noted on the inputs page, the option to include these indices has been intentionally
                        suppressed in the current low interest rate environment.</p>
                    <p class="results-bottom-txt">This application is made available to you as an education tool for
                        your independent use and is not intended as a substitute for professional financial planning
                        guidance or advice. While it is hoped that the app will help you to identify important factors
                        to consider in planning for your financial goals, for specific guidance, users are encouraged to
                        consult with a trusted financial planning professional.</p>
                    <p class="results-bottom-txt-16">Securties offered through J.W.Cole Financial.Inc(JWC) Member
                        FINRA/SIPC.Advisory Services offered through J.W. Hawaii and JWC/JWCA are unaffiliated
                        entties.</p>
                </div>
            </div>

        </b-container>
        <Footer></Footer>
    </div>
</template>


<script>
    // @ is an alias to /src
    import CollegeSavingApplicationHeader from "@/views/college-saving-application/header/Header.vue";
    import Footer from "@/components/footer/Footer.vue";
    import VueApexCharts from "vue-apexcharts";

    export default {
        name: "CollegeSavingApplication",
        components: {
            CollegeSavingApplicationHeader,
            Footer,
            VueApexCharts
        },
        methods: {
            printpdf() {
                this.$router.push({path: '/print-pdf'})
            },
            loadingPage() {
                this.$router.push({path: '/loading-screen'})
            },
            showInputs() {
                this.inputs = true;
                this.results = false;
            },
            showResults() {
                this.results = true;
                this.inputs = false;
            }
        },
        data: function () {
            return {
                items: [
                    {Simulation_Percentile: '80%', Nest_Egg_Value: '$342,659'},
                    {Simulation_Percentile: '60%', Nest_Egg_Value: '$283,014'},
                    {
                        Simulation_Percentile: 'Median', Nest_Egg_Value: '$260,757',
                        _rowVariant: 'info'
                    },
                    {
                        Simulation_Percentile: '40%', Nest_Egg_Value: '$239,631',
                        _rowVariant: 'info'
                    },
                    {
                        Simulation_Percentile: '20%', Nest_Egg_Value: '$197,857',
                        _rowVariant: 'info'
                    },
                    {
                        Simulation_Percentile: '10%', Nest_Egg_Value: '$171,316',
                        _rowVariant: 'danger'
                    },
                    {
                        Simulation_Percentile: '5%', Nest_Egg_Value: '$151,619',
                        _rowVariant: 'danger'
                    },
                    {
                        Simulation_Percentile: '1%', Nest_Egg_Value: '$123,389',
                        _rowVariant: 'danger'
                    },
                    {
                        Simulation_Percentile: 'worst', Nest_Egg_Value: '$111.234',
                        _rowVariant: 'danger'
                    },
                ],
                inputs: true,
                results: false,
                rangeValue: `${50}%`,
                series: [45, 30, 25],
                chartOptions: {
                    labels: ["Stocks", "Bonds", "Cash"],
                    colors: ['#1ecc6a', '#f0d319', '#ff7171'],
                    dataLabels: {
                        enabled: true
                    },
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
                        position: "left",
                        verticalAlign: "top",
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
                                position: "left"
                            }
                        }
                    }],
                    dataLabels: {
                        enabled: false
                    }
                },
                chartOptions2: {
                    labels: [
                        "Large U.S. Stocks",
                        "Mid & Small U.S. Stocks",
                        "Mid & Small U.S. Stocks"
                    ],
                    colors: ['#1ecc6a', '#f0d319', '#ff7171'],
                    dataLabels: {
                        enabled: true
                    },
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
                        position: "left",
                        verticalAlign: "top",
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
                                position: "left"
                            }
                        }
                    }],
                    dataLabels: {
                        enabled: false
                    }
                }
            };
        }
    };
</script>

<style lang="scss" src="./CollegeSavingApplication.scss"></style>
