import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

import Styles from '../styles/welcome'

const directory = [
        { title: ["Info", "Akademik"], imgName: "akademikCard.svg", to: "/akademik", class:"akademik" },
        { title: ["Info", "Kampus"], imgName: "kampusCard.svg", to: "/kampus", class:"kampus" },
        { title: ["Info", "Fasilkom"], imgName: "fasilkomCard.svg", to: "/fasilkom", class:"fasilkom" },
        { title: ["Kanal", "Informasi"], imgName: "informasiCard.svg", to: "/informasi", class:"informasi" },
    ]

export default function welcome() {
    return (
        <Styles>
            <Navbar welcome={true} />
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
            <div id="welcome">
                <Container>
                    <div className="gap"></div>
                    <h2>Selamat Datang,</h2>
                    <h1><b>Mahasiswa Baru Fasilkom UI 2020!</b></h1>
                    <p>iMaba hadir untuk memberikan informasi-informasi penting dan menarik seputar akademik, kampus UI, Fasilkom, serta kanal informasi yang dapat kamu hubungi. </p>
                    <CardDeck>
                        {directory.map( card => (                    
                            <Card className={card.class} key={card.class}>
                                <Link to={card.to}>
                                <Card.Img variant="top" src={ require(`../assets/welcomePage/${card.imgName}`) } />
                                <Card.Body>
                                    <Card.Title><h3>{card.title[0]}<br/>{card.title[1]}</h3></Card.Title>
                                </Card.Body>
                                </Link>
                            </Card>                        
                        ))}                    
                    </CardDeck>
                    <div className="gap"></div>
                </Container>
            </div>
            <Footer />
        </Styles>
    )
}

