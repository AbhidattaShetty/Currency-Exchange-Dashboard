import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import BarChart from './components/BarChart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/barchart' element={<BarChart />} />
    </Routes>
    </div>
  );
}

export default App;
