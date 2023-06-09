import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar"
import './App.css'

const App = () => {
  return (
    <div>
    <NavBar/>
    <ItemListContainer  greeting = {"PRIMERA ENTREGA"} />
    </div>
  )
}

export default App
