import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <>
            <Header />
            <Container  className="mt-3">
                <Row>
                    <Col lg='2'  className='d-none d-lg-block'>
                        <LeftSideNav />
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightSideNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Main;