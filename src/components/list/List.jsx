import Chatlist from "./chatList/Chatlist";
import "./List.css"
import Userinfo from './userInfo/Userinfo';

const List = () => {
  return (
    <div className='list'>
      <Userinfo/>
      <Chatlist/>
    </div>
  )
}

export default List
