import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CardCoffeConainter = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

export const CardCoffeContente = styled.div`
  background: ${(props) => props.theme.colors["base-card"]};
  width: 16rem;
  height: 19.37rem;
  margin-bottom: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ImgCoffe = styled.img`
  margin-top: -1.25rem;
  width: 7.5rem;
  height: 7.5rem;
  align-self: center;
`;

export const TypeCofe = styled.header`
  display: flex;
  flex-direction: row;
  align-self: center;
  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    background: ${(props) => props.theme.colors["yellow-light"]};
    color: ${(props) => props.theme.colors["yellow-dark"]};
    ${mixins.fonts.tag}
  }
  span + span {
    margin-left: 0.5rem;
  }
`;
export const BodyCard = styled.div`
  margin: 0px 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  span.title {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    ${mixins.fonts.titleS}
  }
  span.description {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors["base-label"]};
  }
`;
export const FooterCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;

  p {
    color: ${(props) => props.theme.colors["base-text"]};
    ${mixins.fonts.textS}
  }
  span {
    color: ${(props) => props.theme.colors["base-text"]};
    ${mixins.fonts.titleM}/* margin-right: 0.5rem; */
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    input:focus {
      border: none;
    }
  }
`;

export const ButtonBuy = styled.button`
  width: 2.37rem;
  padding: 0.5rem;
  height: 2.37rem;

  margin-left: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors["purple-dark"]};
  color: ${(props) => props.theme.colors["base-card"]};
`;
