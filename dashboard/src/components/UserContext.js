import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api";

// Shape: user = { id, username, email } or null
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
        if (!token) {
          setUser(null);
          return;
        }

        // axios interceptor should already add Authorization header,
        // but this ensures it even if the interceptor isn't loaded yet.
        const { data } = await axios.get("/auth/verify", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (data?.status && data?.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (_err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Clear token and bounce to the Auth app
  const logout = async () => {
    try {
      // No need to call backend for cookie clearing 
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      const authURL =
        process.env.REACT_APP_AUTH_URL ||
        "https://sparkling-rolypoly-0089c9.netlify.app/login";
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