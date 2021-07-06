import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Ukor from '../../data/Ukor.json'

export default function ukor() {
    const UKOR = Ukor.UKOR
    const size = UKOR.length
    console.log(size)
    return (
        <Card id="ukor" className="mb-4 mt-4">
            <h2 className="text-center">Info UKOR</h2>
            <p className="text-center" style = {{color : '#C6C6C6'}}>
                Untuk info pendaftaran / ingin bertanya, hubungi : (LINE)
                <ul>
                    <li>Ananda Fadhil E. P. : an_fadhil_nowar</li>
                    <li>Dionisius Mikael Sutanto : dionms_</li>
                    <li>Shadqi Marjan Sadiya : masqiqo</li>
                </ul>
            </p>
            <CardColumns id="Column" className="lg">
                    {UKOR.slice(0,10).map(data=>(
                    <Card className="subcard ml-auto mr-auto">
                        <Card.Body>
                            <div className="cardHeader">
                                <img alt="" src={data.img}/>
                                <h2>{data.title}</h2>
                            </div>
                             <p>{data.Desc}</p>
                        </Card.Body>
                    </Card>
                    ))}
            </CardColumns>
                <div className = "Last lg">
                    {UKOR.slice(10).map(data=>(
                    <Card className="subcard ml-auto mr-auto">
                        <Card.Body>
                            <div className="cardHeader">
                                <img alt="" src={data.img}/>
                                <h2>{data.title}</h2>
                            </div>
                            <p>{data.Desc}</p>
                        </Card.Body>
                    </Card>
                    ))}
                </div>
                <CardColumns id="Column" className="md">
                    {UKOR.slice(0,11).map(data=>(
                    <Card className="subcard ml-auto mr-auto">
                        <Card.Body>
                            <div className="cardHeader">
                                <img alt="" src={data.img}/>
                                <h2>{data.title}</h2>
                            </div>
                             <p>{data.Desc}</p>
                        </Card.Body>
                    </Card>
                    ))}
            </CardColumns>
        </Card>
    )
}
