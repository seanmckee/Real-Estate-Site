import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import Header from "./components/Header";
import Review from "./components/Review";
import Services from "./components/Services";

function App() {
  return (
    <div className="">
      <Header />
      <About />
      <Services />
      <Deals />
      <Review />
      <Contact />
    </div>
  );
}

export default App;
