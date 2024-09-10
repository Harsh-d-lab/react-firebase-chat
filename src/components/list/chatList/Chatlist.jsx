import "./Chatlist.css"
import { useState } from "react";

const Chatlist = () => {

    const [addMode, setAddMode] = useState(false);

    return (
        <div className="chatList">
        <div className="search">
            <div className="searchBar">
                <img src="./search.png" alt="search-icon" />
                <input type="text" placeholder="Search or start new chat" />
            </div>
            <img src={addMode ? "./minus.png" : "./plus.png"} alt="plus-icon" className="add" onClick={() => setAddMode((prev) => !prev)}/>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar-image" />
            <div className="texts">
                <span>Shivam</span>
                <p>Hey there! I am using WhatsApp.</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar-image" />
            <div className="texts">
                <span>Ujjwal</span>
                <p>Hey there! I am using WhatsApp.</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar-image" />
            <div className="texts">
                <span>Kartik</span>
                <p>Hey there! I am using WhatsApp.</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar-image" />
            <div className="texts">
                <span>Abhi</span>
                <p>Hey there! I am using WhatsApp.</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="avatar-image" />
            <div className="texts">
                <span>Nancy</span>
                <p>Hey there! I am using WhatsApp.</p>
            </div>
        </div>
        </div>
        
    )
}

export default Chatlist
