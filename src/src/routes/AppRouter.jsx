import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { AuthRouter } from "./AuthRouter";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  const { photographer } = useSelector((state) => state.auth);

  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRouter isAuth={photographer}>
                  <Routes>
                    <Route path="/" element={<AuthRouter />} />
                  </Routes>
                </PublicRouter>
              }
            />
            <Route
              path="/*"
              element={
                <PrivateRouter isAuth={photographer}>
                  <Routes>
                    <Route path="/*" element={<DashboardRouter />} />
                  </Routes>
                </PrivateRouter>
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};
