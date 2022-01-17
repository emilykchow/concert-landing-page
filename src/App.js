import './App.css';
import NavBar from "./components/NavBar/NavBar.jsx";
import Landing from "./components/Landing/Landing";
import Pricing from "./components/Pricing/Pricing";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Review />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
