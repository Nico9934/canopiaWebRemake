import './App.css'
import HeaderNav from './components/HeaderNav'
import About from './pages/About'
import PrincipalHero from './pages/PrincipalHero'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import BackAfter from './pages/BackAfter'
import Coments from './pages/Coments'

function App() {

  return (
    <>

      <HeaderNav />
      <PrincipalHero></PrincipalHero>
      <About></About>
      <Services></Services>
      <BackAfter></BackAfter>
      <Coments></Coments>

      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>


    </>
  )
}

export default App
