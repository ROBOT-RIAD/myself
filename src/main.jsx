import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppliedJobss from './components/Applied Jobss/AppliedJobss';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Errorpage from './components/ErorPage/Errorpage';
import Detailsjob from './components/JobDetails/Detailsjob';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobss></AppliedJobss>
      },
      {
        path:'/job/:id',
        element:<Detailsjob></Detailsjob>,
        loader: () => fetch('jobs.json'),
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
