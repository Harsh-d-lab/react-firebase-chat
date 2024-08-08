import EmojiPicker from 'emoji-picker-react'
import "./Chat.css"
import { useEffect, useRef, useState } from 'react'

const Chat = () => {
  const [open,setOpen] = useState(false);
  const [text,setText] = useState("");

  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current.scrollIntoView({behavior:'smooth'});
  })

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src='./avatar.png' alt='avatar.png' />
          <div className='texts'>
            <span>Harsh Dhama</span>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className='icons'>
          <img src='./phone.png' alt='phone.png' />
          <img src='./video.png' alt='video.png' />
          <img src='./info.png' alt='info.png' />
        </div>
      </div>
      <div className='center'>
        <div className='message'>
        <img src="./avatar.png" alt="avatar.png"/>
        <div className='texts'>
          <p>Lorem ipsum</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className='message own'>
        <div className='texts'>
          <p>Lorem ipsum</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className='message'>
        <img src="./avatar.png" alt="avatar.png"/>
        <div className='texts'>
          <p>Lorem ipsum</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className='message own'>
        <div className='texts'>
          <p>Lorem ipsum</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className='message'>
        <img src="./avatar.png" alt="avatar.png"/>
        <div className='texts'>
          <p>Lorem ipsum</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className='message own'>
        <div className='texts'>
        <img src="./avatar.png" alt='pexels'/>
          <p>Lorem ipsum
          Lorem ipsum
          Lorem ipsum
          Lorem ipsum</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div ref={endRef}></div>
      </div>
      <div className='bottom'>
        <div className='icons'>
          <img src='./img.png' alt='img.png' />
          <img src='./camera.png' alt='camera.png' />
          <img src='./mic.png' alt='mic.png' />
        </div>
        <input type='text'
        placeholder='Type a message'
        value={text}
        onChange={(e) => setText(e.target.value)}/>
        <div className='emoji'>
          <img src='./emoji.png' alt='emoji.png'
          onClick={() => setOpen((prev) => !prev)} />
          <div className='picker'>
          <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat
