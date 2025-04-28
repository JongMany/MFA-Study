import { createContext, PropsWithChildren } from "react";

const NameContext = createContext<string | null>(null);

type NameProviderProps = PropsWithChildren<{
  name: string;
}>;
const NameProvider = ({ name, children }: NameProviderProps) => {
  return <NameContext.Provider value={name}>{children}</NameContext.Provider>;
};

export { NameContext, NameProvider, type NameProviderProps };
