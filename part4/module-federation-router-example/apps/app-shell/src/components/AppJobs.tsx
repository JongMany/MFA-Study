import { useEffect, useRef } from "react";
import { inject } from "app_jobs/injector";
import { appJobsBasename } from "../constants/prefix";
import { useLocation } from "react-router-dom";

const AppJobs = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
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
