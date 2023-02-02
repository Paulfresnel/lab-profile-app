import './App.css';
import HomePage from './components/HomePage';
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path={"/"} element={<HomePage/>}/>
      <Route path={"/signup"} element={<SignUp/>}/>
      <Route path={"/login"} element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
