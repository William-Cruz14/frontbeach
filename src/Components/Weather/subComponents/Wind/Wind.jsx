import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React  from 'react';
import WindIcon from '../../../../assets/img/WindIcon.svg'
import styles from './Wind.module.css';


const Wind = ({wind}) => {
    return (
        <Container>
            <Row>
                <Col xs={3} lg={4}>
                    <Card.Img src={WindIcon}/>
                </Col>
                <Col className={styles.ColumnSecond}>
                    <Card.Text>Ventos de {wind.speed.value} {wind.speed.unit}</Card.Text>
                </Col>
            </Row>                                         
        </Container>
    );
}

export {Wind};