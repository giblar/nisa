import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import LoginPage from './components/page/LoginPage.jsx';
import ErrorPage from './components/page/404.jsx';
import HomePage from './components/page/HomePage.jsx';
import DoorPage from './components/page/DoorPage.jsx';
import BeforePage from './components/page/BeforePage.jsx';
import WaPage from './components/page/WaPage.jsx';
import Magic from './components/magic/Magic.jsx';
import SelesaiPage from './components/page/SelesaiPage.jsx';
import { ClickPage } from './components/page/ClickPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path: "/click",
    element: <ClickPage/>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path: "/after",
    element: <BeforePage></BeforePage>,
    errorElement:<ErrorPage></ErrorPage>
  },
  // fdsf login>whatsapp>home>door>magic>before>
  {
    path: "/whatsapp",
    element: <WaPage></WaPage>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path: "/home",
    element: <HomePage></HomePage>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path: "/door",
    element: <DoorPage></DoorPage>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path:"/magic",
    element: <Magic></Magic>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path:"/selesai",
    element: <SelesaiPage></SelesaiPage>,
    errorElement:<ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
