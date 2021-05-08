import { Suspense, lazy } from "react";
import FallBack from "./components/fallback";
import "./App.css";

function App() {
  const Lazy = lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(import("./components/body")), 3000);
      })
  );

  return (
    <Suspense fallback={<FallBack />}>
      <div className="content">
        <Lazy />
      </div>
    </Suspense>
  );
}

export default App;
