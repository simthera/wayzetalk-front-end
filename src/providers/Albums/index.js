import { handleApiCall } from '../../utils/helpers';
import { GET_ALL_ALBUMS } from '../constants';

export class AlbumsProvider {
  static artistAlbums(artistId) {
    return handleApiCall(GET_ALL_ALBUMS + '/' + artistId, null, {
      artistId,
    });
  }
}
