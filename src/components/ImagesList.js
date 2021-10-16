import VirtualScroll from './VirtualScroll';
import InfiniteScroll from './InfiniteScroll';
import { useImages } from '../contexts/ImagesContext';

function ImagesList() {
  const { images, nextPage } = useImages();

  const listItems = images.map((image, index) => (
    <li key={Math.random() * index} className="ImagesList__list-item">
      <VirtualScroll height={150}>
        <img src={image} alt="Unsplash" />
      </VirtualScroll>
    </li>
  ))

  return (
    <ul className="ImagesList">
      <InfiniteScroll listItems={listItems} lastRowHandler={nextPage} />
    </ul>
  )
}

export default ImagesList;
