import React from 'react'

import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import asset from '../../assets/infoPacil/budaya.svg'
import data from '../../data/pacil-budaya.json'

export default function budaya() {
    const budayas = data.budaya
    return (
        <Card id="budaya">
            <h2 className="text-center">Kebudayaan Fasilkom</h2>
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={4}><img alt="asset" src={asset} style={{width:"100%"}} /></Col>
                <Col md={5}> <p>Karena kamu sudah menjadi bagian dari Fasilkom, yuk kenali dan terapkan budaya-budaya yang ada di Fasilkom berikut!</p> </Col>
            </Row>
            <CardColumns>
                { budayas.map( (budaya, idx) => (
                    <Card className="subcard" key={idx}>
                        <h3>{budaya.title}</h3>
                        <p>{budaya.p}</p>
                    </Card>
                ))}
            </CardColumns>
        </Card>
    )
}
