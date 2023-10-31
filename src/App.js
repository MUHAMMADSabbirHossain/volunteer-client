// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Page404 from './Components/Page404/Page404';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Donation from './Components/Donation/Donation';
import Events from './Components/Events/Events';
import Blogs from './Components/Blogs/Blogs';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import RegAsVolunteer from './Components/RegAsVolunteer/RegAsVolunteer';
import UserProfile from './Components/UserProfile/UserProfile';
import VolunteersRegList from './Components/VolunteersRegList/VolunteersRegList';
import AddEvent from './Components/AddEvent/AddEvent';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      {/* layout */}

      {/* header */}
      <Header></Header>

      {/* routes */}
      <Routes>

        {/* landing page */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="register-as-volunteer" element={<RegAsVolunteer></RegAsVolunteer>}></Route>

        <Route path="/donation" element={<Donation></Donation>}></Route>

        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="add-event" element={<AddEvent></AddEvent>}></Route>

        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="user-profile" element={<UserProfile></UserProfile>}></Route>
        <Route path="Volunteers-register-list" element={<VolunteersRegList></VolunteersRegList>}></Route>

        {/* not found page */}
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>

      {/* footer */}
      <Footer></Footer>


    </div>
  );
}

export default App;
