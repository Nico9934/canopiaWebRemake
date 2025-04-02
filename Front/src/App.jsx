import './App.css'
import HeaderNav from './components/HeaderNav'
import About from './pages/About'
import PrincipalHero from './pages/PrincipalHero'

import { ThemeProvider } from '@material-tailwind/react'

function App() {

  return (
    <>

      <HeaderNav />
      <PrincipalHero></PrincipalHero>
      <About></About>

    </>
  )
}

export default App
