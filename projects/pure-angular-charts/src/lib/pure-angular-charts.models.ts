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
    min?: number;
    max?: number;
    title: string;
    ticks: Ticks;
    grid: Grid;
    paddingBottom: number;
    paddingTop: number;
    minMax: string;
}


export interface Yaxis {
    type: string;
    show: boolean;
    labels?: string[];
    min?: number;
    max?: number;
    title: string;
    ticks: Ticks;
    grid: Grid;
    paddingLeft: number;
    paddingRight: number;
    minMax: string;
}

export interface Series {
    name: string;
    color: string;
    type: string;
}

export interface Bar {
    width: number;
}

export interface ChartOptions {
    title: string;
    xaxis: Xaxis;
    yaxis: Yaxis;
    series: Series[];
    bar: Bar;
    innerPaddingBottom: number;
}



