import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TableAll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("http://localhost:3000/get_item");
      //   console.log(response.data.itemData);
      setData(response.data.itemData);
    };

    getUser();
  }, []);

  const handleDelete = async (id) => {
    try {
      const isDelete = confirm("Want to Delete");
      if (isDelete) {
        const data = await axios.delete(`http://localhost:3000/delete/${id}`);
        console.log(data);
        alert("Items has Deleted");
        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data);
  return (
    <div className="overflow-x-auto my-10">
      <div className="bg-black"></div>
      <Link to="/create">
        <button className="btn btn-info">Create</button>
      </Link>
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Quality</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{item?.name}</td>
              <td>{item?.price}</td>
              <td>{item?.quantity}</td>
              <td>{item?.description}</td>
              <div className="flex flex-row gap-2">
                <Link to={`/readid/${item._id}`}>
                  <button className="btn btn-success">Read</button>
                </Link>
                <Link to={`/edit/${item._id}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAll;
