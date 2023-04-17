import styled from '@emotion/styled';

export const Item = styled.li`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 12px;
  text-transform: uppercase;
  color: #f9fcff;
  padding: 4px 12px;
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
