import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MovieSearcher from './routes/MovieSearcher.jsx';
import Footer from './routes/Footer.jsx';
import Bookmarks from './routes/Bookmarks.jsx';


// React Router

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <MovieSearcher/>
      },
      {
        path: 'bookmarks',
        element: <Bookmarks/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
