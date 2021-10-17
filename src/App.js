import { Suspense } from 'react';
import FallBack from './v2/components/global/fallback';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './v2/components/Home/home';


function App() {
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
