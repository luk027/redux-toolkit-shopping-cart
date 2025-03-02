import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './pages/SignIn';
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage';
import { isUserLogedIn } from './redux/slices/userSlice.js'

function App() {

  const isLoggedIn = useSelector(isUserLogedIn)

  return (
    <BrowserRouter>
      <Routes> 
        <Route exact path="/" element={
          isLoggedIn 
          ? <HomePage />
          : <Navigate to='/signin'/>
        } />
        <Route path="signin" element={
          !isLoggedIn 
          ? <SignIn/> 
          : <Navigate to='/'/>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 