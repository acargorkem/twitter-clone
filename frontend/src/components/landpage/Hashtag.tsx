import React from 'react'

const Hashtag: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <a href="#">#{children}</a>
    </>
  )
}

export default Hashtag
