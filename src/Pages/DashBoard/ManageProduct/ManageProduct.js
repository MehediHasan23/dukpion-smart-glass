import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://boiling-caverns-07920.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //delete product

  const deleteProduct = (id) => {
    const proceed = window.confirm("you want to sure to delete");
    if (proceed) {
      const url = `https://boiling-caverns-07920.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            alert("delete successfully");
            const remaining = products.filter((list) => list._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  console.log(products);
  return (
    <div className="my-order-section ">
      <div className="text-center fw-bold text-white">
        <h1>Manage All Products</h1>
        <h4>Total Products: {products.length}</h4>
      </div>
      <div className="container ">
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              {Array.from({ length: 1 }).map((_, index) => (
                <th className="text-white " key={index}>
                  {" "}
                  PRODUCT NAME{" "}
                </th>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <th className="text-white" key={index}>
                  PRICE
                </th>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <th className="text-white" key={index}>
                  Delete Product
                </th>
              ))}
            </tr>
          </thead>
          {products.map((list) => (
            <tbody>
              <tr>
                {Array.from({ length: 1 }).map((_, index) => (
                  <td className="fw-bold text-white " key={index}>
                    {list?.name}
                  </td>
                ))}

                {Array.from({ length: 1 }).map((_, index) => (
                  <td className="fw-bold text-white" key={index}>
                    {list?.price}
                  </td>
                ))}

                {Array.from({ length: 1 }).map((_, index) => (
                  <td key={index}>
                    <button
                      onClick={() => deleteProduct(list._id)}
                      className="mx-3 text-danger"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageProduct;
