import React from 'react'

import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Landing from '../components/landing'

import kanal from '../data/kanalInfo.json'
import Styles from '../styles/kanalInfo'

export default function kanalInfo() {
    const title = "Kanal Informasi"
    const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum ab voluptates ullam excepturi doloribus nihil voluptate quos consectetur delectus?"
    const data = kanal.info

    return (
        <Styles>
            <Navbar/>
            <Landing page="kanalInfo" color="#F03F91" title={title} desc={desc} />
            <Container>
                <CardColumns>
                    {data.map( item => (
                        <Card>
                            <Card.Body> 
                                <div className="cardHeader">
                                    <img alt={item.title} src={ require(`../assets/iconlogo/${item.logo}`) } />
                                    <h2>{item.title}</h2>
                                </div>           
                                <Row>
                                    <Col xs={7}><p>{item.desc}</p></Col> 
                                    <Col xs={5}>
                                        {item.contacts[0].narahubung.map( person => (
                                            <span>
                                                {person.nama}<br />
                                                <i class="fas fa-phone-square-alt"></i> {person.hp}<br />
                                                <img alt="line" src={ require(`../assets/iconlogo/line.svg`) } /> {person.line}<br/>
                                            </span>
                                        ))}<br/>
                                        {item.contacts[1].socmed.telp && (<span><i class="fas fa-phone-volume"></i> {item.contacts[1].socmed.telp}<br/></span>)}
                                        {item.contacts[1].socmed.fax && (<span><i class="fas fa-fax"></i>(fax) {item.contacts[1].socmed.fax}<br/></span>)}
                                        {item.contacts[1].socmed.email && (<span><i class="fas fa-envelope-square"></i> {item.contacts[1].socmed.email}<br/></span>)}
                                        {item.contacts[1].socmed.twitter && (<span><i class="fab fa-twitter"></i>{item.contacts[1].socmed.twitter}<br/></span>)}
                                        {item.contacts[1].socmed.ig && (<span><i class="fab fa-instagram"></i> {item.contacts[1].socmed.ig}<br/></span>)}
                                        {item.contacts[1].socmed.fb && (<span><i class="fab fa-facebook-square"></i> {item.contacts[1].socmed.fb}<br/></span>)}
                                        {item.contacts[1].socmed.web && (<span><i class="fas fa-globe"></i> {item.contacts[1].socmed.web}<br/></span>)}
                                    </Col>   
                                </Row>  
                            </Card.Body>                            
                        </Card>
                    ))}
                </CardColumns>
            </Container>
            <div className="gap"></div>
            <Footer />
        </Styles>
    )
}

