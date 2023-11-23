
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import Login from './pages/Login/login';
import Footer from './components/Footer/footer';
import Profile from './pages/Profile/profile';

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
