const multer = require('multer')

const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/tiff', 'image/png']

const storage = multer.memoryStorage()

const fileFilter = (req, file, cb) => {
  if (!ALLOWED_TYPES.includes(file.mimetype)) {
    return cb(
      new Error(`Only 'png', 'tiff', and 'jpeg' formats allowed!'`),
      false,
    )
  }
  return cb(null, true)
}

const upload = multer({
  storage,
  fileFilter,
})

module.exports = { upload }
