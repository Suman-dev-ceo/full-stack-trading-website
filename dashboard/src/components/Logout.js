import React from "react";
import axios from "axios";

function Logout() {
  const handleClick = async () => {
    try {
      await axios.post("http://localhost:8080/auth/logout", null, {
        withCredentials: true,
      });
    } catch (e) {
      console.error("Logout error", e);
    } finally {
      // send user back to Auth app login
      window.location.assign("http://localhost:3000/login");
    }
  };

  return (
    <button className="btn btn-primary mx-4" onClick={handleClick}>
      Logout
    </button>
  );
}

export default Logout;
