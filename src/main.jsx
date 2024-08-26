import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleProject from './SingleProject.jsx';
import App from './App.jsx'
import './index.css'


const router = createBrowserRouter(
  [
    {
      path:"/", element: <App />
    },
    {
      path:"/project/:id", element: <SingleProject />
    }
  ]
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
