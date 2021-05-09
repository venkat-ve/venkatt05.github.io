import { Suspense, lazy, useState } from "react";
import FallBack from "./components/fallback";
import "./App.css";
import "./css/dark-theme.css";
// import WhiteTheme from "./css/white-theme.css";

function App() {
  
  const [theme, updateTheme] = useState(false);

  const toggleTheme = () => updateTheme((currentTheme) => !currentTheme);

  // useEffect(()=>{
  //   lazyThemeLoader = lazy(() => import("./css/dark-theme.css") )
  // }, [theme]);

  const Lazy = lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(import("./components/body")), 3000);
      })
  );
  return (
    <>
    <Suspense fallback={<FallBack />}>
      <div className="content">
        <Lazy switchTheme={toggleTheme} theme={theme} />
      </div>
    </Suspense>
    </>
  );
}

export default App;
