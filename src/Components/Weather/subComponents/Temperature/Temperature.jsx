import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React  from 'react';
import TermIcon from '../../../../assets/img/Temperature.svg';
import styles from './Temperature.module.css';

const Temperature = ({temperatures}) => {
    return (
        <Container>
            <Row>
                <Col xs={3} lg={4}><Card.Img src={TermIcon}/></Col>
                <Col className={styles.ColumnSecond}>
                    <Row>
                        <Card.Text>Máxima {Math.floor(temperatures.maximum.value)} °{temperatures.maximum.unit}</Card.Text>
                    </Row>
                    <Row>
                        <Card.Text>Mínima {Math.floor(temperatures.minimum.value)} °{temperatures.minimum.unit}</Card.Text>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export { Temperature };