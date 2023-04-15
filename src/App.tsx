import About from "./app/About"
import Contact from "./app/Contact"
import Footer from "./app/Footer"
import HeroSection from "./app/HeroSection"
import Projects from "./app/Projects"
import Tools from "./app/Tools"
import Container from "./ui/Container"

function App() {


  return (
    <>
        <Container>
<div className="space-y-12">
<HeroSection />
      <About />
      <Projects />
      <Tools />
<Contact />
</div>
   

    </Container>
      <Footer />
    </>

  )
}

export default App
