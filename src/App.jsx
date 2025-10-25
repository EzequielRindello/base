import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>

  )
}

export default App