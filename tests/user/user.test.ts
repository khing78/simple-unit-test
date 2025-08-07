import { HttpClient } from "../../src/user/types";
import { fetchUserProfile } from "../../src/user/user";


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
