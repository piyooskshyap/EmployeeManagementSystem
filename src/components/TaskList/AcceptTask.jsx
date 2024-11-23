import React from 'react'

const AcceptTask = ({data}) => { 
    return (
        <div>
            <div className='flex-shrink-0 h-full w-[300px] bg-yellow-500 rounded-xl p-5'>
                <div className='flex justify-between '>
                    <h2 className='bg-red-700 text-white border-2 border-black px-2 font-semibold rounded-xl'>{data.category}</h2>
                    <h4 className='bg-zinc-200 border-2 border-black px-2 font-semibold rounded-xl '>{data.date}</h4>
                </div>
                <h4 className='mt-5 bg-zinc-400 border-2 border-black px-2 font-semibold rounded-xl text-2xl'>{data.title}</h4>
                <p className='mt-2 bg-zinc-400 border-2 border-black px-2 font-semibold rounded-xl'>{data.description}</p>
                <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded-md text-black font-bold'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded-md text-black font-bold'>Mark as Failed</button>
                </div>
            </div>

        </div>
    )
}

export default AcceptTask
