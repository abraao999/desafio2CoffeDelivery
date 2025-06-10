import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  ButtonPayload,
  CartContainer,
  CheckoutContainer,
  ContentForm,
  ContentPayload,
  FormEntrega,
  HeaderForm,
  HeaderPayload,
  InfoContainer,
  InputForm,
  PayloadContainer,
  Title,
} from "./styled";

export function Checkout() {
  return (
    <CheckoutContainer>
      <InfoContainer>
        <Title>Complete seu pedido</Title>
        <FormEntrega>
          <HeaderForm>
            <MapPinLine size={22} />
            <div>
              <p id="title">Endereço de Entrega</p>
              <p id="subtitle">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </HeaderForm>

          <ContentForm>
            <InputForm size="S" type="text" placeholder="CEP" />
            <InputForm size="XL" type="text" placeholder="Rua" />
            <div>
              <InputForm size="S" type="text" placeholder="Número" />
              <InputForm size="L" type="text" placeholder="Complento" />
            </div>
            <div>
              <InputForm size="S" type="text" placeholder="Bairro" />
              <InputForm size="M" type="text" placeholder="Cidade" />
              <InputForm size="XS" type="text" placeholder="UF" />
            </div>
          </ContentForm>
        </FormEntrega>
        <PayloadContainer>
          <HeaderPayload>
            <CurrencyDollar size={22} />
            <div>
              <p id="title">Pagamento</p>
              <p id="subtitle">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </HeaderPayload>
          <ContentPayload>
            <ButtonPayload selected={true}>
              <CreditCard size={16} /> CARTÃO DE CREDITO
            </ButtonPayload>
            <ButtonPayload selected={false}>
              <Bank size={16} /> CARTÃO DE DÉBITO
            </ButtonPayload>
            <ButtonPayload selected={false}>
              <Money size={16} /> DINHEIRO
            </ButtonPayload>
          </ContentPayload>
        </PayloadContainer>
      </InfoContainer>
      <CartContainer>
        <Title>Cafés selecionados</Title>
      </CartContainer>
    </CheckoutContainer>
  );
}
