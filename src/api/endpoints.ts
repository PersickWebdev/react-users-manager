export const Endpoints = {
    // to get all users:
    users: 'http://localhost3001/users',

    // to get, add, edit or remove one user:
    user: (userId: number | string) => `http://localhost3001/users/${userId}`,
}
