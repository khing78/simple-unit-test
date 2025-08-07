import { HttpClient } from "../../src/user/types";
import { fetchUserProfile, getUserSameOrganizeNest, isUserSameOrganize, UserProfile } from "../../src/user/user";
import * as userModule from  "../../src/user/user"

describe('fetchUserProfile', () => {
  it('should return user profile data from API', async () => {
    // Arrange
    const fakeUser = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    };

    const mockHttpClient: HttpClient = {
      get: async (url: string) => {
        expect(url).toBe('https://jsonplaceholder.typicode.com/users/1');
        return fakeUser;
      },
    };

    // Act
    const result = await fetchUserProfile(1, mockHttpClient);

    // Assert
    expect(result).toEqual(fakeUser);
  });
});

//Add isUserSameOrganize test

describe('isUserSameOrganize', () => {
  const mockUser: UserProfile = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  };

  it('should return true if organization matches (case insensitive)', () => {
    expect(isUserSameOrganize(mockUser, 'april.biz')).toBe(true);
    expect(isUserSameOrganize(mockUser, 'APRIL.BIZ')).toBe(true);
  });

  it('should return false if organization does not match', () => {
    expect(isUserSameOrganize(mockUser, 'other.org')).toBe(false);
  });
});

describe('getUserSameOrganizeNest', () => {
  const mockUser: UserProfile = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  };

  it('should return user if user is in the same organization', async () => {
    const mockHttpClient: HttpClient = {
      get: async () => mockUser,
    };

    const result = await getUserSameOrganizeNest(1, mockHttpClient);
    expect(result).toEqual(mockUser);
  });

  it('should throw error if user is not in the same organization', async () => {
    const fakeUser = { ...mockUser, email: 'someone@other.org' };

    const mockHttpClient: HttpClient = {
      get: async () => fakeUser,
    };

    await expect(getUserSameOrganizeNest(1, mockHttpClient)).rejects.toThrow(
      'User does not belong to the specified organization'
    );
  });
});
