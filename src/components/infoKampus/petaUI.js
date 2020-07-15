import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import petaTempat from '../../assets/infoKampus/peta-ui.png'
import petaTransport from '../../assets/infoKampus/peta-transport.png'
import petaBikun from '../../assets/infoKampus/peta-bikun.svg'
import rute from '../../assets/infoKampus/peta-rute.png'
import legenda from '../../assets/infoKampus/peta-legenda.png'

export default class petaUI extends Component {
    state = { slide:"tempat"}

    displayPeta = () => {
        if (this.state.slide === "bikun") {
            return (
                <Row className="d-flex align-items-center">
                    <Col sm={8}>
                        <img id="petaBikun" alt="petaBikun" src={petaBikun} />
                    </Col>
                    <Col sm={4}>
                        <img alt="rute" src={rute} style={{borderRadius:"10px"}} />
                    </Col>
                </Row>
            )
        } else {
            return (
                <Row className="d-flex align-items-center">
                    <Col sm={7}>
                        {this.state.slide === "transportasi" ? 
                        <img alt="petaUI" src={petaTransport} /> : 
                        <img alt="petaUI" src={petaTempat} />}                        
                    </Col>
                    <Col sm={5}>
                        <img alt="legenda" src={legenda} style={{borderRadius:"10px"}} />
                    </Col>
                </Row>
            )
        }
    }

    render() {
        return (
            <Card id="petaUI" className="my-4 text-center">
                <h2>Peta UI</h2>
                <div className="btnwrapper">
                    <Button onClick={() => this.setState({slide:"tempat"})} active={this.state.slide === "tempat"}>Tempat</Button>
                    <Button onClick={() => this.setState({slide:"transportasi"})} active={this.state.slide === "transportasi"}>Transportasi</Button>
                    <Button onClick={() => this.setState({slide:"bikun"})} active={this.state.slide === "bikun"}>Bikun</Button>
                </div>
                <div className="subcard">
                    {this.displayPeta()}
                </div>
            </Card>
        )
    }
}
