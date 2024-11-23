 
import React, { useState } from 'react'

const Header = (props) => {
    // const [username, setusername] = useState('')

    // if(!data){
    //     setusername("Hello Admin")
    // }else{
    //     setusername(data.firstName)
    // } 

    const loginOutUser = () => {
        localStorage.removeItem('loggedInUser') // Use removeItem to clear user
        props.changeuser('') // Updating the parent state via props
    }

    return (
        <div className='text-white flex justify-between items-end'>
            <h1 className='text-2xl font-light tracking-wider'>
                Hello <br />
                <span className='text-3xl tracking-wider'>{props.username || 'username'}</span>
            </h1>
            <button 
                onClick={loginOutUser}  // Correct the onClick handler
                className='px-3 pb-1 bg-red-700 rounded-md mt-2 text-2xl transition-transform duration-300 ease-in-out hover:scale-110'>
                Log Out
            </button>
        </div>
    )
}

export default Header 