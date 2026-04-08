import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
// react router dom isliye use karte hai jisse alag alag path per alag alag cheeze mil jaye
import CreatePost from './pages/CreatePost.jsx'
import Feed from './pages/Feed.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App