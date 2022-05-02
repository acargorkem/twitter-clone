const multer = require('multer')

const allowedExtensions = /(\.png|\.jpg)$/i

const storage = multer.memoryStorage()

const fileFilter = (req, file, cb) => {
  if (!allowedExtensions.exec(file.originalname)) {
    return cb(new Error(`Only '.png' and '.jpg' formats allowed!'`), false)
  }
  return cb(null, true)
}

const upload = multer({
  storage,
  fileFilter,
})

module.exports = { upload }
