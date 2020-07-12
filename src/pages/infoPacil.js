import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Landing from '../components/landing'
import Container from 'react-bootstrap/Container'

import Styles from '../styles/infoPacil'

export default function infoPacil() {
    const title = "Info Fasilkom"
    const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum ab voluptates ullam excepturi doloribus nihil voluptate quos consectetur delectus?"

    return (
        <Styles>
            <Navbar/>
            <Landing page="infoPacil" color="#6699FF" title={title} desc={desc} />
            <Container>
                <h1>Info Fasilkom</h1>
            </Container>
            <div className="gap"></div>
            <Footer />
        </Styles>
    )
}

