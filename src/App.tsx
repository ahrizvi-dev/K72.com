import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/agence' element={<Agence/>}/>
      </Routes>
    </Router>
  )
}

export default App