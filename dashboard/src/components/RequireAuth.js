import { useEffect, useState } from "react";
import axios from "../api";

export default function RequireAuth({ children }) {
  const [ok, setOk] = useState(null);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        redirectToLogin();
        return;
      }
      try {
        const { data } = await axios.get("/auth/verify", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (data?.status) {
          setOk(true);
        } else {
          redirectToLogin();
        }
      } catch {
        redirectToLogin();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectToLogin = () => {
    const authURL =
      process.env.REACT_APP_AUTH_URL ||
      "https://sparkling-rolypoly-0089c9.netlify.app"; // fallback to your auth app
    window.location.assign(`${authURL}/login`);
  };

  if (ok === null) return null; // or a loading spinner
  return ok ? children : null;
}