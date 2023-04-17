import styled from '@emotion/styled';

export const Form = styled.form`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: auto;
  padding: 60px;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
`;

export const Title = styled.h2`
  font-size: 32px;
  text-transform: uppercase;
  margin-bottom: 24px;
  background: #121fcf;
  background: linear-gradient(to right, #121fcf 0%, #cf1512 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Input = styled.input`
  margin: 12px;
  width: 350px;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px 15px;
  color: #121fcf;
  border: 1px solid #ffd1d1;
  background-color: #f9fcff;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 20px;
  text-transform: uppercase;
  color: #f9fcff;
  margin-top: 12px;
  padding: 12px 40px;
  border-radius: 10px;
  border: none;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
`;
