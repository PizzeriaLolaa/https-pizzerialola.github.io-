import { Header } from "./components/Header"
import { Food } from "./components/Food"
import { Drinks } from "./components/Drinks"
import { Contact } from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Header/>
      <Food/>
      <Drinks/>
      <Contact/>
    </div>
  );
}

export default App;
