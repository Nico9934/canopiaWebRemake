import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <ThemeProvider theme={{}}>

  <BrowserRouter>

    <App />
  </BrowserRouter>
  // {/* </ThemeProvider> */ }
)