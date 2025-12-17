import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Resume from './pages/Resume'
import CV from './pages/CV'
import Progression from './pages/Progression'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/progression" element={<Progression />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
