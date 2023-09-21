import { createContext, useContext } from "react";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
interface Context {

}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const RadioGroup = createContext({} as Context);

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function useRadioGroup() {
  return useContext(RadioGroup);
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function RadioGroupContext({ children }: { children: JSX.Element }) {

  return (
    <RadioGroup.Provider value={{}}>
      {children}
    </RadioGroup.Provider>
  )
}
