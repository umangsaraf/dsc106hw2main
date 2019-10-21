Highcharts.chart('line_chart_TR', {

    title: {
        text: 'Change in revenue by month'
    },

    subtitle: {
        text: 'Revenue per month by year, 2016-2018'
    },

    yAxis: {
        title: {
            text: 'Revenue in Thousand (USD)'
        }

    },
    xAxis: {
        title: {
            text: 'Months'
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']},
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },

    series: [{
        name: '2016',
        data: [9350979,
            9682759,
            9825257,
            9716585,
            10121412,
            10074600,
            10263807,
            10882057,
            10609820,
            10619003,
            10900886,
            10498980]
    }, {
        name: '2017',
        data: [11192197,
            11824369,
            11437109,
            11393492,
            11596984,
            11878171,
            11536662,
            12559477,
            12225562,
            11964460,
            12532702,
            12836124]
        },
        {
        name: '2018',
        data: [13048511,
            13347771,
            12677300,
            13251875,
            13687830,
            12840517,
            13338406,
            13542320,
            13247269,
            11374035,
            12299535,
            11539095]
    }, {
        name: '2019',
        data: [12558735,
            12278447,
            12074324,
            12250084,
            12686117,
            11798203,
            11547979,
            11954952,
            11981653, null, null, null]
    }, ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});