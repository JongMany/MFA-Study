import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 각 마이크로 앱에서 사용
const useAppEvent = (type: string) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const shellNavigationHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;

      if (location.pathname === pathname) return;
      navigate(pathname);
    };

    window.addEventListener("[app-shell] navigated", shellNavigationHandler);

    return () => {
      window.removeEventListener(
        "[app-shell] navigated",
        shellNavigationHandler
      );
    };
  }, [location, navigate]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(`[${type}] navigated`, {
        detail: location.pathname,
      })
    );
  }, [location, type]);
};

export default useAppEvent;
