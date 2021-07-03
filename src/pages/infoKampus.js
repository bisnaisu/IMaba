import React, { Component } from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Landing from '../components/landing'
import Container from 'react-bootstrap/Container'

import Beasiswa from '../components/infoKampus/beasiswa'
import Fakultas from '../components/infoKampus/fakultas'
import FiturSivitas from '../components/infoKampus/fiturSivitas'
import InfoKehidupan from '../components/infoKampus/infoKehidupan'
import Landmark from '../components/infoKampus/landmark'
import PetaUI from '../components/infoKampus/petaUI'
import Transportasi from '../components/infoKampus/transportasi'
import InfoUKM from '../components/infoKampus/ukm'

import Styles from '../styles/infoKampus'

export default class infoKampus extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        const title = "Info Kampus"
        const desc = "Mau keliling UI tapi tidak tahu jalan? Mau ngekost tapi bingung di mana? Ingin tahu tempat-tempat ikonis di UI? Semua pertanyaanmu akan terjawab di halaman ini. Ayo, makin kenal dengan kampus kita!"

        return (
            <Styles>
                <Navbar/>
                <Landing page="infoKampus" color="#FFB400" title={title} desc={desc} />
                <Container>
                    <Fakultas />
                    <PetaUI />
                    <Landmark />
                    <Transportasi />
                    <InfoKehidupan />
                    <FiturSivitas />
                    <Beasiswa />
                    <InfoUKM/>
                </Container>
                <div className="gap"></div>
                <Footer />
            </Styles>
        )
    }
}

