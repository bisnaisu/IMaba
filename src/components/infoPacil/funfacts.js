import React from 'react'

import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import asset from '../../assets/infoPacil/funfacts.png'
import data from '../../data/pacil-funfacts.json'

export default function funfacts() {
    const facts = data.funfacts
    return (
        <Card id="funfacts">
            <h2 className="text-center">Funfacts Fasilkom</h2>
            <Row className="d-flex align-items-center justify-content-center">
                <Col md={5}>
                    <h3>Yuk simak!</h3>
                    <p>Fakta-fakta menarik yang ada di Fakultas Ilmu Komputer yang mungkin dapat membantu kamu selama berkuliah di Fasilkom.</p>
                </Col>
                <Col md={4}><img alt="asset" src={asset} className="asset" /></Col>
            </Row>
            <Card className="subcard">
                <Carousel controls indicators >
                    { facts.map( fact => (
                        <Carousel.Item key={fact.name} className="fact">
                            <Row className="funfacts">
                                <Col xl={3} lg={4} md={5}>
                                    {fact.name === "cs" || fact.name === "kontingen" ? 
                                    <img alt="" src={require(`../../assets/iconlogo/${fact.name}.png`)} />
                                    : <img alt="" src={require(`../../assets/infoPacil/funfacts-${fact.name}.png`)} />}
                                </Col>
                                <Col xl={9} lg={8} md={10}>
                                    <h3>{fact.title}</h3>
                                    <p>{fact.desc}</p>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    ))}                    
                </Carousel>
            </Card>
        </Card>
    )
}
