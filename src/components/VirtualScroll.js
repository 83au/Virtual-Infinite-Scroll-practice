import React from 'react';
import useOnScreen from '../hooks/useOnScreen';

function VirtualScroll({ height, children }) {
  const [ref, inView] = useOnScreen();

  const style = { 
    height: `${height}px`,
    overflow: 'hidden'
  }

  return (
    <div style={style} ref={ref}>
      { inView ? children : null }
    </div>
  )
}

export default VirtualScroll;
