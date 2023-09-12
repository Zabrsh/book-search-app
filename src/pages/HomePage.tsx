import React from 'react';
import SearchInput from '../components/SearchBar'; // Assuming you have a component for the search input
import CategorySelector from '../components/CategorySelector';
import SortSelector from '../components/SortSelector';
import BookCardList from '../components/BookCardList'; // Assuming you have a component that lists all the BookCards
import LoadMoreButton from '../components/LoadMore'; // Assuming you have a component for the "Load more" button

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="search-section">
        <SearchInput />
      </div>
      
      <div className="filters-section">
        <CategorySelector />
        <SortSelector />
      </div>
      
      <div className="results-section">
        <BookCardList />
      </div>
      
      <div className="pagination-section">
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default HomePage;
