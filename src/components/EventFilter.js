import React from 'react';

const EventFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default EventFilter;
