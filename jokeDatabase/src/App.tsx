import './App.css'
import { GetCurrentUserEmail, IsAuthorized } from './Authentication/authServices'
import LoginLogoutButton from './Authentication/LoginLogoutButton'

function App() {
  const authorized = IsAuthorized("r@mail.edu")

  if (authorized) {
    return (
      <>
        <p>User is authorized, {GetCurrentUserEmail()}</p>
        <LoginLogoutButton/>
      </>
  )
  }
  else {
    return (<p> User is not authorized, {GetCurrentUserEmail()}
    <LoginLogoutButton/></p>)
  }
  return (
    <>
      <LoginLogoutButton/>
    </>
  )
}

export default App
