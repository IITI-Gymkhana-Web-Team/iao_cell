import React from 'react'
import { Card, Title, Text, Subtitle, Link, Body } from 'react-bootstrap';
import img from '../../assets/image2.jpg'
export default function ({ text, title }) {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={styles.title}><a href='#' >{title}</a></Card.Title>
                    <Card.Text style={styles.text} >
                        {text}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

const styles = {
    title: {
        fontWeight: 'bolder',
        borderBottom: '2px solid #e2e2e2 ',
        width: 'fit-content'
    },
    text: {
        marginTop: '15%'
    }
}
