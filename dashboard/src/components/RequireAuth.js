import { useEffect, useState } from "react";
import axios from "../api";

export default function RequireAuth({ children }) {
  const [ok, setOk] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // Must match your backend route + method
        const { data } = await axios.get("/auth/verify");
        if (data?.status) setOk(true);
        else redirectToLogin();
      } catch {
        redirectToLogin();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectToLogin = () => {
    const authURL = process.env.REACT_APP_AUTH_URL || "http://localhost:3000";
    window.location.assign(`${authURL}/login`);
  };

  if (ok === null) return null; // or a spinner
  return children;
}
