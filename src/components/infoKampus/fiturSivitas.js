import React from 'react'

import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import asset from '../../assets/infoKampus/fitur.png'
import data from '../../data/kampus-fitur.json'

export default function fiturSivitas() {
    const fitur = data.fitur
    return (
        <Card id="fitur" className="mb-4">
            <h2 className="text-center">Fitur-Fitur Sivitas UI</h2>
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={6}><img alt="fitur" src={asset} style={{width:"100%"}} /></Col>
                <Col md={4}><p>Sebagai anak UI, yuk kenali beberapa fitur-fitur yang bisa kamu manfaatkan selama masa perkuliahan!</p></Col>
            </Row>
            <CardColumns>
                { fitur.map( item => (
                    <Card className="subcard" key={item.name}>
                    <img alt="" src={require(`../../assets/infoKampus/fitur-${item.name}.png`)} className="imgtopper" />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <p>More info: <a href={item.link}>{item.link}</a></p>
                </Card>
                ))}                
            </CardColumns> 
        </Card>
    )
}
