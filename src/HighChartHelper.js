import Highcharts from 'highcharts';
import drilldown from 'highcharts/modules/drilldown';

const createPieChart = (containerID, data, titleText) => {
    drilldown(Highcharts);
    var options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: titleText
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b><br/>'
        },
        series: [{
            name: containerID,
            colorByPoint: true,
            data: data.seriesData
        }],
        drilldown: data.drillDownData
    };
    console.log(JSON.stringify(options));
    Highcharts.chart(containerID, options);
}

const HighChartHelper = { createPieChart };
export default HighChartHelper;