import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishedList, existOrNot, wishedOrNot } from '../../utility/addToDB';

export default function BookDetail() {
  const { bookId } = useParams();
  const books = useLoaderData();
  const book = books.find(b => b.bookId === parseInt(bookId));
  const {bookName,author,image,tags,review,category,publisher,yearOfPublishing,rating,totalPages} = book;
  // Mark as Read Button
  let readData = existOrNot(bookId) == 1? true : false;
  const [readOrNot, setReadOrNot] = useState(readData);
  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
    setReadOrNot(true); 
  }
  // Mark as Wished Button
  let wishedData = wishedOrNot(bookId) == 1? true : false;
  const [wishOrNot, setWishOrNot] = useState(wishedData);
  const handleMarkAsWished = (id) => {
    addToStoredWishedList(id);
    setWishOrNot(true); 
  }
  return (
    <div className='my-20 '>
        <div className="flex w-full flex-col lg:flex-row">
          <div className="w-1/3 bg-base-300 rounded-box"><img src={image} className='p-5' alt={bookName} /></div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="w-2/3 flex flex-col gap-4">
            <h2 className="text-3xl font-bold">{bookName}</h2>
            <p className='text-xl'>By : {author}</p>
            <div className="border-2 border-dashed"></div>
            <p className='text-xl'>{category}</p>
            <div className="border-2 border-dashed"></div>
            <p className=''><b>Review</b> : {review}</p> 
            <div className="flex gap-3">
              <b>Tags</b> :  {
                        tags.map((tag,index)=> <span key={index} className=' text-green-600 font-bold'> #{tag}</span>)
                    }
            </div>
            <div className="border-2 border-dashed"></div>
            <p className=''><b>Publishing Year</b> : {yearOfPublishing}</p> 
            <p className=''><b>Publisher</b> : {publisher}</p> 
            <p className=''><b>Total Pages</b> : {totalPages}</p> 
            <p className=''><b>Ratings</b> : {rating}/5</p> 
            <div className="flex justify-between gap-2">
              {!readOrNot && (<a className="btn bg-green-600 text-white hover:bg-green-900" onClick={() => handleMarkAsRead(bookId)}>Mark as Read</a>)}
              {!wishOrNot && (<a className="btn bg-sky-600 text-white hover:bg-sky-900" onClick={() => handleMarkAsWished(bookId)}>Add to WishList</a>)}
              
            </div>
          </div>
        </div>
        
    </div>
  )
}
