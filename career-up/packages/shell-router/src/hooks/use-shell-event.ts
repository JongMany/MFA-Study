import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 쉘의 변경으로 이벤트를 dispatch
// 마이크로 앱의 변경에 따라 shell에서 이벤트를 처리하는 훅 (마이크로 앱의 이벤트를 Listening하는 리스너 등록)
// type: event type
// basename: 특정 마이크로 앱의 라우팅 베이스 경로
const useShellEvent = (type: string, basename: string) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const appNavigateEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname =
        pathname === "/" ? basename : `${basename}${pathname}`;

      if (newPathname === location.pathname) return;
      navigate(newPathname);
    };

    window.addEventListener(`[${type}] navigated`, appNavigateEventHandler);

    return () => {
      window.removeEventListener(
        `[${type}] navigated`,
        appNavigateEventHandler
      );
    };
  }, [basename, location, navigate, type]);

  // shell에서 페이지가 변경된 경우, 이벤트를 dispatch
  useEffect(() => {
    if (location.pathname.startsWith(basename)) {
      window.dispatchEvent(
        new CustomEvent("[app-shell] navigated", {
          detail: location.pathname.replace(basename, ""),
        })
      );
    }
  }, [basename, location]);
};

export default useShellEvent;
