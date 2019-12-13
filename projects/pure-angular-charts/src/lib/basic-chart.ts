import { Xaxis, Yaxis, ChartOptions } from './pure-angular-charts.models';
import { Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Defaults } from './defaults';

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

    constructor() {
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

    getDefaultOptions() {
        return Defaults.getdefaultOptions();
    }

    mergerDefaultOptions(val) {
        let poptions = this.getDefaultOptions();

        if (val.chart) {
            if (val.chart.background) { poptions.chart.background = val.chart.background; }
            if (typeof val.chart.padding === 'object') { Object.assign(poptions.chart.padding, val.chart.padding); }
        }

        if (val.title) {
            if (val.title.text) { poptions.title.text = val.title.text; }
            if (typeof val.title.height === 'number') { poptions.title.height = val.title.height; }
            if (typeof val.title.style === 'object') { Object.assign(poptions.title.style, val.title.style); }
        }

        if (val.xaxis) {
            if (val.xaxis.type) { poptions.xaxis.type = val.xaxis.type; }
            if (typeof val.xaxis.show === 'boolean') { poptions.xaxis.show = val.xaxis.show; }
            if (val.xaxis.labels) { poptions.xaxis.labels = val.xaxis.labels; }
            if (typeof val.xaxis.showLabels === 'boolean') { poptions.xaxis.showLabels = val.xaxis.showLabels; }
            if (typeof val.xaxis.labelStyle === 'object') { Object.assign(poptions.xaxis.labelStyle, val.xaxis.labelStyle); }

            if (typeof val.xaxis.labelFormat === 'object') { Object.assign(poptions.xaxis.labelFormat, val.xaxis.labelFormat); }

            if (val.xaxis.axisLine) {
                if (typeof val.xaxis.axisLine.show === 'boolean') { poptions.xaxis.axisLine.show = val.xaxis.axisLine.show; }
                // tslint:disable-next-line:max-line-length
                if (typeof val.xaxis.axisLine.style === 'object') { Object.assign(poptions.xaxis.axisLine.style, val.xaxis.axisLine.style); }
            }

            if (typeof val.xaxis.min === 'number') { poptions.xaxis.min = val.xaxis.min; }
            if (typeof val.xaxis.max === 'number') { poptions.xaxis.min = val.xaxis.max; }
            if (val.xaxis.title) { poptions.xaxis.title = val.xaxis.title; }

            if (val.xaxis.ticks) {
                if (typeof val.xaxis.ticks.show === 'boolean') { poptions.xaxis.ticks.show = val.xaxis.ticks.show; }
                if (typeof val.xaxis.ticks.count === 'number') { poptions.xaxis.ticks.count = val.xaxis.ticks.count; }
                if (typeof val.xaxis.ticks.length === 'number') { poptions.xaxis.ticks.length = val.xaxis.ticks.length; }
                if (typeof val.xaxis.ticks.style === 'object') { Object.assign(poptions.xaxis.ticks.style, val.xaxis.ticks.style); }
            }

            if (val.xaxis.grid) {
                if (typeof val.xaxis.grid.show === 'boolean') { poptions.xaxis.grid.show = val.xaxis.grid.show; }
                if (typeof val.xaxis.grid.style === 'object') { Object.assign(poptions.xaxis.grid.style, val.xaxis.grid.style); }
            }

            if (typeof val.xaxis.axisHeight === 'number') { poptions.xaxis.axisHeight = val.xaxis.axisHeight; }
            if (val.xaxis.minMax) { poptions.xaxis.minMax = val.xaxis.minMax; }
        }


        if (val.yaxis) {
            if (val.yaxis.type) { poptions.yaxis.type = val.yaxis.type; }
            if (typeof val.yaxis.show === 'boolean') { poptions.yaxis.show = val.yaxis.show; }
            if (val.yaxis.labels) { poptions.yaxis.labels = val.yaxis.labels; }
            if (typeof val.yaxis.showLabels === 'boolean') { poptions.yaxis.showLabels = val.yaxis.showLabels; }
            if (typeof val.yaxis.labelStyle === 'object') { Object.assign(poptions.yaxis.labelStyle, val.yaxis.labelStyle); }
            if (typeof val.yaxis.labelFormat === 'object') { Object.assign(poptions.yaxis.labelFormat, val.yaxis.labelFormat); }

            if (val.yaxis.axisLine) {
                if (typeof val.yaxis.axisLine.show === 'boolean') { poptions.yaxis.axisLine.show = val.yaxis.axisLine.show; }
                // tslint:disable-next-line:max-line-length
                if (typeof val.yaxis.axisLine.style === 'object') { Object.assign(poptions.yaxis.axisLine.style, val.yaxis.axisLine.style); }
            }

            if (typeof val.yaxis.min === 'number') { poptions.yaxis.min = val.yaxis.min; }
            if (typeof val.yaxis.max === 'number') { poptions.yaxis.min = val.yaxis.max; }
            if (val.yaxis.title) { poptions.yaxis.title = val.yaxis.title; }

            if (val.yaxis.ticks) {
                if (typeof val.yaxis.ticks.show === 'boolean') { poptions.yaxis.ticks.show = val.yaxis.ticks.show; }
                if (typeof val.yaxis.ticks.count === 'number') { poptions.yaxis.ticks.count = val.yaxis.ticks.count; }
                if (typeof val.yaxis.ticks.length === 'number') { poptions.yaxis.ticks.length = val.yaxis.ticks.length; }
                if (typeof val.yaxis.ticks.style === 'object') { Object.assign(poptions.yaxis.ticks.style, val.yaxis.ticks.style); }
            }

            if (val.yaxis.grid) {
                if (typeof val.yaxis.grid.show === 'boolean') { poptions.yaxis.grid.show = val.yaxis.grid.show; }
                if (typeof val.yaxis.grid.style === 'object') { Object.assign(poptions.yaxis.grid.style, val.yaxis.grid.style); }
            }

            if (typeof val.yaxis.axisWidth === 'number') { poptions.yaxis.axisWidth = val.yaxis.axisWidth; }
            if (typeof val.yaxis.paddingRight === 'number') { poptions.yaxis.paddingRight = val.yaxis.paddingRight; }
            if (val.yaxis.minMax) { poptions.yaxis.minMax = val.yaxis.minMax; }
        }
        if (typeof val.series === 'object' && val.series.length > 0) {

            poptions.series = val.series.map((series, si) => {
                if (series.type === 'line' || series.type === 'smooth-line') {
                    series.lineStyle = Object.assign(Defaults.getdefaultLineStyle(), series.lineStyle);
                } else if (series.type === 'area' || series.type === 'smooth-area' || series.type === 'stacked-area') {
                    series.areaStyle = Object.assign(Defaults.getdefaultAreaStyle(), series.areaStyle);
                } else if (series.type === 'bar' || series.type === 'stacked-bar') {
                    series.barStyle = Object.assign(Defaults.getdefaultBarStyle(), series.barStyle);
                }
                return series;
            });
        }
        if (typeof val.bar === 'object') { Object.assign(poptions.bar, val.bar); }

        if (val.dataLabels) {
            if (typeof val.dataLabels.show === 'boolean') { poptions.dataLabels.show = val.dataLabels.show; }
            if (typeof val.dataLabels.style === 'object') { Object.assign(poptions.dataLabels.style, val.dataLabels.style); }
        }

        if (val.legends) {
            if (typeof val.legends.show === 'boolean') { poptions.legends.show = val.legends.show; }
            if (typeof val.legends.height === 'number') { poptions.legends.height = val.legends.height; }
            if (typeof val.legends.style === 'object') { Object.assign(poptions.legends.style, val.legends.style); }
        }

        if (typeof val.innerPaddingTop === 'number') { poptions.innerPaddingTop = val.innerPaddingTop; }
        if (typeof val.innerPaddingBottom === 'number') { poptions.innerPaddingBottom = val.innerPaddingBottom; }

        if (val.tooltip) {
            if (typeof val.tooltip.show === 'boolean') { poptions.tooltip.show = val.tooltip.show; }
            if (typeof val.tooltip.style === 'object') { Object.assign(poptions.tooltip.style, val.tooltip.style); }
        }

        this.poptions = poptions;

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
