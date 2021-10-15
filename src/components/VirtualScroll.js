import React from 'react';
import { useInView } from "react-intersection-observer";

/**
 * A wrapper component for children of
 * VirtualScroll. Computes inline style and
 * handles whether to display props.children.
 */

function VirtualScroll({ height, children }) {
    const [ref, inView] = useInView();

    const style = {
        height: `${height}px`,
        overflow: 'hidden'
    };
    
    return (
        <div style={style} ref={ref}>
            {inView ? children : null}
        </div>
    );
}

export default VirtualScroll;