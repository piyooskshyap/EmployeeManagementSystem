import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="px-10 pt-2 h-[150vh] w-full text-white">
      <Header changeuser={props.changeuser}/>
      <CreateTask/> 
      <AllTask/>
    </div>
  );
};
export default AdminDashboard;
