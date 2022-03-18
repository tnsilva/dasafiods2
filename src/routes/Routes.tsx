import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, Add, LoginPage } from "../pages";
import { useAuthContext, useDrawerContext } from "../shared/hooks";

export function AppRoutes() {
  const { signed } = useAuthContext();
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        path: "/",
        label: "Home",
      },
      {
        icon: "add",
        path: "/add",
        label: "Add",
      },
      {
        icon: "login",
        path: "/login",
        label: "Login",
      },

    ]);
  }, []);

  return (
    <Routes>
      {signed ? (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/add" element={<Add />} />
        </>
      ) : (
        <>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
}
