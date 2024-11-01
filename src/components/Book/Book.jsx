import React from 'react';
import { Link } from 'react-router-dom';

export default function Book({book}) {
    const {bookId,bookName,author,image,tags,category,yearOfPublishing,rating} = book;
  return (
    <div>
        <Link to={`/book/${bookId}`}>
        <div className="card bg-base-100 w-96 border-gray-200 border-2 p-6">
            <figure className='bg-gray-200 px-4 py-8 rounded-2xl'>
                <img
                src={image}
                alt={bookName} className='w-1/3 h-40' />
            </figure>
            <div className="my-6 grid gap-4">
                <div className="flex gap-3">
                    {
                        tags.map((tag,index)=> <span key={index} className='border-green-600 border-2 p-2 rounded-full text-green-600 font-bold'> {tag}</span>)
                    }
                </div>
                <h2 className="text-3xl font-bold">{bookName}</h2>
                <p className='text-xl'>By : {author}</p>
                <div className="border-2 border-dashed"></div>
                <div className="flex justify-between">
                    <p>{category} ({yearOfPublishing})</p>
                    <div className="rating text-xl">
                    {rating} <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 mx-2 bg-orange-400"
                                    defaultChecked />
                                </div>
                </div>
            </div>
        </div>
        </Link>
    </div>
  )
}
