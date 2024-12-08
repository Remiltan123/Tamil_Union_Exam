import logo from './logo.svg';
import './App.css';
import { HomePage } from './Pages/HomePage';
import { Navbar } from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Corrected "BrowseRuoter" to "BrowserRouter"
import { ModelPaper } from './Pages/ModelPaper';
import { Result } from './Pages/Result';


function App() {
  return (
    <div className="App">
      <BrowserRouter>  {/* Corrected component name */}
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ModelPaper' element={<ModelPaper />} />
          <Route path='/ResultPage/*' element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
