import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Landing from '../components/landing'
import Container from 'react-bootstrap/Container'

import Styles from '../styles/infoKampus'

export default function infoKampus() {
    const title = "Info Kampus"
    const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum ab voluptates ullam excepturi doloribus nihil voluptate quos consectetur delectus?"

    return (
        <Styles>
            <Navbar/>
            <Landing page="infoKampus" color="#FFB400" title={title} desc={desc} />
            <Container>
                <h1>Info Kampus</h1>
            </Container>
            <div className="gap"></div>
            <Footer />
        </Styles>
    )
}

