import { ChartOptions, SvgBarStyle, SvgAreaStyle } from './pure-angular-charts.models';
import { SvgLineStyle } from 'pure-angular-charts/public-api';

export class Defaults {
    public static getdefaultOptions(): ChartOptions {
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

    public static getdefaultAreaStyle(): SvgAreaStyle {
        return {
            strokeWidth: 1,
            strokeDasharray: '',
            stroke: ''
        };
    }
    public static getdefaultLineStyle(): SvgLineStyle {
        return {
            strokeWidth: 2,
            strokeDasharray: '',
            stroke: ''
        };
    }
    public static getdefaultBarStyle(): SvgBarStyle {
        return {
            strokeWidth: 1,
            strokeDasharray: '',
            stroke: ''
        };
    }
}
