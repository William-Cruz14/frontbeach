import React, { useEffect, useState } from 'react';
import atlas from 'azure-maps-control';
import 'azure-maps-control/dist/atlas.min.css';
import Spinner from 'react-bootstrap/Spinner';

const MapaAzure = ({ coord }) => {
    const [isLoading, setIsLoading] = useState(true);
    const API_KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        let map = null;

        const initializeMap = async () => {
            // Se eu conter as coordenadas da "praia" pesquisada eu seguirei montando o mapa.
            if (coord) {
                try {
                    const center = coord;

                    map = new atlas.Map('mapContainer', {
                        center: center,
                        zoom: 15,
                        view: 'Auto',
                        authOptions: {
                            authType: 'subscriptionKey',
                            subscriptionKey: API_KEY
                        }
                    });

                    map.events.add('ready', () => {
                        const marker = new atlas.HtmlMarker({
                            color: '#12496f',
                            text: '🌊',
                            position: center,
                            draggable: false
                        });

                        map.markers.add(marker);
                        setIsLoading(false);
                    });
                } catch (error) {
                    console.error('Erro ao inicializar o mapa:', error);
                    setIsLoading(false);
                }
            }
        };

        initializeMap();

        
        return () => {
            if (map) {
                map.dispose();
            }
        };
    }, [coord]);

    if (!coord) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '600px' }}>
                <Spinner animation="grow" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div>
            <div id="mapContainer" style={{ width: '100%', height: '600px' }} />
            {isLoading && (
                <div 
                    style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)' 
                    }}
                >
                    <Spinner animation="grow" />
                </div>
            )}
        </div>
    );
};

export { MapaAzure };