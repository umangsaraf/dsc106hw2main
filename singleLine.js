Highcharts.chart('Single_line', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Impact of impossible burger on Monthly revenue'
    },
    subtitle: {
        text: 'Total revenue by month, Apr 18 - 19 Sep'
    },
    xAxis: {
        categories: [ '18 Apr','18 May','18 Jun','18 Jul', '18 Aug', '18 Sep', '18 Oct', '18 Nov', '18 Dec', ' 19 Jan', '19 Feb', '19 Mar', '19 Apr', '19 May', '19 Jun','19 July', '19 Aug', '19 Sep'],
        title:{text: 'Months'}
    },
    yAxis: {
        title: {
            text: 'Revenue in thousands'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Before release of Impossible Burger',
        data: [13251875,
            13687830,
            12840517,
            13338406,
            13542320,
            13247269,
            11374035,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null]
    }, {
        name: 'After release of Impossible Burge',
        data: [null, null, null,null, null, null, 11374035,
            12299535,
            11539095,
            12558735,
            12278447,
            12074324,
            12250084,
            12686117,
            11798203,
            11547979,
            11954952,
            11981653]
    }]
});