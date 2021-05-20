import { handleApiCall } from '../../utils/helpers';
import { GET_TOP_TRACKS } from '../constants';

export class TopTracksProvider {
  static artistTopTracks(artistId) {
    return handleApiCall(GET_TOP_TRACKS + '/' + artistId, null, {
      artistId,
    });
  }
}
