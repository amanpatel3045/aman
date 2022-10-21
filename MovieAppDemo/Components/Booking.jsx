import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Container,
  Center,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { cancelTicket } from '../Redux/action';

const Booking = () => {
  const dispatch = useDispatch();
  const { bookingMovies } = useSelector((state) => state);
  const handleDelete = (id) => {
    dispatch(cancelTicket(id));
  }
  return (
    <Center mt={10}>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Thank you for your booking</TableCaption>
          <Thead>
            <Tr>
              <Th>Number</Th>
              <Th>Movie Name</Th>
              <Th>Name</Th>
              <Th>Seat No</Th>
              <Th>Cancel Button</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              bookingMovies.map((elm,i) => {
                return <Tr key={Math.random()}>
                  <Td>{i+1}</Td>
                  <Td>{elm.movie}</Td>
                  <Td>{elm.name}</Td>
                  <Td>{elm.seat}</Td>
                  <Td><Button onClick={() => handleDelete(elm.id)} colorScheme='red'>Cancel Booking</Button></Td>
                </Tr>
              })
            }

          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  )
}

export default Booking;