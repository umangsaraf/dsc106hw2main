

Highcharts.chart('chart_a', {
    title: {
        text: 'Combination chart'
    },
    xAxis: {
        categories: [2016, 2017, 2018, 2019]
    },
    labels: {
        items: [{
            html: 'Total fruit consumption',
            style: {
                left: '50px',
                top: '18px',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Hamburger',
        data: [73542892/12, 85771123/12, 92413593/12, 65539422/9]
    }, {
        type: 'column',
        name: 'chciken Fillet',
        data: [30603218/12, 35711218/12, 38604771/12, 27235411/9]
    }, {
        type: 'column',
        name: 'Fillet fish',
        data: [18400035/12, 21494968/12, 23176100/12, 16355661/9]
    }, 
  
   ]
});