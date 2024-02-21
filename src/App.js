import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import StateBasics from './Components/StateBasics';
import Counter from './Components/Counter';
import Signup from './Components/Signup';
import Useeffect from './Components/Useeffect';
import {Route,Router,Routes} from 'react-router-dom';
import Mapping from './Components/Mapping';
import Table2 from './Components/Table2';
import Table3 from './Components/Table3';
import Axios from './Components/Axios';
import Grids from './Components/Grids';
import Card from './Components/Card';



function App() {
  return (
    <div className="App">
      
      <Navbar/> <br></br> 
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/t' element={<Mapping></Mapping>}></Route>
        <Route path='/table2' element={<Table2></Table2>}></Route>
        <Route path='/table3' element={<Table3></Table3>}></Route>
        <Route path='/axios' element={<Axios></Axios>}></Route>
        <Route path='/grids' element={<Grids></Grids>}></Route>
        <Route path='/card' element={<Card></Card>}></Route>


      </Routes>
      
      
      {/* <Login/> */}
      {/* <StateBasics/><br></br>  */}
      {/* <Counter/> 
      <Signup/> */}
      {/* <Useeffect/> */}
    </div>
  );
}

export default App;
