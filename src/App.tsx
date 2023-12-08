import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
