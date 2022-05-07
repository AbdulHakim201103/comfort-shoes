import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Blog from './pages/Blog/Blog';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';

import NotFound from './pages/NotFound/NotFound';
import ManageInventory from './pages/Inventory/ManageInventory/ManageInventory';
import Inventory from './pages/Inventory/Inventory/Inventory';
import AddItems from './pages/Inventory/AddItems/AddItems';
import MyItems from './pages/Inventory/MyItems/MyItems';
import StockUpdate from './pages/Inventory/StockUpdate/StockUpdate';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/update/:shoeId' element={<RequireAuth><StockUpdate></StockUpdate></RequireAuth>}></Route>
        <Route path='/manageitem' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/additem' element={<AddItems></AddItems>}></Route>
        <Route path='/myitem' element={<MyItems></MyItems>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
