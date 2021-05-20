import React from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

import Header from './components/Header';
import HomePage from './containers/HomePage';
import { ArtistsProvider } from './providers/Artists';
import ArtistsDetails from './containers/ArtistDetails';
import {
  StyledAppWrapper,
  StyledAppWrapperInner,
} from './styledComponents/styledAppWrapper';

function App() {
  const saveResults = useStoreActions(actions => actions.searchResults.add);
  const location = useLocation();
  const history = useHistory();

  const handleSearch = async searchTerm => {
    if (!searchTerm) {
      return saveResults([]);
    }
    if (location.pathname !== '/') {
      history.push('/');
    }
    const { error, ok, result } = await ArtistsProvider.performSearch(
      searchTerm,
    );

    if (error) {
      console.log('error');
    }

    if (ok && result) {
      return saveResults(result);
    }

    return false;
  };

  return (
    <>
      <Header onSerchTermChange={handleSearch} />
      <StyledAppWrapper>
        <StyledAppWrapperInner>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/artist-details" component={ArtistsDetails} />

            {/* <PrivateRoute exact path="/" component={Products} /> */}
            {/* <PrivateRoute exact path="/new-order" component={NewOrder} /> */}
          </Switch>
        </StyledAppWrapperInner>
      </StyledAppWrapper>
    </>
  );
}

export default App;
