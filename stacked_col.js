Highcharts.chart('stacked_columns', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Average Monthly total revenue by Year, 2016-2019'
    },
    xAxis: {
        categories: ['2016', '2017', '2018', '2019'],
        title: {text: "Year"}
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Revenue in USD (Million)'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Hamburger',
        data: [Math.round(73542892/12), Math.round(85771123/12), Math.round(92413593/12), Math.round(65539422/9)]
    }, {
        name: 'Chicken_fillet',
        data: [Math.round(30603218/12), Math.round(35711218/12), Math.round(38604771/12), Math.round(27235411/9)]
    }, {
        name: 'Fillet Fish',
        data: [Math.round(18400035/12),Math.round(21494968/12), Math.round(23176100/12), Math.round(16355661/9)]
    }, 
    {
        type: 'spline',
        name: 'Average',
        data: [10212178, 11914776, 12849539, 12125611],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }
]
});