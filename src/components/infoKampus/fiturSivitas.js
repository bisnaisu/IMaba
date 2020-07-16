import React from 'react'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import asset from '../../assets/infoKampus/fitur.svg'

export default function fiturSivitas() {
    return (
        <Card id="fitur" className="mb-4">
            <h2 className="text-center">Fitur-Fitur Sivitas UI</h2>
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={6}><img alt="fitur" src={asset} style={{width:"100%"}} /></Col>
                <Col md={4}><p>Sebagai anak UI, yuk kenali beberapa fitur-fitur yang bisa kamu manfaatkan selama masa perkuliahan!</p></Col>
            </Row>
        </Card>
    )
}
