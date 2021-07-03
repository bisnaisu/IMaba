import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import FlipCard from './flipCard'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

import data from '../../data/kampus-kost.json'
import asset from '../../assets/infoKampus/biaya.png'

export default class infoKehidupan extends Component {
    
    render() {
        const { kost, biaya } = data
        return (
            <Card id="infoKehidupan" className="mb-4">
                <h2 className="text-center">Info Kehidupan</h2>
                <div id="kostan">
                    <p className="text-center">
                        <b>Kostan</b><br/>
                        <small>(hover/tap to flip)</small>
                        <br/>
                        <small>(Peta yang lengkap dapat dilihat di Peta UI di atas)</small>
                    </p>                    
                    <Carousel controls indicators={false} className="carousel-lg">
                        <Carousel.Item >
                            <CardDeck>
                                { kost.slice(0,2).map( place => (
                                    <FlipCard 
                                    key={place.name}
                                    front={<img alt={place.name} src={require(`../../assets/infoKampus/${place.name}-map.png`)} />}
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
                                    front={<img alt={place.name} src={require(`../../assets/infoKampus/${place.name}-map.png`)} />}
                                    back={ <div><p>{place.desc}</p><p>Range biaya:<br/>{place.price}</p></div> } 
                                    footer={place.loc} />
                                ))}                            
                            </CardDeck>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardDeck>
                                { kost.slice(4,6).map( place => (
                                    <FlipCard 
                                    key={place.name}
                                    front={<img alt={place.name} src={require(`../../assets/infoKampus/${place.name}-map.png`)} />}
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
                                    front={<img alt={place.name} src={require(`../../assets/infoKampus/${place.name}-map.png`)} />}
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
                                    front={<img alt={place.name} src={require(`../../assets/infoKampus/${place.name}-map.png`)} />}
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
                                front={<img alt={place.name} src={require(`../../assets/infoKampus/${place.name}-map.png`)} />}
                                back={ <div><p>{place.desc}</p><p>Range biaya:<br/>{place.price}</p></div> } 
                                footer={place.loc} />
                            </Carousel.Item>
                        ))}                           
                    </Carousel>
                </div>
                <div id="biaya">
                    <p className="text-center mt-4"><b>Biaya Hidup</b></p>
                    <Card className="subcard" id="biaya">
                        <p>Untuk kamu yang memilih untuk ngekost, jangan lupa pertimbangkan juga biaya-biaya di bawah ini. </p>
                        <Row>                            
                            <Col lg={8}>
                                <ListGroup variant="flush" className="tips">
                                    { biaya.map( (item, idx) => (
                                        <ListGroup.Item key={idx} className="d-flex align-items-center biaya">
                                            <div><div className="circle">{idx+1}</div></div>
                                            <div>
                                                <p><b>Biaya {item.title}</b><br/>
                                                {item.desc}</p>
                                            </div>
                                        </ListGroup.Item>
                                    ))}                            
                                </ListGroup>
                            </Col>
                            <Col lg={4}><img alt="asset" src={asset} className="asset" /></Col>
                        </Row>
                    </Card>
                </div>
            </Card>
        )
    }
}
