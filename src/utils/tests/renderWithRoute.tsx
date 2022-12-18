import { render, RenderResult } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

export const renderWithRoute = (children: React.ReactNode): RenderResult =>
  render(<BrowserRouter>{children}</BrowserRouter>)
