const { register } = require('../src/controllers/userController')
const UserModel = require('../src/models/userModel')
const { generateSaltAndHash } = require('../src/lib/auth')

jest.mock('../src/lib/auth', () => ({
  generateSaltAndHash: jest.fn(() => ({ hash: 'hash', salt: 'salt' })),
  userToJSON: jest.fn((x) => x),
}))

jest.mock('../src/models/userModel')

const request = {
  body: {
    username: 'fake_username',
    email: 'fake_email@email.com',
    password: 'fake_password',
  },
  login: jest.fn((x) => x),
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

it('Should create a new user', async () => {
  mockUser()
  await register(request, response)
  expect(generateSaltAndHash).toHaveBeenCalledWith('fake_password')
  expect(UserModel.create).toHaveBeenCalledWith({
    username: 'fake_username',
    email: 'fake_email@email.com',
    hash: 'hash',
    salt: 'salt',
  })
})
