import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import BookDetail from './components/BookDetail/BookDetail';
import Dashboard from './components/Dashboard/Dashboard';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "listedbooks",
        element: <ListedBooks />,
        loader: () => {
          const response = fetch('/data/booksData.json');
          return response; 
        }
      },
      {
        path: "book/:bookId",
        element: <BookDetail/>,
        loader: () => {
          const response = fetch('/data/booksData.json');
          return response; 
        }
      },{
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
