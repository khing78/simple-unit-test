import { axiosHttpClient } from './httpClient';
import { HttpClient } from './types';

(async () => {
  const profile = await fetchUserProfile(1, axiosHttpClient);
  console.log(profile);
})();
function fetchUserProfile(arg0: number, axiosHttpClient: HttpClient) {
  throw new Error('Function not implemented.');
}
