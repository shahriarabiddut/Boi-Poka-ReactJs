import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const ErrorPage = () => {
  return (
    <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-base-content">
        <h1 className="text-9xl font-bold text-primary mb-8">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8">
            Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary">
            Home
        </Link>
        </div>
        <Footer/>
    </>
  );
};

export default ErrorPage;
