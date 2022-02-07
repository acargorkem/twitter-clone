const { userToJSON } = require('../lib/auth')

it('UserToJSON omit hash and salt from user', async () => {
  const safeUser = {
    id: '1',
    username: 'fakeusername',
    email: 'fakeemail@email.com',
    createdAt: '2022-02-07T11:22:51.495Z',
    updatedAt: '2022-02-07T11:22:51.495Z',
  }
  const user = {
    ...safeUser,
    hash: 'hash',
    salt: 'salt',
  }

  const jsonUser = userToJSON(user)
  expect(jsonUser).toEqual(safeUser)
})
