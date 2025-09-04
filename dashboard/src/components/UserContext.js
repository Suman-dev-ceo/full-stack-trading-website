import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api";

const UserCtx = createContext({
  user: null,
  loading: true,
  setUser: () => {},
  logout: async () => {},
});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // { _id, username, email }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/auth/verify", {
          withCredentials: true,
        });
        if (data?.status) setUser(data.user);
        else setUser(null);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const logout = async () => {
    try {
      await axios.post("/auth/logout", {}, { withCredentials: true });
    } finally {
      setUser(null);
      const authURL = process.env.REACT_APP_AUTH_URL || "http://localhost:3000";
      window.location.assign(authURL);
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
