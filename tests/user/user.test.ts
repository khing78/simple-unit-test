import { HttpClient } from "../../src/user/types";
import { userService, UserProfile, isUserSameOrganize } from "../../src/user/user";

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
    const mockUserService = userService(mockHttpClient);

    // Act
    const result = await mockUserService.fetchUserProfile(1);

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

//getUserSameOrganizeNest
describe('getUserSameOrganize', () => {
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

    const mockUserService = userService(mockHttpClient);

    const result = await mockUserService.getUserSameOrganize(1);
    expect(result).toEqual(mockUser);
  });

  it('should throw error if user is not in the same organization', async () => {
    const fakeUser = { ...mockUser, email: 'someone@other.org' };

    const mockHttpClient: HttpClient = {
      get: async () => fakeUser,
    };
    
    const mockUserService = userService(mockHttpClient);

    await expect(mockUserService.getUserSameOrganize(1)).rejects.toThrow(
      'User does not belong to the specified organization'
    );
  });
});
