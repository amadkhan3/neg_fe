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
                <p class="big-green-text">COLLEGE SAVINGS ASSESSMENT</p>
            </div>
               
                <p class="small-black-text">Report Prepared for:</p>
                <p class="user-name">JOHN CARTER</p>
        </div>
        <div style="width:100%;height:800px" ></div>
        <div class="section">
            <p class="courtesy">This analysis is provided courtesy of</p>
            <p class="advisor-name">John Q. Advisor, CFP</p>
            <P class="advisor-contact">Wealth Management Company</p>
            <P class="advisor-contact">100 Main Street, Suite 222, Anywhere, USA 13456</p>
            <P class="advisor-contact">Office Phone: (555)222-3333</p>
            <P class="advisor-contact">Email: JohnQ@wmc.com</p>
            <P class="advisor-contact">www.wealthmanagement.com</p>
        </div>
        <div style="width:100%;height:757px" ></div>
        <div class="section">
            <div style="border-top: 1px solid #eee;margin-bottom:70px; width:1000px; margin-left:179px;"></div>
            <p class="medium-green-text">COLLEGE SAVINGS APP INPUTS</p>
            <div style="border-bottom: 1px solid #eee;margin-top:70px;margin-bottom: 70px; width: 1000px;margin-left:179px;"></div>
            <div style="margin-left:189px; margin-right:189px;">
                <div class="row">
                    <p class="small-green-text">YOUR BASIC DATA</p>
                </div>
                <div class="row" style="margin-bottom:30px">
                    <span class="col c-form-label" style="text-align:left;padding-right:0px; padding-left:0px;">Years until matriculation:</span>
                    <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="8" /></div>
                </div>
                <div class="row" style="margin-bottom:30px">
                    <span class="col c-form-label" style="text-align:left;padding-right:0px; padding-left:0px;">Current college savings:</span>
                    <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="$100,000" /></div>
                </div>
                <div class="row" style="margin-bottom:30px">
                    <span class="col c-form-label" style="text-align:left;padding-right:0px; padding-left:0px;">Expected annual contribution:</span>
                    <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="$100,000" /></div>
                </div>
                <div class="row" style="margin-bottom:30px">
                    <span class="col c-form-label" style="text-align:left;padding-right:0px; padding-left:0px;">The amount by which you expect to increase your contribution amount each year:</span>
                    <div class="col" style="padding-right:0px; padding-left:0px;"><b-input class="chart-field" style="float:right;width:100px;" value="3%" /></div>
                </div>
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
                    <p class="small-green-text">COLLEGE SAVINGS ACCUMULATION</p>
                </div>
                <div style="height:25px"> </div>
                <b-row style="padding-top:16px !important;padding-bottom:16px !important;" class="form-group row-no-margin">
                  <b-form-radio value="A" class="c-form-label" name="collegeSavingAccumulation">
                    Maintain your current broad allocation until matriculation.
                  </b-form-radio>
                  
                  <b-tooltip target="maintain" title="This election assumes that you maintain your current portfolio allocation until the funds are needed to pay for college expenses."
                    placement="topright" />
                </b-row>
                <b-row style="padding-top:16px !important;padding-bottom:16px !important;" inline class="form-group row-no-margin">
                  <b-form-radio value="A" class="c-form-label" style="text-align:left;" name="collegeSavingAccumulation">
                    Glidepath – final equity allocation = 50%
                  </b-form-radio>
                </b-row>
            </div>
            <div style="height: 673px;"></div>
             <div style="border-top: 1px solid #eee;margin-bottom:70px; width:1000px; margin-left:179px;"></div>
                <p class="medium-green-text">COLLEGE SAVINGS APPLICATION RESULTS</p>
              <div style="border-bottom: 1px solid #eee;margin-top:70px;margin-bottom: 70px; width: 1000px;margin-left:179px;"></div>
              
            <div class="results-section">
              <div class="center-div">
             <div>
                <p style="text-align:left;" class="results-sub-heading">UNDERSTANDING THE COLLEGE SAVINGS APP RESULTS</p>
                <p class="results-text">Providing a range of results is more informative and instructive for college savings planning than generating a single projected value derived from an expected annual rate of return estimate. In the real world, investment returns are not constant from one year to the next, so families should account for the possibility of negative return years in their planning, especially as the matriculation date approaches. The 5,000 simulations that are generated in this analysis represent a broad range of potential outcomes.</p>
                <p class="results-text">Users of this app are encouraged to evaluate college savings preparedness by considering the results that lie between the 50% (median) and 1% result values. This range is intended to provide a reasonable estimate of where the user’s portfolio value may fall in the event that future returns turn out to be less robust than the historical norm. This is consistent with the financial planning concept that investors should approach long term financial goals from the perspective of “hope for the best, but prepare for the worst”. While future investment returns are inherently undpredictable, users are encouraged to explore how changing the various inputs that are within their control may impact their results.</p>
                <p class="results-text">The College Savings App may be particularly useful for families who utilize 529 college savings plans, but may be applied to other education funding portfolios as well. Users should be aware that the greater their real world portfolio differs from the allocation models illustrated in this application, the less useful/applicable the results may be.</p>
                <p class="results-sub-heading">COLLEGE SAVINGS APP RESULTS</p>
                <div class="row" style=" margin-left: 0px;">
                  <div style="margin-right:28px;" class="col centered-box Rectangle-599">
                    <p class="box-text">Based upon an initial contribution rate of 10% per year and an expected contribution increase rate of 3% per year, your total contributions to your college saving portfolio are projected to be:</p>
                    <div>
                    <p class="price">$50,796</p>
                    <p class="box-bottom-text">This is the total projected amount you will contribute to the portfolio from now until matriculation.</p>
                    </div>
                  </div>
                  <div style="margin-right:28px;" class="col centered-box Rectangle-599">
                    <p class="box-text">Based upon an initial contribution rate of 10% per year and an expected contribution increase rate of 3% per year, your total contributions to your college saving portfolio are projected to be:</p>
                    <div><p class="price">$50,796</p>
                    <p class="box-bottom-text">This is the total projected amount you will contribute to the portfolio from now until matriculation.</p>
                    </div>
                  </div>
                  <div style="margin-right:28px;" class="col centered-box Rectangle-599 warn">
                    <p class="box-text">Based upon an initial contribution rate of 10% per year and an expected contribution increase rate of 3% per year, your total contributions to your college saving portfolio are projected to be:</p>
                    
                    <div><p class="price-warn">$50,796</p>
                    <p class="box-bottom-text">This is the total projected amount you will contribute to the portfolio from now until matriculation.</p>
                    </div>
                  </div>
                  <div class="col centered-box Rectangle-599 warn">
                    <p class="box-text">Based upon an initial contribution rate of 10% per year and an expected contribution increase rate of 3% per year, your total contributions to your college saving portfolio are projected to be:</p>
                    
                    <div><p class="price-warn">$50,796</p>
                    <p class="box-bottom-text">This is the total projected amount you will contribute to the portfolio from now until matriculation.</p>
                    </div>
                  </div>
                  <p style="margin-top:30px;" class="results-sub-heading">COMPLETE SIMULATION RESULTS - PROJECTED NEST EGG VALUES AT MATRICULATION</p>
                  <p class="results-dark-text">The table below shows the range of nest egg values at retirement that were generated from the 5,000 simulations . The median result represents the college savings balance at matriculation for the 2,500th best/worst simulation result. The 10%, 5%, and 1% nest egg values represent the bottom 500th, 250th, and 50th simulation results, respectively.</p>
                  <br><p class="results-dark-text">Users should understand that these results do not represent probabilities and are not intended to be predictive. They do, however, provide valuable insight into how one might fare if future investment returns are unaccommodating.</p>
                  <br>
                </div>
                <div class="col table-style">
                  <b-table small bordered fixed :items="items" />
                </div>
              <div class="row" style="margin-bottom: 50px;">
                <div class="col-6 offset-7">
                <b-button class="mt-2 cancel-btn" variant="default">Change Input</b-button>
                <b-button style="margin-left:40px;" class="mt-2 purchase-btn" variant="success">Reset</b-button>
                </div>   
              </div>
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
          { Simulation_Percentile: '80%', Nest_Egg_Value: '$342,659' },
          { Simulation_Percentile: '60%', Nest_Egg_Value: '$283,014' },
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
<style lang="scss" src="./printpdf.scss"></style>