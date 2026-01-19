import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Valentine from '../pages/valentine/valentine'
import ValentineSuccess from '../pages/valentine/valentine-success'
import Valentine2026 from '../pages/valentine-2026/valentine-2026'

const MainRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/i-love-jacqueline" element={<Home />}>
          <Route path="valentine" element={<Valentine />} />
          <Route path="valentine-2026" element={<Valentine2026 />} />
          <Route path="valentine/success" element={<ValentineSuccess />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </HashRouter>
  )
}

export default MainRouter
