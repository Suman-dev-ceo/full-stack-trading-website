import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import RequireAuth from "./RequireAuth";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/auth/verify", {
          withCredentials: true,
        });
        if (data.status) {
          setUser(data.user); // { _id, username, email }
        } else {
          window.location.assign("http://localhost:3000/login");
        }
      } catch (err) {
        window.location.assign("http://localhost:3000/login");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading)
    return <div style={{ padding: "20px" }}>Checking session...</div>;
  return (
    <>
      <RequireAuth>
        <TopBar user={user} />
        <Dashboard user={user} />
      </RequireAuth>
    </>
  );
};

export default Home;
