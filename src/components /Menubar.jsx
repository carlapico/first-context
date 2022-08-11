import {useContext} from 'react'
import { UserInfoContext } from '../App'
import Login from './Login'
import Logout from './Logout'


export default function Menubar () {
    const {isLoggedIn} = useContext(UserInfoContext)

    return (isLoggedIn //if user is LoggedIn 
        ? <Logout /> // return logout component to display logout button
        : <Login /> // if not return login component to display login button
        ) 
    
}