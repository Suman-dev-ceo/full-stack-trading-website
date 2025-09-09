import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api";

const UserCtx = createContext({
  user: null,
  loading: true,
  setUser: () => { },
  logout: async () => { },
});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const { data } = await axios.get("/auth/verify", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (data?.status && data?.user) setUser(data.user);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const logout = async () => {
    try {
      // no cookie to clear in Option A
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      const authURL =
        process.env.REACT_APP_AUTH_URL ||
        "https://sparkling-rolypoly-0089c9.netlify.app";
      window.location.assign(`${authURL}/login`);
    }
  };

  return (
    <UserCtx.Provider value={{ user, loading, setUser, logout }}>
      {children}
    </UserCtx.Provider>
  );
}

export function useUser() {
  return useContext(UserCtx);
}