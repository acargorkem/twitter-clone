import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landpage from './pages/public/Landpage'
import Loginpage from './pages/public/Loginpage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/signin" element={<Loginpage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
