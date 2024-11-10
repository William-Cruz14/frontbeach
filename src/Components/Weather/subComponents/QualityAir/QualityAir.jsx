import Card from 'react-bootstrap/Card';
import AirIcon from '../../../../assets/img/airQuality.svg';
import styles from './QualityAir.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const QualityAir = ({airQuality}) => {
    return (
        <Container>
                
                <Row>
                    <Col xs={3} lg={4}>
                        <Card.Img src={AirIcon} />

                    </Col>
                    <Col className={styles.ColumnSecond}>
                        <Card.Text>Qualidade do Ar - {airQuality.category}</Card.Text>
                        <Card.Text></Card.Text>
                    </Col>
                </Row>       
                
        </Container>
        
    );
}

export { QualityAir };