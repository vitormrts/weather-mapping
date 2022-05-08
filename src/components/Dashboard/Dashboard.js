import { IconArrow } from '@src/icons';
import { useState } from 'react';
import { Chart } from '@src/components';
import * as S from './Dashboard.style';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Button isOpen={isOpen} onClick={toggle}>
        <IconArrow />
      </S.Button>
      <S.Content>
        <Chart />
      </S.Content>
    </S.Wrapper>
  );
};

export default Dashboard;
