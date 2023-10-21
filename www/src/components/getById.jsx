import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GetById = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const data = async () => {
      const res = await axios.get(`http://localhost:3000/get_item_by_id/${id}`);
      // console.log(res.data.itemData);
      setItem(res.data.itemData);
    };
    data();
  }, [id]);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Name : {item.name}</h2>
          <p>Description : {item.description}</p>

          <p>Quantity : {item.quantity}</p>
          <p>Price : {item.price}</p>
          <div className="card-actions justify-end"></div>
          <Link to="/">
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetById;
