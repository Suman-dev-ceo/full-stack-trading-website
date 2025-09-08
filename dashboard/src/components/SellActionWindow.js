import React, { useContext, useState } from "react";
import "./SellActionWindow.css";
import axios from "../api";
import GeneralContextSell from "./GeneralContextSell";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContextSell);
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [share, setShare] = useState({});

  const handleSellClick = async () => {
    try {
      await axios
        .post("/newSell", {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "Sell",
        })
        .then((res) => {
          if (res.data) {
            setShare(res.data);
            console.log(res.data.message);
          }
        });
      closeSellWindow();
    } catch (err) {
      console.log("Error placing sell order", err);
    }
  };
  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step={0.05}
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue sell" onClick={handleSellClick}>
            Sell
          </button>
          <button to="" className="btn btn-grey" onClick={handleCancelClick}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default SellActionWindow;
