export interface Ticks {
    show: boolean;
    count: number;
    length: number;
}

export interface Grid {
    show: boolean;
}

export interface Xaxis {
    type: string;
    show: boolean;
    labels?: string[];
    showLabels?: boolean;
    showAxisLine?: boolean;
    min?: number;
    max?: number;
    title: string;
    ticks: Ticks;
    grid: Grid;
    axisHeight: number;
    minMax: string;
}


export interface Yaxis {
    type: string;
    show: boolean;
    labels?: string[];
    showLabels?: boolean;
    showAxisLine?: boolean;
    min?: number;
    max?: number;
    title: string;
    ticks: Ticks;
    grid: Grid;
    axisWidth: number;
    paddingRight: number;
    minMax: string;
}

export interface Series {
    name: string;
    color: string;
    type: string;
}

export interface Bar {
    width?: number;
    spacing?: number;
}

export interface DataLabels {
    show?: boolean;
}

export interface ChartOptions {
    title?: string;
    xaxis: Xaxis;
    yaxis: Yaxis;
    series: Series[];
    bar: Bar;
    dataLabels?: DataLabels;
    innerPaddingTop: number;
    innerPaddingBottom: number;
}



