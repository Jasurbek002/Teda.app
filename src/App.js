
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/home';
import AuthProvider from './authProvider/authProvider';
import Login from './Auth/Login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <AuthProvider>
              <Home />
            </AuthProvider>
          }  />
          <Route path='/login' element ={<Login />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
