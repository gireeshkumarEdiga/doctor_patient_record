import './App.css';
import  {Signup} from "./components/Signup"
import {Signin} from "./components/Signin";
import {Home }from "./components/Home";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Signup />
      <div style={{height : "50px"}}></div>
      <Signin />
      <div style={{height : "50px"}}></div>
      <Home />
      {/* <BrowserRouter>
      <Signin />
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
