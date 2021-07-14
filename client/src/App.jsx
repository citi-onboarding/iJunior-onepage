import {
  Header,
  Banner,
  RequirementsAnalysis,
  AboutUs,
  Footer,
  Development,
  Contact,
  ModularDelivery,
} from "./views";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ModularDelivery />
      <RequirementsAnalysis />
      <Development />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
