import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Landing from '../components/landing'

import BelajarApa from '../components/infoAkademik/belajarApa'
import IlkomSI from '../components/infoAkademik/ilkomSi'
// import Kurikulum from '../components/infoAkademik/kurikulum'
// import Matkul from '../components/infoAkademik/matkul'
// import Scele from '../components/infoAkademik/scele'

import Styles from '../styles/infoAkademik'

export default function infoAkademik() {
    const title = "Info Akademik"
    const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum ab voluptates ullam excepturi doloribus nihil voluptate quos consectetur delectus?"

    return (
        <Styles>
            <Navbar/>
            <Landing page="infoAkademik" color="#05AC72" title={title} desc={desc} />
            <Container>
                <BelajarApa />
                <IlkomSI />
                {/* <Matkul />
                <Kurikulum />
                <Scele /> */}
            </Container>
            <div className="gap"></div>
            <Footer />
        </Styles>
    )
}

