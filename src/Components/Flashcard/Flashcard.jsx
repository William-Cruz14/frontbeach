import {Card, Row } from "react-bootstrap";
import './Flashcard.css';
import shark from '../../assets/img/img-flashcard/shark_icon.svg';
import jellies from '../../assets/img/img-flashcard/jellies_icon.svg';

const Flashcard = () => {
    return (
        <Card id="Card">
            <Card.Header>Avisos</Card.Header>
            <Card.Body>
                <Card.Text>Opa aqui é um aviso</Card.Text>
                <Card.Text>Opa esse aviso está muito grande</Card.Text>
                <Card.Text>Opa aqui é um aviso</Card.Text>
                <Card.Text>Opa aqui é um aviso</Card.Text>
                <Row>
                    <Card.Img src={shark} id="icon" className="col-3" />
                    <Card.Text className="col">Risco de ataques de Tubarão.</Card.Text>
                </Row>
                <Row>
                    <Card.Img src={jellies} id="icon" className="col-3"></Card.Img>
                    <Card.Text className="col">Risco de acidentes com Águas-vivas.</Card.Text>
                </Row>
                <Card.Text>Opa aqui é um aviso para que as pessoas possa se proteger</Card.Text>
                <Card.Text>Opa aqui é um aviso</Card.Text>
            </Card.Body>
        </Card>
    );
};

export { Flashcard };