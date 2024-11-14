import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { GetCurrentUserEmail, IsAuthorized } from './Authentication/authServices'
import LoginLogoutButton from './Authentication/LoginLogoutButton'
import useGetAllJokes from './CustomHooks/useGetAllJokes'
import { AllJokes } from './Pages/AllJokes'

function App() {
  return (
      <Routes>
        <Route path="/jokes" element={<AllJokes/>} />
        <Route path="/" element={<HomePageContent/>} />
      </Routes>
  )
}

function HomePageContent() {
    //const authorized = IsAuthorized("r@mail.edu")
    const { data: jokes = [], isLoading, isError } = useGetAllJokes();
    console.log("Joke 1 is ", jokes[0]);
    // if (!authorized) {
    //   return (
    //     <>
    //     <p> User is not authorized, {GetCurrentUserEmail()}</p>
    //     <LoginLogoutButton/>
    //     </>
    //   )
    // }
    if (isLoading) {
      console.log("Data is loading")
      return (<p>loading</p>)
    } 
    if (isError){
      return (<p>Error, please put a custom error component here</p>)
    }
    else {
      console.log("Type of jokes:", Array.isArray(jokes));  // Should be true if jokes is an array  
    }
    
    return (
      <>
      {/* <Routes>
      <Route path="/jokes" element={<AllJokes/>} />
    </Routes> */}
        <p>User is authorized, {GetCurrentUserEmail()}</p>
        <Link to="/jokes">Click here to view all jokes</Link>
        {/* <LoginLogoutButton/> */}
        {jokes.map((joke, id:number) => (
          <div key={id}>
              <h3>{joke.question}</h3>
              <h4>{joke.answer}</h4>
          </div>
        ))}        
      </>
    )
}

export default App
