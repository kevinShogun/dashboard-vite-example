import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { Navigation } from './router/Navigation.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
      <Navigation />
  </React.StrictMode>,
)
