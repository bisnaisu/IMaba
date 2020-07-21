import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export default class denah extends Component {
    state = { gedung: "lama", key: "gedung" }

    displayDenah() {
        switch (this.state.key) {
            case "gedung": return(<span>denah gedung</span>);
            case "a": return(<span>denah gedung a</span>);
            case "b": return(<span>denah gedung b</span>);
            case "c": return(<span>denah gedung c</span>);
            default: break;
        }
    }

    displayGedung() {        
        if (this.state.gedung === "lama") {
            return (
                <Card className="subcard">
                    <Card.Header>                    
                        <Tabs
                            id="controlled-tab"
                            activeKey={this.state.key}
                            onSelect={(k) => this.setState({ key: k })}
                        >
                            <Tab eventKey="gedung" title="Denah Gedung"></Tab>
                            <Tab eventKey="a" title="Gedung A"></Tab>
                            <Tab eventKey="b" title="Gedung B"></Tab>
                            <Tab eventKey="c" title="Gedung C"></Tab>
                        </Tabs>
                    </Card.Header>
                    <Card.Body>
                        {this.displayDenah()}
                    </Card.Body>
                </Card>
            )
        } else {
            return (
                <span>denah gedung baru</span>
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
