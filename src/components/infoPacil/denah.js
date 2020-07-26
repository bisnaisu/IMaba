import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import data from '../../data/pacil-denah.json'
import next from '../../assets/infoPacil/carousel-next.png'
import prev from '../../assets/infoPacil/carousel-prev.png'

export default class denah extends Component {
    state = { gedung: "lama", key: 0, lantai: 0 }

    displayDenah(idx) {
    const old = data.old[idx]
        if (Number(idx) === Number(2)) {
            const lantai = this.state.lantai
            return (
                <div>
                    <div className="navigasi d-flex align-items-center">
                        {lantai > 0 && 
                        <span onClick={() => this.setState({ lantai: parseInt(lantai-1) })}><img alt="prev" src={prev} /></span>}
                        <h3>
                            Lantai {this.state.lantai + parseInt(1)}<br/>
                            {old.title}
                        </h3>
                        {lantai < parseInt(old.lantai.length-1) && 
                        <span onClick={() => this.setState({ lantai: parseInt(lantai+1) })}><img alt="next" src={next} /></span>}
                    </div>
                    <Row>
                        <Col lg={6} md={10}><img alt="denah" src={require(`../../assets/infoPacil/denah/old-${old.lantai[lantai].key}.svg`)} /></Col>
                        <Col lg={6} md={10}>
                            <h4 className="mt-2">Keterangan: </h4>
                            <ul>{ old.lantai[lantai].desc.map( (i, idx) => (<li key={idx}>{i}</li>))}</ul>
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (
                <div>
                    <h3 className="text-center">{old.title}</h3>
                    <Row>
                        <Col lg={6} md={10}><img alt="denah" src={require(`../../assets/infoPacil/denah/old-${old.key}.svg`)} /></Col>
                        <Col lg={6} md={10}>
                            <h4 className="mt-2">Keterangan: </h4>
                            { old.desc.map( (i, idx) => (
                                <div key={idx}>
                                    <b>{i.head}</b>
                                    <ul>{ i.body.map( (j, id) => <li key={id}>{j}</li> )}</ul>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </div>
            )
        } 
    }

    displayGedung() {        
        const { old, baru } = data
        if (this.state.gedung === "lama") {
            return (
                <Card className="subcard">
                    <Card.Header>                    
                        <Tabs
                            id="controlled-tab"
                            activeKey={this.state.key}
                            onSelect={(k) => this.setState({ key: k, lantai: 0 })}
                        >
                            { old.map( (gedung, idx) => (<Tab key={idx} eventKey={idx} title={gedung.title}></Tab>))}
                        </Tabs>
                    </Card.Header>
                    <Card.Body>
                        {this.displayDenah(this.state.key)}
                    </Card.Body>
                </Card>
            )
        } else {
            const lantai = this.state.lantai
            return (
                <Card className="subcard">
                    <Card.Body>
                    <div className="navigasi d-flex align-items-center">
                        {lantai > 0 && 
                        <span onClick={() => this.setState({ lantai: parseInt(lantai-1) })}><img alt="prev" src={prev} /></span>}
                        <h3>
                            Lantai {lantai > 0 ? lantai : "Dasar"}
                        </h3>
                        {lantai < parseInt(baru.length-1) && 
                        <span onClick={() => this.setState({ lantai: parseInt(lantai+1) })}><img alt="next" src={next} /></span>}
                    </div>
                    <Row>
                        <Col lg={8} md={10}><img alt="denah" src={require(`../../assets/infoPacil/denah/new-${lantai}.svg`)} /></Col>
                        <Col lg={4} md={10}>
                            <h4 className="mt-2">Keterangan: </h4>
                            <ul>{ baru[lantai].desc.map( (i, idx) => (<li key={idx}>{i}</li>))}</ul>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            )
        }
    }

    render() {
        return (
            <Card id="denah" className="mb-4">
                <h2 className="text-center">Denah Fasilkom</h2>
                <div className="btnwrapper mx-auto">
                    <Button active={this.state.gedung==="lama"} onClick={() => this.setState({ gedung: "lama" })}>Gedung Lama</Button>
                    <Button active={this.state.gedung==="baru"} onClick={() => this.setState({ gedung: "baru" })}>Gedung Baru</Button>
                </div>
                {this.displayGedung()}
            </Card>
        )
    }
}
