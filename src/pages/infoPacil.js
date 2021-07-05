import React, { Component } from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Landing from '../components/landing'
import Container from 'react-bootstrap/Container'

import BadanOtonom from '../components/infoPacil/badanOtonom'
import Budaya from '../components/infoPacil/budaya'
import Denah from '../components/infoPacil/denah'
import FunFacts from '../components/infoPacil/funfacts'
import Kepanitiaan from '../components/infoPacil/kepanitiaan'
import Ngoding101 from '../components/infoPacil/ngoding101'
import PacilLife from '../components/infoPacil/pacilLife'
import YelYel from '../components/infoPacil/yelyel'
import Ukf from '../components/infoPacil/ukf'
import Ukor from '../components/infoPacil/ukor'

import Styles from '../styles/infoPacil'

export default class infoPacil extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
      
    render() {
        const title = "Info Fasilkom"
        const desc = "Tak kenal maka tak sayang. Yuk, kenali Fasilkom lebih dalam! Halaman ini akan menjelaskan berbagai macam hal tentang fakultas kita tercinta."

        return (
            <Styles>
                <Navbar/>
                <Landing page="infoPacil" color="#6699FF" title={title} desc={desc} />
                <Container>
                    <Budaya />
                    <PacilLife />
                    <Ngoding101 />
                    <Denah />
                    <YelYel />
                    <BadanOtonom />
                    <Kepanitiaan />
                    <FunFacts />
                    <Ukf/>
                    <Ukor/>
                </Container>
                <div className="gap"></div>
                <Footer />
            </Styles>
        )
    }
}