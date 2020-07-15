import React from 'react'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function fakultas() {
    const fakultas = [ "FK", "FKG", "FF", "FKM", "FIK", "FMIPA", "FT", "Fasilkom", "FH", "FEB", "FIB", "FPsi", "FISIP", "FIA", "Vokasi" ]
    return (
        <Card id="fakultas" className=" text-center">
            <h2>Fakultas &amp; Program di UI</h2>
            <Row className="d-flex justify-content-between">
                {fakultas.map( makara => (<Col md={2} sm={4} xs={4} className="d-flex flex-column justify-content-center" key={makara}>
                    <div className="makara">
                        <img alt={makara} src={ require(`../../assets/infoKampus/makara/${makara}.png`) } className="img img-responsive full-width"/>
                    </div>                    
                    <p>{makara}</p>
                </Col>))}  
            </Row>
        </Card>
    )
}
