import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Dashboard  from './components/dashboard/Dashboard';
import Courses from './components/courses/Courses';
import Users from './components/users/Users';
import ChngPass from './components/change-password/ChngPass';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/users" element={<Users />} />
          <Route path="/changepassword" element={<ChngPass />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
