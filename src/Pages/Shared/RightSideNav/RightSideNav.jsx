import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub,FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, FaLinkedin} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousels from '../Carousels/Carousels';
import { AuthContext } from './../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSingIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    
    return (
        <div >
            <Button onClick={handleGoogleSingIn} className='mb-2 w-full' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button className='w-full' variant="outline-dark" ><FaGithub /> Login With GitHub</Button>

            <div className='mt-4'>
                <h2>Fount On</h2>
                <ListGroup>
                    <ListGroup.Item className='mb-4'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><FaLinkedin/> Linkedin</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carousels/>
            </div>
        </div>

    );
};

export default RightSideNav;