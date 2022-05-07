import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const getFormattedCity = async (name) => {
  const geocode = await geocodeByAddress(name);
  const { lat, lng } = await getLatLng(geocode[0]);
  const city = {
    name,
    lat,
    lng,
  };
  return city;
};

export default getFormattedCity;
