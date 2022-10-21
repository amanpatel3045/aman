import { Box, Button, Center, Input } from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllMovies, getMovies, loginSuccess } from '../Redux/action';

const Login = () => {
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const {loading,isLoginDone} = useSelector((state) => state);
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        let {name,value} = e.target;
        setData({...data,[name]:value})
    }
    const handleSubmit = () => {
        dispatch(loginSuccess(data));
        setData({
            email: "",
            password: ""
        })
    }
    if(isLoginDone) {
        navigate("/")
    }
    return (
        <Box w="500px" m="auto" mt="50px">
            <Input placeholder='Enter Email' name="email" value={data.email} onChange={handleChange}/>
            <Input placeholder='Enter Password' name="password" mt={5} value={data.password} onChange={handleChange}/>
            <Button mt={10} onClick={handleSubmit} colorScheme='twitter' isLoading={loading}>Submit</Button>
        </Box>
    )
}
export default Login;