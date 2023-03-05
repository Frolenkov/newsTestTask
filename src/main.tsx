import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./i18n/i18n";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>} >
      <App />
    </Suspense>
  </React.StrictMode>,
)
