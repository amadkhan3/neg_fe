<template>
    <div class="result-component">
        <div class="row row-no-margin"><hr></div>

        <div v-if="appType === '3'">
            <p class="results-sub-heading">UNDERSTANDING THE RETIREMENT SPENDING APP RESULTS</p>
            <p class="results-text">Instead of focusing on probabilities of success as many financial planning apps
                do, we believe it is more instructive to present users with a full range of simulation results
                representing a broad spectrum of potential economic conditions. In keeping with the basic financial
                planning philosophy of “hope for the best, but prepare for the worst” users are encouraged to
                evaluate their preparedness by focusing on the bottom half of the simulation results (median-worst).
                In particular, the 1%, 5%, and 10% results may be considered the most valuable statistics for
                assessing the risk of each illustrated input scenario.
            <p class="results-text">Presenting the remaining balance data in five year increments over the
                illustrated retirement time horizon is intended to enable users to quantify their risk of running
                out of money in a way that a single probability percentage cannot. Similarly, the inclusion of
                remaining balance data may allow users to tangibly quantify and balance the tradeoff between their
                planned annual withdrawal amount and the remaining balance that may be left for heirs. This is an
                important concept because it helps users see and understand how focusing too much on establishing a
                “safe withdrawal rate” (i.e., an inflation-adjusted withdrawal rate that will assure sustainability)
                may lead to a lower standard of living in retirement and too much money left on the table for heirs.
            <p class="results-text">Users are especially encouraged to explore how changing different input values
                may impact their results.</p>
            <p class="results-sub-heading">RETIREMENT SPENDING APP RESULTS SUMMARY</p>
            <p class="results-text">Based upon the personal data you entered and the withdrawal election you made,
                the Retirement Spending App ran 5,000 simulations using randomly sampled historical monthly index
                return data in percentages that match your specified retirement allocation. The results from these
                simulations are summarized as follows:</p>
            <div class="row">
                <div class="col-sm-3 text-center Rectangle-599">
                    <div>
                        <p class="box-text">Out of 5,000 withdrawal simulations, your <strong>{{resultData.keytable.NumberofYearsinRetirementHorizon}} years</strong> withdrawal goal was
                            successful this % of the time:</p>
                        <div class="summary-info">
                            <p class="price">{{resultData.keytable.ProbabilityofSuccessinHorizonPeriod}}%</p>
                            <p class="box-bottom-text">This is the percentage of simulations in which your Nest Egg
                                lasted longer than you did.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 text-center Rectangle-599">
                    <div>
                        <p class="box-text">At the top 20% result (80th percentile) of the 5,000 simulations, your
                            remaining portfolio balance at the end of <strong>{{resultData.keytable.NumberofYearsinRetirementHorizon}} years</strong> was:</p>
                        <div class="summary-info"><p class="price">${{totalSummary}}</p>
                            <p class="box-bottom-text">This may represent an overly optimistic outcome</p>
                        </div>
                    </div>

                </div>
                <div class="col-sm-3 text-center Rectangle-599 warn">
                    <div>
                        <p class="box-text">Out of 5,000 simulations, your retirement nest egg was depleted before <strong>{{resultData.keytable.NumberofYearsinRetirementHorizon}} years</strong>
                            this percent of the time:</p>

                        <div class="summary-info"><p class="price-warn">{{resultData.keytable.PercentageofTimeSavingsFailed}}%</p>
                            <p class="box-bottom-text">This percentage represents the failure rate of the 5,000
                                simulations.</p>
                        </div>
                    </div>

                </div>
                <div class="col-sm-3 text-center Rectangle-599 warn">
                    <div>
                        <p class="box-text">At the worst result out of the 5,000 simulations, your remaining portfolio
                            balance at the end of <strong>{{resultData.keytable.NumberofYearsinRetirementHorizon}} years</strong> was</p>

                        <div class="summary-info"><p class="price-warn">${{totalMinSummary}}</p>
                            <p class="box-bottom-text">This result may represent investment conditions that are worse
                                than any in the historical record.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-sm-12">
                    <p class="results-sub-heading">COMPLETE RETIREMENT NEST EGG SUSTAINABILITY
                        SIMULATION RESULTS</p>
                    <p class="results-text">The median remaining balance results represent the the 2,500th
                        best/worst simulation result of the 5,000 total simulations for each 5 year interval. The 10%,
                        5%, and 1% remaining balances represent the bottom 500th, 250th, and 50th simulation results,
                        respectively. It is important to understand that the percentages do not represent probabilities
                        and are not intended to be predictive. Instead, the simulation results illustrate how your nest
                        egg may fare in retirement if things go badly in the markets.</p>
                </div>
            </div>
            <div class="row mt-4">
                <b-col md="4">
                    <span>Remaining Balance…</span>
                </b-col>
                <b-col md="4" offset-md="4">
                    <div class="export-btn" style="margin-bottom:20px;">
                        <span @click="printpdf" style="cursor:pointer !important;">Print this page</span>

                        <span @click="printpdf" style="margin-left:30px">Save as PDF</span>
                    </div>
                </b-col>
            </div>
            <div class="col table-style">
                <b-table :items="tableData" borderless fixed small>
                </b-table>
            </div>
        </div>


        <div v-if="appType === '1'">
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
            <div class="row">
                <div class="col-sm-3 text-center Rectangle-599">
                    <div>
                        <p class="box-text">Based upon an initial contribution rate of <strong>{{resultData.keytable.initial}}</strong> per year
                            and an expected contribution increase rate of <strong>{{resultData.keytable.increase}}%</strong> per year, your total contributions to your
                            college saving portfolio are projected to be:
                        </p>
                        <div class="summary-info">
                            <p class="price">${{(+resultData.keytable.TotalContributionsatRetirement).toLocaleString()}}</p>
                            <p class="box-bottom-text">This is the total projected amount you will contribute to the portfolio from now until matriculation.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 text-center Rectangle-599">
                    <div>
                        <p class="box-text">In the top 20% of the simulation results (80th percentile),
                            the value of your college savings nest egg over the <strong>{{resultData.keytable.NumberofYearsuntilRetirement}}</strong> years period grew to:

                        </p>
                        <div class="summary-info"><p class="price">${{(+resultData.accumtable['80thPercentileBalance']).toLocaleString()}}</p>
                            <p class="box-bottom-text">This may represent an overly optimistic outcome</p>
                        </div>
                    </div>

                </div>
                <div class="col-sm-3 text-center Rectangle-599 warn">
                    <div>
                        <p class="box-text">In the median (50th percentile) result, the value of your college savings nest
                            egg over the <strong>{{resultData.keytable.NumberofYearsuntilRetirement}}</strong> years period grew to:
                        </p>

                        <div class="summary-info"><p class="price-warn">${{(+resultData.accumtable['MedianBalance']).toLocaleString()}}</p>
                            <p class="box-bottom-text"></p>
                        </div>
                    </div>

                </div>
                <div class="col-sm-3 text-center Rectangle-599 warn">
                    <div>
                        <p class="box-text">In the worst of the 5,000 simulations, the value of your college savings nest
                            egg over the <strong>{{resultData.keytable.NumberofYearsuntilRetirement}}</strong> years period was only:
                        </p>

                        <div class="summary-info"><p class="price-warn">${{(+resultData.accumtable['LowestBalance']).toLocaleString()}}</p>
                            <p class="box-bottom-text">While useful as a baseline, this result is likely unrealistically pessimistic.
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            <div class="row">
                <div class="col-sm-12 ">
                    <p class="results-sub-heading">UNDERSTANDING THE COLLEGE SAVINGS APP RESULTS</p>
                    <p class="results-text font-16">The table below shows the range of nest egg values at retirement that were generated from the 5,000 simulations .
                        The median result represents the college savings balance at matriculation for the 2,500th best/worst simulation result.
                        The 10%, 5%, and 1% nest egg values represent the bottom 500th, 250th, and 50th simulation results, respectively.</p>
                    <p class="results-text font-16">Users should understand that these results do not represent probabilities and are not intended to be predictive.
                        They do, however, provide valuable insight into how one might fare if future investment returns are unaccommodating.</p>
                </div>
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
                <b-table :items="collegeTable" borderless fixed small>
                </b-table>
            </div>
        </div>


        <div v-if="appType === '2'">
            <p class="results-sub-heading">UNDERSTANDING THE RESULTS REPORT</p>
            <p class="results-text">Providing a range of results is more realistic and instructive than generating a single “magic number” projection. Since the best and worst simulations represent
                unlikely extremes, <strong>users may do well to consider the results that lie between the 50% (median) and 1% result values</strong>. Essentially, this range is intended to provide a reasonable estimate
                of where the user’s retirement nest egg value may fall in the event that future returns turn out to be less robust than the historical norm. This is consistent with the financial planning
                concept that people should approach retirement planning from the perspective of “hope for the best, but prepare for the worst”. <strong>After reviewing the results for the first time, users are
                encouraged to explore how changing different input values may affect their results.</strong></p>
            <p class="results-sub-heading">COLLEGE SAVINGS APPLICATION RESULTS SUMMARY</p>
            <div class="row">
                <div class="col-sm-3 text-center Rectangle-599">
                    <div>
                        <p class="box-text">Based upon an initial contribution rate of <strong>{{resultData.keytable.initial}}</strong> of wages and an expected
                            contribution increase rate of <strong>{{resultData.keytable.increase}}%</strong>,
                            your total contributions to your retirement nest egg are projected to be:
                        </p>
                        <div class="summary-info">
                            <p class="price">${{(+resultData.keytable.TotalContributionsatRetirement).toLocaleString()}}</p>
                            <p class="box-bottom-text">This is the total projected amount you will contribute from wages from now until you retire.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 text-center Rectangle-599">
                    <div>
                        <p class="box-text">In the top 20% of the simulation results (80th percentile),
                            the value of your college savings nest egg over the <strong>{{resultData.keytable.NumberofYearsuntilRetirement}}</strong>
                            years period grew to:

                        </p>
                        <div class="summary-info"><p class="price">${{(+resultData.accumtable['80thPercentileBalance']).toLocaleString()}}</p>
                            <p class="box-bottom-text">This may represent an overly optimistic outcome</p>
                        </div>
                    </div>

                </div>
                <div class="col-sm-3 text-center Rectangle-599 warn">
                    <div>
                        <p class="box-text">
                            In the median (50th percentile) result, the value of your retirement nest egg in
                            <strong>{{resultData.keytable.NumberofYearsuntilRetirement}}</strong> years grew to:
                        </p>

                        <div class="summary-info"><p class="price-warn">${{(+resultData.accumtable['MedianBalance']).toLocaleString()}}</p>
                            <p class="box-bottom-text"></p>
                        </div>
                    </div>

                </div>
                <div class="col-sm-3 text-center Rectangle-599 warn">
                    <div>
                        <p class="box-text">
                            In the worst of the 5,000 simulations, the value of your retirement nest egg after <strong>{{resultData.keytable.NumberofYearsuntilRetirement}}</strong> years was only:
                        </p>

                        <div class="summary-info"><p class="price-warn">${{(+resultData.accumtable['LowestBalance']).toLocaleString()}}</p>
                            <p class="box-bottom-text">This result may represent investment conditions that are worse than any in the historical record.</p>
                        </div>
                    </div>
                </div>

            </div>


            <div class="row">
                <div class="col-sm-12 ">
                    <p class="results-sub-heading">COMPLETE SIMULATION RESULTS - PROJECTED NEST EGG VALUES AT RETIREMENT</p>
                    <p class="results-text">The table below shows the range of nest egg values at retirement that were generated from the 5,000 simulations. The median result represents the retirement nest egg value at the 2,500th best/worst simulation result. The 10%, 5%, and 1% nest egg values represent the bottom 500th, 250th, and 50th simulation results, respectively. </p>
                    <p class="results-text">Users should understand that these results do not represent probabilities and are not intended to be predictive. They do, however, provide valuable insight into how one might fare if future investment returns are unaccommodating.</p>
                </div>
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
                <b-table :items="collegeTable" borderless fixed small>
                </b-table>
            </div>
        </div>






        <div class="row" style="margin-bottom: 50px;">
            <div class="col text-right">
                <b-button @click="changeInput" class="mt-2 cancel-btn" variant="default">Change Input</b-button>
                <b-button @click="resetInput" class="mt-2 purchase-btn" style="margin-left:40px;" variant="success">Reset</b-button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
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
                <p class="results-bottom-txt-16 mt-5">Securties offered through J.W.Cole Financial.Inc(JWC) Member
                    FINRA/SIPC.Advisory Services offered through J.W. Hawaii and JWC/JWCA are unaffiliated
                    entties.</p>
            </div>

        </div>
    </div>
</template>


<script src="./Result.js"></script>
<style src="./Result.scss" lang="scss"></style>
