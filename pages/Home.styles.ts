import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
export const Bar = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;
export const BoxCards = styled.View`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 65px;
  font-weight: bold;
`;
