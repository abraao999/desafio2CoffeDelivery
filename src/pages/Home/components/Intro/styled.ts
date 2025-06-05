import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const ContainerIntro = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`;
export const ContentIntro = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 34rem;
  padding: 92px 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const InfoIntro = styled.section`
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 34rem;
  width: 36.75rem;
`;
export const TitleIntro = styled.div`
  p#title {
    ${mixins.fonts.titleXL};
    font-weight: bold;
    color: ${(props) => props.theme.colors["base-title"]};
  }
  p#subtitle {
    margin-top: 1rem;
    ${mixins.fonts.textL};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;
export const DetailIntro = styled.div`
  display: grid;
  width: 36.75rem;
  grid-template-columns: 271px 294px;
`;

export const ItemDetailIntro = styled.div<{
  $distancia?: boolean;
  $color: string;
  $margin?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  margin-bottom: ${(props) => (props.$distancia ? "1.25rem" : "0px")};
  margin-right: ${(props) => props.$margin};
  div {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 100%;
    color: ${(props) => props.theme.colors.white};
    margin-right: 0.75rem;

    background: ${(props) => props.theme.colors[props.$color]};
  }
  div + div {
  }
  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const ImgIntro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36.75rem;
  img {
    height: 22.6rem;
    width: 29.75rem;
  }
`;
