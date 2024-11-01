import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import BookDetail from './components/BookDetail/BookDetail';
import Dashboard from './components/Dashboard/Dashboard';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
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
        path: "book/:bookId",
        element: <BookDetail></BookDetail>,
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
  </StrictMode>,
)
