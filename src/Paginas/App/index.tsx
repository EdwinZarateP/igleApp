import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../Inicio/index';
import Registro from '../Registro/index';
import NoEncontrado from '../NoEncontrado/index';
// import './App.css';

const App: React.FC = () => {
  return (
    <Router basename="/igleapp">
      <Routes>
        <Route path="/" element={<Inicio />} />        
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </Router>
  );
}

export default App;
