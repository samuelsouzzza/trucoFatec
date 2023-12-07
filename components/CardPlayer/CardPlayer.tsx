import React from 'react';
import { Container, Pts, NamePlayer, BoxButtons } from './CardPlayer.styles';
import { MyButton } from '../MyButton/MyButton';

type CardPlayerProps = {
  namePlayer: 'Nós' | 'Eles';
  valuePts: number;
  setValuePts: React.Dispatch<React.SetStateAction<number>>;
};

export const CardPlayer = ({
  namePlayer,
  valuePts,
  setValuePts,
}: CardPlayerProps) => {
  function sum(
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) {
    if (value < 12) setValue(value + 1);
  }

  function sub(
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) {
    if (value > 0) setValue(value - 1);
  }

  function truco(
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) {
    if (value >= 0 && value <= 12) setValue(value + 3);
  }

  return (
    <Container>
      <NamePlayer>{namePlayer}</NamePlayer>
      <Pts>{valuePts}</Pts>
      <BoxButtons>
        <MyButton label='-' onPress={() => sub(valuePts, setValuePts)} />
        <MyButton label='+' onPress={() => sum(valuePts, setValuePts)} />
        <MyButton label='+3' onPress={() => truco(valuePts, setValuePts)} />
      </BoxButtons>
    </Container>
  );
};
