import React from 'react'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import data from '../../data/pacil-yelyel.json'

export default function yelyel() {
    const yelyel = data.yelyel
    return (
        <Card id="yelyel" className="text-center mb-4">
            <h2>Mars dan Yel-Yel Fasilkom</h2>
            <CardDeck>
                { yelyel.map( yel => (
                    <Card key={yel.title} className="subcard">
                        <h3>{yel.title}</h3>
                        <div className="lyrics d-flex flex-column justify-content-center">
                            {yel.lyrics.map( (line, idx) => (
                                <span key={idx}>{line}</span>
                            ))}                            
                        </div>
                    </Card>
                ))}                
            </CardDeck>
        </Card>
    )
}
