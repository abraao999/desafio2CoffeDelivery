import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HomeContainer = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;
export const CardapioContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0px 10rem;
`;
export const TituloCardapio = styled.p`
  padding: 2rem 0px;
  ${mixins.fonts.titleL};
`;
