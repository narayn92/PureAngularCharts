import { ChartOptions } from 'pure-angular-charts';

export class SampleData {
    public barChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: -30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        // [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        // [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }]
    ];
    barChartOptions: ChartOptions = {
        title: 'Simple Bar Chart - Numeric Axis',
        xaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'bar' },
            // { name: 'Series2', color: '#ff6161', type: 'bar' },
            // { name: 'Series3', color: '#66ae2c', type: 'bar' }
        ],
        bar: {
            width: 30
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };
    lineChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: 30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }]
    ];
    lineChartOptions: ChartOptions = {
        title: 'Line Chart - Numeric Axis',
        xaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'line' },
            { name: 'Series2', color: '#ff6161', type: 'line' },
            { name: 'Series3', color: '#66ae2c', type: 'line' }
        ],
        bar: {
            width: 30
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };
    smoothLineChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: 30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }]
    ];
    smoothLineChartOptions: ChartOptions = {
        title: 'Smooth Line Chart - Numeric Axis',
        xaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'smooth-line' },
            { name: 'Series2', color: '#ff6161', type: 'smooth-line' },
            { name: 'Series3', color: '#66ae2c', type: 'smooth-line' },
        ],
        bar: {
            width: 30
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };

    areaChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: 30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }]
    ];
    areaChartOptions: ChartOptions = {
        title: 'Area Chart - Numeric Axis',
        xaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'area' },
            { name: 'Series2', color: '#ff6161', type: 'area' },
            { name: 'Series3', color: '#66ae2c', type: 'area' }
        ],
        bar: {
            width: 30
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };

    smoothAreaChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: 30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }]
    ];
    smoothAreaChartOptions: ChartOptions = {
        title: 'Smooth Area Chart - Numeric Axis',
        xaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'smooth-area' },
            { name: 'Series2', color: '#ff6161', type: 'smooth-area' },
            { name: 'Series3', color: '#66ae2c', type: 'smooth-area' }
        ],
        bar: {
            width: 30
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
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
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
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
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };

    multiTypeChartDataCategory = [
        // tslint:disable-next-line:max-line-length
        [{ x: 'Sun', y: 25 }, { x: 'Mon', y: 40 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 40 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 45 }],
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
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            // { name: 'Series1', color: '#ff6161', type: 'bar' },
            { name: 'Series1', color: '#bb78ff', type: 'bar' },
            // { name: 'Series7', color: '#6670ff', type: 'bar' },
            { name: 'Series2', color: '#fff766', type: 'line' },
            { name: 'Series3', color: '#66ffed', type: 'smooth-line' },
            { name: 'Series4', color: '#82ff66', type: 'area' },
            { name: 'Series5', color: '#6670ff', type: 'smooth-area' }

        ],
        bar: {
            width: 25
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };


    // barChartDataCategory = [
    //     [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 5 }, { x: 'Wed', y: 20 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: -40 }, { x: 'Sat', y: 50 }],
    // ];
    // barChartOptionsCategory: ChartOptions = {
    //     title: 'Bar Chart - Category Axis',
    //     xaxis: {
    //         type: 'category',
    //         show: true,
    //         labels: [],
    //         showLabels: true,
    //         showAxisLine: true,
    //         min: 0,
    //         max: 6,
    //         title: 'xaxis',
    //         ticks: {
    //             show: true,
    //             count: 6,
    //             length: 5
    //         },
    //         grid: {
    //             show: true
    //         },
    //         axisHeight: 20,
    //         minMax: 'auto'
    //     },
    //     yaxis: {
    //         type: 'numeric',
    //         show: true,
    //         labels: [],
    //         showLabels: true,
    //         showAxisLine: true,
    //         min: 0,
    //         max: 0,
    //         title: 'yaxis',
    //         ticks: {
    //             show: true,
    //             count: 6,
    //             length: 5
    //         },
    //         grid: {
    //             show: true
    //         },
    //         axisWidth: 50,
    //         paddingRight: 0,
    //         minMax: 'auto'
    //     },
    //     series: [
    //         { name: 'Series1', color: '#619eff', type: 'bar' },
    //         // { name: 'Series2', color: '#ff6161', type: 'line' }
    //     ],
    //     bar: {
    //         width: 30
    //     },
    //     dataLabels: {
    //         show: true
    //     },
    //     innerPaddingTop: 20,
    //     innerPaddingBottom: 10
    // };
    lineChartDataCategory = [
        // tslint:disable-next-line:max-line-length
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 40 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 45 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 28 }, { x: 'Wed', y: 24 }, { x: 'Thu', y: 32 }, { x: 'Fri', y: 24 }, { x: 'Sat', y: 36 }],
        [{ x: 'Mon', y: 15 }, { x: 'Tue', y: 21 }, { x: 'Wed', y: 18 }, { x: 'Thu', y: 24 }, { x: 'Fri', y: 18 }, { x: 'Sat', y: 27 }],
    ];
    lineChartOptionsCategory: ChartOptions = {
        title: 'Line Chart - Category Axis',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'line' },
            { name: 'Series2', color: '#ff6161', type: 'line' },
            { name: 'Series3', color: '#66ae2c', type: 'line' },
        ],
        bar: {
            width: 30
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };
    smoothLineChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 40 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 45 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 28 }, { x: 'Wed', y: 24 }, { x: 'Thu', y: 32 }, { x: 'Fri', y: 24 }, { x: 'Sat', y: 36 }],
        [{ x: 'Mon', y: 15 }, { x: 'Tue', y: 21 }, { x: 'Wed', y: 18 }, { x: 'Thu', y: 24 }, { x: 'Fri', y: 18 }, { x: 'Sat', y: 27 }],
    ];
    smoothLineChartOptionsCategory: ChartOptions = {
        title: 'Smooth Line Chart - Category Axis',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'smooth-line' },
            { name: 'Series2', color: '#ff6161', type: 'smooth-line' },
            { name: 'Series3', color: '#66ae2c', type: 'smooth-line' },
        ],
        bar: {
            width: 30
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };

    areaChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 40 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 45 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 28 }, { x: 'Wed', y: 24 }, { x: 'Thu', y: 32 }, { x: 'Fri', y: 24 }, { x: 'Sat', y: 36 }],
        [{ x: 'Mon', y: 15 }, { x: 'Tue', y: 21 }, { x: 'Wed', y: 18 }, { x: 'Thu', y: 24 }, { x: 'Fri', y: 18 }, { x: 'Sat', y: 27 }],
    ];
    areaChartOptionsCategory: ChartOptions = {
        title: 'Area Chart - Category Axis',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'area' },
            { name: 'Series2', color: '#ff6161', type: 'area' },
            { name: 'Series3', color: '#66ae2c', type: 'area' }
        ],
        bar: {
            width: 30
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };

    smoothAreaChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 40 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 45 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 28 }, { x: 'Wed', y: 24 }, { x: 'Thu', y: 32 }, { x: 'Fri', y: 24 }, { x: 'Sat', y: 36 }],
        [{ x: 'Mon', y: 15 }, { x: 'Tue', y: 21 }, { x: 'Wed', y: 18 }, { x: 'Thu', y: 24 }, { x: 'Fri', y: 18 }, { x: 'Sat', y: 27 }],
    ];
    smoothAreaChartOptionsCategory: ChartOptions = {
        title: 'Smooth Area Chart - Category Axis',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'smooth-area' },
            { name: 'Series2', color: '#ff6161', type: 'smooth-area' },
            { name: 'Series3', color: '#66ae2c', type: 'smooth-area' }
        ],
        bar: {
            width: 30
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };

    barChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 5 }, { x: 'Wed', y: 20 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: -40 }, { x: 'Sat', y: 50 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 10 }, { x: 'Wed', y: 15 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: -30 }, { x: 'Sat', y: 30 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 10 }, { x: 'Wed', y: 15 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: -30 }, { x: 'Sat', y: 30 }]
    ];
    barChartOptionsCategory: ChartOptions = {
        title: 'Bar Chart - Category Axis',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'bar' },
            { name: 'Series2', color: '#ff6161', type: 'bar' },
            { name: 'Series3', color: '#66ae2c', type: 'bar' },
        ],
        bar: {
            width: 15
            // ,spacing: 5
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };

    stackedBarChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 25 }, { x: 'Wed', y: 20 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: -40 }, { x: 'Sat', y: 50 }],
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 25 }, { x: 'Wed', y: 35 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: -30 }, { x: 'Sat', y: 30 }],
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 35 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: -30 }, { x: 'Sat', y: 30 }]
    ];
    stackedBarChartOptionsCategory: ChartOptions = {
        title: 'Stacked Bar Chart',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'stacked-bar' },
            { name: 'Series2', color: '#ff6161', type: 'stacked-bar' },
            { name: 'Series3', color: '#66ae2c', type: 'stacked-bar' },
        ],
        bar: {
            width: 30
            // ,spacing: 5
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };

    stackedAreaChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 25 }, { x: 'Wed', y: 20 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: 40 }, { x: 'Sat', y: 50 }],
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 25 }, { x: 'Wed', y: 35 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 30 }],
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 35 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 30 }]
    ];
    stackedAreaChartOptionsCategory: ChartOptions = {
        title: 'Stacked Area Chart',
        xaxis: {
            type: 'category',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisHeight: 20,
            minMax: 'auto'
        },
        yaxis: {
            type: 'numeric',
            show: true,
            labels: [],
            showLabels: true,
            showAxisLine: true,
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
            axisWidth: 50,
            paddingRight: 0,
            minMax: 'auto'
        },
        series: [
            { name: 'Series1', color: '#619eff', type: 'stacked-area' },
            { name: 'Series2', color: '#ff6161', type: 'stacked-area' },
            { name: 'Series3', color: '#66ae2c', type: 'stacked-area' },
        ],
        bar: {
            width: 30
            // ,spacing: 5
        },
        dataLabels: {
            show: true
        },
        legends: {
            show: true
        },
        innerPaddingTop: 20,
        innerPaddingBottom: 10
    };
}
