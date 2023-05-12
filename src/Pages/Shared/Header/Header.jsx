import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';




const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error = console.error(error));
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/">Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/'>Home</Nav.Link>
                        <Nav.Link to='/news/:id'>News</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">{
                            user?.uid ?
                                <>
                                    <span className='me-2'>{user?.displayName}</span>
                                    <Button  onClick={handleLogOut} variant="outline-primary">Log Out</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                        }</Nav.Link>
                        <Nav.Link eventKey={2} href="#">{user?.photoURL ?
                        <> 
                            <Image className='me-4'
                                src={user?.photoURL}
                                style={{ height: '30px' }}
                                roundedCircle
                            ></Image>
                           
                            </>
                            :
                            <FaUser></FaUser>
                        }</Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;