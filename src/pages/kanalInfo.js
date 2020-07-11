import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Container from 'react-bootstrap/Container'

import Styles from '../styles/kanalInfo'

export default function kanalInfo() {
    return (
        <Styles>
            <Navbar/>
            <div className="gap"></div>
            <Container>
                <h1>Kanal Informasi</h1>
            </Container>
            <div className="gap"></div>
            <Footer />
        </Styles>
    )
}

