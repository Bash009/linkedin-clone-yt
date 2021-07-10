import React from 'react'
import Header from './Header'
import './App.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Login from './Login'
function App() {
  const user = useSelector(selectUser)
  return (
    <div className='App'>
      {/* Header */}
      <Header />
      {/* App Body*/}
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          <Sidebar />
          <Feed />
        </div>
      )}
      {/* Sidebar */}
      {/* Feed */}

      {/* Widgets */}
    </div>
  )
}

export default App
