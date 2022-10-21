import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Badge, Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { bookTicket, getBookingMovies } from "../Redux/action";

const DetailsPage = () => {
    const [movie,setMovie] = useState({});
    const dispatch = useDispatch();
    const {bookingMovies} = useSelector((state) => state);
    const { id } = useParams();
    const navigate = useNavigate();
    const arr = ["A1", "A2",
                "A3", "A4", "A5", "A6", "A7"];
    const getSpecificMovies = () =>{
        axios
      .get(`http://localhost:8080/movies/${id}`)
      .then((response) => {
        setMovie(response.data)
      })
      .catch((err) => {
        console.log(err)
      });
    }
    useEffect(()=>{
        getSpecificMovies();
        console.log(movie)
    },[id])
    const bookTicketHandler = () => {
        let data = {
            movie_id : id,
            movie : movie.title,
            name : "Mayukh Sen",
            seat: arr[Math.floor(Math.random() * arr.length)]
        }
        dispatch(bookTicket(data));
    }
    useEffect(()=> {},[bookingMovies])
    const showTicketHandler = () => {
        navigate("/booking");
    }
    return (
            <Grid templateColumns="repeat(2,1fr)" mt={5} gap="10px">
                <Image src={movie.poster_path} w="50%" m="auto"/>
                <Box textAlign="left">
                <Text fontSize='4xl'>{movie.title}</Text>
                <Text fontSize='1xl' w="70%" mt={5}>{movie.overview}</Text>
                <Badge colorScheme='purple' p={1} mb={3} mr={5} pl={3} pr={3} mt={2}>{movie.vote_average}</Badge>
                <Badge colorScheme='red' p={1} mb={3} pl={3} pr={3} mt={2}>{movie.release_date}</Badge>
                <br />
                {
                    bookingMovies.find((elm)=>elm.movie_id==id) ? <Button onClick={showTicketHandler} colorScheme='yellow'>Show Booking Details</Button> : 
                    <Button onClick={bookTicketHandler} colorScheme='whatsapp'>Book Tickets</Button>
                }
                </Box>
            </Grid>
    )
}
export default DetailsPage;