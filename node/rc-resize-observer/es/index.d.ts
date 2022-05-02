import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
export interface ResizeObserverProps {
    children: React.ReactNode;
    disabled?: boolean;
    /** Trigger if element resized. Will always trigger when first time render. */
    onResize?: (size: {
        width: number;
        height: number;
        offsetWidth: number;
        offsetHeight: number;
    }, element: HTMLElement) => void;
}
interface ResizeObserverState {
    height: number;
    width: number;
    offsetHeight: number;
    offsetWidth: number;
}
declare type RefNode = React.ReactInstance | HTMLElement | null;
declare class ReactResizeObserver extends React.Component<ResizeObserverProps, ResizeObserverState> {
    static displayName: string;
    resizeObserver: ResizeObserver | null;
    childNode: RefNode;
    currentElement: Element | null;
    state: {
        width: number;
        height: number;
        offsetHeight: number;
        offsetWidth: number;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    onComponentUpdated(): void;
    onResize: ResizeObserverCallback;
    setChildNode: (node: RefNode) => void;
    destroyObserver(): void;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>[];
}
export default ReactResizeObserver;
