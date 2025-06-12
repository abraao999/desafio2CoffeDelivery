export interface ListCoffeType {
  id: string;
  type: string[];
  title: string;
  description: string;
  price: number;
  qtde: number;
  image: string;
}

export const ListCoffes: ListCoffeType[] = [
  {
    id: "0",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: ["tradicional"],
    price: 9.9,
    image: "/src/assets/expresso.svg",
    qtde: 0,
  },
  {
    id: "1",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    type: ["tradicional"],
    price: 9.9,
    image: "/src/assets/americano.svg",
    qtde: 0,
  },
  {
    id: "2",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    type: ["tradicional"],
    price: 9.9,
    image: "/src/assets/expresso-cremoso.svg",
    qtde: 0,
  },
  {
    id: "3",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    type: ["tradicional", "gelado"],
    price: 9.9,
    image: "/src/assets/cafe-gelado.svg",
    qtde: 0,
  },
  {
    id: "4",
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    type: ["tradicional", "com leite"],
    price: 9.9,
    image: "/src/assets/cafe-com-leite.svg",
    qtde: 0,
  },
  {
    id: "5",
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    type: ["tradicional", "com leite"],
    price: 9.9,
    image: "/src/assets/latte.svg",
    qtde: 0,
  },
  {
    id: "6",
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    type: ["tradicional", "com leite"],
    price: 9.9,
    image: "/src/assets/capuccino.svg",
    qtde: 0,
  },
  {
    id: "7",
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    type: ["tradicional", "com leite"],
    price: 9.9,
    image: "/src/assets/macchiato.svg",
    qtde: 0,
  },
  {
    id: "8",
    title: "Mocaccino",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    type: ["tradicional", "com leite"],
    price: 9.9,
    image: "/src/assets/mocaccino.svg",
    qtde: 0,
  },
  {
    id: "9",
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    type: ["especial", "com leite"],
    price: 9.9,
    image: "/src/assets/chocolate-quente.svg",
    qtde: 0,
  },
  {
    id: "10",
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    type: ["especial", "alcoólico", "gelado"],
    price: 9.9,
    image: "/src/assets/cubano.svg",
    qtde: 0,
  },
  {
    id: "11",
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    type: ["especial"],
    price: 9.9,
    image: "/src/assets/havaiano.svg",
    qtde: 0,
  },
  {
    id: "12",
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    type: ["especial"],
    price: 9.9,
    image: "/src/assets/arabe.svg",
    qtde: 0,
  },
  {
    id: "13",
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    type: ["especial", "alcoólico"],
    price: 9.9,
    image: "/src/assets/irlandes.svg",
    qtde: 0,
  },
];
