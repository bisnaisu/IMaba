import React, { Component } from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

export default class landing extends Component {

    bg = require(`../assets/${this.props.page}/bg.jpg`)
    

    render() {
        const Landing = styled.div`
            height: 100vh; 
            background: url(${this.bg});
            -webkit-background-position: bottom left;
            -moz-background-position: bottom left;
            -o-background-position: bottom left;
            background-position: bottom left;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;

            display: flex;
            align-items: center;

            h1 {
                font-weight: bold;
                max-width: 50%;
            }

            p {
                font-weight: normal;
                opacity: .7;
            }

            .bar {
                max-width: 75%;
                height: 7px;
                background: ${this.props.color};
            }
            
            @media (max-width:576px) {
                h1 {
                    max-width: 50%; 
                }
                
                .bar {
                    max-width: 100%;
                }
            }

            @media (min-width:576px) {
                p {
                    max-width: 50%;
                }
            }
        `
        return (
            <Landing>
                <Container>
                    <h1>
                        {this.props.title}<br/>
                        <div className="bar"></div>
                    </h1>                
                    <p>{this.props.desc}</p>
                </Container>
            </Landing>
        )
    }
}