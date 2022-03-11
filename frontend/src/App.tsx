import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landpage from './components/landpage/Landpage'
import SignInPopUp from './components/signin/SignInPopUp'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/signin" element={<SignInPopUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
