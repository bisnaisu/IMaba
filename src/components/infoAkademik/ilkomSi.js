import React from 'react'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function ilkomSi() {
    return (
        <Card id="ilkomSI" className="my-4 text-center">
            <h2>Ilmu Komputer dan Sistem Informasi</h2>
            <Row>
                <Col sm={6}>                    
                    <img alt="Ilkom" src={ require("../../assets/infoAkademik/ilkom.svg")} /><br /><br />
                    <h3>Ilmu Komputer</h3>
                    <p>Jurusan Ilmu Komputer (Computer Science) mengkaji pemanfaatan Ilmu Komputer, antara lain desain algoritma dan penerapannya untuk mengembangkan perangkat lunak (software) yang berkualitas hingga pemutakhiran aplikasi berbasis kecerdasan buatan, robotika, pengolahan informasi multimedia, keamanan informasi dan jaringan, serta pengolahan data besar.</p>
                    <p>Prospek alumnus dapat menjadi Full Stack Developer, Android Developer, Software Engineer, Data Scientist, dll.</p>
                </Col> 
                <Col sm={6}>                    
                    <img alt="SI" src={ require("../../assets/infoAkademik/si.svg")} />
                    <br /><br /><br />
                    <h3>Sistem Informasi</h3>
                    <p>Jurusan Sistem Informasi (Information Systems) mengkaji pengembangan, pemanfaatan, dan pengelolaan Sistem Informasi dalam suatu organisasi. Jurusan tersebut memadukan konsep komputer dengan bisnis dan manajemen dengan tujuan menjembatani kebutuhan bisnis dengan aplikasi yang dirancang.</p>
                    <p>Prospek alumnus dapat menjadi Data Analyst, Database Administrator, UI/UX Developer, Graphic Designer, dll. </p>
                </Col>    
            </Row>
        </Card>
    )
}
