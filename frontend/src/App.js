import "./App.css";
import {HashRouter,BrowserRouter,Route,Routes,Link} 
from "react-router-dom";
import Nav from "./nav";
import Movie from "./movie";
import CreateAccount from "./createAccount";
import Mb from "./moviebooking";
import Alldata from "./alldata";
import userContext from "./context";
import Login from './login'
// import Profile from "./profile";
// import LoginAccount from "./longinScreen";
// import LoginAccount from "./longinScreen";

export default function App() {
  return (
    <>
      <HashRouter>
        <div>
          <Nav />
          {/* <Link to="/createaccount">Home</Link>
          <Link to="/deposit">Deposit</Link>
          <Link to="/withdrawal">Withdrawal</Link>
          <Link to="/alldata">Alldata</Link> */}
          
          <userContext.Provider
          >
           
            <Routes>
              <Route exact path="/movie" element={<Movie />} />
              <Route exact path="/createAccount" element={<CreateAccount />} />
              <Route exact path="/moviebooking" element={<Mb />} />
              <Route exact path="/alldata" element={<Alldata />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </userContext.Provider>
        </div>
      </HashRouter>
    </>
  );
}
