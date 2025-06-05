import {
  ContainerIntro,
  ContentIntro,
  DetailIntro,
  ImgIntro,
  InfoIntro,
  ItemDetailIntro,
  TitleIntro,
} from "./styled";
import background from "../../../../assets/Background.svg";
import coffe from "../../../../assets/coffe.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
export function Intro() {
  return (
    <ContainerIntro>
      <ContentIntro>
        <InfoIntro>
          <TitleIntro>
            <p id="title">Encontre o café perfeito para qualquer hora do dia</p>
            <p id="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleIntro>
          <DetailIntro>
            <ItemDetailIntro
              $distancia={true}
              $color="yellow-dark"
              $margin={"2.5rem"}
            >
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </ItemDetailIntro>
            <ItemDetailIntro
              $distancia={true}
              $color="base-text"
              $margin={"0px"}
            >
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </ItemDetailIntro>
            <ItemDetailIntro $color="yellow" $margin={"2.5rem"}>
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </ItemDetailIntro>
            <ItemDetailIntro $color="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </ItemDetailIntro>
          </DetailIntro>
        </InfoIntro>
        <ImgIntro>
          <img src={coffe} alt="" />
        </ImgIntro>
      </ContentIntro>

      <img src={background} alt="" id="hero-bg" />
    </ContainerIntro>
  );
}
