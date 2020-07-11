import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Brand from '../assets/iMaba.svg'
import '../styles/navbar.css'

const selected = {
        color: "rgba(0, 0, 0, .3)"
    }

const navbar = (props) => {
    return (
        <Navbar variant="light" expand="md" sticky="top">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand><Link to="/"><img src={Brand} alt="iMaba"/></Link></Navbar.Brand>
                
                {!props.welcome && (
                    <React.Fragment>
                        <Navbar.Toggle aria-controls="navbar" />
                        <Navbar.Collapse id="navbar" className="justify-content-end">
                            <Nav>
                                <NavLink to="/akademik" activeStyle={selected}>Akademik</NavLink>
                                <NavLink to="/UI" activeStyle={selected}>Info Kampus</NavLink>
                                <NavLink to="/fasilkom" activeStyle={selected}>Info Fasilkom</NavLink>
                                <NavLink to="/informasi" activeStyle={selected}>Kanal informasi</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </React.Fragment>
                ) }                
            </Container>
        </Navbar>
    )
}

export default navbar
