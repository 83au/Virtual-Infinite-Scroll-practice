import React, { useEffect } from 'react'; 
import { useInView } from 'react-intersection-observer'; 

function InfiniteScroll({ listItems, lastRowHandler }) {
  const [lastRowRef, lastRowInView] = useInView();

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
