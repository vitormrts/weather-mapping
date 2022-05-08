import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.athensGray};
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
  align-items: center;
  justify-content: space-between;
  ${({ isOpen }) => isOpen
    && css`
      transform: translateX(0);
  `};   
`;

export const Button = styled.button`
  position: fixed;
  top: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -50px;
  border-radius: 15px 0 0 15px;
  background-color: ${({ theme }) => theme.colors.salmon};
  cursor: pointer;
  z-index: 100;
  transition: left 0.5s ease-in-out;
  ${({ isOpen }) => isOpen
    && css`
      border-radius: 0 15px 15px 0;
      left: 0;
      svg {
        transform: rotate(180deg);
      }
  `}
  }
  svg {
    width: 24px;
    height: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    top: 30%;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Content = styled.div`
  padding: 100px;
  display: flex;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    padding: 20px; 
  }
`;
