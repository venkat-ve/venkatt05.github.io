import { Suspense } from "react";
import FallBack from "./components/fallback";
// import "./css/App.css";
// import "./css/dark-theme.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./v2/components/Home/home";

function App() {
  // const Lazy = lazy(
  //   () =>
  //     new Promise((resolve) => {
  //       setTimeout(() => resolve(import("./components/body")), 2000);
  //     })
  // );
  return (
    <Router>
      <Suspense fallback={<FallBack />}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
