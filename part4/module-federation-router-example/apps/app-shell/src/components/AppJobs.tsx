import { useEffect, useRef } from "react";
import { inject } from "app_jobs/injector";
import { appJobsBasename } from "../constants/prefix";
import { useLocation, useNavigate } from "react-router-dom";

const AppJobs = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    // 메모리 라우터로부터 location이 변경되었다는 것을 전달받아서 처리 (app-jobs)
    const appJobsNavigationEventHandler = (e: Event) => {
      const pathname = (e as CustomEvent<string>).detail;
      // 메모리 라우터가 보내준 pathname과 조합
      const newPathname = `${appJobsBasename}${pathname}`;

      if (newPathname === location.pathname) return;
      navigate(newPathname);
    };

    window.addEventListener(
      "[app-jobs] navigated",
      appJobsNavigationEventHandler
    );

    return () =>
      window.removeEventListener(
        "[app-jobs] navigated",
        appJobsNavigationEventHandler
      );
  }, [location]);

  useEffect(() => {
    // app-shell이 변경되었음을 알려주는 이벤트 발송
    if (location.pathname.startsWith(appJobsBasename)) {
      window.dispatchEvent(
        new CustomEvent("[app-shell] navigated", {
          detail: location.pathname.replace(appJobsBasename, ""),
        })
      );
    }
  }, [location]);

  useEffect(() => {
    // inject를 하기 위해 처리
    if (!isFirstRunRef.current) return;

    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appJobsBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => {
    return () => unmountRef.current();
  }, []);

  return <div ref={wrapperRef} id="app-jobs"></div>;
};
export default AppJobs;
