import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customers from './pages/Customers';
import Products from './pages/Products';
import Form from './pages/Form';
import { useState } from 'react';
import SingleCustomer from './pages/SingleCustomer';

function App() {
  const [customers, setCustomers] = useState(["Marko Markovic", "Petar Petrovic", "Nina Babic", "Nikola Nikolic", "Maja Savic"]);

  const handleAddCustomer = newCustomer => {
    setCustomers(previousValue => [...previousValue, newCustomer]);
  }

  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/customers" element={<Customers customers={customers} />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/form" element={<Form handleAddCustomer={handleAddCustomer} />}></Route>
        <Route path="/customers/:id" element={<SingleCustomer customers={customers} />}></Route>
      </Routes>
    </div>
  );
}

export default App;








