Highcharts.chart('chart_regions', {

    title: {
        text: 'Impact of impossible burger by region'
    },

    subtitle: {
        text: 'Monthly revenue by region, Apr 2018- Sep 2019'
    },

    yAxis: {
        title: {
            text: 'Revenue in Thousands'
        }

    },
    xAxis: {
        categories: [ '18 Apr','18 May','18 Jun','18 Jul', '18 Aug', '18 Sep', '18 Oct', '18 Nov', '18 Dec', ' 19 Jan', '19 Feb', '19 Mar', '19 Apr', '19 May', '19 Jun','19 July', '19 Aug', '19 Sep']
        ,title: {text: 'Months'},
        plotLines: [{
            color: '#FF0000', // Red
            width: 1,
            value: 6 // Position, you'll have to translate this to the values on your x axis
        }]
    },
    

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
        name: 'North East',
        data: [2722007,
            2832936,
            2641786,
            2742490,
            2786194,
            2720638,
            2320956,
            2560458,
            2373509,
            2593906,
            2506324,
            2507077,
            2496457,
            2645148,
            2466669,
            2406800,
            2465004,
            2445513]
    }, {
        name: 'South West',
        data: [2676031,
            2804042,
            2599733,
            2688708,
            2736147,
            2710087,
            2288687,
            2526092,
            2352366,
            2524880,
            2537643,
            2446863,
            2540149,
            2525821,
            2350121,
            2322284,
            2394712,
            2424378]
        },
        {
        name: 'South East',
        data: [2659690,
            2668593,
            2485609,
            2630319,
            2666406,
            2586340,
            2223673,
            2376833,
            2306116,
            2491027,
            2401803,
            2384291,
            2396331,
            2475925,
            2285149,
            2240780,
            2348987,
            2367390]
    }, {
        name: 'Central',
        data: [2554753,
            2678010,
            2497981,
            2639101,
            2599335,
            2559311,
            2251794,
            2419854,
            2267533,
            2391308,
            2398621,
            2316506,
            2413466,
            2486036,
            2322725,
            2254571,
            2347234,
            2328904]
    },
    {name: 'North West',
    data: [2639394,
        2704249,
        2615408,
        2637788,
        2754238,
        2670893,
        2288925,
        2416298,
        2239571,
        2557614,
        2434056,
        2419587,
        2403681,
        2553187,
        2373539,
        2323544,
        2399015,
        2415468]}




],

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