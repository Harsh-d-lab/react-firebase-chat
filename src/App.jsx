import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/Login/login"

const App = () => {
  const user = false;
  
  return (
    <div className='container'>
    {user ? (
    <>
      <List/>
      <Chat/>
      <Detail/>
      </>
      ): (
        <Login />
      )}
    </div>
  )
}

export default App