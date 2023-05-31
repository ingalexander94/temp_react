import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "@/pages";

export const DashboardRouter = () => {
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/dashboard/*"
            element={
              <Routes>
                <Route path="/sesiones-por-pagar" element={<Dashboard />} />
                <Route path="/reservas" element={<Dashboard />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/*" element={<Navigate to="/404" replace />} />
              </Routes>
            }
          />
          <Route path="/usuarios" element={<Dashboard />} />
          <Route path="/fotografos" element={<Dashboard />} />
          <Route path="/sesiones" element={<Dashboard />} />
          <Route path="/ciudades" element={<Dashboard />} />
          <Route path="/notificaciones" element={<Dashboard />} />
          <Route path="/promociones" element={<Dashboard />} />
          <Route path="/cupones" element={<Dashboard />} />
          <Route path="/planes" element={<Dashboard />} />
          <Route path="/*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </>
  );
};
