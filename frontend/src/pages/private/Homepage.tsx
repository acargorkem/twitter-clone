import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/userSlice'

const Homepage = (props: any) => {
  const onClickHandle = () => {
    props.logout()
  }

  return (
    <div>
      <button onClick={onClickHandle}> logout </button>
    </div>
  )
}

const mapDispatchToProps = { logout }

export default connect(null, mapDispatchToProps)(Homepage)
