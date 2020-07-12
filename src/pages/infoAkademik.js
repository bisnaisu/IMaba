import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Landing from '../components/landing'
import Container from 'react-bootstrap/Container'

import Styles from '../styles/infoAkademik'

export default function infoAkademik() {
    const title = "Info Akademik"
    const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum ab voluptates ullam excepturi doloribus nihil voluptate quos consectetur delectus?"

    return (
        <Styles>
            <Navbar/>
            <Landing page="infoAkademik" color="#05AC72" title={title} desc={desc} />
            <Container>
                <h1>Info Akademik</h1>
            </Container>
            <div className="gap"></div>
            <Footer />
        </Styles>
    )
}

