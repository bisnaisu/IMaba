import React from 'react'

import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Ukf from '../../data/Ukf.json'

export default function ukf() {
    const UKF = Ukf.UKF
    return (
            <Card id="ukf" className="mb-4 mt-4">
                <h2 className="text-center">Info UKF</h2>
                <p className="text-center" style = {{color : '#C6C6C6'}}>Untuk info pendaftaran /  ingin bertanya,
                <br/>dapat dikontak IG dari UKF masing-masing.</p>
                <CardColumns id="Column" className="lg">
                    {UKF.slice(0,4).map(data=>(
                        <Card className="subcard ml-auto mr-auto">
                        <Card.Body>
                            <div className="cardHeader">
                                <img alt={data.title} src={ require(`../../assets/iconlogo/${data.img}.png`) } />
                                <h2>{data.title}</h2>
                            </div>
                            <p>{data.contain}</p>
                            <div className="link">            
                            {data.link.map(link=>(
                                   <div>
                                        <a href={link.url} target="blank">{link.url}</a>
                                        <br/>
                                   </div>
                            ))}
                            </div>
                        </Card.Body>
                    </Card>
                    ))}
                </CardColumns>
                <div className = "Last lg">
                    {UKF.slice(4).map(data=>(
                        <Card className="subcard">
                        <Card.Body>
                            <div className="cardHeader">
                            <img alt={data.title} src={ require(`../../assets/iconlogo/${data.img}.png`) } />
                                <h2>{data.title}</h2>
                            </div>
                            <p>{data.contain}</p>                          
                            {data.link.map(link=>(
                                <div>
                                    <a href={link.url} target="blank">{link.url}</a>
                                    <br/>
                                </div>
                                
                            ))}
                        </Card.Body>
                    </Card>
                    ))}
                </div>

                <CardColumns id="Column" className="md">
                    {UKF.slice(0,5).map(data=>(
                        <Card className="subcard ml-auto mr-auto">
                        <Card.Body>
                            <div className="cardHeader">
                                <img alt="" src={data.img}/>
                                <h2>{data.title}</h2>
                            </div>
                            <p>{data.contain}</p>                          
                            {data.link.map(link=>(
                                <div>
                                    <a href={link.url} target="blank">{link.url}</a>
                                    <br/>
                                </div>
                                
                            ))}
                        </Card.Body>
                    </Card>
                    ))}
                </CardColumns>
                
            </Card>
    )
}
