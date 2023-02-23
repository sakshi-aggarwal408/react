import './App.css'
import Cards from './Cards'
import Account from './Account';
import Product from  './Product'
import Signup  from './Signup';
import Login  from './Login';
import Kidswear from './Kidswear';

import Home from './Home';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider';
import{BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (<>
  
    <BrowserRouter>
    
       <Nav/> 
      
      
        <Routes>
        <Route path='/' element={<Home/>}/> 
          <Route path='/product' element={<Product/>}/> 
          <Route path='/account' element={<Account/>}/> 
          <Route path='/signup' element={<Signup/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/kidswear' element={<Kidswear/>}/> 


          
          </Routes>
    </BrowserRouter>

  
  </>);
}

export default App;
