import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
} from 'react'

type CloseValue = Dispatch<SetStateAction<void>>;

type ModalContextValue = {
  isOpen: boolean;
  close: CloseValue;
};

export const ModalContext = createContext<ModalContextValue>({
  isOpen: false,
  close: (() => {}) as CloseValue,
})

interface ModalProviderProps {
  value: ModalContextValue;
  children: ReactNode;
}

export function ModalProvider({ children, value }: ModalProviderProps) {
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}
