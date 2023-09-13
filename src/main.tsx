import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import AppProvider from './contexts/HighApp.context'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ThemeProvider, createTheme } from '@mui/material'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // Tránh render lại khi của sổ trang web tại trình duyệt chuyển từ unfocus sang focus
    }
  }
})

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#c7ab62'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppProvider>
          <ThemeProvider theme={customTheme}>
            <App />
          </ThemeProvider>
        </AppProvider>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>

  // </React.StrictMode>,
)
