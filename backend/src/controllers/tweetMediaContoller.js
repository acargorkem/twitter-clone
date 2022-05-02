const multer = require('multer')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const allowedExtensions = /(\.png|\.jpg|\.gif)$/i

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/tweet/')
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname))
  },
})

const fileFilter = (req, file, cb) => {
  if (!allowedExtensions.exec(file.originalname)) {
    return cb(
      new Error(`Only '.png', '.jpg' and '.gif' formats allowed!'`),
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
