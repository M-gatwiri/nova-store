import React from 'react'

function SearchBar({searchItem, setSearchItem}) {
  return (
    <div>
      <label htmlFor="search">Search Products</label>
      <input
        type="text"
        placeholder="Search products..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      /></div>
  )
}

export default SearchBar