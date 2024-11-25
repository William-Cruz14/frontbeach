import React, { useEffect, useState } from 'react';
import atlas from 'azure-maps-control';
import 'azure-maps-control/dist/atlas.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import styles from './AzureMap.module.css';

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

                       datasource.add(new atlas.data.Feature(
                           new atlas.data.Point(center)
                       ));

                       // Adiciona um marcador 
                       const marker = new atlas.HtmlMarker({
                           color: '#003366',
                           position: center,
                           draggable: false
                       });
                       map.markers.add(marker);

                       // Adicionar uma bolha
                       const bubbleLayer = new atlas.layer.BubbleLayer(datasource, null, {
                           radius: 15,
                           color: 'rgba(18, 73, 111, 0.3)',  // Cor semi-transparente
                           strokeColor: '#003366',
                           strokeWidth: 2
                       });

                       map.layers.add(bubbleLayer);

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
           <Container className={styles.Container}>
               <Spinner animation="grow" role="status">
                   <span className="visually-hidden">Carregando...</span>
               </Spinner>
           </Container>
       );
   }

   return (
       <Container>
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
       </Container>
   );
};

export { MapaAzure };