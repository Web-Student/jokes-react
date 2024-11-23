import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { GetCurrentUserEmail, IsAuthorized } from './Authentication/authServices'
import LoginLogoutButton from './Authentication/LoginLogoutButton'
import { AllJokes } from './Pages/AllJokes'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap's CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap's JavaScript (with Popper.js)
import useGetRandomJoke from './CustomHooks/useGetRandomJoke'
import { JokeDisplay } from './DisplayComponents/JokeDisplay'
import { AddJoke } from './Pages/Add'
import { AllAuthors } from './Pages/Authors'

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePageContent/>} />
        <Route path="/add" element={<AddJoke/>} />
        <Route path="/authors" element={<AllAuthors/>} />
        <Route path="/jokes" element={<AllJokes/>} />
      </Routes>
  )
}

function HomePageContent() {
    const authorized = IsAuthorized("rachel.allen1@students.snow.edu")
    const { data: joke, isLoading, isError } = useGetRandomJoke();
    const defaultJoke = {
      id: 1,
      question: "text",
      answer: "answer",
      author: "example@mail.net"
    };
    console.log("Joke 1 is ", joke);
    if (!authorized) {
      return (
        <>
        <p> User is not authorized, {GetCurrentUserEmail()}</p>
        <LoginLogoutButton/>
        </>
      )
    }
    if (isLoading) {
      console.log("Data is loading")
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )
    } 
    if (isError){
      return (<p>Error, please put a custom error component here</p>)
    }
    
    return (
      <>
        {authorized ? <p>Authorized</p> : <p>Not authorized</p>}
        <p>User is authorized, {GetCurrentUserEmail()}</p>
        <div className="container">
          <div className="row">
            <Link to="/jokes">Click here to view all jokes</Link>
          </div>
          <div className="row">
            <Link to="/add">Add a joke</Link>
          </div>
          <div className="row">
            <Link to="/authors">All authors</Link>
          </div>
        </div>
        <LoginLogoutButton/>
        {joke ? (<JokeDisplay joke = {joke}></JokeDisplay>) : (<JokeDisplay joke = {defaultJoke} />)}
      </>
    )
}

export default App
