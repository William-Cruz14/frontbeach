import React, { useEffect, useState } from 'react';
import atlas from 'azure-maps-control';
import 'azure-maps-control/dist/atlas.min.css';
import Container from 'react-bootstrap/Container';
import { Flashcard } from '../Flashcard';
import { createRoot } from 'react-dom/client';
import { Placeholder } from 'react-bootstrap';
import './AzureMap.css';

const MapaAzure = ({ coord }) => {
    const [isLoading, setIsLoading] = useState(true);
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        let map = null;
        const initializeMap = async () => {
            if (coord) {
                try {
                    const center = coord;

                    map = new atlas.Map('mapContainer', {
                        center: center,
                        zoom: 15,
                        view: 'Auto',
                        authOptions: {
                            authType: 'subscriptionKey',
                            subscriptionKey: apiKey
                        }
                    });

                    map.events.add('ready', () => {
                        const datasource = new atlas.source.DataSource('myDataSource');
                        map.sources.add(datasource);

                        // Adiciona um ponto ao datasource
                        datasource.add(new atlas.data.Feature(
                            new atlas.data.Point(center)
                        ));

                        // Adiciona um marcador ao mapa
                        const marker = new atlas.HtmlMarker({
                            position: center,
                            draggable: false
                        });

                        map.markers.add(marker);


                        // Ao clicar no marcador irá exibir um Popup
                        map.events.add('click', marker, () => {
                            const popupContainer = document.createElement('div');
                            const root = createRoot(popupContainer);
                            root.render(<Flashcard />);
                            
                            // Cria um popup
                            const popup = new atlas.Popup({
                                position: marker.getOptions().position,
                                content: popupContainer,
                                pixelOffset: [0, -30]
                            });

                            popup.open(map);
                        });

                        // Adiciona uma bolha de raio (círculo)
                        datasource.add(new atlas.data.Feature(new atlas.data.Point(center), {
                            subType: 'Circle',
                            radius: 200
                        }));

                        // Configura o estilo do círculo no mapa
                        map.layers.add(
                            new atlas.layer.PolygonLayer(datasource, null, {
                                fillColor: 'rgba(247, 23, 53, 0.5)',
                                strokeColor: 'rgba(247, 23, 53, 1)',
                                strokeWidth: 2
                            })
                        );

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
            <Container>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="p" animation="wave">
                    <Placeholder xs={12} />
                </Placeholder>
            </Container>
        );
    }

    return (
        <Container>
            <div id="mapContainer" style={{ width: '100%', height: '631px' }} />
            {isLoading && (
                <div 
                    style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)' 
                    }}
                >
                </div>
            )}
        </Container>
    );
};

export { MapaAzure };
