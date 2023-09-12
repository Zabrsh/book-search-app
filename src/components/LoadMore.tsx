import React from 'react';
import { useDispatch} from 'react-redux';
import { loadMoreBooks } from '../features/search/searchSlice'; // Assuming you have an action to load more books

const LoadMoreButton: React.FC = () => {
  //const dispatch = useDispatch();
  //const dispatch = useDispatch<AppDispatch>();
  const handleLoadMore = () => {
    //dispatch(loadMoreBooks()); // This action should handle the logic for loading more books based on the current state
  };

  return (
    <button onClick={handleLoadMore} className="load-more-btn">
      Load More
    </button>
  );
};

export default LoadMoreButton;
