import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/product/:productId" element={<ProductDetail/>}/>
      <Route>404 Page not found</Route>
    </Routes>
    </Router>
      
    </div>
  );
}

export default App;
