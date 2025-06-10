import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 3rem;
  flex-direction: row;
`;

export const Title = styled.p`
  ${mixins.fonts.titleXS}
  color:${(props) => props.theme.colors["base-subtitle"]};
  margin-top: -3rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  max-width: 640px;
  width: 40rem;
  height: 37rem;
  flex-direction: column;
  margin-right: 3rem;
  gap: 0.75rem;
`;
export const CartContainer = styled.div`
  max-width: 498px;
  width: 28rem;
  height: 32rem;
  background: ${(props) => props.theme.colors["base-card"]};
`;

export const FormEntrega = styled.div`
  display: flex;
  height: 23.25rem;
  margin-top: 1.5rem;
  width: 40rem;
  padding: 2.5rem;
  flex-direction: column;

  background: ${(props) => props.theme.colors["base-card"]};
`;
export const HeaderForm = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.colors["yellow-dark"]};
  }
  div {
    margin-left: 0.5rem;
    p#title {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }
    p#subtitle {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme.colors["base-text"]};
    }
  }
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    display: flex;
    gap: 0.75rem;
  }
`;

type inputType = "M" | "L" | "S" | "XS" | "XL";
export const InputForm = styled.input<{ size: inputType }>`
  display: flex;
  width: ${(props) =>
    props.size == "XL"
      ? "35rem"
      : props.size == "L"
        ? "21.75rem"
        : props.size == "M"
          ? "17.25rem"
          : props.size == "S"
            ? "12.5rem"
            : props.size == "XS" && "3.75rem"};
  height: 2.62rem;
  background: ${(props) => props.theme.colors["base-input"]};

  border: 0;
  border: 1px solid ${(props) => props.theme.colors["base-button"]};
  border-radius: 4px;
  padding: 0.75rem;

  ${mixins.fonts.textS}
  color:${(props) => props.theme.colors["base-text"]};

  &::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
  }
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors["yellow-dark"]};
  }
`;
export const PayloadContainer = styled.div`
  display: flex;
  height: 23.25rem;
  width: 40rem;
  padding: 2.5rem;
  flex-direction: column;

  background: ${(props) => props.theme.colors["base-card"]};
`;

export const HeaderPayload = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
  div {
    margin-left: 0.5rem;
    p#title {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }
    p#subtitle {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme.colors["base-text"]};
    }
  }
`;
export const ContentPayload = styled.div`
  display: flex;
  gap: 0.75rem;
`;
export const ButtonPayload = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  width: 11.16rem;
  height: 3.18rem;
  padding: 1rem;
  background: ${(props) =>
    props.selected
      ? props.theme.colors["purple-light"]
      : props.theme.colors["base-button"]};
  border: 1px solid
    ${(props) => (props.selected ? props.theme.colors["purple"] : "none")};
  border-radius: 6px;

  ${mixins.fonts.buttonM}

  svg {
    color: ${(props) => props.theme.colors["purple"]};
    margin-right: 0.75rem;
  }
  &:hover {
    background: ${(props) => props.theme.colors["base-hover"]};
    border: 1px solid transparent;
  }
`;
