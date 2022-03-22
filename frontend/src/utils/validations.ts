export const validateEmail = (email: string) => {
  const regexp =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  // Converting the email to lowercase
  return regexp.test(String(email).toLowerCase())
}

export const validatePassword = (password: string) => {
  return password.length > 6
}

export const validateUsername = (username: string) => {
  return username.length >= 2
}
