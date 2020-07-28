import React, { Component, Suspense } from 'react'
import {Img} from 'react-image'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import petaTempat from '../../assets/infoKampus/peta-ui.svg'
import petaTransport from '../../assets/infoKampus/peta-transport.svg'
import petaBikun from '../../assets/infoKampus/peta-bikun.svg'
import rute from '../../assets/infoKampus/peta-rute.svg'
import legenda from '../../assets/infoKampus/peta-legenda.svg'

export default class petaUI extends Component {
    state = { slide:"tempat"}

    displayPeta = () => {
        const spinner = <Spinner variant="warning" animation="border" />
        if (this.state.slide === "bikun") {
            return (
                <Row className="d-flex align-items-center">
                    <Col sm={8}>
                        <Suspense>
                        <Img id="petaBikun" alt="petaBikun" src={petaBikun} loader={spinner} />
                        </Suspense>
                    </Col>
                    <Col sm={4}>
                        <Img alt="rute" src={rute} style={{borderRadius:"10px"}} loader={spinner} />
                    </Col>
                </Row>
            )
        } else {
            return (
                <Row className="d-flex align-items-center">
                    <Col sm={7}>
                        {this.state.slide === "transportasi" ? 
                        <Img alt="petaUI" src={petaTransport} loader={spinner} /> : 
                        <Img alt="petaUI" src={petaTempat} loader={spinner} />}                        
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
