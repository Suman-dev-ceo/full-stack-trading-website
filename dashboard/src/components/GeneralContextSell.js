import React, { useState } from "react";
import SellActionWindow from "./SellActionWindow";

const GeneralContextSell = React.createContext({
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProviderSell = (props) => {
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };
  const contextValue = {
    openSellWindow: handleOpenSellWindow,
    closeSellWindow: handleCloseSellWindow,
  };
  return (
    <GeneralContextSell.Provider value={contextValue}>
      {props.children}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContextSell.Provider>
  );
};

export default GeneralContextSell;
