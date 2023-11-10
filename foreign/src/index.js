import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';



import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import App from './App';
import Products from './Pages/Products';
import Services from './Pages/Services';
import Contact from './Pages/Contact'


const Rotas = createBrowserRouter([

  {
    path:"/" ,
    element: <App/>,
    children:[
      {
        path:"/" ,
        element: <Home />
    },
    {
        path:"/about",
        element:<About />
    },
    {
      path:"/products",
      element:<Products/>
  },

  {
    path:"/services",
    element:<Services/>
},
{
  path:"contact",
  element:<Contact/>
},
    ]
}
    
]
) ;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Rotas}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
