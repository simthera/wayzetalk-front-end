/**
 *
 * ArtistDetails
 *
 */

import React, { useEffect, useState } from 'react';
import { ArtistCard, Artist, TopTracks, Albums } from '../../components';
import { useLocation } from 'react-router-dom';
import { TopTracksProvider } from '../../providers';
import { AlbumsProvider } from '../../providers';
import { TopRowWrapper } from '../../global-styles';

import { Helmet } from 'react-helmet';

function ArtistDetails() {
  const location = useLocation();

  const [topTracks, setTopTracks] = useState([]);
  const [albums, setAlbums] = useState([]);

  const { picture_medium, name, nb_fan, title, id } = location.state || {};

  const albumData = albumsForArtist =>
    albumsForArtist.map(
      ({
        title,
        cover_medium: albumCover,
        id: artistID,
        release_date,
        cover,
        fans,
        nb_fan,
        name,
        rank,
      }) => ({
        name,
        title,
        picture_medium: albumCover,
        id: artistID,
        release_date,
        fans,
        cover,
        nb_fan,
        rank,
      }),
    );
  useEffect(() => {
    const artistAlbums = async artistId => {
      const { error, ok, result } = await AlbumsProvider.artistAlbums(artistId);

      if (error) {
        console.log('error');
      }

      if (ok && result) {
        return setAlbums(albumData(result));
      }

      return false;
    };
    const artistTopTracks = async artistId => {
      const { error, ok, result } = await TopTracksProvider.artistTopTracks(
        artistId,
      );

      if (error) {
        console.log('error');
      }

      if (ok && result) {
        return setTopTracks(result);
      }

      return false;
    };

    if (id) {
      artistTopTracks(id);
      artistAlbums(id);
    }
  }, [location]);
  return (
    <div>
      <Helmet>
        <title>ArtistDetails</title>
        <meta name="description" content="Description of ArtistDetails" />
      </Helmet>

      <div>
        {location && location.state && (
          <>
            <div className="top-row">
              <div className="artist-details-wrapper">
                <ArtistCard
                  artist={{ picture_medium, name, nb_fan, title, id }}
                />
              </div>
              <div className="top-track-wrapper">
                <TopTracks topTracks={topTracks} />
              </div>
            </div>
            <div>
              <Albums albums={albums} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ArtistDetails;
