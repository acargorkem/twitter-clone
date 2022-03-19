import React, { useState } from 'react'
import PopUpContainer from '../../components/common/PopUpContainer'
import LoginUserNamePopUp from '../../components/login/LoginUserNamePopUp'
import LoginPasswordPopUp from '../../components/login/LoginPasswordPopUp'
import { checkUserExist } from '../../api/lib/user'

const Loginpage: React.FC = () => {
  const [userName, setUsername] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onNextButtonClick(userInput: string) {
    try {
      setIsLoading(true)
      await checkUserExist(userInput)
      setUsername(userInput)
    } catch (err) {
      return
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <PopUpContainer onCloseURL="/">
        {userName !== '' ? (
          <LoginPasswordPopUp username={userName} />
        ) : (
          <LoginUserNamePopUp
            isLoading={isLoading}
            onNextButtonClick={onNextButtonClick}
          />
        )}
      </PopUpContainer>
    </>
  )
}

export default Loginpage
