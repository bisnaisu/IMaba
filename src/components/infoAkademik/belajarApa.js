import React from 'react'

import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

import data from '../../data/akademik-belajarApa.json'

const subcards = data.belajar

export default function BelajarApa() {
    return (
        <Card id="belajarApa" className="text-center">
            <h2>Belajar apa aja di Fasilkom?</h2>
            <CardDeck>
                {subcards.map( subcard => (
                    <Card className="subcard" key={subcard.title}>
                        <h3>{subcard.title}</h3> 
                        <Card.Body className="content">
                            <img alt={subcard.title} src={ require(`../../assets/infoAkademik/${subcard.asset}`)} />
                            <p>{subcard.desc}</p>
                        </Card.Body>
                    </Card>
                ))}
            </CardDeck>
        </Card>
    )
}
