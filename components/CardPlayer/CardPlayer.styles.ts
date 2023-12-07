import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 2% 0;
  padding: 5%;
  border: 1px solid rgba(255, 0, 0, 0.1);
`;
export const Pts = styled.Text`
  font-size: 80px;
  color: #000;
`;
export const NamePlayer = styled.Text`
  font-size: 30px;
  color: #5f727c;
`;
export const BoxButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1%;
`;
