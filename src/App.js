import React, { useState } from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Link, Router } from '@reach/router';
import DetailsWithErrorBoundary from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
  const themeHook = useState('red');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>

          <Router>
            <SearchParams path="/" />
            <DetailsWithErrorBoundary path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
