document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});


//Line Graph
document.addEventListener('DOMContentLoaded', function () {
    
    var chartData = {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        seriesData: [
            { name: 'WPPOOL', data: [0, 89, 17, 36, 3, 29], color: '#FC714D' }, 
            { name: 'Google', data: [0, 48, 69, 84, 31, 27], color: '#615DE3' }, 
            { name: 'Microsoft', data: [0, 39, 75, 33, 69, 27], color: '#AFCD80' }, 
            { name: 'Twitter', data: [0, 8, 56, 76, 65, 77], color: '#6F34A1' } 
        ]
    };

    
    var chart = Highcharts.chart('chart-container', {
        chart: {
            type: 'line',
            animation: {
                duration: 2000, 
                easing: 'easeOutBounce' 
            },
            events: {
                load: function() {
                    var chart = this;

                    chartData.seriesData.forEach(function(series, index) {
                        chart.addSeries({
                            name: series.name,
                            data: series.data,
                            color: series.color, 
                            animation: {
                                duration: 2000 + index * 500, 
                                easing: 'easeOutBounce'
                            },
                            marker: {
                                symbol: 'circle', 
                                enabled: true
                            }
                        }, false);
                    });

                    chart.redraw(); 
                }
            }
        },
        title: {
            text: ' '
        },
        xAxis: {
            categories: chartData.categories,
            tickWidth: 0, 
            lineColor: 'transparent' 
        },
        yAxis: {
            title: {
                text: ' '
            },
            min: -10, 
            max: 100, 
            tickPositions: [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            labels: {
                formatter: function () {
                    return this.value + '%'; 
                }
            },
            lineWidth: 0, 
            tickWidth: 0 
        },
        tooltip: {
            shared: true, 
            formatter: function () {
                var tooltip = '<span style="font-size: 10px">' + this.x + '</span><br/>';
                this.points.forEach(function (point) {
                    tooltip += '<span style="color:' + point.series.color + '">\u25CF</span> ' + point.series.name + ': <b>' + point.y + '00.00%</b><br/>';
                });
                return tooltip;
            }
        },
        series: []
    });
});





// <!-- Include Splide JS -->
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type   : 'loop',
        perPage: 1,
        arrows: false,
        pagination: false,
        autoScroll: {
        speed: 3,
        },
        autoplay: false,
    }).mount({ AutoScroll: window.splide.Extensions.AutoScroll });
    });