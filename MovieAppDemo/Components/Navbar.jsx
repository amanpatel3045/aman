import { Grid, GridItem, Tab, Tabs } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
            <Grid templateColumns='repeat(3, 1fr)' p={4} backgroundColor="#1b183d" color="white" fontSize='3xl'>
                <GridItem ><NavLink to={"/login"} end>Login</NavLink></GridItem>
                <GridItem ><NavLink to={"/"} end>Home</NavLink></GridItem>
                <GridItem ><NavLink to={"/booking"} end>Booking</NavLink></GridItem>
            </Grid>
    )
}
export default Navbar;