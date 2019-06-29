<template>
    <div class="content-inner container retirement-spending-application-page" id="app">
        <RetirementSpendingApplicationHeader :companyData="companyData"></RetirementSpendingApplicationHeader>
        <b-container class="retirement-spending-application" v-if="pageStatus === 1 || pageStatus === 3">
            <b-row class="row-no-margin">
                <div class="container-display-inline-center">
                    <h2 class="text-uppercase">{{title}}</h2>
                </div>
            </b-row>
            <b-row class="row-no-margin">
                <div class="container-display-inline-center no-padding">
                    <p class="small-font">
                        <span>Powered by</span>
                        <span>
                          <a class="green-color" href="https://nesteggguru.com">Nest Egg Guru</a>
                        </span>
                    </p>
                </div>
            </b-row>
            <b-row class="padding-bottom-30 row-no-margin" v-if="pageStatus === 1">
                <b-col class="container-display-inline-right">
                    <button @click="pageStatus = 1" class="no-outline green-button large-button white-color">INPUTS</button>
                </b-col>
                <b-col class="container-display-inline-left">
                    <button class="no-outline white-button light-grey">RESULT</button>
                </b-col>
            </b-row>

            <b-row class="padding-bottom-30 row-no-margin" v-if="pageStatus === 3">
                <b-col class="container-display-inline-right">
                    <button @click="pageStatus = 1" class="no-outline white-button light-grey large-button white-color">INPUTS</button>
                </b-col>
                <b-col class="container-display-inline-left">
                    <button class="no-outline green-button large-button white-color">RESULT</button>
                </b-col>
            </b-row>
            <div v-if="pageStatus === 1">
                <b-row class="row-no-margin">
                    <hr/>
                </b-row>
                <b-row class="row-no-margin mt-3">
                    <p>
                        The Retirement Spending App inputs require less than 1 minute to enter and are divided into
                        three sections - your spending data, your portfolio details, and your choice of the withdrawal
                        strategy you wish to illustrate.
                    </p>
                </b-row>

                <section>
                    <b-row class="row-no-margin">
                        <span class="section-headline">THIS REPORT IS BEING PREPARED FOR:</span>
                    </b-row>
                    <b-row class="form-group row-no-margin mb-0">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">First Name</span>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input full-width content-padding" type="text"
                                   v-model="calData.firstName"/>
                        </b-col>
                    </b-row>
                    <b-row class="form-group row-no-margin mb-0" style="padding-top:0;">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Last Name</span>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <input class="form-input full-width content-padding" type="text"
                                   v-model="calData.lastName"/>
                        </b-col>
                    </b-row>
                </section>

                <section v-if="appType === '3'">
                    <b-row class="padding-top-10 row-no-margin">
                        <span class="section-headline">BASIC RETIREMENT SPENDING DATA</span>
                    </b-row>

                    <b-row class="form-group row-no-margin mt-3">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">I need my retirement savings to last years.:</span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="years-until-matriculation"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="years-until-matriculation"
                                       title="How many years until your child enters college?"/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="50" :min="5" class="form-input one-third-width green-color-input" currency="" separator="," v-model="calData.years"></vue-numeric>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin mt-0 pt-0">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Enter your current retirement nest egg value:</span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="enter-current-college-savings"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="enter-current-college-savings"
                                       title="Include 529 Plan and ESA balances along with any other savings earmarked for college expenses."/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="100000000" :min="0" class="form-input one-third-width green-color-input" currency="$" separator="," v-model="calData.current"></vue-numeric>

                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin mt-0 pt-0">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Enter your desired initial annual withdrawal amount:</span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="expected-annual-contribution"/>
            </span>
                            <b-tooltip placement="topright" target="expected-annual-contribution"
                                       title="Enter the dollar amount that you plan to save each year for college.

