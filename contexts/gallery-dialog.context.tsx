import { createContext, useState, ReactNode } from "react";

export type GalleryDialogContextType = {
  modalState: boolean;
  setModalState: (arg: boolean) => void;
  toggleModalState: () => void;
};

export const GalleryDialogContext = createContext<GalleryDialogContextType>({
  modalState: false,
  setModalState: (arg: boolean) => {},
  toggleModalState: () => {},
});

type GalleryDialogContextProviderType = {
  children: ReactNode;
};

export const GalleryDialogContextProvider = ({
  children,
}: GalleryDialogContextProviderType) => {
  const [modalState, setModalState] = useState<boolean>(false);

  function toggleModalState() {
    setModalState(!modalState);
  }

  return (
    <GalleryDialogContext.Provider
      value={{ modalState, setModalState, toggleModalState }}
    >
      {children}
    </GalleryDialogContext.Provider>
  );
};
