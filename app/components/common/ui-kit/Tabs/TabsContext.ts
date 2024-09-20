import { createContext, Dispatch, SetStateAction } from 'react'

type SetActiveValue = Dispatch<SetStateAction<string>>;

type TabsContextValue = {
  activeValue: string;
  setActiveValue: SetActiveValue;
};

export const TabsContext = createContext<TabsContextValue>({
  activeValue: '',
  setActiveValue: (() => {}) as SetActiveValue,
})
