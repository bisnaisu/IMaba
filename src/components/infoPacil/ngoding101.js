import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

import asset from '../../assets/infoPacil/ngoding.svg'
import data from '../../data/pacil-ngoding.json'

export default class ngoding101 extends Component {
    state = { slide: "tips" }

    displaySlide() {
        const tips = data.tips
        const belajar = data.belajar
        const latihan = data.latihan
        if (this.state.slide==="tips") {
            return (
                <div>
                    <Row>
                        <Col lg={5}><img alt="asset" src={asset} className="asset" /></Col>
                        <Col lg={7}>
                            <p>Pada tahun pertama di Fasilkom, kamu akan belajar bahasa pemrograman <b>Python</b> dan <b>Java</b>. Nahh, apa saja yaa, tips-tips untuk belajar ngoding?</p>
                            <ListGroup variant="flush" className="tips">
                                { tips.map( (tips, idx) => (
                                    <ListGroup.Item key={idx} className="d-flex align-items-center">
                                        <div><div className="circle">{idx+1}</div></div>
                                        <div>{tips}</div>
                                    </ListGroup.Item>
                                ))}                            
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row className="mt-3 ddp justify-content-center">
                        <p>Buat kamu yang belum pernah ngoding sebelumnya atau ingin latihan ngoding, bisa banget nih daftar <b>DDP0</b>. Di DDP0 kamu akan belajar bersama kakak tingkat mengenai dasar-dasar dalam pemrograman.</p>
                    </Row>
                </div>
            )
        } else {
            return (
                <div className="resource">
                    <div className="headcard">Untuk Belajar Ngoding</div>
                    <CardDeck>
                        { belajar.map( site => (                            
                                <Card key={site.name} className="subcard">                               
                                    <Card.Body className="d-flex flex-column justify-content-center"><a href={site.to} target="blank"><img alt="" src={require(`../../assets/iconlogo/${site.name}.png`)} /></a></Card.Body>
                                    <Card.Footer><a href={site.to} target="blank">{site.title}</a></Card.Footer>
                                </Card>                            
                        ))}                        
                    </CardDeck>
                    <div className="headcard">Untuk Latihan Ngoding</div>
                    <CardDeck>
                        { latihan.map( site => (
                            <Card key={site.name} className="subcard">
                                <Card.Body className="d-flex flex-column justify-content-center"><a href={site.to} target="blank"><img alt="" src={require(`../../assets/iconlogo/${site.name}.png`)} /></a></Card.Body>
                                <Card.Footer><a href={site.to} target="blank">{site.title}</a></Card.Footer>
                            </Card>
                        ))}                        
                    </CardDeck>
                </div>
            )
        }
    }

    render() {        
        return (
            <Card id="ngoding101" className="mb-4">
                <h2 className="text-center">Ngoding101</h2>
                <div className="btnwrapper mx-auto mb-2">
                    <Button active={this.state.slide==="tips"} onClick={()=>this.setState({slide:"tips"})}>Tips</Button>
                    <Button active={this.state.slide==="resource"} onClick={()=>this.setState({slide:"resource"})}>Resources</Button>
                </div>
                {this.displaySlide()}
            </Card>
        )
    }
}
