import './App.css'
import HeaderNav from './components/HeaderNav'
import WhatsAppButton from './components/WhatsAppButton'
import About from './pages/About'
import PrincipalHero from './pages/PrincipalHero'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import BackAfter from './pages/BackAfter'
import Coments from './pages/Coments'
import UserForm from './pages/UserForm'
import VideoHero from './pages/VideoHero'

function App() {

  return (
    <>

      <HeaderNav />
      <WhatsAppButton />

      <PrincipalHero></PrincipalHero>
      <VideoHero></VideoHero>

      <About></About>
      <Services></Services>
      <BackAfter></BackAfter>
      <Coments></Coments>

      <Gallery></Gallery>
      <Contact></Contact>
      <UserForm></UserForm>
      <Footer></Footer>


    </>
  )
}

export default App
