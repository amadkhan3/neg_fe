<template>
    <div class="content-inner print-pdf">

        <div class="loader fluid-container">

        <div class="top-bar row">
            <div class="">
                <b-button style="margin-right:10px;" class="btn btn-danger trial-btn">Save PDF</b-button>
                <b-button style="margin-left:10px;" class="btn btn-success purchase-btn">Print</b-button>
            </div>
        </div>
<div style="width:100%;height:400px" ></div>
        <div class="section">
            <div>
                <p class="big-green-text">RETIREMENT SPENDING ANALYSIS</p>
            </div>
               
                <p class="small-black-text">Report Prepared for:</p>
                <p class="user-name">JOHN CARTER</p>
        </div>
        <div style="width:100%;height:800px" ></div>
        <div class="section">
            <p class="courtesy">This analysis is provided courtesy of</p>
            <p class="advisor-name">John Q. Advisor, CFP</p>
            <p class="advisor-contact">Wealth Management Company</p>
            <p class="advisor-contact">100 Main Street, Suite 222, Anywhere, USA 13456</p>
            <p class="advisor-contact">Office Phone: (555)222-3333</p>
            <p class="advisor-contact">Email: JohnQ@wmc.com</p>
            <p class="advisor-contact">www.wealthmanagement.com</p>
        </div>
        <div style="width:100%;height:757px" ></div>
        <div class="section">
            <div style="border-top: 1px solid #eee;margin-bottom:70px; width:1000px; margin-left:179px;"></div>
            <p class="medium-green-text">RETIREMENT SPENDING ANALYSIS INPUTS</p>
            <div style="border-bottom: 1px solid #eee;margin-top:70px;margin-bottom: 70px; width: 1000px;margin-left:179px;"></div>
            <div style="margin-left:189px; margin-right:189px;">
                <div class="row">
                    <p class="small-green-text">YOUR BASIC DATA</p>
                </div>
                <div class="row" style="margin-bottom:30px">
                    <span class="col c-form-label" style="text-align:left;padding-right:0px; padding-left:0px;">Years in retirement:</span>
                    <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="8" /></div>
                </div>
                <div class="row" style="margin-bottom:30px">
                    <span class="col c-form-label" style="text-align:left;padding-right:0px; padding-left:0px;">Current retirement nest egg value:</span>
                    <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="$100,000" /></div>
                </div>
                <div class="row" style="margin-bottom:30px">
                    <span class="col c-form-label" style="text-align:left;padding-right:0px; padding-left:0px;">Initial withdrawal amount:</span>
                    <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="$100,000" /></div>
                </div>
                <div class="row" style="margin-bottom:30px">
                    <span class="col c-form-label" style="text-align:left;padding-right:0px; padding-left:0px;">Annual cost of living adjustment:</span>
                    <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="3%" /></div>
                </div>
                <div class="row" style="margin-bottom:30px">
                  <span class="col" style="text-align: left; padding-right: 0px; padding-left:0px;">Planned Increases/Decreases to withdrawal amount beyond inflation adjustments:</span>
                </div>
                <b-row class="form-group row-no-margin">
                  <b-form-radio value="A" class="c-form-label" name="collegeSavingAccumulation">
                    No planned future adjustments to withdrawal amount.
                  </b-form-radio>
                  
                  <b-tooltip target="maintain" title="This election assumes that you maintain your current portfolio allocation until the funds are needed to pay for college expenses."
                    placement="topright" />
                </b-row>
                <b-row inline class="form-group row-no-margin">
                  <b-form-radio value="A" class="c-form-label" style="text-align:left;" name="collegeSavingAccumulation">
                    Allow for one future adjustment to my withdrawal amount  illustration .
                  </b-form-radio>
                </b-row>
                <b-row inline class="form-group row-no-margin">
                  <b-form-radio value="A" class="c-form-label" style="text-align:left;" name="collegeSavingAccumulation">
                    Allow for two future adjustments to my withdrawal amount.
                  </b-form-radio>
                </b-row>
                <div style="width:100%;height:80px"></div>
                <div class="row">
                    <p class="small-green-text">COLLEGE SAVINGS PORTFOLIO DETAILS</p>
                </div>
                <div class="row">
                    <div class="col" style="margin-bottom:30px;">
                      <div class="row">
                          <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="8" /></div>
                      </div>
                      <div class="row">
                          <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="8" /></div>
                      </div>
                      <div class="row">
                          <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="8" /></div>
                      </div>
                    </div>
                    <div class="col">
                          <apexchart id="chart" width="500" height="200" type="donut" :options="chartOptions" :series="series"></apexchart>
                    </div>
                </div>
                <div class="row">
                    <div class="col" style="margin-bottom:30px;">
                      <div class="row">
                          <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="8" /></div>
                      </div>
                      <div class="row">
                          <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="8" /></div>
                      </div>
                      <div class="row">
                          <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="8" /></div>
                      </div>
                    </div>
                    <div class="col">
                          <apexchart id="chart" width="500" height="200" type="donut" :options="chartOptions" :series="series"></apexchart>
                    </div>
                </div>
                <div class="row" style="margin-bottom:30px">
                    <span class="col c-form-label" style="text-align:left;padding-right:0px; padding-left:0px;">Expected rate of return on bonds:</span>
                    <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="10%" /></div>
                </div>
                <div class="row" style="margin-bottom:30px">
                    <span class="col c-form-label" style="text-align:left;padding-right:0px; padding-left:0px;">Expected rate of return on cash:</span>
                    <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="0%" /></div>
                </div>
                <div class="row" style="margin-bottom:30px">
                    <span class="col c-form-label" style="text-align:left;padding-right:0px; padding-left:0px;">Total expected investment expenses:</span>
                    <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="3%" /></div>
                </div>
                <div style="height:80px;"></div>
                <div class="row">
                    <p class="small-green-text">RETIREMENT ACCUMULATION STRATEGY</p>
                </div>
                <div style="height:25px"> </div>
                <b-row class="form-group row-no-margin">
                  <b-form-radio value="A" class="c-form-label" name="collegeSavingAccumulation">
                    Constant Allocation with Annual Rebalancing - proportional withdrawal from each asset class 
                  </b-form-radio>
                  
                  <b-tooltip target="maintain" title="This election assumes that you maintain your current portfolio allocation until the funds are needed to pay for college expenses."
                    placement="topright" />
                </b-row>
                <b-row inline class="form-group row-no-margin">
                  <b-form-radio value="A" class="c-form-label" style="text-align:left;" name="collegeSavingAccumulation">
                    Stocks First Glidepath – Spend down the stocks first, then bonds, then cash.
                  </b-form-radio>
                </b-row>
                <b-row inline class="form-group row-no-margin">
                  <b-form-radio value="A" class="c-form-label" style="text-align:left;" name="collegeSavingAccumulation">
                    Bonds/Cash First Glidepath – Spend down cash first, then bonds, then stocks.
                  </b-form-radio>
                </b-row><b-row inline class="form-group row-no-margin">
                  <b-form-radio value="A" class="c-form-label" style="text-align:left;" name="collegeSavingAccumulation">
                    Guardrail Strategy – Do not spend down stocks following negative return years
                  </b-form-radio>
                </b-row>
            </div>
            <div style="height: 673px;"></div>
             <div style="border-top: 1px solid #eee;margin-bottom:70px; width:1000px; margin-left:179px;"></div>
                <p class="medium-green-text">RETIREMENT SPENDING ANALYSIS RESULTS</p>
              <div style="border-bottom: 1px solid #eee;margin-top:70px;margin-bottom: 70px; width: 1000px;margin-left:179px;"></div>
              
            <div class="results-section">
              <div class="center-div">
             <div>
                <p style="text-align:left;" class="results-sub-heading">UNDERSTANDING THE RETIREMENT SPENDING APP RESULTS</p>
                <p class="results-text">Providing a range of results is more informative and instructive for college savings planning than generating a single projected value derived from an expected annual rate of return estimate. In the real world, investment returns are not constant from one year to the next, so families should account for the possibility of negative return years in their planning, especially as the matriculation date approaches. The 5,000 simulations that are generated in this analysis represent a broad range of potential outcomes.</p>
                <p class="results-text">Users of this app are encouraged to evaluate college savings preparedness by considering the results that lie between the 50% (median) and 1% result values. This range is intended to provide a reasonable estimate of where the user’s portfolio value may fall in the event that future returns turn out to be less robust than the historical norm. This is consistent with the financial planning concept that investors should approach long term financial goals from the perspective of “hope for the best, but prepare for the worst”. While future investment returns are inherently undpredictable, users are encouraged to explore how changing the various inputs that are within their control may impact their results.</p>
                <p class="results-text">The College Savings App may be particularly useful for families who utilize 529 college savings plans, but may be applied to other education funding portfolios as well. Users should be aware that the greater their real world portfolio differs from the allocation models illustrated in this application, the less useful/applicable the results may be.</p>
                <p class="results-sub-heading">RETIREMENT SPENDING ANALYSIS RESULTS SUMMARY</p>
                <div class="row" style=" margin-left: 0px;">
          <div style="margin-right:28px;" class="col centered-box Rectangle-599">
            <p class="box-text">Out of 5,000 withdrawal simulations, your 30 year withdrawal goal was successful this % of the time:</p>
            <div style="margin-top:7em;">
            <p class="price">55%</p>
            <p class="box-bottom-text">This is the percentage of simulations in which your Nest Egg lasted longer than you did.</p>
            </div>
          </div>
          <div style="margin-right:28px;" class="col centered-box Rectangle-599">
            <p class="box-text">At the top 20% result (80th percentile) of the 5,000 simulations, your remaining portfolio balance at the end of 30 years was:</p>
            <div style="margin-top:5.625em;"><p class="price">$1,616,394</p>
            <p class="box-bottom-text">This may represent an overly optimistic outcome</p>
            </div>
          </div>
          <div style="margin-right:28px;" class="col centered-box Rectangle-599 warn">
            <p class="box-text">Out of 5,000 simulations, your retirement nest egg was depleted before 30 years this percent of the time:</p>
            
            <div style="margin-top:7em;"><p class="price-warn">45%</p>
            <p class="box-bottom-text">This percentage represents the failure rate of the 5,000 simulations.</p>
            </div>
          </div>
          <div class="col centered-box Rectangle-599 warn">
            <p class="box-text">At the worst result out of the 5,000 simulations, your remaining portfolio balance at the end of 30 years was</p>
            
            <div style="margin-top:7em;"><p class="price-warn">$0</p>
            <p class="box-bottom-text">This result may represent investment conditions that are worse than any in the historical record.</p>
            </div>
          </div>
          <p style="margin-top:30px;" class="results-sub-heading">COMPLETE RETIREMENT NEST EGG SUSTAINABILITY SIMULATION RESULTS</p>
          <p class="results-dark-text">The median remaining balance results represent the the 2,500th best/worst simulation result of the 5,000 total simulations for each 5 year interval. The 10%, 5%, and 1% remaining balances represent the bottom 500th, 250th, and 50th simulation results, respectively. It is important to understand that the percentages do not represent probabilities and are not intended to be predictive. Instead, the simulation results illustrate how your nest egg may fare in retirement if things go badly in the markets.</p>
          <br>
        </div>
        <div class="results-section">
          <div class="center-div">
            <div>
              <p style="text-align:center;font-size: 20px; font-weight:bold;">Remaining Nest Egg Balance in 5 year Intervals</p>
            </div>
          </div>
        </div>
                <div class="col table-style">
                  <b-table small bordered fixed :items="items" />
                </div>
              <!-- <div class="row" style="margin-bottom: 50px;">
                <div class="col-6 offset-7">
                <b-button class="mt-2 cancel-btn" variant="default">Change Input</b-button>
                <b-button style="margin-left:40px;" class="mt-2 purchase-btn" variant="success">Reset</b-button>
                </div>   
              </div> -->
              <div style="height:643px;"></div>
              <div class="row">
                <p style="font-size: 24px;margin-bottom: 20px;">IMPORTANT DISCLOSURES:</p>
                <p class="results-bottom-txt">The simulation results produced by this application are hypothetical in nature, do not reflect actual investment results, and provide no assurance of future returns. Instead, the application is intended as an educational tool to help users generally assess their planning preparedness and to help them understand how changing the various inputs that are within their control may impact the results. While we believe the information presented may be instructive in helping users plan for their financial goals, it is important to understand that no application is a crystal ball and that the apps are not intended to predict future returns.</p>
                <p class="results-bottom-txt">Similarly, it is important to understand the limitations of this or any other planning application. First, while considerable thought has gone into designing portfolio models that realistically represent individual investor experiences, the degree to which the index models used to produce the simulations may differ from the actual users’ portfolios may affect the applicability of the results. Second, the choice of indices and the time periods from which the monthly index return data were sampled may have a significant effect on the outcomes and might produce different results if different indices and/or time periods were chosen. Third, because the simulation results are derived from random sampling of historical monthly returns data, there is an underlying assumption that future returns will at least be somewhat similar to what they have been in the recent past. Fourth, users should be aware that, as with all simulation-based applications, results may vary from one simulation to the next and over time. Lastly, while we believe the methodology chosen in this application has certain advantages, other apps using different methodologies may produce different results.</p>
                <p class="results-bottom-txt">The 5,000 simulation results presented herein were produced using a sampling methodology called “bootstrapping”. The simulations were generated from monthly equity index return data from 1970-2016. The S&P 500 Index is employed as the proxy for large cap U.S. Stocks, international stocks are represented by the MSCI EAFE Index, and small and mid-cap stocks are represented by the Russell 2000 Index. The application also holds monthly index data for the Merrill Lynch U.S. Corporate Bond Index, 10-year treasuries, and one year treasuries. However, as noted on the inputs page, the option to include these indices has been intentionally suppressed in the current low interest rate environment.</p>
                <p class="results-bottom-txt">This application is made available to you as an education tool for your independent use and is not intended as a substitute for professional financial planning guidance or advice. While it is hoped that the app will help you to identify important factors to consider in planning for your financial goals, for specific guidance, users are encouraged to consult with a trusted financial planning professional.</p>
                <p class="results-bottom-txt-16">Securties offered through J.W.Cole Financial.Inc(JWC) Member FINRA/SIPC.Advisory Services offered through J.W. Hawaii and JWC/JWCA are unaffiliated entties.</p>
              </div>
              </div>
              <div style="height:1262px;"></div>
            </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    // @ is an alias to /sr
    import VueApexCharts from "vue-apexcharts";
    import HelloWorld from "@/components/HelloWorld.vue";
    import Header from '@/components/backend/header/Header.vue';
    import Footer from '@/components/backend/footer/Footer.vue';

    export default {
        name: "printpdf",
        components: {
            HelloWorld,
            Header,
            Footer,
            VueApexCharts
        },
        data: function () {
      return {
        items: [
          { Simulation_Percentile: '80%', After_5_Years: '$1,263,308', After_10_Years: '$1,413,890', After_15_Years: '$1,559,153', After_20_Years: '$1,645,599', After_25_Years: '$1,721,642', After_30_Years: '$1,668,154', After_35_Years: '$1,498,441', After_40_Years: '$1,152,316', After_45_Years: '$579,562', After_50_Years: '$0' },
          { Simulation_Percentile: '80%', After_5_Years: '$1,263,308', After_10_Years: '$1,413,890', After_15_Years: '$1,559,153', After_20_Years: '$1,645,599', After_25_Years: '$1,721,642', After_30_Years: '$1,668,154', After_35_Years: '$1,498,441', After_40_Years: '$1,152,316', After_45_Years: '$579,562', After_50_Years: '$0' },
          { Simulation_Percentile: '80%', After_5_Years: '$1,263,308', After_10_Years: '$1,413,890', After_15_Years: '$1,559,153', After_20_Years: '$1,645,599', After_25_Years: '$1,721,642', After_30_Years: '$1,668,154', After_35_Years: '$1,498,441', After_40_Years: '$1,152,316', After_45_Years: '$579,562', After_50_Years: '$0', _rowVariant: 'info' },
          { Simulation_Percentile: '80%', After_5_Years: '$1,263,308', After_10_Years: '$1,413,890', After_15_Years: '$1,559,153', After_20_Years: '$1,645,599', After_25_Years: '$1,721,642', After_30_Years: '$1,668,154', After_35_Years: '$1,498,441', After_40_Years: '$1,152,316', After_45_Years: '$579,562', After_50_Years: '$0', _rowVariant: 'info' },
          { Simulation_Percentile: '80%', After_5_Years: '$1,263,308', After_10_Years: '$1,413,890', After_15_Years: '$1,559,153', After_20_Years: '$1,645,599', After_25_Years: '$1,721,642', After_30_Years: '$1,668,154', After_35_Years: '$1,498,441', After_40_Years: '$1,152,316', After_45_Years: '$579,562', After_50_Years: '$0', _rowVariant: 'info' },
          { Simulation_Percentile: '80%', After_5_Years: '$1,263,308', After_10_Years: '$1,413,890', After_15_Years: '$1,559,153', After_20_Years: '$1,645,599', After_25_Years: '$1,721,642', After_30_Years: '$1,668,154', After_35_Years: '$1,498,441', After_40_Years: '$1,152,316', After_45_Years: '$579,562', After_50_Years: '$0', _rowVariant: 'danger' },
          { Simulation_Percentile: '80%', After_5_Years: '$1,263,308', After_10_Years: '$1,413,890', After_15_Years: '$1,559,153', After_20_Years: '$1,645,599', After_25_Years: '$1,721,642', After_30_Years: '$1,668,154', After_35_Years: '$1,498,441', After_40_Years: '$1,152,316', After_45_Years: '$579,562', After_50_Years: '$0', _rowVariant: 'danger' },
          { Simulation_Percentile: '80%', After_5_Years: '$1,263,308', After_10_Years: '$1,413,890', After_15_Years: '$1,559,153', After_20_Years: '$1,645,599', After_25_Years: '$1,721,642', After_30_Years: '$1,668,154', After_35_Years: '$1,498,441', After_40_Years: '$1,152,316', After_45_Years: '$579,562', After_50_Years: '$0', _rowVariant: 'danger' },
          { Simulation_Percentile: '80%', After_5_Years: '$1,263,308', After_10_Years: '$1,413,890', After_15_Years: '$1,559,153', After_20_Years: '$1,645,599', After_25_Years: '$1,721,642', After_30_Years: '$1,668,154', After_35_Years: '$1,498,441', After_40_Years: '$1,152,316', After_45_Years: '$579,562', After_50_Years: '$0', _rowVariant: 'danger' },
          ],
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
<style lang="scss" src="./printpdfRetirement.scss"></style>