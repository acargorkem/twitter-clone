const UserService = require('../src/services/user-service')
const UserModel = require('../src/models/user')
const { generateSaltAndHash } = require('../src/lib/auth')

jest.mock('../src/lib/auth', () => ({
  generateSaltAndHash: jest.fn(() => ({ hash: 'hash', salt: 'salt' })),
  userToJSON: jest.fn((x) => x),
}))

jest.mock('../src/models/user')

const request = {
  body: {
    username: 'fake_username',
    email: 'fake_email@email.com',
    password: 'fake_password',
  },
}

const response = {
  status: jest.fn((x) => x),
  json: jest.fn((x) => x),
}

const mockUser = () => {
  UserModel.create.mockResolvedValueOnce({
    id: '1',
    username: 'fakeusername',
    email: 'fakeemail@email.com',
    hash: 'hash',
    salt: 'salt',
  })
}

it('Should send a status code of 201 when user created', async () => {
  mockUser()
  await UserService.register(request, response)
  expect(response.status).toHaveBeenCalledWith(201)
  expect(generateSaltAndHash).toHaveBeenCalledWith('fake_password')
  expect(UserModel.create).toHaveBeenCalledWith({
    username: 'fake_username',
    email: 'fake_email@email.com',
    hash: 'hash',
    salt: 'salt',
  })
})
