import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      {/* <CardapioContainer>
        <TituloCardapio>Nossos cafés</TituloCardapio>
      </CardapioContainer> */}
    </HomeContainer>
  );
}
