import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Dashboard  from './components/Dashboard/Dashboard';
import Courses from './components/courses/Courses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
