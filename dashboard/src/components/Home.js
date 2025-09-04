import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import RequireAuth from "./RequireAuth";
import { UserProvider, useUser } from "./UserContext";

function AuthedApp() {
  const { user, loading } = useUser();
  if (loading) {
    return <div style={{ padding: 20 }}>Checking session...</div>;
  }

  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
}

export default function Home() {
  return (
    <RequireAuth>
      <UserProvider>
        <AuthedApp />
      </UserProvider>
    </RequireAuth>
  );
}
