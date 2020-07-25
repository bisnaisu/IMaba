import React from 'react'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import data from '../../data/kampus-transport.json'

export default function transportasi() {
    const transport = data.transport
    return (
        <Card id="transportasi" className="mb-4">
            <h2 className="text-center">Transportasi Menuju UI</h2>
            <CardDeck>
                { transport.slice(0,2).map( vehicle => (
                    <Card key={vehicle.name} className="subcard mx-3">
                        <img alt="" src={ require(`../../assets/infoKampus/transport-${vehicle.name}.svg`) } style={{height:"10rem", margin:"1rem auto"}} />
                        <h3 className="text-center"><b>{vehicle.title}</b></h3>
                        {vehicle.desc.map( (p, idx) => 
                          <p key={idx} style={{padding:"0 1rem"}}>{p}</p>
                        )}
                    </Card>
                ))}                
            </CardDeck>
            <CardDeck>
                { transport.slice(2).map( vehicle => (
                    <Card key={vehicle.name} className="subcard mx-3">
                        <img alt="" className="lozad" src={ require(`../../assets/infoKampus/transport-${vehicle.name}.svg`) } style={{height:"10rem", margin:"1rem auto"}} />
                        <h3 className="text-center"><b>{vehicle.title}</b></h3>
                        <p style={{padding:"0 1rem"}}>{vehicle.desc}</p>
                    </Card>
                ))}                
            </CardDeck>
        </Card>
    )
}
