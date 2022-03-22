import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/hoc/PrivateRoute'
import Landpage from './pages/public/Landpage'
import Loginpage from './pages/public/Loginpage'
import Homepage from './pages/private/Homepage'
import PublicRoute from './components/hoc/PublicRoute'
import Signuppage from './pages/private/Signuppage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Landpage />} />
            <Route path="/signin" element={<Loginpage />} />
            <Route path="/signup" element={<Signuppage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Homepage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
