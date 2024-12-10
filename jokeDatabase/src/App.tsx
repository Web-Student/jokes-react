import './styles/custom.scss'
import { GetCurrentUserEmail} from './Authentication/authServices'
import { AllJokes } from './Pages/AllJokes'
// import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap's CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap's JavaScript (with Popper.js)
import useGetRandomJoke from './CustomHooks/useGetRandomJoke'
import { JokeDisplay } from './ReusableLayoutComponents/JokeDisplay'
import { AddJoke } from './Pages/Add'
import { AllAuthors } from './Pages/Authors'
import { JokesByAuthor } from './Pages/JokesByAuthor'
import { Edit } from './Pages/Edit'
import { Search } from './Pages/Search'
import { Route, Routes, useParams } from 'react-router';
import { MyJokes } from './Pages/MyJokes';

//Needed so we can pass a parameter
const JokesByAuthorWrapper: React.FC = () => {
  const {author} = useParams<{author:string}> ();
  return <JokesByAuthor author={author!} />;
}

const EditJokeWrapper: React.FC = () => {
  const {jokeid} = useParams<{jokeid:string}> ();
  console.log(`trying to convert ${jokeid} to a number`)
  return <Edit jokeid = {Number(jokeid!)}/>
}

function App() {
  return (
    <>
      {/* <div className="App bg-custom-bg min-vh-100 py-15"> */}
        <Routes>
          <Route path="/" element={<HomePageContent/>} />
          <Route path="/add" element={<AddJoke/>} />
          <Route path="/authors" element={<AllAuthors/>} />
          <Route path={`/edit/:jokeid`} element={<EditJokeWrapper/>} />
          <Route path="/jokes" element={<AllJokes/>} />
          <Route path={`/jokesbyauthor/:author`} element={<JokesByAuthorWrapper/>} />
          <Route path={`/myjokes`} element={<MyJokes/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
        {/* <Navigation/> */}
        {/* <p>Main page content here</p> */}
      {/* </div> */}
    </>
  )
}

function HomePageContent() {
    const { data: joke, isLoading, isError } = useGetRandomJoke();
    const defaultJoke = {
      id: 1,
      question: "text",
      answer: "answer",
      author: "example@mail.net"
    };
    console.log("Joke 1 is ", joke);

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
        {GetCurrentUserEmail() ? <p>Hello {GetCurrentUserEmail()}</p>: <p></p>}
        {joke ? (<JokeDisplay joke = {joke}></JokeDisplay>) : (<JokeDisplay joke = {defaultJoke} />)}
      </>
    )
}

export default App
