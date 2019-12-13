export interface Chart {
    // border?: string;
    background?: string;
    // boxShadow?: string
    padding?: Padding;
}

export interface Padding {
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
}

export interface Title {
    text?: string;
    height?: number;
    style?: TextStyle;
}

export interface TextStyle {
    textAlign?: string;
    color?: string;
    fontSize?: string;
    fontFamily?: string;
    background?: string;
}
export interface SvgTextStyle {
    fill?: string;
    fontSize?: string;
    fontFamily?: string;
}

export interface SvgLineStyle {
    stroke?: string;
    strokeWidth?: number;
    strokeDasharray?: string;
}

export interface SvgBarStyle {
    stroke?: string;
    strokeWidth?: number;
    strokeDasharray?: string;
}

export interface SvgAreaStyle {
    stroke?: string;
    strokeWidth?: number;
    strokeDasharray?: string;
}
export interface Ticks {
    show?: boolean;
    count?: number;
    length?: number;
    style?: SvgLineStyle;
}

export interface Grid {
    show?: boolean;
    style?: SvgLineStyle;
}

export interface AxisLine {
    show?: boolean;
    style?: SvgLineStyle;
}

export interface LabelFormat {
    type?: string;
    options?: string;
    scale?: string;
}

export interface Xaxis {
    type?: string;
    show?: boolean;
    labels?: string[];
    labelStyle?: SvgTextStyle;
    labelFormat?: LabelFormat;
    showLabels?: boolean;
    axisLine?: AxisLine;
    min?: number;
    max?: number;
    title?: string;
    ticks?: Ticks;
    grid?: Grid;
    axisHeight?: number;
    minMax?: string;
}


export interface Yaxis {
    type?: string;
    show?: boolean;
    labels?: string[];
    labelStyle?: SvgTextStyle;
    labelFormat?: LabelFormat;
    showLabels?: boolean;
    axisLine?: AxisLine;
    min?: number;
    max?: number;
    title?: string;
    ticks?: Ticks;
    grid?: Grid;
    axisWidth?: number;
    paddingRight?: number;
    minMax?: string;
}

export interface Series {
    name: string;
    color: string;
    type: string;
    lineStyle?: SvgLineStyle;
    barStyle?: SvgBarStyle;
    areaStyle?: SvgAreaStyle;
}

export interface Bar {
    width?: number;
    spacing?: number;
}

export interface DataLabels {
    show?: boolean;
    style?: SvgTextStyle;
}

export interface Legends {
    show?: boolean;
    height?: number;
    style?: TextStyle;
}

export interface ToolTipStyle {
    textAlign?: string;
    color?: string;
    fontSize?: string;
    fontFamily?: string;
    background?: string;
    minWidth?: string;
}
export interface ToolTip {
    show?: boolean;
    style?: ToolTipStyle;
}

export interface ChartOptions {
    chart?: Chart;
    title?: Title;
    xaxis?: Xaxis;
    yaxis?: Yaxis;
    series: Series[];
    bar?: Bar;
    dataLabels?: DataLabels;
    legends?: Legends;
    innerPaddingTop?: number;
    innerPaddingBottom?: number;
    tooltip?: ToolTip
}



