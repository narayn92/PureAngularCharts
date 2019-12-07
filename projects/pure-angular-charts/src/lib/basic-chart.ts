import { Xaxis, Yaxis, ChartOptions } from './pure-angular-charts.models';
import { Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

export class BasicChart implements OnInit, OnChanges {

    @Input() width = 600;
    @Input() data = [
        // [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }]
    ];
    private pheight = 400;
    get height() {
        let titleHeight = 0;
        const legendHeight = 0;
        if (!this.options.title) {
            titleHeight = 30;
        }
        return this.pheight + titleHeight + legendHeight;
    }
    @Input()
    set height(val: any) {
        console.log('height', val);

        this.pheight = val;
    }

    private poptions;

    get options() {
        return this.poptions;
    }

    @Input()
    set options(val: any) {
        Object.assign(this.poptions, val);
    }

    pData: any[];
    pXaxis: Xaxis;
    pYaxis: Yaxis;
    pxaxisLocation;
    pyaxisLocation;
    pPerUnitWidth;
    pPerUnitHeight;
    pPerUnitX;
    pPerUnitY;

    pDisplayTooltip = false;
    ptootltip = {
        series: {
            name: '', color: ''
        },
        point: {
            x: 0,
            y: 0
        },
        px: 0,
        py: 0
    };
    hideTooltip;

    isChartLoaded = false;

    constructor(options: ChartOptions) {
        // Object.assign(this.options, options);
        this.poptions = options;
    }

    ngOnInit() {
        // this.loadChart();

        console.log('this.pXaxis', this.pXaxis);
        console.log('this.pYaxis', this.pYaxis);
        console.log('this.pData', this.pData);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        this.loadChart(changes);
    }

    loadChart(changes: SimpleChanges) {
        console.log('loadChart', changes);
        let categories = [];
        if (changes.options || changes.data) {

            this.pXaxis = Object.assign({}, this.options.xaxis);
            this.pYaxis = Object.assign({}, this.options.yaxis);

            if (this.pXaxis.type === 'category') {
                const catData = {};
                categories = [];
                this.data.forEach((series, si) => {
                    series.forEach((item, indx) => {
                        if (!catData[item.x]) {
                            catData[item.x] = {};
                        }
                        catData[item.x][si] = item;
                    });
                });
                if (this.pXaxis.labels && this.pXaxis.labels.length > 0) {
                    categories = this.pXaxis.labels;
                } else {
                    categories = Object.keys(catData);
                }

                this.data = this.data.map((series, si) => {
                    return categories.map((item, indx) => {
                        // tslint:disable-next-line:max-line-length
                        let point;
                        if (catData[item] && catData[item][si]) {
                            point = catData[item][si];
                        } else {
                            point = { x: item, y: 0 };
                        }
                        return point;
                    });
                });
            }

            if (this.pXaxis.type === 'numeric') {
                // tslint:disable-next-line:max-line-length
                if (this.pXaxis.minMax !== 'fixed' || (this.pXaxis.minMax === 'fixed' && ((!this.pXaxis.max && isNaN(this.pXaxis.max)) || isNaN(this.pXaxis.max)))) {
                    const fMax = (this.data[0].reduce((prev, current) => {
                        return (prev.x > current.x) ? prev : current;
                    })).x;

                    if (this.data.length > 1) {
                        this.pXaxis.max = this.data.reduce((pd, cd, i) => {
                            let cMax;
                            if (i === 0) {
                                cMax = pd;
                            } else {
                                cMax = (cd.reduce((prev, current) => {
                                    return (prev.x > current.x) ? prev : current;
                                }, '')).x;
                            }
                            return (pd > cMax) ? pd : cMax;
                        }, fMax);
                    } else {
                        this.pXaxis.max = fMax;
                    }
                }

                // tslint:disable-next-line:max-line-length
                if (this.pXaxis.minMax !== 'fixed' || (this.pXaxis.minMax === 'fixed' && ((!this.pXaxis.min && isNaN(this.pXaxis.min)) || isNaN(this.pXaxis.min)))) {
                    const fMin = (this.data[0].reduce((prev, current) => {
                        return (prev.x < current.x) ? prev : current;
                    })).x;

                    if (this.data.length > 1) {
                        this.pXaxis.min = this.data.reduce((pd, cd, i) => {
                            let cMin;
                            if (i === 0) {
                                cMin = pd;
                            } else {
                                cMin = (cd.reduce((prev, current) => {
                                    return (prev.x < current.x) ? prev : current;
                                }, '')).x;
                            }
                            return (pd < cMin) ? pd : cMin;
                        }, fMin);
                    } else {
                        this.pXaxis.min = fMin;
                    }
                }
                this.pPerUnitX = (this.pXaxis.max - this.pXaxis.min) / this.pXaxis.ticks.count;
            } else if (this.pXaxis.type === 'category') {

                this.pXaxis.min = 0;
                this.pXaxis.max = this.data[0].length;
                this.pXaxis.ticks.count = this.pXaxis.max;
                this.pPerUnitX = 1;
            }
            // tslint:disable-next-line:max-line-length
            if (this.pYaxis.minMax !== 'fixed' || (this.pYaxis.minMax === 'fixed' && ((!this.pYaxis.max && isNaN(this.pYaxis.max)) || isNaN(this.pYaxis.max)))) {
                const fMax = (this.data[0].reduce((prev, current) => {
                    return (prev.y > current.y) ? prev : current;
                })).y;

                if (this.data.length > 1) {
                    this.pYaxis.max = this.data.reduce((pd, cd, i) => {
                        let cMax;
                        if (i === 0) {
                            cMax = pd;
                        } else {
                            cMax = (cd.reduce((prev, current) => {
                                return (prev.y > current.y) ? prev : current;
                            }, '')).y;
                        }
                        return (pd > cMax) ? pd : cMax;
                    }, fMax);
                } else {
                    this.pYaxis.max = fMax;
                }
            }

            // tslint:disable-next-line:max-line-length
            if (this.pYaxis.minMax !== 'fixed' || (this.pYaxis.minMax === 'fixed' && ((!this.pYaxis.min && isNaN(this.pYaxis.min)) || isNaN(this.pYaxis.min)))) {
                const fMin = (this.data[0].reduce((prev, current) => {
                    return (prev.y < current.y) ? prev : current;
                })).y;

                if (this.data.length > 1) {
                    this.pYaxis.min = this.data.reduce((pd, cd, i) => {
                        let cMin;
                        if (i === 0) {
                            cMin = pd;
                        } else {
                            cMin = (cd.reduce((prev, current) => {
                                return (prev.y < current.y) ? prev : current;
                            }, '')).y;
                        }
                        return (pd < cMin) ? pd : cMin;
                    }, fMin);
                } else {
                    this.pYaxis.min = fMin;
                }
            }
            this.pPerUnitY = (this.pYaxis.max - this.pYaxis.min) / this.pYaxis.ticks.count;
        }

        if (changes.width || changes.height || changes.options || changes.data) {

            const xlabels = [];
            if (this.pXaxis.type === 'numeric') {
                // tslint:disable-next-line:max-line-length
                this.pPerUnitWidth = (this.width - this.pYaxis.paddingLeft - this.pYaxis.paddingRight - this.options.bar.width) / this.pXaxis.ticks.count;
                for (let i = 0; i <= this.pXaxis.ticks.count; i++) {
                    xlabels.push({
                        text: (this.pXaxis.min + (i * this.pPerUnitX)).toFixed(2),
                        px: this.pYaxis.paddingLeft + (i * this.pPerUnitWidth) + (this.options.bar.width / 2),
                        py: this.height
                    });
                }
                this.pXaxis.labels = xlabels;

                // tslint:disable-next-line:max-line-length
                this.pyaxisLocation = this.pYaxis.paddingLeft + (this.options.bar.width / 2) - ((this.pXaxis.min < 0) ? ((this.pXaxis.min / this.pPerUnitX) * this.pPerUnitWidth) : 0);
            } else if (this.pXaxis.type === 'category') {
                this.pPerUnitWidth = (this.width - this.pYaxis.paddingLeft - this.pYaxis.paddingRight) / this.pXaxis.ticks.count;
                for (let i = 0; i < this.pXaxis.ticks.count; i++) {
                    xlabels.push({
                        text: this.data[0][i].x,
                        px: this.pYaxis.paddingLeft + (i * this.pPerUnitWidth) + (this.pPerUnitWidth / 2),
                        py: this.height
                    });
                }
                this.pXaxis.labels = xlabels;

                this.pyaxisLocation = this.pYaxis.paddingLeft;
            }
            // tslint:disable-next-line:max-line-length
            this.pPerUnitHeight = (this.height - this.pXaxis.paddingTop - this.pXaxis.paddingBottom - this.options.innerPaddingBottom) / this.pYaxis.ticks.count;

            const ylabels = [];
            for (let i = 0; i <= this.pYaxis.ticks.count; i++) {
                ylabels.push({
                    text: (this.pYaxis.min + (i * this.pPerUnitY)).toFixed(2),
                    px: 0,
                    // tslint:disable-next-line:max-line-length
                    py: this.height - (i * this.pPerUnitHeight) - this.pXaxis.paddingBottom - this.options.innerPaddingBottom // + this.pXaxis.paddingTop,
                });
            }
            this.pYaxis.labels = ylabels;
            // tslint:disable-next-line:max-line-length
            this.pxaxisLocation = this.height - this.pXaxis.paddingBottom - this.options.innerPaddingBottom + ((this.pYaxis.min <= 0) ? ((this.pYaxis.min / this.pPerUnitY) * this.pPerUnitHeight) : 0);

            this.pData = this.data.map((series, si) => {
                if (this.pXaxis.type === 'numeric') {
                    series.sort((a, b) => {
                        return (a.x > b.x) ? 1 : -1;
                    });
                }
                return {
                    series: this.options.series[si],
                    data: series.map((item, indx) => {
                        // tslint:disable-next-line:max-line-length
                        const distanceFromXAxis = (((this.pYaxis.min < 0) ? item.y : (item.y - this.pYaxis.min)) / this.pPerUnitY) * this.pPerUnitHeight;
                        // tslint:disable-next-line:max-line-length
                        let distanceFromYAxis = 0;
                        if (this.pXaxis.type === 'numeric') {
                            // tslint:disable-next-line:max-line-length
                            distanceFromYAxis = (((this.pXaxis.min < 0) ? item.x : (item.x - this.pXaxis.min)) / this.pPerUnitX) * this.pPerUnitWidth;
                        } else if (this.pXaxis.type === 'category') {
                            // tslint:disable-next-line:max-line-length
                            distanceFromYAxis = indx * this.pPerUnitWidth + (this.pPerUnitWidth / 2);
                        }
                        return {
                            x: item.x,
                            y: item.y,
                            height: Math.abs(distanceFromXAxis),
                            px: this.pyaxisLocation + distanceFromYAxis,
                            py: this.pxaxisLocation - distanceFromXAxis// + this.pXaxis.paddingTop
                        };
                    })
                };
            });
        }
    }
    OnMouseEnter(event) {
        // console.log('OnMouseEnter', event.event, event.point);
        this.ptootltip.series = event.series;
        this.ptootltip.point = event.point;
        this.ptootltip.px = event.event.offsetX + 20;
        this.ptootltip.py = event.event.offsetY + 20;

        clearTimeout(this.hideTooltip);
        this.pDisplayTooltip = true;

    }
    OnMouseOver(event) {
        // console.log('OnMouseOver', event);
        this.ptootltip.px = event.offsetX + 20;
        this.ptootltip.py = event.offsetY + 20;
    }

    OnMouseLeave(event) {
        // console.log('OnMouseLeave', event);
        // this.pDisplayTooltip = false;
        let ref = this;
        this.hideTooltip = setTimeout(() => {
            ref.pDisplayTooltip = false;
        }, 4000);
    }
}
