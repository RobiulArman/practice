import { useState } from 'react';
import './App.css';
import Blogs from './Blogs';
import Bookmarks from './Bookmarks';
import Header from './Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, blog]);
  };

  const handleMarkAsRead = (id, time) => {
    setReadingTime((prevReadingTime) => prevReadingTime + time);
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bookmark) => bookmark.id !== id));
  };

  return (
    <>
      <Header />
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
