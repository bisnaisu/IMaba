import React from 'react'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import asset from '../../assets/infoKampus/beasiswa.svg'

export default function beasiswa() {
    return (
        <Card id="beasiswa">
            <h2 className="text-center">Beasiswa</h2>
            <Row>
                <Col md={5}><img alt="asset" src={asset} style={{width:"100%"}} /></Col> 
                <Col md={7}>
                    <p>Siapa sih yang tidak mau mendapat beasiswa?<br/>Di UI, kita menerima banyak sekali beasiswa dari berbagai instansi. Beasiswa yang ditawarkan juga sangat beragam loh!</p>
                    <p>Dengan website Beasiswa UI, kamu dapat mengetahui beasiswa apa saja yang sedang dibuka. Setiap beasiswa akan mempunyai syarat-syarat tertentu jika kamu ingin melamar.</p>
                    <p>Jika kamu tertarik untuk melihat apa saja beasiswa-beasiswa yang sedang ditawarkan, kamu bisa lihat dari website: <a href="http://beasiswa.ui.ac.id/">http://beasiswa.ui.ac.id/</a></p>
                    <p>Beasiswa yang tersedia akan terus diupdate, jadi yuk dipantau terus websitenya! Siapa tahu ada beasiswa yang cocok buat kamu!</p>
                </Col>
            </Row>
        </Card>
    )
}
