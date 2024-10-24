import { Link } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";
import DataProduct from "../../types/ProductList";

const ProductList = () => {
  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    return response.data.data;
  };

  const { data } = useSWR("products", fetcher);

  if (!data) return <h2>Loading ...</h2>;

  const onDeleteHandler = async (id: number) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    mutate("products");
  };

  return (
    <>
      <div className="container mt-5">
        <Link
          to={"/add"}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New
        </Link>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-slate-800 text-slate-200">
                <th className="py-3 px-6 font-semibold">ID</th>
                <th className="py-3 px-6 font-semibold">Name</th>
                <th className="py-3 px-6 font-semibold">Price</th>
                <th className="py-3 px-6 font-semibold">Created At</th>
                <th className="py-3 px-6  font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product: DataProduct, index: number) => (
                <tr
                  key={product.id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-6 text-center">{index + 1}</td>
                  <td className="py-3 px-6 text-center">{product.name}</td>
                  <td className="py-3 px-6 text-center">{product.price}</td>
                  <td className="py-3 px-6 text-center">{product.createAt}</td>
                  <td className="py-3 px-6 text-center">
                    <Link
                      to={`/edit/${product.id}`}
                      className="font-medium bg-blue-400 hover:bg-blue-700 px-3 py-1 rounded text-white mr-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => onDeleteHandler(product.id)}
                      className="font-medium bg-red-400 hover:bg-red-600 px-3 py-1 rounded text-white mr-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductList;