"/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="500000" :min="1000" class="form-input one-third-width green-color-input" currency="$" separator="," v-model="calData.expenses"></vue-numeric>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin mt-0 pt-0">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Enter your desired annual cost of living adjustment:</span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="future-changes1"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="future-changes1"
                                       title="Enter the dollar amount that you plan to save each year for college."/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="100" :min="0" class="form-input one-third-width green-color-input" currency="%" currency-symbol-position="suffix" separator="" v-model="calData.living"></vue-numeric>

                        </b-col>
                    </b-row>

                    <b-row class="row-no-margin mb-0 pt-0">
                        <p>
                            Select whether you would like the Retirement Spending App to incorporate up to two future
                            changes (can be either increases or decreases) to your inflation-adjusted withdrawal amount.
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="future-changes"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="future-changes"
                                       title="Enter the dollar amount that you plan to save each year for college."/>
                        </p>
                    </b-row>

                    <b-form-group class="pt-0 mb-0 pb-0" label="">
                        <b-form-radio-group v-model="calData.withdrawalOption">
                            <b-row class="form-group row-no-margin mt-3 pt-0 pb-0">
                                <b-form-radio :value="1">
                                    No planned future adjustments to withdrawal amount.
                                    <span class="tooltip-container"><font-awesome-icon icon="info-circle"
                                                                                       id="maintain1"/></span>
                                </b-form-radio>

                                <b-tooltip placement="topright"
                                           target="maintain1"
                                           title="This election assumes that you maintain your current portfolio allocation until the funds are needed to pay for college expenses."/>
                            </b-row>
                            <b-row class="form-group row-no-margin pt-0 pb-0" inline >
                                <b-form-radio :value="2">
                                    Allow for one future adjustment to my withdrawal amount illustration .<span
                                        class="tooltip-container"><font-awesome-icon icon="info-circle" id="age-based"/></span>
                                </b-form-radio>
                                <b-tooltip placement="topright"
                                           target="age-based"
                                           title="This election is intended to model the declining equity glidepath strategies commonly applied in Age-Based 529 Plan portfolios. These portfolios commonly transition to 0% equities upon matriculation."/>
                            </b-row>
                            <b-row class="form-group row-no-margin pt-0 pb-0" inline >
                                <b-form-radio :value="3">
                                    Allow for two future adjustments to my withdrawal amount.<span
                                        class="tooltip-container"><font-awesome-icon
                                        icon="info-circle" id="age-based1"/></span>
                                </b-form-radio>
                                <b-tooltip placement="topright"
                                           target="age-based1"
                                           title="This election is intended to model the declining equity glidepath strategies commonly applied in Age-Based 529 Plan portfolios. These portfolios commonly transition to 0% equities upon matriculation."/>
                            </b-row>
                        </b-form-radio-group>
                    </b-form-group>

                    <b-row class="row-no-margin " v-if="calData.withdrawalOption === 2 || calData.withdrawalOption === 3">
                        <b-form inline>
                            <label>In</label>
                            <vue-numeric :max="50" :min="0"
                                         class="form-input w-40px green-color-input mb-1 ml-2 mr-2 mb-sm-0 p-0 input-small-size"
                                         currency="" separator="," v-model="calData.firstWithdrawalStart"></vue-numeric>
                            <label>years,</label>
                            <v-select :clear-search-on-select="false" :clearable="false" :onChange="(value) => vueSelectChange('firstWithdrawalStartDelta', value)"
                                      :options="[
                                      {label: 'Increase', value: true},
                                      {label: 'Decrease', value: false}]"
                                      :searchable="false"
                                      :value="firstWithdrawalStartDelta"
                                      class="form-control new-neg-select small-style ml-2 mr-2"
                                      ref="firstWithdrawalStartDelta"></v-select>

                            <label>my withdrawals by this amount</label>
                            <vue-numeric :max="100000000" :min="0"
                                         class="form-input green-color-input mb-1 ml-2 mr-2 mb-sm-0 p-0 input-small-size"
                                         currency="$" separator="," v-model="calData.firstWithdrawalAmount"></vue-numeric>
                            <label>per year&nbsp;</label>
                        </b-form>
                    </b-row>
                    <b-row class="row-no-margin mt-4" v-if="calData.withdrawalOption === 3">
                        <b-form inline>
                            <label>In</label>
                            <vue-numeric :max="50" :min="0"
                                         class="form-input w-40px green-color-input mb-1 ml-2 mr-2 mb-sm-0 p-0 input-small-size"
                                         currency="" separator="," v-model="calData.secondWithdrawalStart"></vue-numeric>

                            <label>years,</label>
                            <!-- <b-input-group append="-" class="mb-2 mr-sm-2 mb-sm-0">
                              <b-input style="width:100px;color:#333;" value="Increase" />
                            </b-input-group> -->
                            <v-select :clear-search-on-select="false" :clearable="false" :onChange="(value) => vueSelectChange('secondWithdrawalStartDelta', value)"
                                      :options="[
                                      {label: 'Increase', value: true},
                                      {label: 'Decrease', value: false}]"
                                      :searchable="false"
                                      :value="secondWithdrawalStartDelta"
                                      class="form-control new-neg-select small-style ml-2 mr-2"
                                      ></v-select>

                            <label>increase/decrease my withdrawals by this amount </label>
                            <vue-numeric :max="100000000" :min="0"
                                         class="form-input green-color-input mb-1 ml-2 mr-2 mb-sm-0 p-0 input-small-size"
                                         currency="$" separator="," v-model="calData.secondWithdrawalAmount"></vue-numeric>
                            <label>years</label>
                        </b-form>
                    </b-row>
                </section>


                <section v-if="appType === '1'">
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
                            <vue-numeric :max="18" :min="2" class="form-input one-third-width green-color-input" currency="" separator="," v-model="calData.years"></vue-numeric>
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
                            <vue-numeric :max="100000000" :min="0" class="form-input one-third-width green-color-input" currency="$" separator="," v-model="calData.current"></vue-numeric>
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
                            <vue-numeric :max="500000" :min="1000" class="form-input one-third-width green-color-input" currency="$" separator="," v-model="calData.salary"></vue-numeric>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Enter the % by which you expect to increase your contribution amount each year.</span>

                            <!--<span class="tooltip-container">-->
                              <!--<font-awesome-icon icon="info-circle" id="expected-annual-contribution1"/>-->
                            <!--</span>-->
                            <!--<b-tooltip placement="topright" target="expected-annual-contribution1"-->
                                       <!--title="Enter the dollar amount that you plan to save each year for college."/>-->
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="100" :min="0" class="form-input one-third-width green-color-input"
                                         currency="%" currency-symbol-position="suffix" separator="" v-model="calData.percentageContribution"></vue-numeric>
                        </b-col>
                    </b-row>

                    <!--<b-row class="form-group row-no-margin">-->
                    <!--<b-col class="container-display-inline-left" cols="7">-->
                    <!--<span class="form-label">Enter the amount by which you expect to increase your contribution amount each year.</span>-->
                    <!--<span class="tooltip-container">-->
                    <!--<font-awesome-icon icon="info-circle" id="expected-annual-contribution3"/>-->
                    <!--</span>-->
                    <!--<b-tooltip placement="topright" target="expected-annual-contribution3"-->
                    <!--title="If you plan to contribute a constant amount each year, change this figure to 0%."/>-->
                    <!--</b-col>-->
                    <!--<b-col class="container-display-inline-right" cols="5">-->
                    <!--<vue-numeric :max="100" :min="0" class="form-input one-third-width green-color-input" currency="%" currency-symbol-position="suffix"-->
                    <!--separator="" style="width: 156px;" v-model="calData.increase"></vue-numeric>-->
                    <!--</b-col>-->
                    <!--</b-row>-->
                </section>


                <section v-if="appType === '2'">
                    <b-row class="padding-top-10 row-no-margin">
                        <span class="section-headline">BASIC COLLEGE SAVINGS DATA</span>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Years until retirement: </span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="years-until-matriculation"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="years-until-matriculation"
                                       title="How many more years do you plan to keep working?"/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="50" :min="2" class="form-input one-third-width green-color-input"
                                         currency="" separator="," v-model="calData.years"></vue-numeric>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Enter your current retirement nest egg value:</span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="enter-current-college-savings"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="enter-current-college-savings"
                                       title="Include the values of all accounts you consider to be part of your retirement nest egg (e.g., employer retirement plans, IRAs, personal investment accounts, etc.).."/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="100000000" :min="0" class="form-input one-third-width green-color-input"
                                         currency="$" separator="," v-model="calData.current"></vue-numeric>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Current annual salary/wages:</span>
                            <span class="tooltip-container">
                              <font-awesome-icon icon="info-circle" id="expected-annual-contribution123"/>
                            </span>
                            <b-tooltip placement="topright" target="expected-annual-contribution123"
                                       title="How much do you make today?"/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="500000" :min="10000" class="form-input one-third-width green-color-input"
                                         currency="$" separator="," v-model="calData.salary"></vue-numeric>
                        </b-col>
                    </b-row>


                    <b-form-group class="pt-0 mb-0 pb-0" label="">
                        <b-form-radio-group v-model="calData.contributionOption">
                            <b-row class="form-group row-no-margin">
                                <b-col class="container-display-inline-left">
                                    <span class="form-label">Total expected annual retirement contribution:</span>
                                </b-col>
                            </b-row>
                            <b-row class="form-group row-no-margin" inline
                                   style="padding-top:16px !important;padding-bottom:16px !important;">
                                <b-col class="container-display-inline-left">
                                    <b-form-radio :value="1" name="contributionOption">
                                        Expected contribution amount in dollars ($)
                                        <!-- <span class="tooltip-container"><font-awesome-icon id="age-based" icon="info-circle" /></span> -->
                                    </b-form-radio>
                                    <!-- <b-tooltip target="age-based" title="This election is intended to model the declining equity glidepath strategies commonly applied in Age-Based 529 Plan portfolios. These portfolios commonly transition to 0% equities upon matriculation."
                                      placement="topright" /> -->
                                </b-col>
                                <b-col class="container-display-inline-right">
                                    <vue-numeric :max="500000" :min="10000" class="form-input one-third-width green-color-input" currency="$"
                                                 separator="," style="width: 114px;" v-model="calData.dollarContribution"></vue-numeric>
                                    <span class="ml-1" style="font-size: 16px; color: #a5a4a4;">/year</span>
                                </b-col>
                            </b-row>

                            <div class="row form-group row-no-margin">
                                <div class="col-sm-3 p-0">
                                    <b-form-radio :value="2" name="contributionOption">
                                        Percent (%) of annual wages
                                        <!-- <span class="tooltip-container"><font-awesome-icon id="age-based" icon="info-circle" /></span> -->
                                    </b-form-radio>
                                </div>

                                <div class="col-sm-9 text-right p-0" style="position: relative; top: -5px;">
                                    <label style="margin-right:43px;font-size: 24px;">=</label>
                                    <vue-numeric :max="100" :min="0" class="form-input one-third-width green-color-input"
                                                 currency="%"
                                                 currency-symbol-position="suffix" separator="" style="width: 114px;" v-model="calData.percentageContribution"></vue-numeric>

                                    <label style="margin-left:50px; margin-right:27px;">X</label>
                                    <span style="font-size: 14px;">Current Wages</span>
                                    <b-input :value="`$` + (+calData.dollarContribution).toLocaleString()" class="d-inline-block" readonly style="margin-left: 26px; width: 114px;"/>
                                    <label style="margin-left:30px; margin-right:30px;font-size: 24px;">=</label>
                                    <b-input :value="`$` + (calData.dollarContribution * calData.percentageContribution / 100).toLocaleString()"
                                             class="d-inline-block mb-1 mr-sm-2 mb-sm-0 mr-0" readonly
                                             style="width: 114px; margin-right: 5px !important;"/>
                                    <span class="ml-0" style="font-size: 16px;">/year</span>
                                </div>
                            </div>
                        </b-form-radio-group>
                    </b-form-group>

                    <!--<b-row class="form-group row-no-margin">-->
                    <!--<b-col class="container-display-inline-left">-->
                    <!--<span class="form-label">Enter the % by which you expect to increase your contribution amount each year.</span>-->

                    <!--&lt;!&ndash;<span class="tooltip-container">&ndash;&gt;-->
                    <!--&lt;!&ndash;<font-awesome-icon icon="info-circle" id="expected-annual-contribution1"/>&ndash;&gt;-->
                    <!--&lt;!&ndash;</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;<b-tooltip placement="topright" target="expected-annual-contribution1"&ndash;&gt;-->
                    <!--&lt;!&ndash;title="Enter the dollar amount that you plan to save each year for college."/>&ndash;&gt;-->
                    <!--</b-col>-->
                    <!--<b-col class="container-display-inline-right">-->
                    <!--<vue-numeric :max="100" :min="0" class="form-input one-third-width green-color-input"-->
                    <!--currency="%" currency-symbol-position="suffix" separator="" v-model="calData.percentageContribution"></vue-numeric>-->
                    <!--</b-col>-->
                    <!--</b-row>-->

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left" cols="7">
                            <span class="form-label">Rate at which you expect your contribution amount will increase each year:</span>
                            <span class="tooltip-container">
                              <font-awesome-icon icon="info-circle" id="expected-annual-contribution3"/>
                            </span>
                            <b-tooltip placement="topright" target="expected-annual-contribution3"
                                       title="For many workers, the contribution amount rises at the same rate at which their wages increase. For instance, if you anticipate your wages to increase at 3% per year, you may wish to enter 3% as the amount by which you expect your contributions to increase too."/>
                        </b-col>
                        <b-col class="container-display-inline-right" cols="5">
                            <vue-numeric :max="100" :min="0" class="form-input one-third-width green-color-input"
                                         currency="%" currency-symbol-position="suffix"
                                         separator="" style="width: 156px;" v-model="calData.increase"></vue-numeric>
                        </b-col>
                    </b-row>
                </section>

                <section>
                    <b-row class="padding-top-10 row-no-margin mt-5">
                        <span class="section-headline">COLLEGE SAVINGS PORTFOLIO DETAILS</span>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Enter your current Broad Asset Allocation (must add up to 100%)</span>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <div>
                                <number-input :max="100" :min="0" class="w-80px newneg-number-input green-color-input"
                                              controls rounded size="small" v-model="calData.stocks"></number-input>
                            </div>

                            <div>
                                <number-input :max="100" :min="0" class="w-80px newneg-number-input green-color-input"
                                              controls rounded size="small" v-model="calData.bonds"></number-input>
                            </div>

                            <div>
                                <number-input :max="100" :min="0" class="w-80px newneg-number-input green-color-input"
                                              controls rounded size="small" v-model="calData.cash"></number-input>
                            </div>

                            <div>
                                <span class="error-item error-text"
                                      v-if="(calData.stocks + calData.bonds + calData.cash) !== 100">The sum must add up to 100%.</span>
                            </div>
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
                            <div>
                                <number-input :max="100" :min="0" class="w-80px newneg-number-input green-color-input"
                                              controls rounded size="small" v-model="calData.lgEquities"></number-input>
                            </div>

                            <div>
                                <number-input :max="100" :min="0" class="w-80px newneg-number-input green-color-input"
                                              controls rounded size="small" v-model="calData.smEquities"></number-input>
                            </div>

                            <div>
                                <number-input :max="100" :min="0" class="w-80px newneg-number-input green-color-input"
                                              controls rounded size="small" v-model="calData.iEquities"></number-input>
                            </div>
                            <div>
                                <span class="error-item error-text" v-if="(calData.lgEquities + calData.smEquities + calData.iEquities) !== 100">The sum must add up to 100%.</span>
                            </div>
                        </b-col>
                        <b-col>
                            <apexchart :options="chartOptions2" :series="series2" height="200" id="chart2" type="donut"
                                       width="500"></apexchart>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
            <span class="form-label">
              Enter an expected constant fixed rate of return that you may reasonably expect to earn on the “bond” portion of your nest egg:
            </span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="bond-portion"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="bond-portion"
                                       title="As a proxy for the bond portion of your college savings portfolio, it is suggested that users enter the rate of return they can reasonably expect to get on a 10-year treasury or a 5 year CD."/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="10" :min="0" class="form-input one-third-width green-color-input"
                                         currency="%" currency-symbol-position="suffix"
                                         separator="," v-bind:precision="2" v-model="calData.cdRate"></vue-numeric>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
            <span class="form-label">
              Enter an expected constant fixed rate of return that you may reasonably expect to earn on the cash or stable value portion of your nest egg:
            </span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="stable-value-portion"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="stable-value-portion"
                                       title="The default for this input has been set to 0% to reflect the current low interest rate environment. Users are free to change it to reflect what they think they can earn on cash."/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="10" :min="0" class="form-input one-third-width green-color-input"
                                         currency="%" currency-symbol-position="suffix"
                                         separator="," v-bind:precision="2" v-model="calData.moneyRate"></vue-numeric>
                        </b-col>
                    </b-row>

                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
            <span class="form-label">
              Enter your nest egg’s estimated annual investment expenses (expressed as a % of your total nest egg value):
            </span>
                            <span class="tooltip-container">
              <font-awesome-icon icon="info-circle" id="estimated-annual"/>
            </span>
                            <b-tooltip placement="topright"
                                       target="estimated-annual"
                                       title="Research has shown that investment expenses can have a signficant impact on wealth accumulation and sustainability. Failing to properly account for the impact of expenses may produce overly optimistic results. Be sure to account for ALL internal and extern"/>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="4" :min="0" class="form-input one-third-width green-color-input"
                                         currency="%" currency-symbol-position="suffix"
                                         separator="," v-bind:precision="2" v-model="calData.investment"></vue-numeric>
                        </b-col>
                    </b-row>
                </section>

                <section v-if="appType === '3'">
                    <b-row class="padding-top-10 row-no-margin">
                        <span class="section-headline">RETIREMENT WITHDRAWAL STRATEGY</span>
                    </b-row>
                    <b-row class="form-group row-no-margin pb-0 mb-0">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Choose your withdrawal strategy.</span><span
                                class="tooltip-container"><font-awesome-icon icon="info-circle" id="age-based2"/></span>
                        </b-col>
                        <b-tooltip placement="topright"
                                   target="age-based2"
                                   title="This election is intended to model the declining equity glidepath strategies commonly applied in Age-Based 529 Plan portfolios. These portfolios commonly transition to 0% equities upon matriculation."/>
                    </b-row>


                    <b-form-group class="pt-0 mb-0 pb-0" label="">
                        <b-form-radio-group v-model="calData.withdrawalStrategy">
                            <b-row class="form-group row-no-margin pb-0 mb-0">
                                <b-form-radio :value="1">
                                    Constant Allocation with Annual Rebalancing - proportional withdrawal from each asset class
                                    <span class="tooltip-container"><font-awesome-icon icon="info-circle" id="maintain"/></span>
                                </b-form-radio>

                                <b-tooltip placement="topright"
                                           target="maintain"
                                           title="This election assumes that you maintain your current portfolio allocation until the funds are needed to pay for college expenses."/>
                            </b-row>
                            <b-row class="form-group row-no-margin pb-0 mb-0" inline>
                                <b-form-radio :value="2">
                                    Stocks First Glidepath – Spend down the stocks first, then bonds, then cash.<span
                                        class="tooltip-container"><font-awesome-icon icon="info-circle" id="age-based3"/></span>
                                </b-form-radio>
                                <b-tooltip placement="topright"
                                           target="age-based3"
                                           title="This election is intended to model the declining equity glidepath strategies commonly applied in Age-Based 529 Plan portfolios. These portfolios commonly transition to 0% equities upon matriculation."/>
                            </b-row>
                            <b-row class="form-group row-no-margin pb-0 mb-0">
                                <b-form-radio :value="3">
                                    Bonds/Cash First Glidepath – Spend down cash first, then bonds, then stocks.<span
                                        class="tooltip-container"><font-awesome-icon icon="info-circle" id="maintain2"/></span>
                                </b-form-radio>

                                <b-tooltip placement="topright"
                                           target="maintain2"
                                           title="This election assumes that you maintain your current portfolio allocation until the funds are needed to pay for college expenses."/>
                            </b-row>
                            <b-row class="form-group row-no-margin pb-0 mb-0" inline>
                                <b-form-radio :value="4">
                                    Guardrail Strategy – Do not spend down stocks following negative return years<span
                                        class="tooltip-container"><font-awesome-icon icon="info-circle" id="age-based4"/></span>
                                </b-form-radio>
                                <b-tooltip placement="topright"
                                           target="age-based4"
                                           title="This election is intended to model the declining equity glidepath strategies commonly applied in Age-Based 529 Plan portfolios. These portfolios commonly transition to 0% equities upon matriculation."/>
                            </b-row>
                        </b-form-radio-group>
                    </b-form-group>


                </section>



                <section v-if="appType === '1'">
                    <b-row class="padding-top-10 row-no-margin">
                        <span class="section-headline">COLLEGE SAVINGS ACCUMULATION</span>
                    </b-row>
                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Choose a college savings accumulation investment strategy:</span>
                        </b-col>
                    </b-row>


                    <b-form-group class="pt-0 mb-0 pb-0" label="">
                        <b-form-radio-group v-model="calData.investmentStrategy">
                            <b-row class="form-group row-no-margin"
                                   style="padding-top:12px !important;padding-bottom:12px !important;">
                                <b-form-radio :value="1" name="investmentStrategy">
                                    Maintain your current broad allocation until
                                    matriculation.<span class="tooltip-container" style="padding: 0 0 0 10px"><font-awesome-icon
                                        icon="info-circle" id="maintain"/></span>
                                </b-form-radio>

                                <b-tooltip placement="topright"
                                           target="maintain"
                                           title="This election assumes that you maintain your current portfolio allocation until the funds are needed to pay for college expenses."/>
                            </b-row>
                            <b-row  class="form-group row-no-margin" inline
                                   style="padding-top:12px !important;padding-bottom:12px !important;">
                                <b-form-radio :value="2" name="investmentStrategy">
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
                        </b-form-radio-group>
                    </b-form-group>




                    <b-row class="form-group row-no-margin" v-if="calData.investmentStrategy === 2">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Target Stock Allocation Upon Matriculation:</span>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="100" :min="0" class="form-input one-third-width green-color-input" currency="%"
                                         currency-symbol-position="suffix" separator="" v-model="calData.targetStocks"></vue-numeric>
                        </b-col>
                        <b-col>
                            <vue-slider :dotSize="10" tooltip="none" v-model="calData.targetStocks" />
                        </b-col>
                    </b-row>
                </section>

                <section v-if="appType === '2'">
                    <b-row class="padding-top-10 row-no-margin">
                        <span class="section-headline">RETIREMENT ACCUMULATION INVESTMENT STRATEGY</span>
                    </b-row>
                    <b-row class="form-group row-no-margin">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Choose a retirement accumulation investment strategy.</span>
                        </b-col>
                    </b-row>


                    <b-form-group class="pt-0 mb-0 pb-0" label="">
                        <b-form-radio-group v-model="calData.investmentStrategy">
                            <b-row class="form-group row-no-margin"
                                   style="padding-top:12px !important;padding-bottom:12px !important;">
                                <b-form-radio :value="1" name="investmentStrategy">
                                    Maintain your current asset allocation until retirement.
                                    <span class="tooltip-container" style="padding: 0 0 0 10px"><font-awesome-icon
                                        icon="info-circle" id="maintain"/></span>
                                </b-form-radio>

                                <b-tooltip placement="topright"
                                           target="maintain"
                                           title="This option represents one of the most common retirement savings strategies and is analogous to the approach used in the “risk-based” portfolio models (e.g., conservative, moderate, growth, aggressive, etc.) offered in many employer retirement plans. "/>
                            </b-row>
                            <b-row  class="form-group row-no-margin" inline
                                    style="padding-top:12px !important;padding-bottom:12px !important;">
                                <b-form-radio :value="2" name="investmentStrategy" style="letter-spacing: -0.2px;">
                                    Apply a declining glidepath strategy until retirement. Enter your target stock allocation at retirement.
                                    (This % MUST be lower than your current stock allocation.)
                                    <span class="tooltip-container" style="padding: 0 0 0 10px"><font-awesome-icon
                                        icon="info-circle" id="age-based123"/></span>
                                </b-form-radio>
                                <b-tooltip placement="topright"
                                           target="age-based123"
                                           title="This option is roughly analogous to the approach used in the “target-date” portfolio models that are offered in many employer retirement plans. With this strategy, the stock allocation is reduced and the bond allocation is increased in linear fashion each year until the target  allocation is reached in the year of retirement."/>
                            </b-row>
                        </b-form-radio-group>
                    </b-form-group>




                    <b-row class="form-group row-no-margin" v-if="calData.investmentStrategy === 2">
                        <b-col class="container-display-inline-left">
                            <span class="form-label">Target Stock Allocation at Retirement:</span>
                        </b-col>
                        <b-col class="container-display-inline-right">
                            <vue-numeric :max="100" :min="0" class="form-input one-third-width green-color-input" currency="%"
                                         currency-symbol-position="suffix" separator="" v-model="calData.targetStocks"></vue-numeric>
                        </b-col>
                        <b-col>
                            <vue-slider :dotSize="10" tooltip="none" v-model="calData.targetStocks" />
                        </b-col>
                    </b-row>
                </section>


                <section class="mt-5">
                    <b-row class="row-no-margin">
                        <b-col class="container-display-inline-right">
                            <button @click="onSubmit" class="btn purchase-btn"
                                    style="color:#fff;width:129px;height:40px;">Submit
                            </button>
                        </b-col>
                    </b-row>
                </section>


            </div>
            <result-component :appType="appType" :resultData="resultData" @changeInput="changeInput"
                              @resetInput="resetInput" v-if="pageStatus === 3"></result-component>
        </b-container>
        <loading-component v-if="pageStatus === 2"></loading-component>

        <Footer></Footer>
    </div>
</template>


<script src="./CalculatorApp.js"></script>
<style lang="scss" src="./retirementSpendingApplication.scss"></style>
