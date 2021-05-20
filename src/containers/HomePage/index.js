/**
 *
 * HomePage
 *
 */

import React from 'react';
import { useStoreState } from 'easy-peasy';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import Artist from '../../components/Artist';

export default function HomePage() {
  const searchResults = useStoreState(state => state.searchResults.items);
  const history = useHistory();

  const handleArtistSelect = artist => history.push('/artist-details', artist);

  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Artist artists={searchResults} selectedArtist={handleArtistSelect} />
    </div>
  );
}
