// @ts-nocheck
/* eslint-disable */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/userSlice'
import { getAllTweets } from '../../api/lib/tweet'

const Homepage = (props: any) => {
  const [tweets, setTweets] = useState<any>([])

  const onClickHandle = () => {
    props.logout()
  }

  const onGetTweets = async () => {
    const result = await getAllTweets()
    setTweets(result.data.result)
  }

  return (
    <div>
      <div>
        <button onClick={onClickHandle}> logout </button>
      </div>
      <div>
        <button onClick={onGetTweets}> get tweets </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = { logout }

export default connect(null, mapDispatchToProps)(Homepage)
