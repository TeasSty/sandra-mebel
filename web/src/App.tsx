import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Works } from './components/Works'
import { Measure } from './components/Measure'
import { Cities } from './components/Cities'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <Measure />
        <Cities />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
