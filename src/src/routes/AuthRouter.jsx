import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "@/pages";

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
};
