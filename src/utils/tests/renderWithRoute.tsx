import { render, RenderResult } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PreSetProvider } from '../../hooks/preSet'

export const renderWithRoute = (children: React.ReactNode): RenderResult =>
  render(
    <PreSetProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </PreSetProvider>
  )
