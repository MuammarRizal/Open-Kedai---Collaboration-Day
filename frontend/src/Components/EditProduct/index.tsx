import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getProductByID = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setName(response.data.data.name);
      setPrice(response.data.data.price);
    };
    getProductByID();
  }, []);

  const updateProduct = async (e: any) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/products/${id}`, {
      name: name,
      price: parseInt(price),
    });
    navigate("/products");
  };
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form onSubmit={updateProduct} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Product Name</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Price</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Product Name"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
