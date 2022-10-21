import {  Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../Redux/action";

const Home = () => {
    const state = useSelector((state) => state);
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(getMovies())
    },[]);

    
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            {
                state.allMovies.map((elm)=> {
                    return <GridItem  m="auto" key={Math.random()} pt={7}>
                                <Image src={elm.poster_path} w="80%" m="auto"/>
                                <Text fontSize='4xl'>{elm.title}</Text>
                                <p><Button colorScheme='facebook' m={3}><Link to={`/booking/${elm.id}`}>More Details</Link></Button></p>
                            </GridItem>
                })
            }
        </Grid>
    )
}
export default Home;