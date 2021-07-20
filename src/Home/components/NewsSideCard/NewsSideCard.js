import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';
import { data } from "../NewsPage/data";
import { data as data1 } from "../EventsPage/data";
import "./NewsSideCard.css";

const NewsSideCard = () => {

    const itemRef = useRef(null);
    const mainRef = useRef(null);

    const news = data.slice(0, 4);
    const events = data1.slice(0, 4);

    var pos = 150;

    useEffect(() => {
        const interval = setInterval(() => {
            handleScroll();
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    const handleScroll = () => {
        mainRef.current.scrollTop = pos;
        if (pos == 750) pos = 0;
        else pos += 150;
    }

    return (
        <Row className="mt-5">
            <Col md="4">
                <Card className="news-card">
                    <Card.Header style={{ background: '#3668dd' }} className="news-card-header">News & Events</Card.Header>
                    <ListGroup variant="flush" ref={mainRef} className="news-card-list">
                        {news.map((News, index) => (
                            <ListGroup.Item ref={itemRef} key={index} className="news-card-list-grp pb-0">
                                <Link to={"/outreach/news/" + index}>{News.title}</Link>
                                <hr />
                                <p class="text-secondary">{News.date}</p>
                            </ListGroup.Item>
                        ))}
                        {events.map((event, index) => (
                            <ListGroup.Item key={index} className="news-card-list-grp pb-0">
                                <Link to={"/outreach/events/" + index}>{event.title}</Link>
                                <hr />
                                <p class="text-secondary">{event.date}</p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            </Col>
            <Col md="7">

            </Col>
        </Row>
    )
}

export default NewsSideCard;
