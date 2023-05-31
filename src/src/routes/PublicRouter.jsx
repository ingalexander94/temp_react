import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ isAuth, children }) => {
  return !isAuth ? children : <Navigate to="/dashboard" />;
};

PublicRouter.propTypes = {
  isAuth: PropTypes.object,
  children: PropTypes.element,
};

export default PublicRouter;
