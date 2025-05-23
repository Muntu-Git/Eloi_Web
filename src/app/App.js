import NavBar from '../navbar/Navbar';
import Footer from "../footer/footer"
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/> 
      <Footer/>
    </div>
  );
}


