import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Container from 'react-bootstrap/Container'

import Styles from '../styles/infoPacil'

export default function infoPacil() {
    return (
        <Styles>
            <Navbar/>
            <div className="gap"></div>
            <Container>
                <h1>Info Fasilkom</h1>
            </Container>
            <div className="gap"></div>
            <Footer />
        </Styles>
    )
}

