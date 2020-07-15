import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Landing from '../components/landing'
import Container from 'react-bootstrap/Container'

// import Beasiswa from '../components/infoKampus/beasiswa'
import Fakultas from '../components/infoKampus/fakultas'
// import FiturSivitas from '../components/infoKampus/fiturSivitas'
import InfoKehidupan from '../components/infoKampus/infoKehidupan'
import Landmark from '../components/infoKampus/landmark'
import PetaUI from '../components/infoKampus/petaUI'
import Transportasi from '../components/infoKampus/transportasi'

import Styles from '../styles/infoKampus'

export default function infoKampus() {
    const title = "Info Kampus"
    const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum ab voluptates ullam excepturi doloribus nihil voluptate quos consectetur delectus?"

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
                {/* <FiturSivitas />
                <Beasiswa /> */}
            </Container>
            <div className="gap"></div>
            <Footer />
        </Styles>
    )
}

