import { useEffect, useRef } from "react";
import { inject } from "app_network/injector";
import { appNetworkBasename } from "../constants/prefix";
import { useLocation, useNavigate } from "react-router-dom";

const AppNetwork = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    // 메모리 라우터로부터 location이 변경되었다는 것을 전달받아서 처리 (app-network)
    const appNetworkNavigationEventHandler = (e: Event) => {
      const pathname = (e as CustomEvent<string>).detail;
      // 메모리 라우터가 보내준 pathname과 조합
      const newPathname = `${appNetworkBasename}${pathname}`;

      if (newPathname === location.pathname) return;
      navigate(newPathname);
    };

    window.addEventListener(
      "[app-network] navigated",
      appNetworkNavigationEventHandler
    );

    return () =>
      window.removeEventListener(
        "[app-network] navigated",
        appNetworkNavigationEventHandler
      );
  }, [location]);

  useEffect(() => {
    // app-shell이 변경되었음을 알려주는 이벤트 발송
    if (location.pathname.startsWith(appNetworkBasename)) {
      console.log("location2", location);
      window.dispatchEvent(
        new CustomEvent("[app-shell] navigated", {
          detail: location.pathname.replace(appNetworkBasename, ""),
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
      basePath: location.pathname.replace(appNetworkBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => {
    return () => unmountRef.current();
  }, []);

  return <div ref={wrapperRef} id="app-network"></div>;
};
export default AppNetwork;
