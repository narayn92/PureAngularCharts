import { Xaxis, Yaxis, ChartOptions } from './pure-angular-charts.models';
import { Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

export class BasicChart implements OnInit, OnChanges {

    _width = 600;

    @Input()
    set width(val) {
        this._width = val;
    }
    get width() {
        return this._width - this.options.chart.padding.paddingLeft - this.options.chart.padding.paddingTop;
    }
    @Input() data = [
        // [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }]
    ];
    private pheight = 400;
    get height() {
        let titleHeight = this.options.title.height;
        const legendHeight = this.options.legends.height;
        if (!this.options.title.text) {
            titleHeight = 0;
        }
        if (!this.options.legends.show) {
            titleHeight = 0;
        }
        return this.pheight - titleHeight - legendHeight - this.options.chart.padding.paddingTop - this.options.chart.padding.paddingBottom;
    }
    @Input()
    set height(val: any) {
        console.log('height', val);

        this.pheight = val;
    }

    private poptions;
    private pdefaultOptions;

    get options() {
        return this.poptions;
    }

    @Input()
    set options(val: any) {
        // this.poptions = this.mergeObj(this.poptions, val);
        this.mergerDefaultOptions(val);
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

    pActualBarWidth;
    pActualBarSpacing;

    pDisplayTooltip = false;
    ptootltip = {
        series: {
            name: '', color: ''
        },
        point: {
            x: 0,
            y: 0
        },
        xTitle: '',
        yTitle: '',
        px: 0,
        py: 0
    };
    hideTooltip;

    pIsLegendHoverActive = false;
    pHoverActiveLegend = null;
    pIsLegendFiltered = false;
    pSelectedLegends = [];

    constructor(options: ChartOptions) {
        // Object.assign(this.options, options);
        this.pdefaultOptions = options;
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
        console.log('loadChart - basic', changes);
        let categories = [];

        let autoDetectedAxisType = '';
        if (this.data && this.data.length > 0 && this.data[0].length > 0) {
            if (typeof this.data[0][0].x === 'number' || !isNaN(this.data[0][0].x)) {
                autoDetectedAxisType = 'numeric';
            } else if (typeof this.data[0][0].x === 'string') {
                autoDetectedAxisType = 'category';
            }
        }
        if (this.poptions.xaxis.type !== autoDetectedAxisType) {
            this.poptions.xaxis.type = autoDetectedAxisType;
        }

        if (changes.options || changes.data) {

            this.pActualBarWidth = this.options.bar.width;
            this.pActualBarSpacing = this.options.bar.spacing;

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
                        this.options.series[i].max = cMax;
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
                        this.options.series[i].min = cMin;
                        return (pd < cMin) ? pd : cMin;
                    }, fMin);
                } else {
                    this.pYaxis.min = fMin;
                }
            }
            this.pPerUnitY = (this.pYaxis.max - this.pYaxis.min) / this.pYaxis.ticks.count;
        }

        if (changes.width || changes.height || changes.options || changes.data) {
            this.calculateLabels();
        }
    }

    calculateLabels() {
        const xlabels = [];
        if (this.pXaxis.type === 'numeric') {
            // tslint:disable-next-line:max-line-length
            this.pPerUnitWidth = (this.width - this.pYaxis.axisWidth - this.pYaxis.paddingRight - this.pActualBarWidth) / this.pXaxis.ticks.count;
            for (let i = 0; i <= this.pXaxis.ticks.count; i++) {
                xlabels.push({
                    text: (this.pXaxis.min + (i * this.pPerUnitX)).toFixed(2),
                    px: this.pYaxis.axisWidth + (i * this.pPerUnitWidth) + (this.pActualBarWidth / 2),
                    py: this.height
                });
            }
            this.pXaxis.labels = xlabels;

            // tslint:disable-next-line:max-line-length
            this.pyaxisLocation = this.pYaxis.axisWidth + (this.pActualBarWidth / 2) - ((this.pXaxis.min < 0) ? ((this.pXaxis.min / this.pPerUnitX) * this.pPerUnitWidth) : 0);
        } else if (this.pXaxis.type === 'category') {
            this.pPerUnitWidth = (this.width - this.pYaxis.axisWidth - this.pYaxis.paddingRight) / this.pXaxis.ticks.count;
            for (let i = 0; i < this.pXaxis.ticks.count; i++) {
                xlabels.push({
                    text: this.data[0][i].x,
                    px: this.pYaxis.axisWidth + (i * this.pPerUnitWidth) + (this.pPerUnitWidth / 2),
                    py: this.height
                });
            }
            this.pXaxis.labels = xlabels;

            this.pyaxisLocation = this.pYaxis.axisWidth;
        }
        // tslint:disable-next-line:max-line-length
        this.pPerUnitHeight = (this.height - this.options.innerPaddingTop - this.pXaxis.axisHeight - this.options.innerPaddingBottom) / this.pYaxis.ticks.count;

        const ylabels = [];
        for (let i = 0; i <= this.pYaxis.ticks.count; i++) {
            ylabels.push({
                text: (this.pYaxis.min + (i * this.pPerUnitY)).toFixed(2),
                px: 0,
                // tslint:disable-next-line:max-line-length
                py: this.height - (i * this.pPerUnitHeight) - this.pXaxis.axisHeight - this.options.innerPaddingBottom // + this.pXaxis.innerPaddingTop,
            });
        }
        this.pYaxis.labels = ylabels;
        // tslint:disable-next-line:max-line-length
        this.pxaxisLocation = this.height - this.pXaxis.axisHeight - this.options.innerPaddingBottom + ((this.pYaxis.min <= 0) ? ((this.pYaxis.min / this.pPerUnitY) * this.pPerUnitHeight) : 0);

        this.plotDataPoints();
    }

    plotDataPoints() {

        let barSeriesCount = 0;
        this.options.series.forEach((item, indx) => {
            if (item.type === 'bar') {
                if (!this.pIsLegendFiltered || (this.pIsLegendFiltered && this.pSelectedLegends.indexOf(indx) !== -1)) {
                    barSeriesCount++;
                }
            }
        });
        // const hasGroupedBar = (barSeriesCount > 1) ? true : false;

        if (barSeriesCount > 0) {
            const spaceAvailable = this.pPerUnitWidth * 0.8;
            if (this.pXaxis.type === 'category') {
                const microUnit = this.options.bar.width + this.options.bar.spacing;
                if (microUnit * barSeriesCount > spaceAvailable) {
                    // tslint:disable-next-line:max-line-length
                    this.pActualBarSpacing = (this.options.bar.width * 0.2 < this.options.bar.spacing) ? this.options.bar.width * 0.2 : this.options.bar.spacing;
                    this.pActualBarWidth = (spaceAvailable - (this.pActualBarSpacing * barSeriesCount)) / barSeriesCount;
                } else {
                    this.pActualBarWidth = (this.options.bar.width > spaceAvailable) ? spaceAvailable : this.options.bar.width;
                }
            } else if (this.pXaxis.type === 'numeric') {
                this.pActualBarWidth = (this.options.bar.width > spaceAvailable) ? spaceAvailable : this.options.bar.width;
            }
        }
        let barSeriesCounter = 0;
        this.pData = this.data.map((series, si) => {
            if (!this.pIsLegendFiltered || (this.pIsLegendFiltered && this.pSelectedLegends.indexOf(si) !== -1)) {
                if (this.pXaxis.type === 'numeric') {
                    series.sort((a, b) => {
                        return (a.x > b.x) ? 1 : -1;
                    });
                }
                if (this.options.series[si].type === 'bar') {
                    barSeriesCounter++;
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
                            if (this.options.series[si].type === 'bar') { // && hasGroupedBar
                                const microUnit = this.pActualBarWidth + this.pActualBarSpacing;
                                const offset = (this.pPerUnitWidth - (microUnit * barSeriesCount)) / 2;
                                // tslint:disable-next-line:max-line-length
                                distanceFromYAxis = (indx * this.pPerUnitWidth) + offset + ((barSeriesCounter * microUnit)) - (microUnit / 2);
                            } else {
                                distanceFromYAxis = indx * this.pPerUnitWidth + (this.pPerUnitWidth / 2);
                            }
                        }
                        return {
                            x: item.x,
                            y: item.y,
                            height: Math.abs(distanceFromXAxis),
                            px: this.pyaxisLocation + distanceFromYAxis,
                            py: this.pxaxisLocation - distanceFromXAxis// + this.pXaxis.innerPaddingTop
                        };
                    })
                };
            } else {
                return null;
            }
        });
    }
    OnMouseEnter(event) {
        // console.log('OnMouseEnter', event.event, event.point);
        this.ptootltip.series = event.series;
        this.ptootltip.point = event.point;
        this.ptootltip.xTitle = this.pXaxis.title;
        this.ptootltip.yTitle = this.pYaxis.title;
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


    OnLegendMouseEnter(event, series, targetSi) {
        this.pHoverActiveLegend = targetSi;
    }
    OnLegendMouseOver(event, series, targetSi) {
        this.pHoverActiveLegend = targetSi;
    }
    OnLegendMouseLeave(event, series, targetSi) {
        this.pHoverActiveLegend = null;
    }

    OnLegendSelected(series, targetSi) {
        this.pIsLegendFiltered = true;

        if (this.pSelectedLegends.indexOf(targetSi) !== -1) {
            this.pSelectedLegends = this.pSelectedLegends.filter(obj => obj !== targetSi);
        } else {
            this.pSelectedLegends.push(targetSi);
        }

        if (this.pSelectedLegends.length === 0 || this.pSelectedLegends.length === this.options.series.length) {
            this.pSelectedLegends = [];
            this.pIsLegendFiltered = false;
        }


        this.resetMinMax();
        this.calculateLabels();
    }

    resetMinMax() {
        this.pYaxis.max = this.options.series.reduce((pd, cd, si) => {
            if (!this.pIsLegendFiltered || this.pSelectedLegends.indexOf(si) !== -1) {
                return (pd > cd.max) ? pd : cd.max;
            } else {
                return pd;
            }
        }, (this.pIsLegendFiltered) ? this.options.series[this.pSelectedLegends[0]].max : this.options.series[0].max);

        this.pYaxis.min = this.options.series.reduce((pd, cd, si) => {
            if (!this.pIsLegendFiltered || this.pSelectedLegends.indexOf(si) !== -1) {
                return (pd < cd.min) ? pd : cd.min;
            } else {
                return pd;
            }
        }, (this.pIsLegendFiltered) ? this.options.series[this.pSelectedLegends[0]].min : this.options.series[0].min);

        this.pPerUnitY = (this.pYaxis.max - this.pYaxis.min) / this.pYaxis.ticks.count;
    }

    mergerDefaultOptions(val) {
        // tslint:disable-next-line:prefer-const
        let poptions: ChartOptions = {
            series: []
        };
        poptions.chart = {};
        if (val.chart) {
            poptions.chart.background = (val.chart.background) ? val.chart.background : this.pdefaultOptions.chart.background;
            poptions.chart.padding = Object.assign({}, this.pdefaultOptions.chart.padding);
            if (typeof val.chart.padding === 'object') { Object.assign(poptions.chart.padding, val.chart.padding); }
        } else {
            poptions.chart.background = this.pdefaultOptions.chart.background;
            poptions.chart.padding = Object.assign({}, this.pdefaultOptions.chart.padding);
        }

        poptions.title = {};
        if (val.title) {
            poptions.title.text = (val.title.text) ? val.title.text : this.pdefaultOptions.title.text;
            poptions.title.height = (typeof val.title.height === 'number') ? val.title.height : this.pdefaultOptions.title.height;
            poptions.title.style = Object.assign({}, this.pdefaultOptions.title.style);
            if (typeof val.title.style === 'object') { Object.assign(poptions.title.style, val.title.style); }
        } else {
            poptions.title.text = this.pdefaultOptions.title.text;
            poptions.title.height = this.pdefaultOptions.title.height;
            poptions.title.style = Object.assign({}, this.pdefaultOptions.title.style);
        }

        poptions.xaxis = {};
        if (val.xaxis) {
            poptions.xaxis.type = (val.xaxis.type) ? val.xaxis.type : this.pdefaultOptions.xaxis.type;
            poptions.xaxis.show = (typeof val.xaxis.show === 'boolean') ? val.xaxis.show : this.pdefaultOptions.xaxis.show;
            poptions.xaxis.labels = (val.xaxis.labels) ? val.xaxis.labels : this.pdefaultOptions.xaxis.labels;
            // tslint:disable-next-line:max-line-length
            poptions.xaxis.showLabels = (typeof val.xaxis.showLabels === 'boolean') ? val.xaxis.showLabels : this.pdefaultOptions.xaxis.showLabels;
            poptions.xaxis.labelStyle = Object.assign({}, this.pdefaultOptions.xaxis.labelStyle)
            if (typeof val.xaxis.labelStyle === 'object') { Object.assign(poptions.xaxis.labelStyle, val.xaxis.labelStyle) };
            // tslint:disable-next-line:max-line-length

            poptions.xaxis.axisLine = {};
            if (val.xaxis.axisLine) {
                // tslint:disable-next-line:max-line-length
                poptions.xaxis.axisLine.show = (typeof val.xaxis.axisLine.show === 'boolean') ? val.xaxis.axisLine.show : this.pdefaultOptions.xaxis.axisLine.show;
                poptions.xaxis.axisLine.style = Object.assign({}, this.pdefaultOptions.xaxis.axisLine.style)
                if (typeof val.xaxis.axisLine.style === 'object') { Object.assign(poptions.xaxis.axisLine.style, val.xaxis.axisLine.style) };

            } else {
                poptions.xaxis.axisLine.show = this.pdefaultOptions.xaxis.axisLine.show;
                poptions.xaxis.axisLine.style = Object.assign({}, this.pdefaultOptions.xaxis.axisLine.style)
            }

            poptions.xaxis.min = (typeof val.xaxis.min === 'number') ? val.xaxis.min : this.pdefaultOptions.xaxis.min;
            poptions.xaxis.max = (typeof val.xaxis.max === 'number') ? val.xaxis.max : this.pdefaultOptions.xaxis.max;
            poptions.xaxis.title = (val.xaxis.title) ? val.xaxis.title : this.pdefaultOptions.xaxis.title;
            if (val.xaxis.ticks) {
                poptions.xaxis.ticks = {};
                // tslint:disable-next-line:max-line-length
                poptions.xaxis.ticks.show = (typeof val.xaxis.ticks.show === 'boolean') ? val.xaxis.ticks.show : this.pdefaultOptions.xaxis.ticks.show;
                // tslint:disable-next-line:max-line-length
                poptions.xaxis.ticks.count = (typeof val.xaxis.ticks.count === 'number') ? val.xaxis.ticks.count : this.pdefaultOptions.xaxis.ticks.count;
                // tslint:disable-next-line:max-line-length
                poptions.xaxis.ticks.length = (typeof val.xaxis.ticks.length === 'number') ? val.xaxis.ticks.length : this.pdefaultOptions.xaxis.ticks.length;

                poptions.xaxis.ticks.style = Object.assign({}, this.pdefaultOptions.xaxis.ticks.style)
                if (typeof val.xaxis.ticks.style === 'object') { Object.assign(poptions.xaxis.ticks.style, val.xaxis.ticks.style) };
            } else {
                poptions.xaxis.ticks.show = this.pdefaultOptions.xaxis.show;
                poptions.xaxis.ticks.count = this.pdefaultOptions.xaxis.count;
                poptions.xaxis.ticks.length = this.pdefaultOptions.xaxis.length;
                poptions.xaxis.ticks.style = Object.assign({}, this.pdefaultOptions.xaxis.ticks.style)
            }
            poptions.xaxis.grid = {};
            if (val.xaxis.grid) {
                // tslint:disable-next-line:max-line-length
                poptions.xaxis.grid.show = (typeof val.xaxis.grid.show === 'boolean') ? val.xaxis.grid.show : this.pdefaultOptions.xaxis.grid.show;
                poptions.xaxis.grid.style = Object.assign({}, this.pdefaultOptions.xaxis.grid.style)
                if (typeof val.xaxis.grid.style === 'object') { Object.assign(poptions.xaxis.grid.style, val.xaxis.grid.style) };

            } else {
                poptions.xaxis.grid.show = this.pdefaultOptions.xaxis.grid.show;
                poptions.xaxis.grid.style = Object.assign({}, this.pdefaultOptions.xaxis.grid.style)
            }
            // tslint:disable-next-line:max-line-length
            poptions.xaxis.axisHeight = (typeof val.xaxis.axisHeight === 'number') ? val.xaxis.axisHeight : this.pdefaultOptions.xaxis.axisHeight;
            poptions.xaxis.minMax = (val.xaxis.minMax) ? val.xaxis.minMax : this.pdefaultOptions.xaxis.minMax;
        } else {
            poptions.xaxis.type = this.pdefaultOptions.xaxis.type;
            poptions.xaxis.show = this.pdefaultOptions.xaxis.show;
            poptions.xaxis.labels = this.pdefaultOptions.xaxis.labels;
            poptions.xaxis.showLabels = this.pdefaultOptions.xaxis.showLabels;
            poptions.xaxis.labelStyle = Object.assign({}, this.pdefaultOptions.xaxis.labelStyle);
            poptions.xaxis.axisLine = {};
            poptions.xaxis.axisLine.show = this.pdefaultOptions.xaxis.axisLine.show;
            poptions.xaxis.axisLine.style = Object.assign({}, this.pdefaultOptions.xaxis.axisLine.style)
            poptions.xaxis.min = this.pdefaultOptions.xaxis.min;
            poptions.xaxis.max = this.pdefaultOptions.xaxis.max;
            poptions.xaxis.title = this.pdefaultOptions.xaxis.title;
            poptions.xaxis.ticks = {};
            poptions.xaxis.ticks.show = this.pdefaultOptions.xaxis.show;
            poptions.xaxis.ticks.count = this.pdefaultOptions.xaxis.count;
            poptions.xaxis.ticks.length = this.pdefaultOptions.xaxis.length;
            poptions.xaxis.ticks.style = Object.assign({}, this.pdefaultOptions.xaxis.ticks.style)
            poptions.xaxis.grid = {};
            poptions.xaxis.grid.show = this.pdefaultOptions.xaxis.grid.show;
            poptions.xaxis.grid.style = Object.assign({}, this.pdefaultOptions.xaxis.grid.style)
            poptions.xaxis.axisHeight = this.pdefaultOptions.xaxis.axisHeight;
            poptions.xaxis.minMax = this.pdefaultOptions.xaxis.minMax;
        }
        poptions.yaxis = {};
        if (val.yaxis) {
            poptions.yaxis.type = (val.yaxis.type) ? val.yaxis.type : this.pdefaultOptions.yaxis.type;
            poptions.yaxis.show = (typeof val.yaxis.show === 'boolean') ? val.yaxis.show : this.pdefaultOptions.yaxis.show;
            poptions.yaxis.labels = (val.yaxis.labels) ? val.yaxis.labels : this.pdefaultOptions.yaxis.labels;
            // tslint:disable-next-line:max-line-length
            poptions.yaxis.showLabels = (typeof val.yaxis.showLabels === 'boolean') ? val.yaxis.showLabels : this.pdefaultOptions.yaxis.showLabels;

            poptions.yaxis.labelStyle = Object.assign({}, this.pdefaultOptions.yaxis.labelStyle)
            if (typeof val.yaxis.labelStyle === 'object') { Object.assign(poptions.yaxis.labelStyle, val.yaxis.labelStyle) };


            poptions.yaxis.axisLine = {};
            if (val.yaxis.axisLine) {
                // tslint:disable-next-line:max-line-length
                poptions.yaxis.axisLine.show = (typeof val.yaxis.axisLine.show === 'boolean') ? val.yaxis.axisLine.show : this.pdefaultOptions.yaxis.axisLine.show;
                poptions.yaxis.axisLine.style = Object.assign({}, this.pdefaultOptions.yaxis.axisLine.style)
                if (typeof val.yaxis.axisLine.style === 'object') { Object.assign(poptions.yaxis.axisLine.style, val.yaxis.axisLine.style) };

            } else {
                poptions.yaxis.axisLine.show = this.pdefaultOptions.yaxis.axisLine.show;
                poptions.yaxis.axisLine.style = Object.assign({}, this.pdefaultOptions.yaxis.axisLine.style)
            }

            poptions.yaxis.min = (typeof val.yaxis.min === 'number') ? val.yaxis.min : this.pdefaultOptions.yaxis.min;
            poptions.yaxis.max = (typeof val.yaxis.max === 'number') ? val.yaxis.max : this.pdefaultOptions.yaxis.max;
            poptions.yaxis.title = (val.yaxis.title) ? val.yaxis.title : this.pdefaultOptions.yaxis.title;
            if (typeof val.xaxis.ticks === 'object') {
                poptions.yaxis.ticks = {};
                // tslint:disable-next-line:max-line-length
                poptions.yaxis.ticks.show = (typeof val.yaxis.ticks.show === 'boolean') ? val.yaxis.ticks.show : this.pdefaultOptions.yaxis.ticks.show;
                // tslint:disable-next-line:max-line-length
                poptions.yaxis.ticks.count = (typeof val.yaxis.ticks.count === 'number') ? val.yaxis.ticks.count : this.pdefaultOptions.yaxis.ticks.count;
                // tslint:disable-next-line:max-line-length
                poptions.yaxis.ticks.length = (typeof val.yaxis.ticks.length === 'number') ? val.yaxis.ticks.length : this.pdefaultOptions.yaxis.ticks.length;

                poptions.yaxis.ticks.style = Object.assign({}, this.pdefaultOptions.yaxis.ticks.style)
                if (typeof val.yaxis.ticks.style === 'object') { Object.assign(poptions.yaxis.ticks.style, val.yaxis.ticks.style) };
            } else {
                poptions.yaxis.ticks.show = this.pdefaultOptions.yaxis.show;
                poptions.yaxis.ticks.count = this.pdefaultOptions.yaxis.count;
                poptions.yaxis.ticks.length = this.pdefaultOptions.yaxis.length;
                poptions.yaxis.ticks.style = Object.assign({}, this.pdefaultOptions.yaxis.ticks.style)
            }
            poptions.yaxis.grid = {};
            if (typeof val.xaxis.grid === 'object') {
                // tslint:disable-next-line:max-line-length
                poptions.yaxis.grid.show = (typeof val.yaxis.grid.show === 'boolean') ? val.yaxis.grid.show : this.pdefaultOptions.yaxis.grid.show;

                poptions.yaxis.grid.style = Object.assign({}, this.pdefaultOptions.yaxis.grid.style)
                if (typeof val.yaxis.grid.style === 'object') { Object.assign(poptions.yaxis.grid.style, val.yaxis.grid.style) };
            } else {
                poptions.yaxis.grid.show = this.pdefaultOptions.yaxis.grid.show;
                poptions.yaxis.grid.style = Object.assign({}, this.pdefaultOptions.yaxis.grid.style)
            }
            // tslint:disable-next-line:max-line-length
            poptions.yaxis.axisWidth = (typeof val.yaxis.axisWidth === 'number') ? val.yaxis.axisWidth : this.pdefaultOptions.yaxis.axisWidth;
            // tslint:disable-next-line:max-line-length
            poptions.yaxis.paddingRight = (typeof val.yaxis.paddingRight === 'number') ? val.yaxis.paddingRight : this.pdefaultOptions.yaxis.paddingRight;
            poptions.yaxis.minMax = (val.yaxis.minMax) ? val.yaxis.minMax : this.pdefaultOptions.yaxis.minMax;
        } else {
            poptions.yaxis.type = this.pdefaultOptions.yaxis.type;
            poptions.yaxis.show = this.pdefaultOptions.yaxis.show;
            poptions.yaxis.labels = this.pdefaultOptions.yaxis.labels;
            poptions.yaxis.showLabels = this.pdefaultOptions.yaxis.showLabels;
            poptions.yaxis.labelStyle = Object.assign({}, this.pdefaultOptions.yaxis.labelStyle);
            poptions.yaxis.axisLine = {};
            poptions.yaxis.axisLine.show = this.pdefaultOptions.yaxis.axisLine.show;
            poptions.yaxis.axisLine.style = Object.assign({}, this.pdefaultOptions.yaxis.axisLine.style)
            poptions.yaxis.min = this.pdefaultOptions.yaxis.min;
            poptions.yaxis.max = this.pdefaultOptions.yaxis.max;
            poptions.yaxis.title = this.pdefaultOptions.yaxis.title;
            poptions.yaxis.ticks = {};
            poptions.yaxis.ticks.show = this.pdefaultOptions.yaxis.show;
            poptions.yaxis.ticks.count = this.pdefaultOptions.yaxis.count;
            poptions.yaxis.ticks.length = this.pdefaultOptions.yaxis.length;
            poptions.yaxis.ticks.style = Object.assign({}, this.pdefaultOptions.yaxis.ticks.style)
            poptions.yaxis.grid = {};
            poptions.yaxis.grid.show = this.pdefaultOptions.yaxis.grid.show;
            poptions.yaxis.grid.style = Object.assign({}, this.pdefaultOptions.yaxis.grid.style)
            poptions.yaxis.axisWidth = this.pdefaultOptions.yaxis.axisWidth;
            poptions.yaxis.paddingRight = this.pdefaultOptions.yaxis.paddingRight;
            poptions.yaxis.minMax = this.pdefaultOptions.yaxis.minMax;
        }
        if (typeof val.series === 'object') {
            poptions.series = val.series;
        }
        if (typeof val.bar === 'object') {
            poptions.bar = {};
            poptions.bar.width = (typeof val.bar.width === 'number') ? val.bar.width : this.pdefaultOptions.bar.width;
            poptions.bar.spacing = (typeof val.bar.spacing === 'number') ? val.bar.spacing : this.pdefaultOptions.bar.spacing;
        } else {
            poptions.bar = Object.assign({}, this.pdefaultOptions.bar);
        }
        poptions.dataLabels = {};
        if (typeof val.dataLabels === 'object') {
            // tslint:disable-next-line:max-line-length
            poptions.dataLabels.show = (typeof val.dataLabels.show === 'boolean') ? val.dataLabels.show : this.pdefaultOptions.dataLabels.show;
            poptions.dataLabels.style = Object.assign({}, this.pdefaultOptions.dataLabels.style)
            if (typeof val.dataLabels.style === 'object') { Object.assign(poptions.dataLabels.style, val.dataLabels.style) }
        } else {
            poptions.dataLabels.show = this.pdefaultOptions.dataLabels.show;
            poptions.dataLabels.style = Object.assign({}, this.pdefaultOptions.dataLabels.style)
        }
        poptions.legends = {};
        if (typeof val.legends === 'object') {
            // tslint:disable-next-line:max-line-length
            poptions.legends.show = (typeof val.legends.show === 'boolean') ? val.legends.show : this.pdefaultOptions.legends.show;
            poptions.legends.height = (typeof val.legends.height === 'number') ? val.legends.height : this.pdefaultOptions.legends.height;
            poptions.legends.style = Object.assign({}, this.pdefaultOptions.legends.style);
            if (typeof val.legends.style === 'object') { Object.assign(poptions.legends.style, val.legends.style); }
        } else {
            poptions.legends.show = this.pdefaultOptions.legends.show;
            poptions.legends.height = this.pdefaultOptions.legends.height;
            poptions.legends.style = Object.assign({}, this.pdefaultOptions.legends.style);

        }
        poptions.innerPaddingTop = (typeof val.innerPaddingTop === 'number') ? val.innerPaddingTop : this.pdefaultOptions.innerPaddingTop;
        // tslint:disable-next-line:max-line-length
        poptions.innerPaddingBottom = (typeof val.innerPaddingBottom === 'number') ? val.innerPaddingBottom : this.pdefaultOptions.innerPaddingBottom;

        poptions.tooltip = {};
        if (typeof val.tooltip === 'object') {
            // tslint:disable-next-line:max-line-length
            poptions.tooltip.show = (typeof val.tooltip.show === 'boolean') ? val.tooltip.show : this.pdefaultOptions.tooltip.show;
            // poptions.tooltip.minWidth = (typeof val.tooltip.minWidth === 'number') ? val.tooltip.minWidth : this.pdefaultOptions.tooltip.minWidth;
            poptions.tooltip.style = Object.assign({}, this.pdefaultOptions.tooltip.style);
            if (typeof val.tooltip.style === 'object') { Object.assign(poptions.tooltip.style, val.tooltip.style); }
        } else {
            poptions.tooltip.show = this.pdefaultOptions.tooltip.show;
            // poptions.tooltip.minWidth = this.pdefaultOptions.tooltip.minWidth;
            poptions.tooltip.style = Object.assign({}, this.pdefaultOptions.tooltip.style);

        }
        this.poptions = poptions;

        // if (val.title) { this.options.title = val.title; }
        // if (val.xaxis) {
        //     if (val.xaxis.type) { this.poptions.xaxis.type = val.xaxis.type; }
        //     if (typeof val.xaxis.show === 'boolean') { this.poptions.xaxis.show = val.xaxis.show; }
        //     if (val.xaxis.labels) { this.poptions.xaxis.labels = val.xaxis.labels; }
        //     if (typeof val.xaxis.showLabels === 'boolean') { this.poptions.xaxis.showLabels = val.xaxis.showLabels; }
        //     if (typeof val.xaxis.showAxisLine === 'boolean') { this.poptions.xaxis.showAxisLine = val.xaxis.showAxisLine; }
        //     if (typeof val.xaxis.min === 'number') { this.poptions.xaxis.min = val.xaxis.min; }
        //     if (typeof val.xaxis.max === 'number') { this.poptions.xaxis.max = val.xaxis.max; }
        //     if (val.xaxis.title) { this.poptions.xaxis.title = val.xaxis.title; }
        //     if (typeof val.xaxis.ticks === 'object') {
        //         if (typeof val.xaxis.ticks.show === 'boolean') { this.poptions.xaxis.ticks.show = val.xaxis.ticks.show; }
        //         if (typeof val.xaxis.ticks.count === 'number') { this.poptions.xaxis.ticks.count = val.xaxis.ticks.count; }
        //         if (typeof val.xaxis.ticks.length === 'number') { this.poptions.xaxis.ticks.length = val.xaxis.ticks.length; }
        //     }
        //     if (typeof val.xaxis.grid === 'object') {
        //         if (typeof val.xaxis.grid.show === 'boolean') { this.poptions.xaxis.grid.show = val.xaxis.grid.show; }
        //     }
        //     if (typeof val.xaxis.axisHeight === 'number') { this.poptions.xaxis.axisHeight = val.xaxis.axisHeight; }
        //     if (val.xaxis.minMax) { this.poptions.xaxis.minMax = val.xaxis.minMax; }
        // }
        // if (val.yaxis) {
        //     if (val.yaxis.type) { this.poptions.yaxis.type = val.yaxis.type; }
        //     if (typeof val.yaxis.show === 'boolean') { this.poptions.yaxis.show = val.yaxis.show; }
        //     if (val.yaxis.labels) { this.poptions.yaxis.labels = val.yaxis.labels; }
        //     if (typeof val.yaxis.showLabels === 'boolean') { this.poptions.yaxis.showLabels = val.yaxis.showLabels; }
        //     if (typeof val.yaxis.showAxisLine === 'boolean') { this.poptions.yaxis.showAxisLine = val.yaxis.showAxisLine; }
        //     if (typeof val.yaxis.min === 'number') { this.poptions.yaxis.min = val.yaxis.min; }
        //     if (typeof val.yaxis.max === 'number') { this.poptions.yaxis.max = val.yaxis.max; }
        //     if (val.yaxis.title) { this.poptions.yaxis.title = val.yaxis.title; }
        //     if (typeof val.yaxis.ticks === 'object') {
        //         if (typeof val.yaxis.ticks.show === 'boolean') { this.poptions.yaxis.ticks.show = val.yaxis.ticks.show; }
        //         if (typeof val.yaxis.ticks.count === 'number') { this.poptions.yaxis.ticks.count = val.yaxis.ticks.count; }
        //         if (typeof val.yaxis.ticks.length === 'number') { this.poptions.yaxis.ticks.length = val.yaxis.ticks.length; }
        //     }
        //     if (typeof val.yaxis.grid === 'object') {
        //         if (typeof val.yaxis.grid.show === 'boolean') { this.poptions.yaxis.grid.show = val.yaxis.grid.show; }
        //     }
        //     if (typeof val.yaxis.axisWidth === 'number') { this.poptions.yaxis.axisWidth = val.yaxis.axisWidth; }
        //     if (typeof val.yaxis.paddingRight === 'number') { this.poptions.yaxis.paddingRight = val.yaxis.paddingRight; }
        //     if (val.yaxis.minMax) { this.poptions.yaxis.minMax = val.yaxis.minMax; }
        // }
        // if (typeof val.series === 'object') {
        //     this.poptions.series = val.series;
        // }
        // if (typeof val.bar === 'object') {
        //     if (typeof val.bar.width === 'number') { this.poptions.bar.width = val.bar.width; }
        //     if (typeof val.bar.spacing === 'number') { this.poptions.bar.spacing = val.bar.spacing; }
        // }
        // if (typeof val.dataLabels === 'object') {
        //     if (typeof val.dataLabels.show === 'boolean') { this.poptions.dataLabels.show = val.dataLabels.show; }
        // }
        // if (typeof val.legends === 'object') {
        //     if (typeof val.legends.show === 'boolean') { this.poptions.legends.show = val.legends.show; }
        // }
        // if (typeof val.innerPaddingTop === 'number') { this.poptions.innerPaddingTop = val.innerPaddingTop; }
        // if (typeof val.innerPaddingBottom === 'number') { this.poptions.innerPaddingBottom = val.innerPaddingBottom; }
    }



    mergeObj(src, target) {
        Object.keys(target).map((item, indx) => {
            if (typeof target[item] === 'object') {
                if (src[item]) {
                    src[item] = this.mergeObj(src[item], target[item]);
                } else {
                    src[item] = target[item];
                }
            } else if (typeof target[item] === 'boolean') {
                src[item] = target[item];
            } else {
                if (target[item]) {
                    src[item] = target[item];
                }
            }
        });
        return src;
    }

}
