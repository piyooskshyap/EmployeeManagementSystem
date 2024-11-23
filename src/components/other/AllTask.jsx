import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const AllTask = () => {

    const [UserData, setUserdata ] = useContext(AuthContext);

    return (
        <div className='bg-zinc-800 py-2 px-5 mt-5 rounded-xl h-[56vh]'>
            <div className='w-full h-10 flex justify-between items-center px-5 rounded-md font-bold'> <h1>Employee  </h1> <h1>New task</h1> <h1>Active </h1> <h1> Completed</h1> <h1>Failed</h1></div>
            {UserData.map((e, idx) => {
                return <div key={idx} className='w-full h-10 border-2 border-red-600 flex justify-between items-center px-5 rounded-md font-bold my-3'>
                    <h2 className='w-[50px] flex justify-center'>{e.firstName}</h2>
                    <h2 className='w-[50px] flex justify-center'>{e.taskCounts.newtask}</h2>
                    <h2 className='w-[50px] flex justify-center'>{e.taskCounts.active}</h2>
                    <h2 className='w-[50px] flex justify-center'>{e.taskCounts.completed}</h2>
                    <h2 className='w-[50px] flex justify-center'>{e.taskCounts.failed}</h2>
                </div>
            })}
        </div>
    )
}

export default AllTask
