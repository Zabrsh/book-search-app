import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../features/search/searchSlice';
import { RootState } from '../app/store'; // Assuming you have defined your RootState in a separate file named 'store.ts' or 'store/index.ts'

const CategorySelector: React.FC = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.search.category);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'; 
    dispatch(setCategory(value));
  };

  return (
    <select value={category} onChange={handleChange}>
      <option value="all">All</option>
      <option value="art">Art</option>
      <option value="biography">Biography</option>
      <option value="computers">Computers</option>
      <option value="history">History</option>
      <option value="medical">Medical</option>
      <option value="poetry">Poetry</option>
    </select>
  );
};

export default CategorySelector;
