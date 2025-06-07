import { CardCoffe } from "./components/CardCoffe/Index";
import { Intro } from "./components/Intro";
import { CardapioContainer, HomeContainer, TituloCardapio } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CardapioContainer>
        <TituloCardapio>Nossos cafés</TituloCardapio>
        <CardCoffe />
      </CardapioContainer>
    </HomeContainer>
  );
}
