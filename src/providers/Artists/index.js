import { handleApiCall } from '../../utils/helpers';
import { GET_ALL_ARTISTS } from '../constants';

export class ArtistsProvider {
  static performSearch(searchTerm) {
    return handleApiCall(GET_ALL_ARTISTS + searchTerm, null, {
      searchTerm,
    });
  }
}
