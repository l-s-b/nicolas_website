import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BackgroundProvider } from './context/BackgroundProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundProvider>
      <App />
    </BackgroundProvider>
  </StrictMode>,
)
