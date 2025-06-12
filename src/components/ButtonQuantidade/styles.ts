import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ButtonContainer = styled.div<{ altura: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: ${(props) => props.altura};
  border: none;
  background: ${(props) => props.theme.colors["base-button"]};
  border-radius: 6px;
  color: ${(props) => props.theme.colors["base-title"]};
  ${mixins.fonts.textM}

  input {
    text-align: center;
    align-self: center;
    width: 1.25rem;
    height: 1.25rem;
    background: transparent;
    border: none;
    ${mixins.fonts.textM}
  }
  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  button {
    color: ${(props) => props.theme.colors.purple};
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 0.875rem;
    height: 0.875rem;
  }
`;
