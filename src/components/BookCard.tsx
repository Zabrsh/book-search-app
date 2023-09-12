import React from 'react';
import './BookCard.scss';
interface Props {
  title: string;
  authors: string[];
  category: string;
  imageLink: string;
  bookId: string;
}

const BookCard: React.FC<Props> = ({ title, authors, category, imageLink, bookId }) => {
  return (
    <div className="book-card">
      <img src={imageLink} alt={title} />
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>Authors: {authors.join(', ')}</p>
      <a href={`/details/${bookId}`}>View Details</a>
    </div>
  );
};

export default BookCard;
