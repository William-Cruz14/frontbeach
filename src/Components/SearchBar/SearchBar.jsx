import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { getGeocode } from '../../utils/getGeocode';
import { getWaether } from '../../utils/getWeather';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
    
            const [geocode, weather] = await Promise.all([
                getGeocode(search),
                getWaether(search)

        
            ]);

            if (!geocode) {
                throw new Error('Não foi possível encontrar as coordenadas da praia');
            }

            if (!weather) {
                throw new Error('Não foi possível obter os dados meteorológicos');
            }

            onSearch({
                geocode,
                weather
            });

        } catch (error) {
            setError(error.message);
            console.error("Erro ao obter os dados:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchClick = () => {
        if (search.trim()) {
            getData();
        } else {
            setError('Por favor, digite o nome de uma praia.');
        }
    };

    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col>
                    <Form.Control
                        type='text'
                        id="praia"
                        aria-describedby="TextHelpBlock"
                        size='md'
                        placeholder='Digite o nome de uma praia do seu interesse'
                        value={search}
                        name='praia'
                        onChange={(e) => setSearch(e.target.value)}
                        disabled={isLoading}
                    />
                </Col>
                <Col lg={3}>
                    <Button 
                        onClick={handleSearchClick}
                        disabled={isLoading}
                        id='Button'
                    >
                        {isLoading ? 'Pesquisando...' : 'Pesquisar'}
                    </Button>
                </Col>
            </Row>
            {error && (
                <Row className="mt-2">
                    <Col>
                        <Container className="text-danger">{error}</Container>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export { SearchBar };