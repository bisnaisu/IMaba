import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import data from '../../data/pacil-kepanitiaan.json'

export default class kepanitiaan extends Component {
    state = { slide: "bem" }

    displaySlide() {
        const bem = data.bem
        const dpm = data.dpm
        if (this.state.slide === "bem") {
            return (
                <CardColumns>
                    { bem.map( item => (
                        <Card key={item.name} className="subcard">
                            <Card.Body> 
                                <div className="cardHeader">
                                    <img alt={item.title} src={ require(`../../assets/iconlogo/${item.name}.png`) } />
                                    <h2>{item.title}</h2>
                                </div>
                                <p>{item.desc}</p>                          
                                <a href={item.link}>{item.link}</a>  
                            </Card.Body>
                        </Card>
                    ))}                    
                </CardColumns>
            )
        } else {
            return (
                <CardColumns>
                    { dpm.map( item => (
                        <Card key={item.name} className="subcard">
                            <Card.Body> 
                                <div className="cardHeader">
                                    <img alt={item.title} src={ require(`../../assets/iconlogo/${item.name}.png`) } />
                                    <h2>{item.title}</h2>
                                </div>
                                <p>{item.desc}</p>                          
                                <a href={item.link}>{item.link}</a>   
                            </Card.Body>
                        </Card>
                    ))}                    
                </CardColumns>
            )   
        }
    }

    render() {
        return (
            <Card id="kepanitiaan" className="mb-4">
                <h2 className="text-center">Kepanitiaan</h2>
                <div className="btnwrapper mx-auto">
                    <Button active={this.state.slide==="bem"} onClick={() => this.setState({ slide: "bem" })}>BEM</Button>
                    <Button active={this.state.slide==="dpm"} onClick={() => this.setState({ slide: "dpm" })}>DPM</Button>
                </div>
                {this.displaySlide()}
            </Card>
        )
    }
}
