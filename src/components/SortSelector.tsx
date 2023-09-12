import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder } from '../features/search/searchSlice';
import { RootState } from '../app/store'; // Make sure you import RootState if not done already
import './SortSelector.scss';

const SortSelector: React.FC = () => {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state: RootState) => state.search.sortOrder);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as 'relevance' | 'newest'; // Type assertion
    dispatch(setSortOrder(value));
  };

  return (
    <select value={sortOrder} onChange={handleChange}>
      <option value="relevance">Relevance</option>
      <option value="newest">Newest</option>
    </select>
  );
};

export default SortSelector;
