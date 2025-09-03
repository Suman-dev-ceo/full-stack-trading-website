import { useEffect, useState } from "react";
import axios from "../api";

export default function RequireAuth({ children }) {
  const [ok, setOk] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/auth/verify"); // must exist on backend
        if (data?.status) setOk(true);
        else
          window.location.assign(
            process.env.REACT_APP_AUTH_URL || "http://localhost:3000"
          );
      } catch {
        window.location.assign(
          process.env.REACT_APP_AUTH_URL || "http://localhost:3000"
        );
      }
    })();
  }, []);

  if (ok === null) return null; // or a loading spinner
  return children;
}
