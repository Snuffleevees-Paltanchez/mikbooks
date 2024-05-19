import { Route, Routes } from 'react-router-dom'
import Navbar from '@/components/navbar/Navbar'
import LandingPage from '@/pages/LandingPage'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App