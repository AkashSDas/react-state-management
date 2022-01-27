import { useState } from "react";
import { ThemeContext, ThemeContext2 } from "../../lib/context";

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");
  const initialValue = {
    theme,
    setTheme,
    toggleTheme: () => {
      setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    },
  };

  return (
    <ThemeContext.Provider value={initialValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function ThemeProvider2(props) {
  const [theme, setTheme] = useState("light");
  const initialValue = {
    theme,
    setTheme,
    toggleTheme: () => {
      setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));

      // Return null is needed as return type of toggleTheme is void
      // but even I wasn't returing here anything the ThemeContext2.Provider's
      // value prop was giving the below error and by putting return null that
      // error is resolved, ensuring no value is returned
      //
      // Error
      // Type '{ theme: string; setTheme: Dispatch<SetStateAction<string>>; toggleTheme: () => void; }' is not assignable to type '{ theme: string; setTheme: Dispatch<SetStateAction<string>>; toggleTheme: () => {}; }'.
      //   The types returned by 'toggleTheme()' are incompatible between these types.
      //     Type 'void' is not assignable to type '{}'.ts(2322)
      // index.d.ts(335, 9): The expected type comes from property 'value' which is declared here on type 'IntrinsicAttributes & ProviderProps<{ theme: string; setTheme: Dispatch<SetStateAction<string>>; toggleTheme: () => {}; }>'

      return null;
    },
  };

  return (
    <ThemeContext2.Provider value={initialValue}>
      {props.children}
    </ThemeContext2.Provider>
  );
}
