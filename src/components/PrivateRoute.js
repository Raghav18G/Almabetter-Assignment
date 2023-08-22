import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  if (typeof window !== "undefined" && !isAuthenticated) {
    router.push("/"); // Redirect to login page if not authenticated
    return null;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
