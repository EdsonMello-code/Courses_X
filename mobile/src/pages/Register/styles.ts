import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  background-color: #365D7A;
  align-items: center;
`;

export const Logo = styled.Text`
  color: #6EBEFB;
  font-weight: bold;
  font-size: 60px;

`;

export const Field = styled.View`
  width: 328px;
  height: 181px;
`;

export const Input = styled.TextInput`
  width: 327px;
  height: 50px;
  background-color:#6EBEFB;
  margin-bottom: 14px; 
  border-radius: 8px;
  padding-left: 8px;
  /* box-shadow: none; */

`;


export const Buttons = styled.View`
  width: 229px;
  height: 100px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  background-color: #239DFA;
  color: #114D7A;
  width: 218px;
  height: 39px;
  border-radius: 8px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
`;


export const ButtonLogin = styled.TouchableOpacity`
  background-color: #239DFA;
  color: #114D7A;
  width: 218px;
  height: 39px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
