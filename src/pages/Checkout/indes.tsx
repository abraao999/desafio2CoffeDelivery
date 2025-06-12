import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import {
  ButtonConfirm,
  ButtonPayload,
  ButtonRemove,
  CartContainer,
  CheckoutContainer,
  ContentForm,
  ContentPayload,
  FormEntrega,
  HeaderForm,
  HeaderPayload,
  ImageItemCart,
  InfoContainer,
  InputForm,
  ItemCart,
  ListItens,
  PayloadContainer,
  Title,
  TotalContainer,
} from "./styled";
import { type ListCoffeType } from "../../database/Coffes";
import { ButtonQuantidade } from "../../components/ButtonQuantidade";
import { useEffect, useState } from "react";

const ListCart: ListCoffeType[] = [
  {
    id: "0",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: ["tradicional"],
    price: 9.9,
    image: "/src/assets/expresso.svg",
    qtde: 2,
  },
  {
    id: "1",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    type: ["tradicional"],
    price: 9.9,
    image: "/src/assets/americano.svg",
    qtde: 1,
  },
  {
    id: "1",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    type: ["tradicional"],
    price: 9.9,
    image: "/src/assets/americano.svg",
    qtde: 1,
  },
];

export function Checkout() {
  const [valorItens, setValorItens] = useState(0);
  useEffect(() => {
    let aux = valorItens;
    ListCart.map((item) => {
      aux = aux + item.price;
    });
    setValorItens(aux);
  }, []);
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
        <ListItens>
          {ListCart.map((item) => (
            <ItemCart key={item.id}>
              <div>
                <ImageItemCart src={item.image} alt="" />
                <div className="left">
                  <p id="title">Endereço de Entrega</p>
                  <div className="ContainerButton">
                    <ButtonQuantidade altura="2rem" />
                    <ButtonRemove>
                      <Trash size={16} />
                      <span>REMOVER</span>
                    </ButtonRemove>
                  </div>
                </div>
              </div>
              <span>R$ {item.price.toFixed(2)}</span>
            </ItemCart>
          ))}
          <TotalContainer>
            <p>
              <span>Total de itens</span>
              <span>R$ {valorItens.toFixed(2)}</span>
            </p>
            <p>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </p>
            <p id="total">
              <span>Total</span>
              <span>R$ {(valorItens + 3.5).toFixed(2)}</span>
            </p>
          </TotalContainer>
          <ButtonConfirm>CONFIRMA PEDIDO</ButtonConfirm>
        </ListItens>
      </CartContainer>
    </CheckoutContainer>
  );
}
