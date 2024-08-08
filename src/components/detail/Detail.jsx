import "./Detail.css"

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="avatar.png" />
        <h2>Harsh Dhama</h2>
        <span>Harsh Dhama</span>
        <p>Software Engineer</p>
      </div>
      <div className="info">
      <div className="option">
        <div className="title">
          <span>Chat Settings</span>
          <img src="./arrowUp.png" alt="arrowUp.png" />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Privacy Settings</span>
          <img src="./arrowUp.png" alt="arrowUp.png" />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Privacy & help</span>
          <img src="./arrowUp.png" alt="arrowUp.png" />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared Photos</span>
          <img src="./arrowDown.png" alt="arrowDown.png" />
        </div>
        <div className="photos">
        <div className="photoItem">
        <div className="photoDetail">
          <img src="./pexels1.jpg" alt="pexels" />
          <span>photo_2024_2.png</span>
          </div>
          <img src="./download.png" alt="Download.png" className="icon"/>
          </div>
          <div className="photoItem">
        <div className="photoDetail">
          <img src="./pexels1.jpg" alt="pexels" />
          <span>photo_2024_2.png</span>
          </div>
          <img src="./download.png" alt="Download.png" className="icon"/>
          </div>
          <div className="photoItem">
        <div className="photoDetail">
          <img src="./pexels1.jpg" alt="pexels" />
          <span>photo_2024_2.png</span>
          </div>
          <img src="./download.png" alt="Download.png" className="icon"/>
          </div>
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared Files</span>
          <img src="./arrowUp.png" alt="arrowUp.png" />
        </div>
      </div>
      <button>Block User</button>
      <button className="logout">Logout</button>
    </div>
  </div>
  )
}

export default Detail
