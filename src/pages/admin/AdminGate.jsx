import { useEffect } from "react";
import { useAdminStore } from "../../store/adminStore";
import AdminPanel from "./AdminPanel";
import Login from "./Login";

export default function AdminGate() {
  const user = useAdminStore((state) => state.user);
  const checkSession = useAdminStore((state) => state.checkSession);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return user ? <AdminPanel /> : <Login />;
}
