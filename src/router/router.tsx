import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Valentine from '../pages/valentine/valentine'
import ValentineSuccess from '../pages/valentine/valentine-success'
import Valentine2026 from '../pages/valentine-2026/valentine-2026'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/i-love-jacqueline" element={<Home />} />
        <Route path="/i-love-jacqueline/valentine" element={<Valentine />} />
        <Route
          path="/i-love-jacqueline/valentine-2026"
          element={<Valentine2026 />}
        />
        <Route
          path="/i-love-jacqueline/valentine/success"
          element={<ValentineSuccess />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
