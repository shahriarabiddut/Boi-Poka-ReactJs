import React from 'react';
import { useParams } from 'react-router-dom';

export default function BookDetail() {
    const params = useParams();
  return (
    <div className='min-h-full'>
        <h2>BookDetail : {params.bookId}</h2>
    </div>
  )
}
