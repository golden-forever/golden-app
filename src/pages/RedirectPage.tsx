import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

const RedirectPage = () => {
  const { user_info, recent_pid } = useAppSelector(store => store.user);

  // if (!user_info) {
  //   return <Navigate to="/login" />;
  // }

  return <Navigate to={`job/${recent_pid}`} />;
};
export default RedirectPage;
