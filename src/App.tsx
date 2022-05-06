import {Routes, Route} from "react-router-dom"
import { Card } from "./component/Card/Card"
import { Home } from "./component/Home/Home"
import { Headers } from "./component/Headers"
import { ToDo } from "./component/ToDo/ToDo"
import { Pokemon } from "./component/Pokemon/Pokemon"

const App = () =>  {

  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card" element={<Card/>} />
        <Route path="/pokemon" element={<Pokemon/>} />
        <Route path="/todo" element={<ToDo/>} />

      </Routes>
    </div>
  )
}

export default App
