import './App.css';
import BookAdd from "./components/bookAdd"
import Home from "../src/components/home"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import EditBook from './components/editBook';



function App() {
  return (
    <Router>
     <div>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/BookAdd" element={<BookAdd/>}/>
       <Route path='/editBook/:id' element={<EditBook/>}/>


      </Routes>

      </div>
    </Router>
  );
}

export default App;