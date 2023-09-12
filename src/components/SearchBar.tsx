import React from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../features/search/searchSlice';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
  };

  return <input onChange={handleSearchChange} placeholder="Search for books..." />;
};

export default SearchBar;
