const styles = {
  popUpParent: {
    backgroundColor: 'gray',
    display: 'flex',
    width: '100vw',
    height: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 'max(50vh, 500px)',
    margin: 'auto',
    backgroundColor: 'white',
    borderRadius: '10px 10px 10px 10px',
  },
  upper: {
    display: 'flex',
    alignItems: 'center',
    height: '60px',
  },

  lower: {
    flex: '1',
    width: '50%',
    margin: 'auto',
  },

  nextButton: {
    borderRadius: '30px',
    width: '100%',
    marginTop: '1rem',
    textTransform: 'none',
    backgroundColor: 'black',
  },

  signUp: {
    color: 'blue',
  },
}
export default styles
