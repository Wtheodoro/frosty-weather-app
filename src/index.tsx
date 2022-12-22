import './index.css'
import App from './App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { AppContextProvider } from './hooks/useAppContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
)
