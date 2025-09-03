import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/orders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  if (allOrders.length === 0) {
    return (
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mode</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, idx) => {
              const Amount = order.price * order.qty;
              return (
                <tr key={idx}>
                  <td>{order.name}</td>
                  <td>{order.mode}</td>
                  <td>{order.price}</td>
                  <td>{order.qty}</td>
                  <td>{Amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
