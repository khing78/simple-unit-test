import { fetchUserProfile } from './user';
import { axiosHttpClient } from './httpClient';

(async () => {
  const profile = await fetchUserProfile(1, axiosHttpClient);
  console.log(profile);
})();
