import React from 'react'
import MuiImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImagePreviewer from '../common/ImagePreviewer'

interface ImageListProps {
  images: Blob[]
  removeImage: (index: number) => void
}

const rowsColumns = [
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 2,
  },
]

const ImageList: React.FC<ImageListProps> = ({ images, removeImage }) => {
  return (
    <MuiImageList
      sx={{ width: '90%' }}
      variant="quilted"
      cols={images.length === 1 ? 2 : 4}
      rowHeight={images.length === 4 ? 62 : 121}
    >
      {images.map((image, index) => {
        const row = images.length === 3 ? rowsColumns[index].rows : 2
        const col = images.length === 3 ? rowsColumns[index].cols : 2

        return (
          <ImageListItem key={index} cols={col} rows={row}>
            <ImagePreviewer
              image={image}
              removeImage={() => removeImage(index)}
            />
          </ImageListItem>
        )
      })}
    </MuiImageList>
  )
}

export default React.memo(ImageList)
