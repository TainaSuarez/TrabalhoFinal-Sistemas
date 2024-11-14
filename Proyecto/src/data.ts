type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Siciliana",
    desc: "Desperte seu paladar com uma combinação picante de pepperoni apimentado, jalapeños, flocos de pimenta vermelha e queijo mozzarella derretido, proporcionando um toque a cada mordida.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Delicie-se com a suavidade defumada de um hambúrguer de carne grelhado, coberto com bacon crocante, queijo cheddar derretido, cebolas caramelizadas e um toque de molho BBQ picante.",
    img: "/temporary/p2.png",
    price: 29.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "Uma clássica delícia italiana com uma crosta fina e crocante, molho de tomate ácido, mozzarella fresca e uma mistura de ervas aromáticas, coberta com alface, tomates e um toque de maionese ácida.",
    img: "/temporary/p3.png",
    price: 24.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Arrabbiata Picante",
    desc: "Desperte seu paladar com esta criação de massa picante, combinando penne em um molho de tomate apimentado infundido com alho, flocos de pimenta vermelha e manjericão fresco para a experiência definitiva de conforto alimentar.",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Jalapeño Fiesta",
    desc: "Desperte seu paladar com um toque picante! Este hambúrguer apresenta um suculento patty de carne bovina, jalapeños ardentes, queijo pepper jack e um molho de maionese chipotle picante, com todos os acompanhamentos clássicos em um pão tostado.",
    img: "/temporary/p5.png",
    price: 29.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Mágica Margherita",
    desc: "Um favorito atemporal com um toque, apresentando uma crosta fina coberta com tomates doces, manjericão fresco, mozzarella cremosa, um fio de azeite extra virgem, rúcula fresca e um fio de glase de balsâmico.",
    img: "/temporary/p6.png",
    price: 24.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Linguine ao Alho e Parmesão",
    desc: "Uma delícia para os amantes de alho, apresentando linguine coberto com um molho cremoso de parmesão, infundido com alho e guarnecido com salsinha picada, pimentões e tomates cereja.",
    img: "/temporary/p7.png",
    price: 28.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Delícia Mediterrânea",
    desc: "Embarque em uma jornada culinária com esta criação inspirada no Mediterrâneo, apresentando queijo feta picante, azeitonas Kalamata, tomates secos ao sol e uma pitada de orégano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Teriyaki Havaiano",
    desc: "Experimente um sabor dos trópicos com um suculento hambúrguer de carne coberto com molho teriyaki picante, guarnecido com abacaxi grelhado, bacon crocante e alface fresca, com todos os acompanhamentos clássicos em um pão tostado.",
    img: "/temporary/p9.png",
    price: 29.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
];




export const pizzas: Products = [
  {
    "id": 1,
    "title": "Siciliana",
    "desc": "Acenda suas papilas gustativas com uma combinação picante de pepperoni, jalapeños, flocos de pimenta vermelha e queijo mussarela derretido, entregando um golpe a cada mordida.",
    "img": "/temporary/p1.png",
    "price": 24.9,
    "options": [
      {"title": "Pequena", "additionalPrice": 0},
      {"title": "Média", "additionalPrice": 4},
      {"title": "Grande", "additionalPrice": 6}
    ]
  },
  {
    "id": 2,
    "title": "Delícia Mediterrânea",
    "desc": "Embarque em uma jornada culinária com esta criação inspirada no Mediterrâneo, apresentando queijo feta picante, azeitonas Kalamata, tomates secos e uma pitada de orégano.",
    "img": "/temporary/p8.png",
    "price": 32.9,
    "options": [
      {"title": "Pequena", "additionalPrice": 0},
      {"title": "Média", "additionalPrice": 4},
      {"title": "Grande", "additionalPrice": 6}
    ]
  },
  {
    "id": 3,
    "title": "Bella Napoli",
    "desc": "Uma delícia italiana clássica com uma crosta fina e crocante, molho de tomate picante, queijo mussarela fresco e uma mistura de ervas aromáticas cobertas com alface, tomates e uma colherada de maionese picante.",
    "img": "/temporary/p3.png",
    "price": 26.9,
    "options": [
      {"title": "Pequena", "additionalPrice": 0},
      {"title": "Média", "additionalPrice": 4},
      {"title": "Grande", "additionalPrice": 6}
    ]
  },
  {
    "id": 4,
    "title": "Pesto Primavera",
    "desc": "Uma delícia italiana clássica com uma crosta fina e crocante, molho de tomate picante, queijo mussarela fresco e uma mistura de ervas aromáticas cobertas com alface, tomates e uma colherada de maionese picante.",
    "img": "/temporary/p10.png",
    "price": 28.9,
    "options": [
      {"title": "Pequena", "additionalPrice": 0},
      {"title": "Média", "additionalPrice": 4},
      {"title": "Grande", "additionalPrice": 6}
    ]
  },
  {
    "id": 5,
    "title": "Veggie Suprema",
    "desc": "Uma delícia italiana clássica com uma crosta fina e crocante, molho de tomate picante, queijo mussarela fresco e uma mistura de ervas aromáticas cobertas com alface, tomates e uma colherada de maionese picante.",
    "img": "/temporary/p11.png",
    "price": 24.9,
    "options": [
      {"title": "Pequena", "additionalPrice": 0},
      {"title": "Média", "additionalPrice": 4},
      {"title": "Grande", "additionalPrice": 6}
    ]
  },
  {
    "id": 6,
    "title": "Fantasia de Quatro Queijos",
    "desc": "Experimente o puro prazer do queijo com uma mistura derretida de queijo mussarela, cheddar, provolone e parmesão, criando uma experiência de pizza rica e indulgente.",
    "img": "/temporary/p12.png",
    "price": 22.9,
    "options": [
      {"title": "Pequena", "additionalPrice": 0},
      {"title": "Média", "additionalPrice": 4},
      {"title": "Grande", "additionalPrice": 6}
    ]
  }
]
;

export const singleProduct: Product = {
  "id": 1,
  "title": "Siciliana",
  "desc": "Acenda suas papilas gustativas com uma combinação picante de pepperoni, jalapeños, flocos de pimenta vermelha e queijo mussarela derretido, proporcionando um sabor marcante a cada mordida.",
  "img": "/temporary/p1.png",
  "price": 24.9,
  "options": [
    {
      "title": "Pequena",
      "additionalPrice": 0
    },
    {
      "title": "Média",
      "additionalPrice": 4
    },
    {
      "title": "Grande",
      "additionalPrice": 6
    }
  ]
}



type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "massas",
    title: "Massas Italianas",
    desc: "Saboreie o gosto da perfeição com nosso menu de massas italianas feitas à mão.",
    img: "/temporary/m1.png",
    color: "branco",
  },
  {
    id: 2,
    slug: "hamburgueres",
    title: "Hambúrgueres Suculentos",
    desc: "Felicidade em Hambúrguer: Patties suculentos, sabores ousados e coberturas gourmet.",
    img: "/temporary/m2.png",
    color: "preto",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Pizzas Queijosas",
    desc: "Paraíso da Pizza: Fatias irresistíveis, coberturas de dar água na boca e perfeição queijosa.",
    img: "/temporary/m3.png",
    color: "branco",
  },
  
];
