import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Views
import Home from './views/Home';
import Quiz from './views/Quiz';
import Resources from './views/Resources';
import Results from './views/Results';

export default function RouterComponent() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/resources" component={Resources} />
      </div>
    </Router>
  );
}
