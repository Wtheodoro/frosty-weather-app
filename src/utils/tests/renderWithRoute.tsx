import { render, RenderResult } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from '../../hooks/useAppContext'

export const renderWithRoute = (children: React.ReactNode): RenderResult =>
  render(
    <AppContextProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </AppContextProvider>
  )
