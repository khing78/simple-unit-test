import { HttpClient } from './types';
/**
 * Fetches user profile data from the API.
 * @param userId - The ID of the user to fetch.
 * @param httpClient - An instance of HttpClient to make the request.
 * @returns A promise that resolves to the user profile data.
 */
export interface UserProfile {
  id: number;
  name: string;
  username: string;
  email: string;
}

export function isUserSameOrganize(
  user: UserProfile,
  organizationName: string
): boolean {
  const userDomain = user.email.split('@')[1]?.toLowerCase();
  return userDomain === organizationName.toLowerCase();
}

export function userService(httpClient: HttpClient) {
  async function fetchUserProfile(userId: number): Promise<UserProfile> {
    const res = await httpClient.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return res;
  }

  async function getUserSameOrganize(userId: number): Promise<UserProfile> {
    const user = await fetchUserProfile(userId);
    const organizationName = 'april.biz';
    const isSameOrganize = isUserSameOrganize(user, organizationName);
    if (!isSameOrganize)
      throw new Error('User does not belong to the specified organization');
    console.log(
      `Good morning agent ${user.name}, you are a member of the organization ${organizationName}`
    );
    return user;
  }

  return {
    fetchUserProfile,
    isUserSameOrganize,
    getUserSameOrganize,
  };
}
