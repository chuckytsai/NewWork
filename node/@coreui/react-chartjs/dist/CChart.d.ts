import React, { HTMLAttributes } from 'react';
import Chart, { ChartData, ChartOptions, ChartType, InteractionItem, Plugin } from 'chart.js/auto';
import * as chartjs from 'chart.js';
export interface CChartProps extends HTMLAttributes<HTMLCanvasElement | HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component.
     */
    className?: string;
    /**
     * Enables custom html based tooltips instead of standard tooltips.
     *
     * @default true
     */
    customTooltips?: boolean;
    /**
     * The data object that is passed into the Chart.js chart (more info).
     */
    data: ChartData | ((canvas: HTMLCanvasElement) => ChartData);
    /**
     * A fallback for when the canvas cannot be rendered. Can be used for accessible chart descriptions.
     *
     * {@link https://www.chartjs.org/docs/latest/general/accessibility.html More Info}
     */
    fallbackContent?: React.ReactNode;
    /**
     * Proxy for Chart.js getDatasetAtEvent. Calls with dataset and triggering event.
     */
    getDatasetAtEvent?: (dataset: InteractionItem[], event: React.MouseEvent<HTMLCanvasElement>) => void;
    /**
     * Proxy for Chart.js getElementAtEvent. Calls with single element array and triggering event.
     */
    getElementAtEvent?: (element: InteractionItem[], event: React.MouseEvent<HTMLCanvasElement>) => void;
    /**
     * Proxy for Chart.js getElementsAtEvent. Calls with element array and triggering event.
     */
    getElementsAtEvent?: (elements: InteractionItem[], event: React.MouseEvent<HTMLCanvasElement>) => void;
    /**
     * Height attribute applied to the rendered canvas.
     *
     * @default 150
     */
    height?: number;
    /**
     * ID attribute applied to the rendered canvas.
     */
    id?: string;
    /**
     * The options object that is passed into the Chart.js chart.
     *
     * {@link https://www.chartjs.org/docs/latest/general/options.html More Info}
     */
    options?: ChartOptions;
    /**
     * The plugins array that is passed into the Chart.js chart (more info)
     *
     * {@link https://www.chartjs.org/docs/latest/developers/plugins.html More Info}
     */
    plugins?: Plugin[];
    /**
     * If true, will tear down and redraw chart on all updates.
     *
     * @default false
     */
    redraw?: boolean;
    /**
     * Chart.js chart type.
     *
     * @type {'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'}
     */
    type: ChartType;
    /**
     * Width attribute applied to the rendered canvas.
     *
     * @default 300
     */
    width?: number;
    /**
     * Put the chart into the wrapper div element.
     *
     * @default true
     */
    wrapper?: boolean;
}
export declare const CChart: React.ForwardRefExoticComponent<CChartProps & React.RefAttributes<Chart<keyof chartjs.ChartTypeRegistry, (number | chartjs.ScatterDataPoint | chartjs.BubbleDataPoint | null)[], unknown> | undefined>>;