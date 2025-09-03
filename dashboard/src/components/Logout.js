import axios from "../api";

export default function Logout() {
  const handleClick = async () => {
    try {
      await axios.post("/auth/logout"); // backend should clear cookie
    } catch {}
    const authURL = process.env.REACT_APP_AUTH_URL || "http://localhost:3000";
    window.location.assign(authURL);
  };

  return (
    <button className="btn btn-primary mx-4" onClick={handleClick}>
      Logout
    </button>
  );
}
