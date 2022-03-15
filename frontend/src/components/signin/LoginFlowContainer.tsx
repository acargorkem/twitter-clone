import React, { useState, useEffect } from 'react'
import PopUpContainer from '../common/PopUpContainer'
import LoginUserNamePopUp from './LoginUserNamePopUp'
import LoginPasswordPopUp from './LoginPasswordPopUp'
import { checkUserExist } from '../../api/lib/user'
import Warning from './Warning'

const LoginFlowContainer: React.FC = () => {
  const [userName, setUsername] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onNextButtonClick(userInput: string) {
    try {
      setIsLoading(true)
      await checkUserExist(userInput)
      setUsername(userInput)
    } catch (err) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  // TODO: Refactor error feature
  useEffect(() => {
    setTimeout(() => {
      setHasError(false)
    }, 5000)
  }, [hasError])

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
      {hasError && <Warning>User doesn&apos;t exist!</Warning>}
    </>
  )
}

export default LoginFlowContainer
