import { Route, Routes } from "react-router-dom"
import Booking from "../Components/Booking"
import Home from "../Components/Home"
import Login from "../Components/Login"
import DetailsPage from "../Components/MovieDetailsPage"
import PrivateRoute from "./PrivateRoutes"

export const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/booking" element={<PrivateRoute><Booking /></PrivateRoute>}></Route>
        <Route path="/booking/:id" element={<PrivateRoute><DetailsPage /></PrivateRoute>}></Route>
       </Routes>
    )
} 