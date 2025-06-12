import { Minus, Plus } from "phosphor-react";
import { ButtonContainer } from "./styles";

interface PropsType {
  altura: string;
}

export function ButtonQuantidade({ altura }: PropsType) {
  return (
    <ButtonContainer altura={altura}>
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
