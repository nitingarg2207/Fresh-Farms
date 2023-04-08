import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom"
import Home from "./pages/Home/Home"
import Navigation from "./components/shared/Navigation/Navigation"
import "./App.css"
import Authenticate from "./pages/Authenticate/Authenticate"
import Activate from "./pages/Activate/Activate"
import Rooms from './pages/Rooms/Rooms'

const isAuth=false;
const user={
  activated:true
}

function App() {
  useEffect(() => {
    console.log()
  }, [])
  
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Home />} />
          <Route path='/authenticate' element={<GuestRoute Component={Authenticate} />} />
          <Route path='/activate' element={<SemiProtectedRoute Component={Activate}  />} />
          <Route path='/rooms' element={<ProtectedRoute Component={Rooms} />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const GuestRoute = ({Component}) => {
  if(isAuth)
  {
    return (
      <Navigate to='/rooms'/>
    )
  }
  else
  {
    return (
      <Component/>
    )
  }
  
}

const SemiProtectedRoute = ({Component}) => {
  if(!isAuth) {
      return <Navigate to='/' />
  } else if(user.activated){
    return <Navigate to='/rooms' />
  } else{
    return <Component/>
  }
}

const ProtectedRoute = ({Component}) => {
  if(!isAuth) {
      return <Navigate to='/' />
  } else if(!user.activated){
    return <Navigate to='/activate' />
  } else{
    return <Component/>
  }
}

export default App