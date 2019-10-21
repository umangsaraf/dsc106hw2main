
Highcharts.chart('daily_col', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Highest revenue day for fillet fish'
    },
    subtitle: {
        text: 'Average revenue by day for Fillet Fish, Jan 2016'
    },
    xAxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'],
        title:{text:'Day'}
    },
    yAxis: {
        title: {
            text: 'Revenue in Thousands'
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
        name: 'Fillet Fish',
        data: [44752, 44156, 46205, 48357, 52766, 40106, 40282]
    }]
});
