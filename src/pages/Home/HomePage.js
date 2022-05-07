import { SearchBar, Map } from '@src/components';
import { useMap } from '@src/hooks';

const HomePage = () => {
  const { isLoaded } = useMap();
  return (
    <div>
      {isLoaded && (
        <>
          <SearchBar />
          <Map />
        </>
      )}
    </div>
  );
};

export default HomePage;
