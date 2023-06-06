import { Navigate, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Users,
  Photographers,
  Photoshoots,
  Cities,
  Notifications,
  Promotions,
  Coupons,
  Plans,
} from "@/pages";

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
          <Route path="/usuarios" element={<Users />} />
          <Route path="/fotografos" element={<Photographers />} />
          <Route path="/sesiones" element={<Photoshoots />} />
          <Route path="/ciudades" element={<Cities />} />
          <Route path="/notificaciones" element={<Notifications />} />
          <Route path="/promociones" element={<Promotions />} />
          <Route path="/cupones" element={<Coupons />} />
          <Route path="/planes" element={<Plans />} />
          <Route path="/*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </>
  );
};
