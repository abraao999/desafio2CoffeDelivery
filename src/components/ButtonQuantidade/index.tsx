import { Minus, Plus } from "phosphor-react";
import { ButtonContainer } from "./styles";

export function ButtonQuantidade() {
  return (
    <ButtonContainer>
      <button>
        <Minus weight="bold" size={14} />
      </button>
      <input type="number" name="" id="" value={0} />
      <button>
        <Plus weight="bold" size={14} />
      </button>
    </ButtonContainer>
  );
}
