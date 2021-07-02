import { Banner, RequirementsAnalysis, AboutUs, Footer, Development, Contact } from "./views"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Banner />
      <RequirementsAnalysis />
      <Development />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;