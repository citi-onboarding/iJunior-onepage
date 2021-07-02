import { Banner, RequirementsAnalysis, AboutUs, Footer, Development, Contact, MDdelivery } from "./views"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Banner />
      <MDdelivery />
      <RequirementsAnalysis />
      <Development />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;