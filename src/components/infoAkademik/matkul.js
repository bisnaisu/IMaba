import React, { Component } from 'react'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from 'react-bootstrap/Carousel'

import data from '../../data/akademik-matkul.json'

export default class matkul extends Component {
    state = { term: 1 }

    matkulCard = (name, prodi, sks, desc) => {
        return (
            <Card key={name} className="subcard">
                <div className="header">
                    <h3>{name}</h3>
                    <div className="badgewrapper">
                        <Badge variant={prodi === "IK/SI" ? "success" : (prodi === "IK" ? "primary" : "secondary")}>{prodi}</Badge>
                        <Badge variant="success">{sks} SKS</Badge>
                    </div>                    
                </div>
                <p>{desc}</p>
            </Card>
        )
    }

    displayCarousel = (term) => {
        return (
            <div>
                <Carousel controls indicators className="carousel-xl">
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(0,3).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(3,6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className={`my-3 term${this.state.term}`}>
                            { term.slice(6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                </Carousel>
                <Carousel controls indicators className="carousel-lg">
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(0,2).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(2,4).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(4,6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className={`my-3 term${this.state.term}`}>
                            { term.slice(6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                </Carousel>
                <Carousel controls={false} indicators className="carousel-md">
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(0,2).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(2,4).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(4,6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className={`my-3 term${this.state.term}`}>
                            { term.slice(6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                </Carousel>
                <Carousel controls={false} indicators className="carousel-sm">
                    { term.map( item => (
                        <Carousel.Item key={item.name}>
                            {this.matkulCard(item.name, item.prodi, item.sks, item.desc)}
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        )
    }

    displayTerm = () => {
        const { term1 } = data
        if (this.state.term === 1) {
            return this.displayCarousel(term1)
        } else {
            return (
                <Card className="subcard d-flex justify-content-center text-center comingsoon">
                    <div>Information coming soon!</div>
                </Card>
            )
        }
    }

    render() {
        return (
            <Card id="matkul" className="mb-4 text-center">
                <h2>Mata Kuliah Tahun Pertama</h2>
                <div className="btnwrapper">
                    <Button active={this.state.term === 1} onClick={() => this.setState({term:1})}>Term 1</Button>
                    <Button active={this.state.term === 2} onClick={() => this.setState({term:2})}>Term 2</Button>
                </div>
                <div className="mt-1">*IK: Ilmu Komputer, SI: Sistem Informasi</div>
                {this.displayTerm()}
            </Card>
        )
    }
}
