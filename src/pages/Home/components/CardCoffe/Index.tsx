import {
  BodyCard,
  ButtonBuy,
  CardCoffeConainter,
  CardCoffeContente,
  FooterCard,
  ImgCoffe,
  TypeCofe,
} from "./styles";

import { ListCoffes } from "../../../../database/Coffes";
import { ShoppingCart } from "phosphor-react";
import { ButtonQuantidade } from "../../../../components/ButtonQuantidade";

export function CardCoffe() {
  return (
    <CardCoffeConainter>
      {ListCoffes.map((coffe) => (
        <CardCoffeContente key={coffe.id}>
          <ImgCoffe src={coffe.image} alt="" />
          <TypeCofe>
            {coffe.type.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </TypeCofe>
          <BodyCard>
            <span className="title">{coffe.title}</span>
            <span className="description">{coffe.description}</span>
          </BodyCard>
          <FooterCard>
            <p>
              R$
              <span>{coffe.price.toFixed(2).replace(".", ",")}</span>
            </p>

            <div>
              <ButtonQuantidade altura="2.37rem" />
              <ButtonBuy>
                <ShoppingCart weight="fill" size={22} />
              </ButtonBuy>
            </div>
          </FooterCard>
        </CardCoffeContente>
      ))}
    </CardCoffeConainter>
  );
}
