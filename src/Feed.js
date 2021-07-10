import CreateIcon from '@material-ui/icons/Create'
import React from 'react'
import { useState } from 'react'
import './Feed.css'
import InputOptions from './InputOptions'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import firebase from 'firebase'
// import { PostAdd } from '@material-ui/icon
import Post from './Post'
import { useEffect } from 'react'
import { db } from './firebase'
const Feed = () => {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')
  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])
  const sendPost = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      name: 'Mushaf Ali',
      description: 'this is a test',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput('')
  }
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          <InputOptions title='Photo' Icon={ImageIcon} color='#70B5F9' />
          <InputOptions
            title='Video'
            Icon={SubscriptionsIcon}
            color='#E7A33E'
          />

          <InputOptions title='Event' Icon={EventNoteIcon} color='#C0CBCD' />

          <InputOptions
            title='Write article'
            Icon={CalendarViewDayIcon}
            color='#7FC15E'
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  )
}

export default Feed
