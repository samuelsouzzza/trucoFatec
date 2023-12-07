import React from 'react';
import { Container, Label } from './MyButton.styles';

type MyButtonProps = {
  label: string;
  onPress: () => void;
};

export const MyButton = ({ label, onPress }: MyButtonProps) => {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  );
};
