import './index.css'
import App from './App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { PreSetProvider } from './hooks/preSet'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <PreSetProvider>
      <App />
    </PreSetProvider>
  </StrictMode>
)
