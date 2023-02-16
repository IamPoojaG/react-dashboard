import Sidebar from './components/sidebar/Sidebar.js';
import Topbar from './components/topbar/Topbar.js';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList.js';
import User from './pages/user/User.js';

import ProductList from './pages/productList/ProductList.js';
import Product from './pages/product/Product.js';

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
          <Route path='/user/:userId'>
            <User />
          </Route>

          <Route path='/products'>
            <ProductList />
          </Route>
          <Route path='/product/:productId'>
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
