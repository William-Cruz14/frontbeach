import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React  from 'react';
import CardImg from 'react-bootstrap/esm/CardImg';
import UvIcon from '../../../../assets/img/UvIcon.svg';
import styles from './UV.module.css';

const IndexUV = ({uvindex}) => {
    return (
        <Container>
            
            <Row>
                <Col xs={3} lg={4}>
                    <CardImg src={UvIcon}/>
                </Col>
                <Col className={styles.ColumnSecond}>
                    <Card.Text>Indice UV - {uvindex.category}</Card.Text>
                </Col>
            </Row>               
        </Container>
    );
}

export {IndexUV};