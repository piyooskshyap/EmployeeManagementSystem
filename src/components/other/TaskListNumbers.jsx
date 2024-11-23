import React from 'react'

const TaskListNumbers = ({data}) => {
    return (
        <div className='flex justify-between  gap-5 w-full mt-5'>
            <div className=' px-10 py-6 rounded-xl w-[45%] bg-yellow-400'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.newtask}</h2>
                <h3 className='text-2xl font-extrabold'>New Task</h3>
            </div>
            <div className=' px-10 py-6 rounded-xl w-[45%] bg-green-400'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-2xl font-extrabold'>Completed</h3>
            </div>
            <div className=' px-10 py-6 rounded-xl w-[45%] bg-blue-400'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
                <h3 className='text-2xl font-extrabold'>Active</h3>
            </div>
            <div className=' px-10 py-6 rounded-xl w-[45%] bg-red-500'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
                <h3 className='text-2xl font-extrabold'>Failed</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers
