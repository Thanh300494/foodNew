import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeViews from './Views/HomeViews';
import LoginView from './Views/LoginView';
import MenuView from './Views/MenuViews';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<HomeViews/>}/>
         <Route path='/login' element={<LoginView/>}/>
         <Route path='/menu' element={<MenuView/>}/>
      </Routes>
    </div>
  );
}

export default App;
