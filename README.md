# Simple Unit Test

A simple TypeScript project demonstrating basic unit testing and modular code organization.

## Features

- **Math Module:** Basic arithmetic functions with unit tests.
- **Grade Module:** Grade calculation logic (to be implemented).
- **User Module:** Fetches user profile data from an API using a pluggable HTTP client.
- **Unit Testing:** Example tests for math and user modules.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the user module:**
   ```bash
   npx ts-node src/user/index.ts
   ```

3. **Run tests:**  
   *(Assuming you have a test runner like Jest or Vitest configured)*
   ```bash
   npm test
   ```
   or
   ```bash
   npx vitest
   ```

## Example Usage

Fetch a user profile:
```ts
import { fetchUserProfile } from './src/user/user';
import { axiosHttpClient } from './src/user/httpClient';

(async () => {
  const profile = await fetchUserProfile(1, axiosHttpClient);
  console.log(profile);
})();
```

## Notes

- The math and grade modules are partially implemented; see TODOs in code.
- Tests are located in the `tests/` directory and cover math and user modules.

---

Feel free to extend this project with more features, modules, and tests as needed.