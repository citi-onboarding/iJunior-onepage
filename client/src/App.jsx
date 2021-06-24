import {Banner, AboutUs, Footer, Development} from "./views"
import "./App.css"
function App() {
  return (
    <div className="App">
      <Banner/>
      <Development/> 
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;