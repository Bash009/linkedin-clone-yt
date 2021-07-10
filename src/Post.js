import React from 'react'
import { Avatar } from '@material-ui/core'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import InputOptions from './InputOptions'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar />
        <div className='post_info'>
          <h2>Sayyed Bashar Ali</h2>
          <p>Description</p>
        </div>
      </div>

      <div className='post_body'>
        <p>{message}</p>
      </div>

      <div className='post_buttons'>
        <InputOptions Icon={ThumbUpIcon} title='Like' color='gray' />
        <InputOptions Icon={ChatOutlinedIcon} title='Comment' color='gray' />
        <InputOptions Icon={ShareOutlinedIcon} title='Share' color='gray' />
        <InputOptions Icon={SendOutlinedIcon} title='Send' color='gray' />
      </div>
    </div>
  )
}

export default Post
