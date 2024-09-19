import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import General from './components/General.jsx'
import './index.css'
import { formatPostcssSourceMap } from 'vite'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <General />
  </StrictMode>,
)
