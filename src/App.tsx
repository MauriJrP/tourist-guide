
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HomePage/Home';
import MyList from './pages/MyListPage/MyList';
import PlacePage from './pages/PlacePage/PlacePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignIn from './pages/SignInPage/SignIn';
import SignUp from './pages/SignUpPage/SignUp';

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/my-list" element={<MyList/>}/>
        <Route path="/place/:id" element={<PlacePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}
