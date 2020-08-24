import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import asset from '../../assets/infoAkademik/kurikulum.svg'

export default class kurikulum extends Component {
    state = { slide: "ik"}

    render() {
        const ik = [
            "Kecerdasan Komputasional", 
            "Teknologi Perangkat Lunak",
            "Pengolahan Informasi",
            "Arsitektur dan Infrastruktur"
        ]

        const si = [
            "Tata Kelola SI/TI",
            "E-Bisnis",
            "Ekonomi Digital"
        ]

        return (
            <Card id="kurikulum" className="mb-4">
                <h2 className="text-center">Kurikulum</h2>
                <Row>
                    <Col md={5}><img alt="kurikulum" src={asset} /></Col>
                    <Col md={7}>
                        <p>Fakultas Ilmu Komputer menawarkan berbagai mata kuliah terapan yang dapat digolongkan ke dalam beberapa peminatan, yaitu:</p>
                        <div className="btnwrapper">
                            <Button active={this.state.slide === "ik"} onClick={() => this.setState({slide:"ik"})}>Ilmu Komputer</Button>
                            <Button active={this.state.slide === "si"} onClick={() => this.setState({slide:"si"})}>Sistem Informasi</Button>
                        </div>
                        <Card className="subcard my-3">
                            <ul>
                                {this.state.slide === "ik" && ik.map( (bidang, index) => (
                                    <li key={index}>Bidang Minat {bidang}</li>
                                ))}
                                {this.state.slide === "si" && si.map( (bidang, index) => (
                                    <li key={index}>Bidang Minat {bidang}</li>
                                ))}
                            </ul>                            
                        </Card>
                        <p>Semua mata kuliah wajib UI, wajib rumpun, wajib fakultas, wajib program studi, pilihan bidang minat dan pilihan lain yang diambil harus disesuaikan sehingga jumlah minimum total SKS menjadi 144 sks.</p>
                    </Col>
                </Row>
            </Card>
        )
    }
}
