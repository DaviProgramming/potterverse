import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import About from './components/about';
import LastNews from './components/lastNews';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <LastNews />
      <Footer />
    </div>
  );
}

export default App;
