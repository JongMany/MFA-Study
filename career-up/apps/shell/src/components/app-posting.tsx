import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useShellEvent } from "@career-up/shell-router";
import { appPostingBasename } from "../constants/prefix";
import inject from "posting/injector";

export default function AppPosting() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-posting", appPostingBasename);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appPostingBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => {
    return () => unmountRef.current();
  }, []);

  return <div ref={wrapperRef} id="app-posting" />;
}
