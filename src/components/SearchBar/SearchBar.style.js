import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 10px;
  z-index: 10;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  .input-wrapper {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  border-radius: 10px;
  min-height: 40px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
`;
