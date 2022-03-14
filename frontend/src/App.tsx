import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landpage from './components/landpage/Landpage'
import LoginFlowContainer from './components/signin/LoginFlowContainer'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/signin" element={<LoginFlowContainer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
