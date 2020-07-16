import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from 'react-bootstrap/Carousel'
import FlipCard from './flipCard'

import data from '../../data/kampus-kost.json'

export default class infoKehidupan extends Component {
    
    render() {
        const kost = data.kost
        return (
            <Card id="infoKehidupan" className="mb-4">
                <h2 className="text-center">Info Kehidupan</h2>
                <div id="kostan">
                    <p className="text-center">
                        <b>Kostan</b><br/>
                        <small>(hover/tap to flip)</small>
                    </p>                    
                    <Carousel controls indicators={false} className="carousel-lg">
                        <Carousel.Item>
                            <CardDeck>
                                { kost.slice(0,3).map( place => (
                                    <FlipCard 
                                    key={place.name}
                                    front={<img alt={place.name} src={require(`../../assets/infoKampus/kos-${place.name}.svg`)} />}
                                    back={ <div><p>{place.desc}</p><p>Range biaya:<br/>{place.price}</p></div> } 
                                    footer={place.loc} />
                                ))}                            
                            </CardDeck>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardDeck>
                                { kost.slice(3).map( place => (
                                    <FlipCard 
                                    key={place.name}
                                    front={<img alt={place.name} src={require(`../../assets/infoKampus/kos-${place.name}.svg`)} />}
                                    back={ <div><p>{place.desc}</p><p>Range biaya:<br/>{place.price}</p></div> } 
                                    footer={place.loc} />
                                ))}                            
                            </CardDeck>
                        </Carousel.Item>
                    </Carousel>
                    <Carousel controls indicators={false} className="carousel-md">
                        <Carousel.Item>
                            <CardDeck>
                                { kost.slice(0,2).map( place => (
                                    <FlipCard 
                                    key={place.name}
                                    front={<img alt={place.name} src={require(`../../assets/infoKampus/kos-${place.name}.svg`)} />}
                                    back={ <div><p>{place.desc}</p><p>Range biaya:<br/>{place.price}</p></div> } 
                                    footer={place.loc} />
                                ))}                            
                            </CardDeck>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardDeck>
                                { kost.slice(2,4).map( place => (
                                    <FlipCard 
                                    key={place.name}
                                    front={<img alt={place.name} src={require(`../../assets/infoKampus/kos-${place.name}.svg`)} />}
                                    back={ <div><p>{place.desc}</p><p>Range biaya:<br/>{place.price}</p></div> } 
                                    footer={place.loc} />
                                ))}                            
                            </CardDeck>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardDeck>
                                { kost.slice(4).map( place => (
                                    <FlipCard 
                                    key={place.name}
                                    front={<img alt={place.name} src={require(`../../assets/infoKampus/kos-${place.name}.svg`)} />}
                                    back={ <div><p>{place.desc}</p><p>Range biaya:<br/>{place.price}</p></div> } 
                                    footer={place.loc} />
                                ))}                            
                            </CardDeck>
                        </Carousel.Item>
                    </Carousel>
                    <Carousel indicators className="carousel-sm">
                        { kost.map( place => (
                            <Carousel.Item key={place.name}>
                                <FlipCard                             
                                front={<img alt={place.name} src={require(`../../assets/infoKampus/kos-${place.name}.svg`)} />}
                                back={ <div><p>{place.desc}</p><p>Range biaya:<br/>{place.price}</p></div> } 
                                footer={place.loc} />
                            </Carousel.Item>
                        ))}                           
                    </Carousel>
                </div>
                <div id="biaya">
                    <p className="text-center mt-4"><b>Biaya Hidup</b></p>
                    <Card className="subcard">
                        <p>Katanya belum tau mau diisi apa :(</p>
                    </Card>
                </div>
            </Card>
        )
    }
}
