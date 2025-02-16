import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Social from './components/Social';
import Courses from './components/Courses';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Social />
      <Courses />
    </div>
  );
}

export default App;
