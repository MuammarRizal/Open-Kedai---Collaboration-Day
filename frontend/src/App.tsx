import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./Components/ProductList";
import AddProduct from "./Components/AddProducts";
import EditProduct from "./Components/EditProduct";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
