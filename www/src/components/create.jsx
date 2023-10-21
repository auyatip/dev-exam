import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const create = () => {
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const blogs = await axios.post("http://localhost:3000/insert_item", {
        name: inputs.name,
        price: inputs.price,
        quantity: inputs.quantity,
        description: inputs.description,
      });
      if (blogs) {
        alert("Create Successsfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} action="" className="w-1/2">
        {/* ////////////////////// */}
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="title"
        >
          name
        </label>
        <input
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="name"
          required
        />

        {/* ////////////////////// */}
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="title"
        >
          price
        </label>
        <input
          value={inputs.price}
          onChange={(e) => setInputs({ ...inputs, price: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="number"
          placeholder="price"
          required
        ></input>
        {/* ////////////////////// */}
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="quantity"
        >
          quantity
        </label>
        <input
          value={inputs.quantity}
          onChange={(e) => setInputs({ ...inputs, quantity: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="image"
          type="number"
          placeholder="quantity"
        />
        {/* ////////////////////// */}
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="quantity"
        >
          description
        </label>
        <input
          onChange={(e) =>
            setInputs({ ...inputs, description: e.target.value })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="image"
          value={inputs.description}
          type="text"
          placeholder="description"
        />

        <button type="submit" className="btn btn-success">
          Create
        </button>
        <Link to="/">
          <button className="btn btn-error mx-2">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default create;
