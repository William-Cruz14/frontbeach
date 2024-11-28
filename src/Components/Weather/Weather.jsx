import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { Placeholder } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { PrevisionDay } from './subComponents/PrevisionDay/PrevisionDay';
import { QualityAir } from './subComponents/QualityAir/QualityAir';
import { Temperature } from './subComponents/Temperature/Temperature';
import { IndexUV } from './subComponents/UVindex/UV';
import { Wind } from './subComponents/Wind/Wind';
import styles from './Weather.module.css';


const AzureWeather = ({target, data}) => {
    return (
        <Container>
            {data ? (
                
                    <Card>
                        <Card.Header>Previsão do dia - {target} - {new Date(data.forecasts[0].date).toLocaleDateString()}</Card.Header>
                        {data.forecasts.map((forecast, index) => (
                            <Card.Body key={index}>
                                <PrevisionDay features={forecast} />
                                <Temperature temperatures={forecast.temperature} />
                                <Wind wind={forecast.day.wind} />
                                <QualityAir airQuality={forecast.airAndPollen[0]} />
                                <IndexUV uvindex={forecast.airAndPollen[forecast.airAndPollen.length - 1]} />
                            </Card.Body>
                    
                        ))}
                        
                    </Card>
            ): 
            <Container>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="p" animation="wave">
                    <Placeholder xs={12} />
                </Placeholder>     
            </Container>
            }
        </Container>
    );


}

export { AzureWeather };