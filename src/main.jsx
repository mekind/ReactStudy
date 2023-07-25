import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// background-image: url('assets/home/background-home-desktop.jpg');
// const backgroundUrl = {

// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App name='hihi'/>
    </React.StrictMode>
  </BrowserRouter>
)
