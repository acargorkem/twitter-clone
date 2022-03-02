import { connect } from 'react-redux'
import { setTest, resetTest } from './store/tweetSlice'

function App(props: any) {
  return (
    <div>
      <button onClick={() => props.setTest('set-test')}>bir</button>
      <button onClick={() => props.resetTest()}>iki</button>
      <div>{props.testNew}</div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return { testNew: state.tweet.tweet }
}
const mapDispatchToProps = { setTest, resetTest }

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App
