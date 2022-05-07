import { Autocomplete } from '@react-google-maps/api';
import { useCities } from '@src/hooks';
import { IconSearch } from '@src/icons';
import { getFormattedCity } from '@src/utils';
import { useRef } from 'react';
import * as S from './SearchBar.style';

const SearchBar = () => {
  const ref = useRef();
  const { cities, setCities } = useCities();

  const handleOnClick = () => {
    const { value } = ref.current;
    if (value) {
      (async () => {
        const city = await getFormattedCity(value);
        setCities([...cities, city]);
      })();
      ref.current.value = '';
      ref.current.focus();
    }
  };

  return (
    <S.Wrapper>
      <Autocomplete className="input-wrapper">
        <S.Input name="input-city" ref={ref} type="text" placeholder="Search a city" />
      </Autocomplete>
      <S.Button type="button" onClick={handleOnClick}>
        <IconSearch />
      </S.Button>
    </S.Wrapper>
  );
};

export default SearchBar;
