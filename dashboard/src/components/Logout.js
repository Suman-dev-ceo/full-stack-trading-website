import { useUser } from "./UserContext";

export default function Logout() {
  const { logout, loading } = useUser();

  if (loading) return null;
  return (
    <button className="btn btn-primary mx-4" onClick={logout}>
      Logout
    </button>
  );
}
