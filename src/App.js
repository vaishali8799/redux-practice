import Login from './components/Login'
import Logout from './components/Logout'
import './App.css';
import { useSelector } from 'react-redux'

function App() {
  const users = useSelector(state=>state.user.user)
  return (
    <div>
      {users?<Logout/>:<Login/>}
   </div>
    
  )
}

export default App;
