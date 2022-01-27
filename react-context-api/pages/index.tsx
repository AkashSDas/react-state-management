import { useContext } from "react";
import { ThemeProvider, ThemeProvider2 } from "../components/providers/theme";
import { ThemeContext, ThemeContext2 } from "../lib/context";

/**
 * All of the below example produce same results i.e. have same
 * state with same mutation of state feature only they are
 * achieved using different ways
 */

function Index() {
  return (
    <main>
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>

      <ThemeProvider>
        <ThemeDisplay2 />
      </ThemeProvider>

      <ThemeProvider2>
        <ThemeDisplay3 />
      </ThemeProvider2>
    </main>
  );
}

function ThemeDisplay() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const lightColor = "#d7d7d7";
  const darkColor = "black";

  const getColor = () => {
    return theme === "light" ? lightColor : darkColor;
  };

  const getOppositeColor = () => {
    return theme === "light" ? darkColor : lightColor;
  };

  return (
    <section
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: getColor(),
      }}
    >
      <button
        style={{
          backgroundColor: getOppositeColor(),
          color: getColor(),
        }}
        onClick={toggleTheme}
      >
        {theme}
      </button>
    </section>
  );
}

/**
 * This component uses another way of achieving what was done in the above
 * component
 */
function ThemeDisplay2() {
  const lightColor = "#d7d7d7";
  const darkColor = "black";

  const getColor = (theme) => {
    return theme === "light" ? lightColor : darkColor;
  };

  const getOppositeColor = (theme) => {
    return theme === "light" ? darkColor : lightColor;
  };

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <section
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: getColor(context.theme),
          }}
        >
          <button
            style={{
              backgroundColor: getOppositeColor(context.theme),
              color: getColor(context.theme),
            }}
            onClick={context.toggleTheme}
          >
            {context.theme}
          </button>
        </section>
      )}
    </ThemeContext.Consumer>
  );
}

/**
 * It uses ThemeProvider2
 */
function ThemeDisplay3() {
  const { theme, toggleTheme } = useContext(ThemeContext2);
  const lightColor = "#d7d7d7";
  const darkColor = "black";

  const getColor = () => {
    return theme === "light" ? lightColor : darkColor;
  };

  const getOppositeColor = () => {
    return theme === "light" ? darkColor : lightColor;
  };

  return (
    <section
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: getColor(),
      }}
    >
      <button
        style={{
          backgroundColor: getOppositeColor(),
          color: getColor(),
        }}
        onClick={toggleTheme}
      >
        {theme}
      </button>
    </section>
  );
}

export default Index;
