import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes.jsx'
import { ThemeProvider } from './lib/theme.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
