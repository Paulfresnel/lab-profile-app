import './App.css';
import HomePage from './components/HomePage';
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path={"/"} element={<HomePage/>}/>
      <Route path={"/signup"} element={<SignUp/>}/>
      <Route path={"/login"} element={<IsAnon><Login/></IsAnon>}/>
      <Route path={"/profile"} element={<IsPrivate><ProfilePage/></IsPrivate>}/>
      </Routes>
    </div>
  );
}

export default App;
