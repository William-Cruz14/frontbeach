import React, { useState } from 'react';

import { SearchBar } from '../SearchBar';
import { AzureWeather } from '../Weather';
import { MapaAzure } from '../Map';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [geocode, setGeocode] = useState(null);
    const [weatherTarget, setWeatherTarget] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    const handleSearchResults = (data) => {

        if (data) {
            setGeocode(data.geocode.geometry.coordinates);
            setWeatherTarget(data.geocode.properties.address.formattedAddress)
            setWeatherData(data.weather);
        }
    };



    return (
        <Container>
            <Col>
                <Row className={styles.RowFirst}>
                    <SearchBar onSearch={handleSearchResults} />
                </Row>
                <Row>
                    <Col lg={8} xs={12} className={styles.ColumnFirst}>
                        <MapaAzure  coord={geocode} />
                    </Col>
                    <Col>
                    <AzureWeather target={weatherTarget} data={weatherData} />
                    </Col>
                </Row>
                
            </Col>
        </Container>
    );
};

export { Dashboard };