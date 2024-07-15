import React from 'react'
import "./Chat.css"

const Chat = () => {
  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src='./avatar.png' alt='avatar.png' />
          <div className='texts'>
            <span>Jane Doe</span>
            <p>Description Lorem ipsum dolor.</p>
          </div>
        </div>
        <div className='icons'>
          <img src='./phone.png' alt='phone.png' />
          <img src='./video.png' alt='video.png' />
          <img src='./info.png' alt='info.png' />
        </div>
      </div>
      <div className='center'></div>
      <div className='bottom'></div>
    </div>
  )
}

export default Chat
