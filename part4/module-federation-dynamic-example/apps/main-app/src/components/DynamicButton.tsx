import React, { Suspense } from "react";
import { importRemote } from "@module-federation/utilities";

type DynamicButtonProps = {
  button: { url?: string; scope?: string; module?: string };
};

export default function DynamicButton({
  button: { url, scope, module },
}: DynamicButtonProps) {
  if (!url || !scope || !module) return null;

  // Load
  const Component = React.lazy(() => importRemote({ url, scope, module }));

  return (
    <Suspense fallback={<div>Loading Button</div>}>
      <Component />
    </Suspense>
  );
}
