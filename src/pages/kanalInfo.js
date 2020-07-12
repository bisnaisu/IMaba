import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Landing from '../components/landing'

import Styles from '../styles/kanalInfo'

export default function kanalInfo() {
    const title = "Kanal Informasi"
    const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum ab voluptates ullam excepturi doloribus nihil voluptate quos consectetur delectus?"
 
    return (
        <Styles>
            <Navbar/>
            <Landing page="kanalInfo" color="#F03F91" title={title} desc={desc} />
            <Container>
                <h1>Kanal Informasi</h1>
            </Container>
            <div className="gap"></div>
            <Footer />
        </Styles>
    )
}

