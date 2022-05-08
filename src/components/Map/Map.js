import { GoogleMap, Marker } from '@react-google-maps/api';
import { useCallback } from 'react';
import { useCities, useMap } from '@src/hooks';
import * as S from './Map.style';

const center = {
  lat: 41.15,
  lng: -8.62,
};

const Map = () => {
  const { cities } = useCities();
  const { setMap } = useMap();

  const onLoad = useCallback((mapRef) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    mapRef.fitBounds(bounds);
    setMap(mapRef);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const markersMap = cities.map(({ name, lat, lng }) => <Marker key={`${name}-markee`} position={{ lat, lng }} title={name} />);

  return (
    <S.Wrapper>
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100%',
        }}
        center={center}
        zoom={100}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markersMap}
      </GoogleMap>
    </S.Wrapper>
  );
};

export default Map;
