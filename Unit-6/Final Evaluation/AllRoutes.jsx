import React from 'react'
import {Route,Routes}  from 'react-router-dom'
import Booking from './Booking'
import Home from './Home'
import Login from './Login'
import Movie from './Movie'
import PrivateRoute from './PrivateRoute'

function AllRoutes(){
return(
<Routes>
  <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}></Route>
  <Route path='/booking' element={<PrivateRoute><Booking/></PrivateRoute>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/movie/:id' element={<PrivateRoute><Movie/></PrivateRoute>}></Route>
</Routes>
)
}
export default AllRoutes