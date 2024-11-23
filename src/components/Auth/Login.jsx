import React, { useState } from 'react'

const Login = ({handleLogin}) => { 
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault() 
        handleLogin(email,password)
        setpassword("")
        setEmail("")
    }
    return (
        <div className='flex h-screen w-full justify-center items-center'>
            <div className=' border-2 border-red-600 py-20 px-10 rounded-xl'>
                <form onSubmit={(e) => { submitHandler(e) }}
                    className='flex flex-col items-center justify-center gap-5'>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} required className=" text-white outline-none bg-transparent placeholder:text-zinc-500 text-xl border-2 border-red-600 rounded-md py-1 px-5 w-full" type="email" placeholder='Enter Email ' />
                    <input value={password} onChange={(e) => { setpassword(e.target.value) }} required className=" text-white outline-none bg-transparent placeholder:text-zinc-500 text-xl border-2 border-red-600 rounded-md py-1 px-5 w-full" type="password" placeholder='Enter Password ' />

                    <button className='mt-8 text-white outline-none   placeholder:text-white text-xl   bg-red-600 rounded-full py-3 px-5'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
