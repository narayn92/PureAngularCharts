import { ChartOptions } from 'pure-angular-charts';

export class SampleData {
    public barChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }],
        // [{ x: -1, y: 20 }, { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 35 }, { x: 4, y: -35 }, { x: 5, y: 45 }]
    ];
    barChartOptions: ChartOptions = {
        title: 'Simple Bar Chart - Numeric Axis',
        xaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'bar' },
            // { name: 'Series2', color: '#ff6161', type: 'line' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };
    lineChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }],
        // [{ x: -1, y: 20 }, { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 35 }, { x: 4, y: -35 }, { x: 5, y: 45 }]
    ];
    lineChartOptions: ChartOptions = {
        title: 'Simple Line Chart - Numeric Axis',
        xaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'line' },
            // { name: 'Series2', color: '#ff6161', type: 'line' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };
    smoothLineChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 7 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }],
        // [{ x: -1, y: 20 }, { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 35 }, { x: 4, y: -35 }, { x: 5, y: 45 }]
    ];
    smoothLineChartOptions: ChartOptions = {
        title: 'Smooth Line Chart - Numeric Axis',
        xaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'smooth-line' },
            // { name: 'Series2', color: '#ff6161', type: 'line' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };

    areaChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }],
        // [{ x: -1, y: 20 }, { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 35 }, { x: 4, y: -35 }, { x: 5, y: 45 }]
    ];
    areaChartOptions: ChartOptions = {
        title: 'Simple Area Chart - Numeric Axis',
        xaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'area' },
            // { name: 'Series2', color: '#ff6161', type: 'line' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };

    smoothAreaChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }],
        // [{ x: -1, y: 20 }, { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 35 }, { x: 4, y: -35 }, { x: 5, y: 45 }]
    ];
    smoothAreaChartOptions: ChartOptions = {
        title: 'Smooth Area Chart - Numeric Axis',
        xaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'smooth-area' },
            // { name: 'Series2', color: '#ff6161', type: 'line' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };

    multiTypeChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: 30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }],
        [{ x: -1, y: 10 }, { x: 1, y: 14 }, { x: 2, y: 12 }, { x: 3, y: 16 }, { x: 4, y: 12 }, { x: 5, y: 18 }],
        [{ x: -1, y: 5 }, { x: 1, y: 7 }, { x: 2, y: 6 }, { x: 3, y: 8 }, { x: 4, y: 6 }, { x: 5, y: 9 }]
    ];
    multiTypeChartOptions: ChartOptions = {
        title: 'Multi Type Chart  - Numeric Axis',
        xaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#bb78ff', type: 'bar' },
            { name: 'Series2', color: '#fff766', type: 'line' },
            { name: 'Series4', color: '#66ffed', type: 'smooth-line' },
            { name: 'Series3', color: '#82ff66', type: 'area' },
            { name: 'Series5', color: '#6670ff', type: 'smooth-area' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };

    multiTypeChartDataCategory = [
        // tslint:disable-next-line:max-line-length
        [{ x: 'Sun', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 40 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 45 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 28 }, { x: 'Wed', y: 24 }, { x: 'Thu', y: 32 }, { x: 'Fri', y: 24 }, { x: 'Sat', y: 36 }],
        [{ x: 'Mon', y: 15 }, { x: 'Tue', y: 21 }, { x: 'Wed', y: 18 }, { x: 'Thu', y: 24 }, { x: 'Fri', y: 18 }, { x: 'Sat', y: 27 }],
        [{ x: 'Mon', y: 10 }, { x: 'Tue', y: 14 }, { x: 'Wed', y: 12 }, { x: 'Thu', y: 16 }, { x: 'Fri', y: 12 }, { x: 'Sat', y: 18 }],
        [{ x: 'Mon', y: 5 }, { x: 'Tue', y: 7 }, { x: 'Wed', y: 6 }, { x: 'Thu', y: 8 }, { x: 'Fri', y: 6 }, { x: 'Sat', y: 9 }]
    ];
    multiTypeChartOptionsCategory: ChartOptions = {
        title: 'Multi Type Chart - Category Axis',
        xaxis: {
            type: 'category',
            show: true,
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#bb78ff', type: 'bar' },
            { name: 'Series2', color: '#fff766', type: 'line' },
            { name: 'Series4', color: '#66ffed', type: 'smooth-line' },
            { name: 'Series3', color: '#82ff66', type: 'area' },
            { name: 'Series5', color: '#6670ff', type: 'smooth-area' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };


    barChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 5 }, { x: 'Wed', y: 20 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: -40 }, { x: 'Sat', y: 50 }],
    ];
    barChartOptionsCategory: ChartOptions = {
        title: 'Simple Bar Chart - Category Axis',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'bar' },
            // { name: 'Series2', color: '#ff6161', type: 'line' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };
    lineChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 5 }, { x: 'Wed', y: 20 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: -40 }, { x: 'Sat', y: 50 }],
    ];
    lineChartOptionsCategory: ChartOptions = {
        title: 'Simple Line Chart - Category Axis',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'line' },
            // { name: 'Series2', color: '#ff6161', type: 'line' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };
    smoothLineChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 5 }, { x: 'Wed', y: 7 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: -40 }, { x: 'Sat', y: 50 }]
    ];
    smoothLineChartOptionsCategory: ChartOptions = {
        title: 'Smooth Line Chart - Category Axis',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'smooth-line' },
            // { name: 'Series2', color: '#ff6161', type: 'line' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };

    areaChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 5 }, { x: 'Wed', y: 20 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: -40 }, { x: 'Sat', y: 50 }]
    ];
    areaChartOptionsCategory: ChartOptions = {
        title: 'Simple Area Chart - Category Axis',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'area' },
            // { name: 'Series2', color: '#ff6161', type: 'line' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };

    smoothAreaChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 5 }, { x: 'Wed', y: 20 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: -40 }, { x: 'Sat', y: 50 }]
    ];
    smoothAreaChartOptionsCategory: ChartOptions = {
        title: 'Smooth Area Chart - Category Axis',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            min: 0,
            max: 6,
            title: 'xaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingBottom: 20,
            paddingTop: 30,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            min: 0,
            max: 0,
            title: 'yaxis',
            ticks: {
                show: true,
                count: 6,
                length: 5
            },
            grid: {
                show: true
            },
            paddingLeft: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'smooth-area' },
            // { name: 'Series2', color: '#ff6161', type: 'line' }
        ],
        bar: {
            width: 30
        },
        innerPaddingBottom: 10
    };

}
