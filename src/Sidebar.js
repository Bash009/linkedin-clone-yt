import React from 'react'
import './Sidebar.css'
// import { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
const Sidebar = () => {
  const recentItem = (topic) => (
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  )
  // var count = 0
  //   const [t1, setT1] = useState(0)
  //   useEffect(() => {

  //     const interval = setInterval(() => {
  //       count = count + 1
  //       setT1(count)
  //       console.log(t1)
  //     }, 1000)
  //     return () => clearInterval(interval)
  //   }, [])

  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img
          src='https://images.unsplash.com/photo-1624821778984-1e62eae1e033?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          alt=''
        />
        <Avatar className='sidebar_avatar' />
        <h2>Sayyed Bashar Ali</h2>
        <h4>sayyedbasharali@gmail.com</h4>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed you</p>
          <p className='sidebar_statNumber'>2543</p>
        </div>
        <div className='sidebar_stat'>
          <p>Views on my post</p>
          <p className='sidebar_statNumber'>2000</p>
        </div>
      </div>

      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('React')}
        {recentItem('Nodejs')}
        {recentItem('GraphQL')}
        {recentItem('MaterialUI')}
        {recentItem('MongoDB')}
      </div>
    </div>
  )
}

export default Sidebar
