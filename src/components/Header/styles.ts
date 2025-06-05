import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;
  padding: 2rem 10rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors["purple-dark"]};
    ${mixins.fonts.textS};
  }
`;
export const LabelCity = styled.label`
  border-radius: 6px;
  padding: 0.5rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme.colors["purple-light"]};
  color: ${(props) => props.theme.colors["purple"]};
  margin-right: 0.75rem;
`;
export const ButtonCarShopping = styled.button`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors["yellow-light"]};
  color: ${({ theme }) => theme.colors["yellow-dark"]};

  padding: 8px;
  border-radius: 6px;

  cursor: pointer;
  position: relative;

  span {
    ${mixins.fonts.textS};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(50%, -50%);
  }
`;
