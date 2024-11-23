import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div>
       <div className='flex-shrink-0 h-full w-[300px] bg-green-500 rounded-xl p-5'>
                <div className='flex justify-between '>
                    <h2 className='bg-yellow-500 text-white border-2 border-black px-2 font-semibold rounded-xl'>{data.category}</h2>
                    <h4 className='bg-zinc-200 border-2 border-black px-2 font-semibold rounded-xl '>{data.date}</h4>
                </div>
                <h4 className='mt-5 bg-zinc-400 border-2 border-black px-2 font-semibold rounded-xl text-2xl'>{data.title}</h4>
                <p className='mt-2 bg-zinc-400 border-2 border-black px-2 font-semibold rounded-xl'>{data.description}</p>
                <div className='flex justify-center mt-4'>
                <button className='bg-red-500 py-1 px-2 text-sm rounded-md text-black font-bold'>Completed</button> 
                </div>
            </div>
    </div>
  )
}

export default CompleteTask
