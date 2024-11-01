import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

export default function Books() {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch('./data/booksData.json').then(res=>res.json()).then(data=>setBooks(data));
    },[])
  return (
    <div className=''>
        <h2 className="text-black text-4xl my-20 text-center">Books</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                books.map(book => <Book book={book} key={book.bookId}></Book>)
            }
        </div>
    </div>
  )
}
