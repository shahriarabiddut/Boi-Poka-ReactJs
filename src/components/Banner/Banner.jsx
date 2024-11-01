import React from 'react'
import bannerImg from '../../assets/books.jpg'
export default function Banner() {
  return (
    <div>
        <div className="hero bg-base-200 min-h-screen rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse gap-5 px-20">
                <img
                src={bannerImg}
                className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-6xl font-bold py-10">Books to freshen up your bookshelf!</h1>
                <button className="btn bg-green-600 text-white font-semibold">View The List</button>
                </div>
            </div>
        </div>
    </div>
  )
}
