import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayouts from './components/MainLayouts';

function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/reset-password' element={<Resetpassword />} />
      <Route path='/forgot-password' element={<Forgotpassword />} />
      <Route path='/admin' element={<MainLayouts />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  </Router>
}

export default App;
