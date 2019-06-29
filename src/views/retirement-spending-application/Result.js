import _ from 'lodash';

const YEARS_INDEX = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

export default {
    data() {
        return {

        }
    },
    computed: {
        collegeTable() {
            let rows = []
            let yearEndIndex = this.yearIndex;
            rows.push({Simulation_Percentile: '80%'})
            rows.push({Simulation_Percentile: '60%'})
            rows.push({Simulation_Percentile: 'Median', _rowVariant: 'info'})
            rows.push({Simulation_Percentile: '40%', _rowVariant: 'info'})
            rows.push({Simulation_Percentile: '20%', _rowVariant: 'info'})
            rows.push({Simulation_Percentile: '10%', _rowVariant: 'danger'})
            rows.push({Simulation_Percentile: '5%', _rowVariant: 'danger'})
            rows.push({Simulation_Percentile: '1%', _rowVariant: 'danger'})
            rows.push({Simulation_Percentile: 'Worst', _rowVariant: 'danger'})

            rows.forEach((row, rowIndex) => {
                row._cellVariants = {}
                let keys = Object.keys(this.resultData.accumtable)
                // let accumtable = {
                //     "80thPercentileBalance": "341589",
                //     "60thPercentileBalance": "281437",
                //     "MedianBalance": "260071",
                //     "40thPercentileBalance": "238599",
                //     "20thPercentileBalance": "198788",
                //     "10ValueatRisk": "174183",
                //     "5ValueatRisk": "153978",
                //     "1ValueatRisk": "125780",
                //     "LowestBalance": "80838"
                // },
                row['Nest_Egg_Value'] = '$' + (+this.resultData.accumtable[keys[rowIndex]]).toLocaleString()
            })

            return rows;
        },
        tableData() {
            let rows = []
            let yearEndIndex = this.yearIndex;
            rows.push({Simulation_Percentile: '80%'})
            rows.push({Simulation_Percentile: '60%'})
            rows.push({Simulation_Percentile: 'Median', _rowVariant: 'info'})
            rows.push({Simulation_Percentile: '40%', _rowVariant: 'info'})
            rows.push({Simulation_Percentile: '20%', _rowVariant: 'info'})
            rows.push({Simulation_Percentile: '10%', _rowVariant: 'danger'})
            rows.push({Simulation_Percentile: '5%', _rowVariant: 'danger'})
            rows.push({Simulation_Percentile: '1%', _rowVariant: 'danger'})
            rows.push({Simulation_Percentile: 'Worst', _rowVariant: 'danger'})

            rows = rows.reverse()

            let getValueForCell = (rowIndex, yearIndex) => {
                let yearData = this.resultData.chartData[yearIndex]
                let value = +_.get(yearData, `values[${rowIndex}].value`, 0)
                return '$' + value.toLocaleString();
            }

            rows.forEach((row, rowIndex) => {
                row._cellVariants = {}
                YEARS_INDEX.every((yearItem, yearIndex) => {
                    if (yearIndex > yearEndIndex) return false
                    let key = `After_${yearItem}_Years`
                    row[key] = getValueForCell(rowIndex, yearIndex);
                    if (row[key] === '$0') {
                        row._cellVariants[key] = 'warning'
                    }
                    return true
                })
            })

            return rows.reverse();
        },
        yearIndex() {
            let targetYear = _.get(this, 'resultData.keytable.NumberofYearsinRetirementHorizon', null);
            if (!targetYear) return -1;
            let targetYearNumber = +targetYear
            return YEARS_INDEX.indexOf(targetYearNumber);
        },
        totalSummary() {
            let yearIndex = this.yearIndex
            const nullValue = 'N/A'
            if (yearIndex === -1) return nullValue

            let result = _.get(this, `resultData.rbtable.80thPercentileBalance[${yearIndex}]`, null)
            if (!result) {
                return nullValue
            }

            let summaryNumber = +(_.replace(result, '$', ''));
            return summaryNumber.toLocaleString();
        },
        totalMinSummary() {
            let yearIndex = this.yearIndex
            const nullValue = 'N/A'
            if (yearIndex === -1) return nullValue

            let result = _.get(this, `resultData.rbtable.LowestBalance[${yearIndex}]`, null)
            if (!result) {
                return nullValue
            }

            let summaryNumber = +(_.replace(result, '$', ''));
            return summaryNumber.toLocaleString();
        }
    },

    methods: {
        resetInput() {
            this.$emit('resetInput')
        },
        changeInput() {
            this.$emit('changeInput')
        },
    },

    props: {
        appType: {
            type: String,
            default: function () {
                return '3'
            }
        },
        resultData: {
            type: Object,
            default: function () {
                return {
                    "accumtable": {
                        "80thPercentileBalance": "341589",
                        "60thPercentileBalance": "281437",
                        "MedianBalance": "260071",
                        "40thPercentileBalance": "238599",
                        "20thPercentileBalance": "198788",
                        "10ValueatRisk": "174183",
                        "5ValueatRisk": "153978",
                        "1ValueatRisk": "125780",
                        "LowestBalance": "80838"
                    },
                    "keytable": {
                        "MeanBalance": "275136",
                        "HighestBalance": "1136626",
                        "NumberofYearsuntilRetirement": "9",
                        "AverageAnnualRetirementContribution": "5644",
                        "TotalContributionsatRetirement": "50796",
                        "BestCaseMaximumAccumulatedBalance": "1136626",
                        "WorstCaseMinimumAccumulatedBalance": "80838",
                        "10ValueatRisk": "174183",
                        "5ValueatRisk": "153978",
                        "1ValueatRisk": "125780",
                        "increase": 3,
                        "initial": "10%"
                    }
                }


                // return {
                //     "rbtable": {
                //         "LowestBalance": ["$435054", "$185970", "$0", "$0", "$0", "$0"],
                //         "1ValueatRisk": ["$593181", "$353153", "$61052", "$0", "$0", "$0"],
                //         "5ValueatRisk": ["$702999", "$511589", "$263340", "$0", "$0", "$0"],
                //         "10ValueatRisk": ["$766489", "$608244", "$399024", "$77603", "$0", "$0"],
                //         "20thPercentileBalance": ["$858780", "$747970", "$574133", "$297847", "$0", "$0"],
                //         "40thPercentileBalance": ["$985765", "$946657", "$855160", "$670309", "$373212", "$0"],
                //         "MedianBalance": ["$1044663", "$1052360", "$996852", "$866798", "$632138", "$227287"],
                //         "60thPercentileBalance": ["$1106839", "$1162516", "$1160827", "$1092714", "$930594", "$627903"],
                //         "80thPercentileBalance": ["$1271436", "$1451573", "$1610419", "$1730090", "$1769040", "$1749191"]
                //     },
                //     "keytable": {
                //         "NumberofYearsinRetirementHorizon": "30",
                //         "ProbabilityofSuccessinHorizonPeriod": "57",
                //         "MaximumRemainingBalance": "19839836",
                //         "PercentageofTimeSavingsFailed": "43",
                //         "WorstCaseSavingsDepletedinYears": "13",
                //         "BestCaseSavingsDepletedinYears": "50",
                //         "80thPercentileSavingsDepletedinYears": "50",
                //         "60thPercentileSavingsDepletedinYears": "50",
                //         "MeanSavingsDepletedinYears": "39",
                //         "MedianSavingsDepletedinYears": "50",
                //         "40thPercentileSavingsDepletedinYears": "29",
                //         "20thPercentileSavingsDepletedinYears": "24",
                //         "10ValueatRiskSavingsDepletedinYears": "21",
                //         "5ValueatRiskSavingsDepletedinYears": "19",
                //         "1ValueatRiskSavingsDepletedinYears": "16"
                //     },
                //     "incometable": {
                //         "AnnualIncomewithCOLAandIncreasesDecreases": ["45000", "46350", "47741", "49173", "50648", "52167", "53732", "55344", "57005", "58715", "60476", "62291", "64159", "66084", "68067", "70109", "72212", "74378", "76609", "78908", "81275", "83713", "86225", "88811", "91476", "94220", "97047", "99958", "102957", "106045"],
                //         "CumulativeRetirementIncome": ["45000", "91350", "139091", "188263", "238911", "291078", "344811", "400155", "457160", "515875", "576351", "638641", "702801", "768885", "836951", "907060", "979271", "1053650", "1130259", "1209167", "1290442", "1374155", "1460380", "1549191", "1640667", "1734887", "1831934", "1931892", "2034848", "2140894"]
                //     },
                //     "tableHead": [{"5years": "After 5 Years"}, {"10years": "After 10 Years"}, {"15years": "After 15 Years"}, {"20years": "After 20 Years"}, {"25years": "After 25 Years"}, {"30years": "After 30 Years"}],
                //     "chartData": [
                //         {
                //             "values": [
                //                 {"name": "LowestBalance", "value": 435054}, {
                //                     "name": "1ValueatRisk",
                //                     "value": 593181
                //                 },
                //                 {"name": "5ValueatRisk", "value": 702999}, {
                //                     "name": "10ValueatRisk",
                //                     "value": 766489
                //                 },
                //                 {"name": "20thPercentileBalance", "value": 858780}, {
                //                     "name": "40thPercentileBalance",
                //                     "value": 985765
                //                 },
                //                 {"name": "MedianBalance", "value": 1044663}, {
                //                     "name": "60thPercentileBalance",
                //                     "value": 1106839
                //                 },
                //                 {"name": "80thPercentileBalance", "value": 1271436}]
                //             , "year": "5+ Years"
                //         }
                //         , {
                //             "values": [{"name": "LowestBalance", "value": 185970}, {
                //                 "name": "1ValueatRisk",
                //                 "value": 353153
                //             }, {"name": "5ValueatRisk", "value": 511589}, {
                //                 "name": "10ValueatRisk",
                //                 "value": 608244
                //             }, {"name": "20thPercentileBalance", "value": 747970}, {
                //                 "name": "40thPercentileBalance",
                //                 "value": 946657
                //             }, {"name": "MedianBalance", "value": 1052360}, {
                //                 "name": "60thPercentileBalance",
                //                 "value": 1162516
                //             }, {"name": "80thPercentileBalance", "value": 1451573}], "year": "10+ Years"
                //         }, {
                //             "values": [{"name": "LowestBalance", "value": 0}, {
                //                 "name": "1ValueatRisk",
                //                 "value": 61052
                //             }, {"name": "5ValueatRisk", "value": 263340}, {
                //                 "name": "10ValueatRisk",
                //                 "value": 399024
                //             }, {"name": "20thPercentileBalance", "value": 574133}, {
                //                 "name": "40thPercentileBalance",
                //                 "value": 855160
                //             }, {"name": "MedianBalance", "value": 996852}, {
                //                 "name": "60thPercentileBalance",
                //                 "value": 1160827
                //             }, {"name": "80thPercentileBalance", "value": 1610419}], "year": "15+ Years"
                //         }, {
                //             "values": [{"name": "LowestBalance", "value": 0}, {
                //                 "name": "1ValueatRisk",
                //                 "value": 0
                //             }, {"name": "5ValueatRisk", "value": 0}, {
                //                 "name": "10ValueatRisk",
                //                 "value": 77603
                //             }, {"name": "20thPercentileBalance", "value": 297847}, {
                //                 "name": "40thPercentileBalance",
                //                 "value": 670309
                //             }, {"name": "MedianBalance", "value": 866798}, {
                //                 "name": "60thPercentileBalance",
                //                 "value": 1092714
                //             }, {"name": "80thPercentileBalance", "value": 1730090}], "year": "20+ Years"
                //         }, {
                //             "values": [{"name": "LowestBalance", "value": 0}, {
                //                 "name": "1ValueatRisk",
                //                 "value": 0
                //             }, {"name": "5ValueatRisk", "value": 0}, {
                //                 "name": "10ValueatRisk",
                //                 "value": 0
                //             }, {"name": "20thPercentileBalance", "value": 0}, {
                //                 "name": "40thPercentileBalance",
                //                 "value": 373212
                //             }, {"name": "MedianBalance", "value": 632138}, {
                //                 "name": "60thPercentileBalance",
                //                 "value": 930594
                //             }, {"name": "80thPercentileBalance", "value": 1769040}], "year": "25+ Years"
                //         }, {
                //             "values": [
                //                 {"name": "LowestBalance", "value": 0}, {
                //                     "name": "1ValueatRisk",
                //                     "value": 0
                //                 }, {"name": "5ValueatRisk", "value": 0}, {
                //                     "name": "10ValueatRisk",
                //                     "value": 0
                //                 }, {"name": "20thPercentileBalance", "value": 0}, {
                //                     "name": "40thPercentileBalance",
                //                     "value": 0
                //                 }, {"name": "MedianBalance", "value": 227287}, {
                //                     "name": "60thPercentileBalance",
                //                     "value": 627903
                //                 },
                //                 {
                //                     "name": "80thPercentileBalance",
                //                     "value": 1749191
                //                 }
                //             ], "year": "30+ Years"
                //         }]
                // }
            }
        }
    }
}
