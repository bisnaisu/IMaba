import React from 'react'

import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

import data from '../../data/infoAkademik/belajarApa.json'

const subcards = data.belajar

export default function BelajarApa() {
    return (
        <Card className="text-center">
            <h2>Belajar apa aja di Fasilkom?</h2>
            <CardDeck>
                {subcards.map( subcard => (
                    <Card className="subcard">
                        <h3>{subcard.title}</h3> 
                        <img alt={subcard.title} src={ require(`../../assets/infoAkademik/${subcard.asset}`)} />
                        <p>{subcard.desc}</p>
                    </Card>
                ))}
            </CardDeck>
        </Card>
    )
}
