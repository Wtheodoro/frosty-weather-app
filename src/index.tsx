import './index.css'
import App from './App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { AppContextProvider } from './hooks/useAppContext'
import { AppContextNewProvider } from './hooks/useAppContextNew'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <AppContextProvider>
      <AppContextNewProvider>
        <App />
      </AppContextNewProvider>
    </AppContextProvider>
  </StrictMode>
)
