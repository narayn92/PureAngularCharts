import { ChartOptions } from 'pure-angular-charts';

export class SampleData {

    barChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: -30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        // [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        // [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }]
    ];
    barChartOptions;
    lineChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: 30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }]
    ];
    lineChartOptions;

    smoothLineChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: 30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }]
    ];
    smoothLineChartOptions;

    areaChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: 30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }]
    ];
    areaChartOptions;

    smoothAreaChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: 30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }]
    ];
    smoothAreaChartOptions;

    multiTypeChartData = [
        [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: 30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
        [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
        [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }],
        [{ x: -1, y: 10 }, { x: 1, y: 14 }, { x: 2, y: 12 }, { x: 3, y: 16 }, { x: 4, y: 12 }, { x: 5, y: 18 }],
        [{ x: -1, y: 5 }, { x: 1, y: 7 }, { x: 2, y: 6 }, { x: 3, y: 8 }, { x: 4, y: 6 }, { x: 5, y: 9 }]
    ];
    multiTypeChartOptions;

    multiTypeChartDataCategory = [
        // tslint:disable-next-line:max-line-length
        [{ x: 'Sun', y: 25 }, { x: 'Mon', y: 40 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 40 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 45 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 28 }, { x: 'Wed', y: 24 }, { x: 'Thu', y: 32 }, { x: 'Fri', y: 24 }, { x: 'Sat', y: 36 }],
        [{ x: 'Mon', y: 15 }, { x: 'Tue', y: 21 }, { x: 'Wed', y: 18 }, { x: 'Thu', y: 24 }, { x: 'Fri', y: 18 }, { x: 'Sat', y: 27 }],
        [{ x: 'Mon', y: 10 }, { x: 'Tue', y: 14 }, { x: 'Wed', y: 12 }, { x: 'Thu', y: 16 }, { x: 'Fri', y: 12 }, { x: 'Sat', y: 18 }],
        [{ x: 'Mon', y: 5 }, { x: 'Tue', y: 7 }, { x: 'Wed', y: 6 }, { x: 'Thu', y: 8 }, { x: 'Fri', y: 6 }, { x: 'Sat', y: 9 }]

    ];
    multiTypeChartOptionsCategory;

    lineChartDataCategory = [
        // tslint:disable-next-line:max-line-length
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 40 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 45 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 28 }, { x: 'Wed', y: 24 }, { x: 'Thu', y: 32 }, { x: 'Fri', y: 24 }, { x: 'Sat', y: 36 }],
        [{ x: 'Mon', y: 15 }, { x: 'Tue', y: 21 }, { x: 'Wed', y: 18 }, { x: 'Thu', y: 24 }, { x: 'Fri', y: 18 }, { x: 'Sat', y: 27 }],
    ];
    lineChartOptionsCategory;

    smoothLineChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 40 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 45 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 28 }, { x: 'Wed', y: 24 }, { x: 'Thu', y: 32 }, { x: 'Fri', y: 24 }, { x: 'Sat', y: 36 }],
        [{ x: 'Mon', y: 15 }, { x: 'Tue', y: 21 }, { x: 'Wed', y: 18 }, { x: 'Thu', y: 24 }, { x: 'Fri', y: 18 }, { x: 'Sat', y: 27 }],
    ];
    smoothLineChartOptionsCategory;

    areaChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 40 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 45 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 28 }, { x: 'Wed', y: 24 }, { x: 'Thu', y: 32 }, { x: 'Fri', y: 24 }, { x: 'Sat', y: 36 }],
        [{ x: 'Mon', y: 15 }, { x: 'Tue', y: 21 }, { x: 'Wed', y: 18 }, { x: 'Thu', y: 24 }, { x: 'Fri', y: 18 }, { x: 'Sat', y: 27 }],
    ];
    areaChartOptionsCategory;

    smoothAreaChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 40 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 45 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 28 }, { x: 'Wed', y: 24 }, { x: 'Thu', y: 32 }, { x: 'Fri', y: 24 }, { x: 'Sat', y: 36 }],
        [{ x: 'Mon', y: 15 }, { x: 'Tue', y: 21 }, { x: 'Wed', y: 18 }, { x: 'Thu', y: 24 }, { x: 'Fri', y: 18 }, { x: 'Sat', y: 27 }],
    ];
    smoothAreaChartOptionsCategory;

    barChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 5 }, { x: 'Wed', y: 20 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: -40 }, { x: 'Sat', y: 50 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 10 }, { x: 'Wed', y: 15 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: -30 }, { x: 'Sat', y: 30 }],
        [{ x: 'Mon', y: 20 }, { x: 'Tue', y: 10 }, { x: 'Wed', y: 15 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: -30 }, { x: 'Sat', y: 30 }]
    ];
    barChartOptionsCategory: ChartOptions;


    stackedBarChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 25 }, { x: 'Wed', y: 20 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: -40 }, { x: 'Sat', y: 50 }],
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 25 }, { x: 'Wed', y: 35 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: -30 }, { x: 'Sat', y: 30 }],
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 35 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: -30 }, { x: 'Sat', y: 30 }]
    ];
    stackedBarChartOptionsCategory;

    stackedAreaChartDataCategory = [
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 25 }, { x: 'Wed', y: 20 }, { x: 'Thu', y: 30 }, { x: 'Fri', y: 40 }, { x: 'Sat', y: 50 }],
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 25 }, { x: 'Wed', y: 35 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 30 }],
        [{ x: 'Mon', y: 25 }, { x: 'Tue', y: 35 }, { x: 'Wed', y: 35 }, { x: 'Thu', y: 25 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 30 }]
    ];
    stackedAreaChartOptionsCategory;


    constructor() {

        this.barChartOptions = this.getDefaultOptions();
        this.barChartOptions.title.text = 'Bar Chart - Numeric Axis';
        this.barChartOptions.series = [
            { name: 'Series1', color: '#619eff', type: 'bar' },
            // { name: 'Series2', color: '#ff6161', type: 'bar' },
            // { name: 'Series3', color: '#66ae2c', type: 'bar' }
        ];

        this.lineChartOptions = this.getDefaultOptions();
        this.lineChartOptions.title.text = 'Line Chart - Numeric Axis';
        this.lineChartOptions.series = [
            { name: 'Series1', color: '#619eff', type: 'line' },
            { name: 'Series2', color: '#ff6161', type: 'line' },
            { name: 'Series3', color: '#66ae2c', type: 'line' }
        ];

        this.smoothLineChartOptions = this.getDefaultOptions();
        this.smoothLineChartOptions.title.text = 'Smooth Line Chart - Numeric Axis';
        this.smoothLineChartOptions.series = [
            { name: 'Series1', color: '#619eff', type: 'smooth-line' },
            { name: 'Series2', color: '#ff6161', type: 'smooth-line' },
            { name: 'Series3', color: '#66ae2c', type: 'smooth-line' }
        ];

        this.areaChartOptions = this.getDefaultOptions();
        this.areaChartOptions.title.text = 'Area Chart - Numeric Axis';
        this.areaChartOptions.series = [
            { name: 'Series1', color: '#619eff', type: 'area' },
            { name: 'Series2', color: '#ff6161', type: 'area' },
            { name: 'Series3', color: '#66ae2c', type: 'area' }
        ];

        this.smoothAreaChartOptions = this.getDefaultOptions();
        this.smoothAreaChartOptions.title.text = 'Smooth Area Chart - Numeric Axis';
        this.smoothAreaChartOptions.series = [
            { name: 'Series1', color: '#619eff', type: 'smooth-area' },
            { name: 'Series2', color: '#ff6161', type: 'smooth-area' },
            { name: 'Series3', color: '#66ae2c', type: 'smooth-area' }
        ];

        this.multiTypeChartOptions = this.getDefaultOptions();
        this.multiTypeChartOptions.title.text = 'Multi Type Chart - Numeric Axis';
        this.multiTypeChartOptions.series = [
            { name: 'Series1', color: '#bb78ff', type: 'bar' },
            { name: 'Series2', color: '#fff766', type: 'line' },
            { name: 'Series4', color: '#66ffed', type: 'smooth-line' },
            { name: 'Series3', color: '#82ff66', type: 'area' },
            { name: 'Series5', color: '#6670ff', type: 'smooth-area' }
        ];

        this.multiTypeChartOptionsCategory = this.getDefaultOptions();
        this.multiTypeChartOptionsCategory.title.text = 'Multi Type Chart - Category Axis';
        this.multiTypeChartOptionsCategory.xaxis.type = 'category';
        this.multiTypeChartOptionsCategory.xaxis.labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.multiTypeChartOptionsCategory.yaxis.labelFormat.options = '1.1';
        this.multiTypeChartOptionsCategory.series = [
            // { name: 'Series1', color: '#ff6161', type: 'bar' },
            { name: 'Series1', color: '#bb78ff', type: 'bar' },
            // { name: 'Series7', color: '#6670ff', type: 'bar' },
            { name: 'Series2', color: '#fff766', type: 'line' },
            { name: 'Series3', color: '#66ffed', type: 'smooth-line' },
            { name: 'Series4', color: '#82ff66', type: 'area' },
            { name: 'Series5', color: '#6670ff', type: 'smooth-area' }
        ];

        this.lineChartOptionsCategory = this.getDefaultOptions();
        this.lineChartOptionsCategory.title.text = 'Line Chart - Category Axis';
        this.lineChartOptionsCategory.xaxis.type = 'category';

        this.lineChartOptionsCategory.yaxis.labelFormat.type = 'number';
        this.lineChartOptionsCategory.yaxis.labelFormat.options = '1.0-2';
        this.lineChartOptionsCategory.yaxis.labelFormat.scale = 'lb';
        // options.xaxis.labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.lineChartOptionsCategory.series = [
            { name: 'Series1', color: '#619eff', type: 'line' },
            { name: 'Series2', color: '#ff6161', type: 'line' },
            { name: 'Series3', color: '#66ae2c', type: 'line' }
        ];

        this.smoothLineChartOptionsCategory = this.getDefaultOptions();
        this.smoothLineChartOptionsCategory.title.text = 'Smooth Line Chart - Category Axis';
        this.smoothLineChartOptionsCategory.xaxis.type = 'category';

        this.smoothLineChartOptionsCategory.yaxis.labelFormat.type = 'number';
        this.smoothLineChartOptionsCategory.yaxis.labelFormat.options = '1.0-2';
        this.smoothLineChartOptionsCategory.yaxis.labelFormat.scale = '$';

        // options.xaxis.labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.smoothLineChartOptionsCategory.series = [
            { name: 'Series1', color: '#619eff', type: 'smooth-line' },
            { name: 'Series2', color: '#ff6161', type: 'smooth-line' },
            { name: 'Series3', color: '#66ae2c', type: 'smooth-line' }
        ];


        this.areaChartOptionsCategory = this.getDefaultOptions();
        this.areaChartOptionsCategory.title.text = 'Area Chart - Category Axis';
        this.areaChartOptionsCategory.xaxis.type = 'category';

        this.areaChartOptionsCategory.yaxis.labelFormat.type = 'number';
        this.areaChartOptionsCategory.yaxis.labelFormat.options = '1.0-2';
        this.areaChartOptionsCategory.yaxis.labelFormat.scale = 'A';
        // options.xaxis.labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.areaChartOptionsCategory.series = [
            { name: 'Series1', color: '#619eff', type: 'area' },
            { name: 'Series2', color: '#ff6161', type: 'area' },
            { name: 'Series3', color: '#66ae2c', type: 'area' }
        ];


        this.smoothAreaChartOptionsCategory = this.getDefaultOptions();
        this.smoothAreaChartOptionsCategory.title.text = 'Smooth Area Chart - Category Axis';
        this.smoothAreaChartOptionsCategory.xaxis.type = 'category';

        this.smoothAreaChartOptionsCategory.yaxis.labelFormat.type = 'number';
        this.smoothAreaChartOptionsCategory.yaxis.labelFormat.options = '1.0-2';
        this.smoothAreaChartOptionsCategory.yaxis.labelFormat.scale = 'km';
        // options.xaxis.labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.smoothAreaChartOptionsCategory.series = [
            { name: 'Series1', color: '#619eff', type: 'smooth-area' },
            { name: 'Series2', color: '#ff6161', type: 'smooth-area' },
            { name: 'Series3', color: '#66ae2c', type: 'smooth-area' }
        ];

        this.barChartOptionsCategory = this.getDefaultOptions();
        this.barChartOptionsCategory.title.text = 'Bar Chart - Category Axis';
        this.barChartOptionsCategory.xaxis.type = 'category';
        this.barChartOptionsCategory.xaxis.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

        this.barChartOptionsCategory.yaxis.labelFormat.type = 'number';
        this.barChartOptionsCategory.yaxis.labelFormat.options = '1.0-2';
        this.barChartOptionsCategory.yaxis.labelFormat.scale = '%';
        this.barChartOptionsCategory.yaxis.labelFormat.options = '1.0-0';

        this.barChartOptionsCategory.series = [
            { name: 'Series1', color: '#619eff', type: 'bar' },
            { name: 'Series2', color: '#ff6161', type: 'bar' },
            { name: 'Series3', color: '#66ae2c', type: 'bar' }
        ];


        this.stackedBarChartOptionsCategory = this.getDefaultOptions();
        this.stackedBarChartOptionsCategory.title.text = 'Stacked Bar Chart';
        this.stackedBarChartOptionsCategory.xaxis.type = 'category';

        this.stackedBarChartOptionsCategory.yaxis.labelFormat.type = 'number';
        this.stackedBarChartOptionsCategory.yaxis.labelFormat.options = '1.0-2';
        this.stackedBarChartOptionsCategory.yaxis.labelFormat.scale = 'v';
        this.stackedBarChartOptionsCategory.yaxis.axisWidth =  60;
        this.stackedBarChartOptionsCategory.innerPaddingBottom = 25;
        this.stackedBarChartOptionsCategory.yaxis.labelFormat.options = '1.0-0';


        // options.xaxis.labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.stackedBarChartOptionsCategory.series = [
            { name: 'Series1', color: '#619eff', type: 'stacked-bar' },
            { name: 'Series2', color: '#ff6161', type: 'stacked-bar' },
            { name: 'Series3', color: '#66ae2c', type: 'stacked-bar' }
        ];


        this.stackedAreaChartOptionsCategory = this.getDefaultOptions();
        this.stackedAreaChartOptionsCategory.title.text = 'Stacked Area Chart';
        this.stackedAreaChartOptionsCategory.xaxis.type = 'category';

        this.stackedAreaChartOptionsCategory.yaxis.labelFormat.type = 'number';
        this.stackedAreaChartOptionsCategory.yaxis.labelFormat.options = '1.0-2';
        this.stackedAreaChartOptionsCategory.yaxis.labelFormat.scale = 'kg';

        // options.xaxis.labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.stackedAreaChartOptionsCategory.series = [
            { name: 'Series1', color: '#619eff', type: 'stacked-area' },
            { name: 'Series2', color: '#ff6161', type: 'stacked-area' },
            { name: 'Series3', color: '#66ae2c', type: 'stacked-area' }
        ];

    }
    public getDefaultOptions(): ChartOptions {
        return {
            chart: {
                // border: 'solid 1px #ababab',
                background: '#ffffff',
                // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                padding: {
                    paddingTop: 5,
                    paddingRight: 5,
                    paddingBottom: 5,
                    paddingLeft: 5
                }

            },
            title: {
                text: '',
                height: 30,
                style: {
                    color: '#333',
                    textAlign: 'center',
                    fontSize: '16px',
                    fontFamily: 'Verdana'
                }
            },
            xaxis: {
                type: 'numeric',
                show: true,
                labels: [],
                showLabels: true,
                labelStyle: {
                    fill: '#333',
                    fontSize: '12px',
                    fontFamily: 'Verdana'
                },
                labelFormat: {
                    type: '',
                    options: '',
                    scale: ''
                },
                axisLine: {
                    show: true,
                    style: {
                        stroke: '#000',
                        strokeWidth: 1
                    }
                },
                min: 0,
                max: 0,
                title: 'X-Axis',
                ticks: {
                    show: true,
                    count: 6,
                    length: 5,
                    style: {
                        stroke: '#000',
                        strokeWidth: 1
                    }
                },
                grid: {
                    show: true,
                    style: {
                        stroke: '#e6e6e6',
                        strokeWidth: 1,
                        strokeDasharray: '10 5'
                    }
                },
                minMax: 'auto',
                axisHeight: 20
            },
            yaxis: {
                type: 'numeric',
                show: true,
                labels: [],
                showLabels: true,
                labelStyle: {
                    fill: '#333',
                    fontSize: '12px',
                    fontFamily: 'Verdana'
                },
                labelFormat: {
                    type: 'number',
                    options: '',
                    scale: ''
                },
                axisLine: {
                    show: true,
                    style: {
                        stroke: '#000',
                        strokeWidth: 1
                    }
                },
                min: 0,
                max: 0,
                title: 'Y-Axis',
                ticks: {
                    show: true,
                    count: 6,
                    length: 5,
                    style: {
                        stroke: '#000',
                        strokeWidth: 1
                    }
                },
                grid: {
                    show: true,
                    style: {
                        stroke: '#e6e6e6',
                        strokeWidth: 1,
                        strokeDasharray: '10 5'
                    }
                },
                minMax: 'auto',
                axisWidth: 50,
                paddingRight: 0
            },
            series: [
                // { name: 'Series1' }
            ],
            bar: {
                width: 30,
                spacing: 5
            },
            dataLabels: {
                show: true,
                style: {
                    fill: 'auto',
                    fontSize: '12px',
                    fontFamily: 'Verdana'
                },
            },
            legends: {
                show: true,
                height: 30,
                style: {
                    color: '#333',
                    textAlign: 'center',
                    fontSize: '12px',
                    fontFamily: 'Verdana'
                }
            },
            innerPaddingTop: 20,
            innerPaddingBottom: 10,
            tooltip: {
                show: true,
                style: {
                    color: '#ffffff',
                    fontSize: '12px',
                    fontFamily: 'Verdana',
                    minWidth: '200px'
                }
            }
        };
    }


}
