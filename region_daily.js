

Highcharts.chart('daily_reg', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Highest revenue day by region',
        "fontSize": "35px"
    },
    subtitle: {
        text: 'Average revenue per day by region, 2016 Jan'
    },
    xAxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'],
        title: {text: 'Day'}
    },
    yAxis: {
        title: {
            text: 'Revenue in Thousands'
        }
    },
    plotOptions: {
        line: {
            
            enableMouseTracking: false
        }
    },
    series: [ {
        name: 'south_west',
        data: [60272.25, 59319.25, 61150.5, 59837.25, 64433.0, 58117.0, 59841.4]
    },  {
        name: 'south_east',
        data: [58164.5, 58320.5, 59346.75, 58514.0, 61971.4, 58740.6, 56822.6]
    }, {
        name: 'central',
        data: [60925.0, 59202.25, 59679.5, 59538.25, 62418.6, 59675.0, 58241.0]
    }]
});
