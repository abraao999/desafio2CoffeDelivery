import {
  ConclusaoContainer,
  ContextContent,
  DadosContainer,
  ImgContent,
  SubTitle,
  Title,
  Topicos,
} from "./styled";
import Entrega from "../../assets/Entrega.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function ConclusaoPedido() {
  return (
    <ConclusaoContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
      <ContextContent>
        <DadosContainer>
          <div className="content">
            <Topicos color="purple">
              <MapPin weight="fill" size={16} />
              <div>
                <p>
                  Entrega em <span>Rua João Daniel Martinelli, 102 </span>
                  Farrapos - Porto Alegre, RS
                </p>
              </div>
            </Topicos>
            <Topicos color="yellow">
              <Timer weight="fill" size={16} />
              <div>
                <p>
                  Previsão de entrega <br />
                  <span>20 min - 30 min</span>
                </p>
              </div>
            </Topicos>
            <Topicos color="yellow-dark">
              <CurrencyDollar weight="fill" size={16} />
              <div>
                <p>
                  Pagamento na entrega <br />
                  <span>Cartão de Crédito</span>
                </p>
              </div>
            </Topicos>
          </div>
        </DadosContainer>
        <ImgContent>
          <img src={Entrega} alt="" />
        </ImgContent>
      </ContextContent>
    </ConclusaoContainer>
  );
}
