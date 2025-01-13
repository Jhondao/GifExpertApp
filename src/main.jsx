import React, { StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
