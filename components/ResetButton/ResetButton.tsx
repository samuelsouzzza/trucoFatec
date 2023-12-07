import { Container, TextResetButton } from './ResetButton.styles';

type ResetButtonProps = {
  onReset: () => void;
};

export const ResetButton = ({ onReset }: ResetButtonProps) => {
  return (
    <Container onLongPress={onReset}>
      <TextResetButton>Zerar</TextResetButton>
    </Container>
  );
};
