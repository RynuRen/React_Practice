import { createContext } from "react";

const NavigationContext = createContext();

function NavigationProvider() {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
