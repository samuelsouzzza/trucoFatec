import React from 'react';
import { Container, BoxCards, Bar, Title } from './Home.styles';
import { CardPlayer } from '../components/CardPlayer/CardPlayer';
import { ResetButton } from '../components/ResetButton/ResetButton';
import { UsePointsContext } from '../global/PointsContext';
import { Logo } from '../components/Logo/Logo';

export const Home = () => {
  const { we, setWe, they, setThey } = UsePointsContext();

  function resetMatch(values: React.Dispatch<React.SetStateAction<number>>[]) {
    values.forEach((f) => f(0));
  }

  return (
    <Container>
      <Bar>
        <Logo />
      </Bar>
      <Title>TRUCO!</Title>
      <BoxCards>
        <CardPlayer namePlayer='Nós' valuePts={we} setValuePts={setWe} />
        <CardPlayer namePlayer='Eles' valuePts={they} setValuePts={setThey} />
      </BoxCards>
      <ResetButton onReset={() => resetMatch([setWe, setThey])} />
    </Container>
  );
};
