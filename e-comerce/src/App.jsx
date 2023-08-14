import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {

  return (
    <div>
      <BrowserRouter>


      <Navbar/>


        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
