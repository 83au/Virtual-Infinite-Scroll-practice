import React, { useEffect } from 'react'; 
import useOnScreen from '../hooks/useOnScreen';

function InfiniteScroll({ listItems, lastRowHandler }) {
  const [lastRowRef, lastRowInView] = useOnScreen();

  useEffect(() => {
    lastRowInView && lastRowHandler();
  }, [lastRowInView, lastRowHandler]);

  const elements = listItems.map((listItem, index) => {
    const props = { key: index };
    (index === listItems.length - 1) && (props['ref'] = lastRowRef);
    return (
      <div {...props}>
        {listItem}
      </div>
    )
  });

  return (
    <>
      {elements}
    </>
  )
}

export default InfiniteScroll;
