import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BackgroundProvider } from './context/BackgroundProvider'
import { LanguageProvider } from './context/LanguageProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <BackgroundProvider>
        <App />
      </BackgroundProvider>
    </LanguageProvider>
  </StrictMode>,
)
