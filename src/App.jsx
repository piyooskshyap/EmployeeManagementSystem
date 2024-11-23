import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setuser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const [UserData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")

    if (loggedInUser) {
      const UserData = JSON.parse(loggedInUser)
      setuser(UserData.role)
      setLoggedInUserData(UserData.data)
    }

  })
  const handleLogin = (email, password) => {
    if (email == 'a@a.com' && password == '1') {
      setuser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (UserData) {
      const employee = UserData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setuser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else {
      alert("Invalid Details")
    }
  }
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ' '}
      {user === 'admin' && <AdminDashboard changeuser={setuser} />}
      {user === 'employee' && LoggedInUserData ? (
        <EmployeeDashboard changeuser={setuser} data={LoggedInUserData} />
      ) : null}
    </>
  )
}
export default App
