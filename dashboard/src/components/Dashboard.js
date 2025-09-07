import React from "react";
import { Route, Routes } from "react-router-dom";
import { GeneralContextProvider } from "./GeneralContext";
import { GeneralContextProviderSell } from "./GeneralContextSell";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <GeneralContextProviderSell>
          <WatchList />
        </GeneralContextProviderSell>
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary user={user} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
