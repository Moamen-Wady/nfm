import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteChangeHandler({ setLoading }) {
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}
