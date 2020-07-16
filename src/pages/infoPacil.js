import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Landing from '../components/landing'
import Container from 'react-bootstrap/Container'

// import BadanOtonom from '../components/infoPacil/badanOtonom'
import Budaya from '../components/infoPacil/budaya'
// import Denah from '../components/infoPacil/denah'
// import FunFacts from '../components/infoPacil/funfacts'
// import Kepanitiaan from '../components/infoPacil/kepanitiaan'
// import Ngoding101 from '../components/infoPacil/ngoding101'
// import PacilLife from '../components/infoPacil/pacilLife'
// import YelYel from '../components/infoPacil/yelyel'

import Styles from '../styles/infoPacil'

export default function infoPacil() {
    const title = "Info Fasilkom"
    const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum ab voluptates ullam excepturi doloribus nihil voluptate quos consectetur delectus?"

    return (
        <Styles>
            <Navbar/>
            <Landing page="infoPacil" color="#6699FF" title={title} desc={desc} />
            <Container>
                <Budaya />
                {/* <PacilLife />
                <Ngoding101 />
                <Denah />
                <YelYel />
                <BadanOtonom />
                <Kepanitiaan />
                <FunFacts /> */}
            </Container>
            <div className="gap"></div>
            <Footer />
        </Styles>
    )
}

