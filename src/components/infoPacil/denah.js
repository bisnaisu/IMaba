import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

export default class denah extends Component {
    state = { gedung: "lama" }

    displayDenah() {
        if (this.state.gedung === "lama") {
            return (
                <span>denah gedung lama</span>
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
                <div className="btnwrapper">
                    <Button active={this.state.gedung==="lama"} onClick={() => this.setState({ gedung: "lama" })}>Gedung Lama</Button>
                    <Button active={this.state.gedung==="baru"} onClick={() => this.setState({ gedung: "baru" })}>Gedung Baru</Button>
                </div>
            </Card>
        )
    }
}
