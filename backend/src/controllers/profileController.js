const sharp = require('sharp')

const UserService = require('../services/userService')

const updateProfile = async (req, res) => {
  const { file, body } = req
  const { bio, name } = body

  if (!file) {
    const user = await UserService.findByIdAndUpdate(req.user.id, {
      bio,
      name,
      avatar: '',
    })
    res.status(200)
    return res.json({ user })
  }

  try {
    const filePath = `uploads/profile/${req.user.id}.png`
    await sharp(file.buffer).resize(300, 300).png().toFile(filePath)

    const options = {
      avatar: filePath,
      bio,
      name,
    }

    const user = await UserService.findByIdAndUpdate(req.user.id, options)
    res.status(200)
    return res.json({ user })
  } catch (e) {
    res.status(400)
    return res.json({
      error: 'An unexpected error occured during image upload',
    })
  }
}

module.exports = { updateProfile }
