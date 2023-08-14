import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Presentacion from './components/Presentacion/Presentacion';

function App() {

  return (
    <div>
      <BrowserRouter>


      <Navbar/>


        <Routes>
          <Route path='/' element={<Presentacion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
