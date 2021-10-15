import React from 'react';
import useOnScreen from '../hooks/useOnScreen';
// import { useInView } from "react-intersection-observer";

function VirtualScroll({ height, children }) {
    const [ref, visible] = useOnScreen();

    const style = {
        height: `${height}px`,
        overflow: 'hidden'
    };
    
    return (
        <div style={style} ref={ref}>
            {visible ? children : null}
        </div>
    );
}

export default VirtualScroll;