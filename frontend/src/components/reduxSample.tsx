import { connect } from 'react-redux'
import { setTest, resetTest } from '../store/tweetSlice'

function reduxSample(props: any) {
  return (
    <div>
      <button onClick={() => props.setTest('this is tweet')}>
        change tweet body
      </button>
      <button onClick={() => props.resetTest()}>delete tweet</button>
      <div>{props.testNew}</div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return { testNew: state.tweet }
}
const mapDispatchToProps = { setTest, resetTest }

export default connect(mapStateToProps, mapDispatchToProps)(reduxSample)
