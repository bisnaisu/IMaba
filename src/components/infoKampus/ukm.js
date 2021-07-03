import React from 'react'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import asset from '../../assets/infoKampus/bookPerson.png'

export default function ukm() {
    return (
        <Card id="ukm">
            <h2 className="text-center">Info UKM</h2>
            <Row>
                <Col md={5}><img className="asset" alt="asset" src={asset} style={{width:"100%"}} /></Col> 
                <Col md={7}>
                    <p>Kamu ingin ada tambahan kegiatan di kampus?<br/>Mirip seperti di SMA yang dinamakan ekstrakurikuler, kamu bisa meningkatkan minat dan bakat kamu melalui UKM ini.</p>
                    <p>Terdapat hingga 39 UKM yang terbuka dan kamu bisa ambil sepuasnya. Ada UKM jenis penalaran, olahraga, seni, keagamaan, E-Sport, Riset dan Teknologi, dan Keilmuan dan Pascakampus.  Tapi jangan dilupain ya akademisnya!</p>
                    <p>Langsung aja nihh pantau di website :   <a href="https://bem.ui.ac.id/uikipedia/ukm/" target="blank">https://bem.ui.ac.id/uikipedia/ukm/</a></p>
                    <p>Karena UKM itu tingkat Universitas, mungkin kamu melihatnya itu terlalu besar cakupannya. Kamu juga bisa ambil yang tingkat fakultas saja seperti UKF dan UKOR. Untuk melihatnya, kamu bisa cek ke bagian Info Fasilkom di iMaba ini.</p>
                </Col>
            </Row>
        </Card>
    )
}
