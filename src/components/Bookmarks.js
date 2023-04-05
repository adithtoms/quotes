import React, { useState, useEffect } from 'react';

function Bookmarks() {
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('bookmarkedQuotes');
    if (data) {
      setBookmarkedQuotes(JSON.parse(data));
    }
  }, []);


  const handleDelete = (index) => {
    const newBookmarkedQuotes = [...bookmarkedQuotes];
    newBookmarkedQuotes.splice(index, 1);
    setBookmarkedQuotes(newBookmarkedQuotes);
    localStorage.setItem('bookmarkedQuotes', JSON.stringify(newBookmarkedQuotes));
  }

  return (
    <>
      <h1>Bookmarked Quotes</h1>
      {bookmarkedQuotes.map((quote, _id) => (
        <div key={quote._id} className='border border-white mx-auto w-50 my-10 rounded bg-light text-black p-2'>
          <p>{quote.content}</p>
          <h6>~{quote.author}</h6>
          <p>Tags: {quote.tags.join(', ')}</p>
          <button className='bg-danger rounded px-2 py-1 ' onClick={() => handleDelete(_id)}>Delete</button>
        </div>
      ))}
    </>
  );
}


export default Bookmarks