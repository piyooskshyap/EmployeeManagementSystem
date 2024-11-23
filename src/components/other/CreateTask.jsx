import React, { useState, useContext } from 'react'

import { AuthContext } from '../../context/AuthProvider';
const CreateTask = () => {

    const [UserData, setUserData] = useContext(AuthContext)


    const [taskTittle, settaskTittle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')



    const [newTask, setnewTask] = useState({})
    const submitHandler = (e) => {
        e.preventDefault();

        setnewTask({ taskTittle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, cpmleted: false })

        const data = UserData

        data.forEach(function (e) {
            if (assignTo == e.firstName) {
                e.tasks.push(newTask)
                e.taskCounts.newTask = e.taskCounts.newTask + 1
            }
        });
        setUserData(data)
        console.log(data)
        settaskTittle('')
        settaskDescription('')
        settaskDate('')
        setassignTo('')
        setcategory('')
    }

    return (
        <div>
            <div className=" bg-zinc-800 rounded-xl px-10 pt-1 pb-5 mt-7">
                <form onSubmit={(e) => { submitHandler(e) }} className="flex justify-between items-start mt-2">
                    <div className="w-full">
                        <h3 className="text-xl py-2">Task Tittle</h3>
                        <input value={taskTittle} onChange={(e) => { settaskTittle(e.target.value) }}
                            className=" text-white outline-none bg-transparent placeholder:text-zinc-500 text-xl border-2 border-red-600 rounded-md py-1 px-5 w-3/5"
                            type="text"
                            placeholder="Make a Ui Design "
                        />
                        <h3 className="text-xl py-2">Date</h3>
                        <input value={taskDate} onChange={(e) => { settaskDate(e.target.value) }}
                            className=" text-white outline-none bg-transparent placeholder:text-zinc-500 text-xl border-2 border-red-600 rounded-md py-1 px-5 w-3/5"
                            type="date"
                        />
                        <h3 className="text-xl py-2">Assign To</h3>
                        <input value={assignTo} onChange={(e) => { setassignTo(e.target.value) }}
                            className=" text-white outline-none bg-transparent placeholder:text-zinc-500 text-xl border-2 border-red-600 rounded-md py-1 px-5 w-3/5"
                            type="text"
                            placeholder="Employee Name "
                        />
                        <h3 className="text-xl py-2">Category</h3>
                        <input value={category} onChange={(e) => { setcategory(e.target.value) }}
                            className=" text-white outline-none bg-transparent placeholder:text-zinc-500 text-xl border-2 border-red-600 rounded-md py-1 px-5 w-3/5"
                            type="text"
                            placeholder="Design , Dev ,etc "
                        />
                    </div>
                    <div>
                        <h3 className="text-xl">Description</h3>
                        <textarea value={taskDescription} onChange={(e) => { settaskDescription(e.target.value) }}
                            className=" bg-zinc-500 text-2xl mt-1 rounded-xl text-black py-3 px-3 font-extrabold"
                            name=""
                            id=""
                            cols="25"
                            rows="5"
                        ></textarea>
                        <button className="px-3 bg-red-700 rounded-md mt-2 text-2xl transition-transform duration-300 ease-in-out hover:scale-110">
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
