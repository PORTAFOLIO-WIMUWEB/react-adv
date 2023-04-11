import { Suspense } from "react";
import { BrowserRouter, Routes, Route,NavLink,Navigate } from "react-router-dom";
import { routes } from './routes';

import logo from '../assets/react.svg'

// import { LazyPage1,LazyPage2,LazyPage3 } from "../01-lazyload/pages";

const Navigation = () => {
    return (
      <Suspense fallback={<span>Lading...</span>}>
    <BrowserRouter>
          <div className="main-layout">
              <nav>
                  <img src={logo} alt="React logo" />
                  <ul>
                      {
                          routes.map(({to, name}) => (
                               <li key={to}>
                                  <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{ name}</NavLink>
                  </li>
                          ))
                      }


              </ul>
              </nav>

              <Routes>
                  {
                      routes.map(({ to,path, Component, }) => (

                          <Route key={to} path={path} element={<Component/>} />
                      ))
                  }

                  <Route path="*" element={<Navigate to={routes[0].to} replace/>} />
              </Routes>

    </div>
            </BrowserRouter>
            </Suspense>
  )
}

export default Navigation
