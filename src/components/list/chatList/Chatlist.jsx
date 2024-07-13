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
        </div>
    )
}

export default Chatlist
