import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Brand from '../assets/iMaba.svg'
import '../styles/navbar.css'

const selected = {
        color: "rgba(0,0,0,.4)"
    }

const navbar = (props) => {
    return (
        <Navbar variant="light" expand="md" fixed="top">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand><Link to="/"><img src={Brand} alt="iMaba"/></Link></Navbar.Brand>
                
                {!props.welcome && (
                    <React.Fragment>
                        <Navbar.Toggle aria-controls="navbar" />
                        <Navbar.Collapse id="navbar" className="justify-content-end">
                            <Nav>         
                                <Nav.Item>                          
                                    <Dropdown as="div">                                                                            
                                        <Dropdown.Toggle as="div"><NavLink to="/akademik" activeStyle={selected}>Akademik</NavLink></Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/imaba/akademik#belajarApa">Belajar Apa</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/akademik#ilkomSI">Ilkom vs. SI</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/akademik#matkul">Mata Kuliah</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/akademik#kurikulum">Kurikulum</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/akademik#scele">Scele</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav.Item>
                                <Nav.Item>                          
                                    <Dropdown as="div">                                    
                                        <Dropdown.Toggle as="div">
                                            <NavLink to="/kampus" activeStyle={selected}>Info Kampus</NavLink>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/imaba/kampus#fakultas">Fakultas</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/kampus#petaUI">Peta UI &amp; Rute Bikun</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/kampus#landmark">Landmark UI</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/kampus#transportasi">Transportasi</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/kampus#infoKehidupan">Info Kehidupan</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/kampus#fitur">Fitur Sivitas UI</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/kampus#beasiswa">Beasiswa</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav.Item>
                                <Nav.Item>                          
                                    <Dropdown as="div">                                    
                                        <Dropdown.Toggle as="div">
                                            <NavLink to="/fasilkom" activeStyle={selected}>Info Fasilkom</NavLink>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/imaba/fasilkom#budaya">Budaya Fasilkom</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/fasilkom#pacilLife">Living in Fasilkom</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/fasilkom#ngoding101">Ngoding101</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/fasilkom#denah">Denah Fasilkom</Dropdown.Item>
                                            <Dropdown.Item href="/imaba/fasilkom#yelyel">Mars dan Yel-Yel</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav.Item>   
                                <Nav.Item>
                                    <NavLink to="/informasi" activeStyle={selected}>Kanal informasi</NavLink>
                                </Nav.Item>                        
                            </Nav>
                        </Navbar.Collapse>
                    </React.Fragment>
                ) }                
            </Container>
        </Navbar>
    )
}

export default navbar
