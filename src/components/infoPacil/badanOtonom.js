import React from 'react'

import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import data from '../../data/pacil-bo.json'

export default function badanOtonom() {
    const bo = data.bo
    return (
        <Card id="badanOtonom" className="mb-4">
            <h2 className="text-center">Organisasi &amp; Badan Otonom</h2>
            <CardColumns>
                { bo.map( item => (
                    <Card key={item.name} className="subcard">
                        <Card.Body> 
                            <div className="cardHeader">
                                <img alt={item.title} src={ require(`../../assets/iconlogo/${item.name}.png`) } />
                                <h2>{item.title}</h2>
                            </div>
                            {!(item.name === "kmk") && 
                            item.desc.map( (p, idx) => (<p key={idx}>{p}</p>))}
                            {item.name === "kmk" && 
                            <><p>{item.desc[0]}</p><p>{item.desc[1]} <i>{item.desc[2]}</i> {item.desc[3]}</p></>}                             
                            <div>
                                <b>Social Media:<br /></b>
                                {item.socmed.line && (<span><img alt="line" src={ require(`../../assets/iconlogo/line.svg`) } /> {item.socmed.line}<br/></span>)}
                                {item.socmed.twitter && (<span><i className="fab fa-twitter"></i>{item.socmed.twitter}<br/></span>)}
                                {item.socmed.ig && (<span><i className="fab fa-instagram"></i> {item.socmed.ig}<br/></span>)}
                                {item.socmed.fb && (<span><i className="fab fa-facebook-square"></i> {item.socmed.fb}<br/></span>)}
                                {item.socmed.web && (<span><i className="fas fa-globe"></i> <a href={`http://${item.socmed.web}`} target="blank">{item.socmed.web}</a> <br/></span>)}
                                {item.socmed.email && (<span><i className="fas fa-envelope-square"></i> {item.socmed.email}<br/></span>)}                        
                            </div>   
                        </Card.Body>
                    </Card>
                ))}                
            </CardColumns>
        </Card>
    )
}
