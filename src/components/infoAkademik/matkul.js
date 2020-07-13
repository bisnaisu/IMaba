import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

export default class matkul extends Component {
    state = { term: 1 }

    displayTerm = () => {
        if (this.state.term === 1) {
            return (
                <div>
                    <CardDeck className="my-3">
                        <Card className="subcard">a</Card>
                        <Card className="subcard">b</Card>
                        <Card className="subcard">c</Card>
                    </CardDeck>
                    <CardDeck className="my-3">
                        <Card className="subcard">d</Card>
                        <Card className="subcard">e</Card>
                        <Card className="subcard">f</Card>
                    </CardDeck>
                </div>
            )
        } else {
            return (
                <div>
                    <CardDeck className="my-3">
                        <Card className="subcard">g</Card>
                        <Card className="subcard">h</Card>
                        <Card className="subcard">i</Card>
                    </CardDeck>
                    <CardDeck className="my-3">
                        <Card className="subcard">j</Card>
                        <Card className="subcard">k</Card>
                        <Card className="subcard">l</Card>
                    </CardDeck>
                </div>
            )
        }
    }

    render() {
        return (
            <Card id="matkul" className="mb-5 text-center">
                <h2>Mata Kuliah Tahun Pertama</h2>
                <div className="btnwrapper">
                    <Button active={this.state.term === 1} onClick={() => this.setState({term:1})}>Term 1</Button>
                    <Button active={this.state.term === 2} onClick={() => this.setState({term:2})}>Term 2</Button>
                </div>
                {this.displayTerm()}
            </Card>
        )
    }
}
