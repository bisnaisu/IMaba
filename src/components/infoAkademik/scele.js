import React from 'react'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import asset from '../../assets/infoAkademik/programming.svg'

export default function scele() {
    return (
        <Card id="scele">
            <h2 className="text-center">Pembelajaran dengan SCeLE</h2>
            <Row>
                <Col md={8}>
                    <p>Kegiatan pembelajaran di Fasilkom menggunakan Student Centered E-Learning Environment atau disingkat SCELE. SCELE Fasilkom memberi kamu akses materi dari semua matkul Fasilkom kecuali matkul wajib universitas, mendapatkan pengumuman, mengumpulkan tugas, mengerjakan kuis, hingga mengerjakan ujian online. </p>
                    <p>Kamu bisa mengakses SCELE Fasilkom melalui <a href="https://scele.cs.ui.ac.id/">https://scele.cs.ui.ac.id/</a>, untuk tutorial penggunaannya dapat dilihat melalui:</p>
                    <Button variant="secondary">Click di sini</Button>
                    <p>Untuk mengakses SCELE UI dapat melalui <a href="https://scele.ui.ac.id/">https://scele.ui.ac.id/</a>. SCELE UI tidak digunakan dalam pembelajaran di Fasilkom, sebab untuk materi wajib universitas yaitu MPKT-B dan MPKT-A, kamu dapat mengaksesnya secara langsung melalui <a href="https://emas.ui.ac.id/">https://emas.ui.ac.id/</a>.</p>

                    <p>Tenang aja, kamu akan diajarkan cara penggunaan SCELE saat masuk kuliah nanti kok!</p>
                </Col>
                <Col md={4}><img alt="scele" src={asset} /></Col>
            </Row>
        </Card>
    )
}
