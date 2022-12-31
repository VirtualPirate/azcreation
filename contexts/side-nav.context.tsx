import { createContext, useState, ReactNode } from "react";

export type SideNavContextType = {
  navState: boolean;
  setNavState: (arg: boolean) => void;
  toggleNavState: () => void;
};

export const SideNavContext = createContext<SideNavContextType>({
  navState: false,
  setNavState: (arg: boolean) => {},
  toggleNavState: () => {},
});

type SideNavContextProviderType = {
  children: ReactNode;
};

export const SideNavContextProvider = ({
  children,
}: SideNavContextProviderType) => {
  const [navState, setNavState] = useState<boolean>(false);
  function toggleNavState() {
    setNavState(!navState);
  }
  return (
    <SideNavContext.Provider value={{ navState, setNavState, toggleNavState }}>
      {children}
    </SideNavContext.Provider>
  );
};
