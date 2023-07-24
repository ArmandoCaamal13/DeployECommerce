import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter, RouterProvider, createHashRouter } from 'react-router-dom'

const router = createHashRouter([{path:'/*', element: <App/>}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
    <RouterProvider router={router} />
    </HashRouter>
  </React.StrictMode>
    
)
