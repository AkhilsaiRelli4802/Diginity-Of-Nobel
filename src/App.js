import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
// import Header from './Components/Header/Header';
import Home from './Components/Home/home';
import Volunteer from './Components/Volunteer/Volunteer';
import VolunterPerson1 from './Components/Volunteer/VolunterAbout/AboutVolunter1';
import VolunterPerson2 from './Components/Volunteer/VolunterAbout/AboutVolunter2';
import VolunterPerson3 from './Components/Volunteer/VolunterAbout/AboutVolunteer3';
import NavBar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      <div>
      <NavBar/>
      </div>
      <Routes>
        <Route path='/' element={<Navigate to="/Home"></Navigate>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Volunteer' element = {<Volunteer/>}/>
        <Route path='/volunteerteam1' element = {<VolunterPerson1/>}/>
        <Route path='/volunteerteam2' element = {<VolunterPerson2/>}/>
        <Route path='/volunteerteam3' element = {<VolunterPerson3/>}/>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
