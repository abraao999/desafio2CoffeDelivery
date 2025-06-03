import {
  ActionsContainer,
  ButtonCarShopping,
  HeaderContainer,
  LabelCity,
} from "./styles";
import logo from "../../assets/LogoCoffe.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <ActionsContainer>
        <LabelCity htmlFor="location">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LabelCity>
        <ButtonCarShopping type="button">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </ButtonCarShopping>
      </ActionsContainer>
    </HeaderContainer>
  );
}
