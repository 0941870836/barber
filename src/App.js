import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Service from './components/Services';
import Total from "./components/Total";
import Product from "./components/Products";
import Bill from './components/Bill';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/products" element={<Product />} />
        <Route path="/bill" element={<Bill />} />
      </Routes>
    </div >
  );
}
