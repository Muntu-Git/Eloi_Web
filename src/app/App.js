import './App.css';
import NavBar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/> 
    </div>
  );
}


