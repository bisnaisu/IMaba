import React from 'react'
import Card from 'react-bootstrap/Card'

export default function flipCard(props) {
    console.log(props.front)
    return (
        <Card className="glue" >
            <div className="flipcard">
                <div className="flipcard-f">
                    <Card className="subcard">
                        <Card.Body>
                            {props.front}
                        </Card.Body>
                        <Card.Footer>
                            {props.footer}
                        </Card.Footer>  
                    </Card>
                </div>
                <div className="flipcard-b">
                    <Card className="subcard">
                        <Card.Body>
                            {props.back}
                        </Card.Body>
                        <Card.Footer>
                            {props.footer}
                        </Card.Footer>  
                    </Card>
                </div>
            </div>
        </Card>
    )
}
