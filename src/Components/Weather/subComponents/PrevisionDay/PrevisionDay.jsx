import Card from 'react-bootstrap/Card';
import React from 'react';
import { icon } from './imgsScript';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const PrevisionDay = ({features}) => {
    
    const iconCode = features.day.iconCode;
    
    return (
            <Container>
                <Row>
                    <Col xs={3} lg={4}>
                        <Card.Img src={icon[iconCode]} />
                    </Col>
                    <Col>
                        <Card.Text>{features.day.longPhrase}</Card.Text>
                        <Card.Text>Cobertura de nuvem: {features.day.cloudCover} % </Card.Text>
                        <Card.Text>Horas de chuva: {Math.ceil(features.day.hoursOfRain)}</Card.Text>
                        <Card.Text>Horas de sol: {Math.ceil(features.hoursOfSun)}</Card.Text>
                        <Card.Text>Probabilidade de chuva: {features.day.rainProbability}%</Card.Text>
                    </Col>
                </Row>

            </Container>
            
    );
}

export { PrevisionDay };