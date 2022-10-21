import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const {isLoginDone} = useSelector(state=>state);

  if(!isLoginDone) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
