import './App.css'
import ContactForm from './Component/ContactForm/ContactForm'
import ContactHeader from './Component/ContactHeader/ContactHeader'
import Navbar from './Component/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <main className='main_container'>
      <ContactHeader />
      <ContactForm />
    </main>
    </>
  )
}

export default App
