import { lazy, Suspense } from 'react';
import FallBack from './v2/components/global/fallback';
// import "./css/App.css";
// import "./css/dark-theme.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './v2/components/Home/header';

const Home = lazy(() => {
  return new Promise((res) => {
    window.setTimeout(() => res(import('./v2/components/Home/home')), 2000);
  });
});

function App() {
  return (
    <Router>
      <Suspense fallback={<FallBack />}>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
