import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from 'react-bootstrap/Carousel'
import FlipCard from './flipCard'

export default class infoKehidupan extends Component {
    render() {
        return (
            <Card id="infoKehidupan" className="mb-4">
                <h2 className="text-center">Info Kehidupan</h2>
                <Carousel controls indicators={false} className="carousel-lg">
                    <Carousel.Item>
                        <CardDeck>
                            <FlipCard front="front" back="back" footer="Barel" />
                        </CardDeck>
                    </Carousel.Item>
                </Carousel>
            </Card>
        )
    }
}
