import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {

    return (
        <div id='tasklist' className='overflow-auto h-[65%] flex justify-start items-center gap-5 flex-nowrap  w-full  px-5 py-5 mt-10'>
            {data.tasks.map((e, idx) => { 
                if (e.active) {
                    return <AcceptTask key={idx} data={e} />
                }
                if (e.NewTask) {
                    return <NewTask key={idx} data={e} />
                }
                if (e.completed) {
                    return <CompleteTask key={idx} data={e} />
                }
                if (e.failed) {
                    return <FailedTask key={idx} data={e} />
                }
            })}
        </div>
    )
}

export default TaskList
