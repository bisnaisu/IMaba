import React from 'react'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import data from '../../data/pacil-life.json'

export default function pacilLife() {
    const life = data.life
    return (
        <Card id="pacilLife" className="my-4">
            <h2 className="text-center">Living in Fasilkom</h2>
            <Row>
                <Col lg={6} className="kiri">
                    {life.slice(0,5).map( (tips, idx) => (
                        <Row key={idx} className="d-flex align-items-center">
                            <Col xs={9}>
                                <b>{tips.title}</b>
                                <p>{tips.p}</p>
                            </Col>
                            <Col xs={3}>
                                <img alt="" 
                                    src={require(`../../assets/infoPacil/life-${idx}.png`)} 
                                    style={{width:"100%"}} 
                                />                                
                            </Col>
                        </Row>
                    ))}                    
                </Col>
                <Col lg={6} className="kanan">
                    {life.slice(5).map( (tips, idx) => (
                        <Row key={idx} className="d-flex align-items-center">
                            <Col xs={3}>
                                <img alt="" 
                                    src={require(`../../assets/infoPacil/life-${idx+5}.png`)} 
                                    style={{width:"100%"}} 
                                />
                            </Col>
                            <Col xs={9}>
                                <b>{tips.title}</b>
                                <p>{tips.p}</p>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Card>
    )
}
