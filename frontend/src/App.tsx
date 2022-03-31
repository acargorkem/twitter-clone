import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/hoc/PrivateRoute'
import Landpage from './pages/public/Landpage'
import Loginpage from './pages/public/Loginpage'
import Homepage from './pages/private/Homepage'
import PublicRoute from './components/hoc/PublicRoute'
import Signuppage from './pages/private/Signuppage'
import Messagespage from './pages/private/Messagespage'
import Explorepage from './pages/private/Explorepage'
import Notificationpage from './pages/private/Notificationpage'
import Profilepage from './pages/private/Profilepage'
import Layout from './components/layout/Layout'

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
            <Route element={<Layout />}>
              <Route path="/home" element={<Homepage />} />
              <Route path="/explore" element={<Explorepage />} />
              <Route path="/notification" element={<Notificationpage />} />
              <Route path="/messages" element={<Messagespage />} />
              <Route path="/profile" element={<Profilepage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
