import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css'
import Companies from './components/Companies/Companies';
import Watches from './components/Watches/Watches';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Watches/>
      <Value/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
