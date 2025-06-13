import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ConclusaoContainer = styled.div`
  padding: 3rem 10em;
`;
export const Title = styled.p`
  ${mixins.fonts.titleL}
  color:${(props) => props.theme.colors["yellow-dark"]};
`;
export const SubTitle = styled.p`
  ${mixins.fonts.textL}
  color:${(props) => props.theme.colors["base-subtitle"]};
`;
export const ContextContent = styled.div`
  display: flex;
  margin-top: 3rem;
  height: 16.87rem;
`;
export const DadosContainer = styled.div`
  /* position: relative; */
  padding: 1px; /* espaçamento da borda */
  border-radius: 6px 36px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors["yellow-dark"]},
    ${(props) => props.theme.colors["purple-dark"]}
  );

  flex: 1;
  & > .content {
    flex: 1;
    height: 100%;
    border-radius: 6px 36px;
    background: ${(props) => props.theme.colors.background};
    padding: 2.5rem;
  }
`;
type topicosType = "purple" | "yellow-dark" | "yellow";
export const Topicos = styled.div<{ color: topicosType }>`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;

  svg {
    padding: 0.5rem;
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors[props.color]};
  }
  p {
    color: ${(props) => props.theme.colors["base-text"]};
    margin-left: 0.75rem;
    width: 19.37rem;
  }
  span {
    font-weight: bold;
  }
`;

export const ImgContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
