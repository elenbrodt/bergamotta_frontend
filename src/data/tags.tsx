type Tag = {
  tag: string;
  tag_id: string;
  tag_type: string;
  tag_category?: string;
};
type Tags = Tag[];

export const TAGS: Tags = [
  //Tipos de lojas
  {
    tag: "Restaurante",
    tag_id: "639cc80dbe58108851ce231b",
    tag_type: "place_types_ids",
    tag_category: "Tipos de lojas",
  },
  {
    tag: "Bar",
    tag_id: "639cc85abe58108851ce231c",
    tag_type: "place_types_ids",
    tag_category: "Tipos de lojas",
  },
  {
    tag: "RestoBar",
    tag_id: "639cc87cbe58108851ce231d",
    tag_type: "place_types_ids",
    tag_category: "Tipos de lojas",
  },
  {
    tag: "Bistrô",
    tag_id: "639cc89bbe58108851ce231e",
    tag_type: "place_types_ids",
    tag_category: "Tipos de lojas",
  },
  {
    tag: "Lanchonete",
    tag_id: "639cc8b6be58108851ce231f",
    tag_type: "place_types_ids",
    tag_category: "Tipos de lojas",
  },
  {
    tag: "Café",
    tag_id: "639cc8e0be58108851ce2320",
    tag_type: "place_types_ids",
    tag_category: "Tipos de lojas",
  },

  //Tipos de cozinha

  {
    tag: "Brasileira",
    tag_id: "639cc94ebe58108851ce2322",
    tag_type: "food_types_ids",
    tag_category: "Tipos de cozinha",
  },
  {
    tag: "Chinesa",
    tag_id: "639cc968be58108851ce2323",
    tag_type: "food_types_ids",
    tag_category: "Tipos de cozinha",
  },
  {
    tag: "Italiana",
    tag_id: "639cc989be58108851ce2324",
    tag_type: "food_types_ids",
    tag_category: "Tipos de cozinha",
  },
  {
    tag: "Japonesa",
    tag_id: "639cc9cfbe58108851ce2326",
    tag_type: "food_types_ids",
    tag_category: "Tipos de cozinha",
  },
  {
    tag: "Nordestina",
    tag_id: "639cc9e8be58108851ce2327",
    tag_type: "food_types_ids",
    tag_category: "Tipos de cozinha",
  },
  {
    tag: "Tailandesa",
    tag_id: "639cca06be58108851ce2328",
    tag_type: "food_types_ids",
    tag_category: "Tipos de cozinha",
  },

  //Perfil
  {
    tag: "Vegano",
    tag_id: "639cc46bbe58108851ce230b",
    tag_type: "place_profiles_ids",
    tag_category: "Perfil",
  },
  {
    tag: "Vegetariano (ovo-lacto)",
    tag_id: "639cc5b0be58108851ce230f",
    tag_type: "place_profiles_ids",
    tag_category: "Perfil",
  },

  {
    tag: "Inclusivo (com opções veganas)",
    tag_id: "639cc49abe58108851ce230c",
    tag_type: "place_profiles_ids",
    tag_category: "Perfil",
  },
  {
    tag: "Comida fitness",
    tag_id: "639cc3efbe58108851ce2309",
    tag_type: "place_profiles_ids",
    tag_category: "Perfil",
  },
  {
    tag: "Comida saudável",
    tag_id: "639cc432be58108851ce230a",
    tag_type: "place_profiles_ids",
    tag_category: "Perfil",
  },
  {
    tag: "Restaurantes prestigiados",
    tag_id: "639cc7c0be58108851ce231a",
    tag_type: "place_profiles_ids",
    tag_category: "Perfil",
  },

  //Preferência

  {
    tag: "Comer no local",
    tag_id: "639cc268be58108851ce2302",
    tag_type: "place_profiles_ids",
    tag_category: "Preferência",
  },
  {
    tag: "Para levar",
    tag_id: "639cc299be58108851ce2303",
    tag_type: "place_profiles_ids",
    tag_category: "Preferência",
  },

  //Serviço

  {
    tag: "Refeições",
    tag_id: "639cc2d2be58108851ce2304",
    tag_type: "place_profiles_ids",
    tag_category: "Serviço",
  },
  {
    tag: "Refeição de negócios",
    tag_id: "639cc216be58108851ce2301",
    tag_type: "place_profiles_ids",
    tag_category: "Serviço",
  },
  {
    tag: "Lanches",
    tag_id: "639cc350be58108851ce2305",
    tag_type: "place_profiles_ids",
    tag_category: "Serviço",
  },
  {
    tag: "Comida de boteco",
    tag_id: "639cc37dbe58108851ce2307",
    tag_type: "place_profiles_ids",
    tag_category: "Serviço",
  },

  {
    tag: "Buffet",
    tag_id: "639cc3c9be58108851ce2308",
    tag_type: "place_profiles_ids",
    tag_category: "Serviço",
  },
  {
    tag: "Harmonização com vinhos",
    tag_id: "639cc4e6be58108851ce230d",
    tag_type: "place_profiles_ids",
    tag_category: "Serviço",
  },
  {
    tag: "Harmonização com cervejas",
    tag_id: "639cc61bbe58108851ce2310",
    tag_type: "place_profiles_ids",
    tag_category: "Serviço",
  },

  //Ambiente
  {
    tag: "Descontraído",
    tag_id: "639cc66abe58108851ce2311",
    tag_type: "place_profiles_ids",
    tag_category: "Ambiente",
  },
  {
    tag: "Formal",
    tag_id: "639cc68ebe58108851ce2312",
    tag_type: "place_profiles_ids",
    tag_category: "Ambiente",
  },
  {
    tag: "Intimista",
    tag_id: "639cc6b7be58108851ce2313",
    tag_type: "place_profiles_ids",
    tag_category: "Ambiente",
  },
  {
    tag: "Iluminação baixa",
    tag_id: "639cc6e6be58108851ce2314",
    tag_type: "place_profiles_ids",
    tag_category: "Ambiente",
  },
  {
    tag: "Iluminação alta",
    tag_id: "639cc70abe58108851ce2315",
    tag_type: "place_profiles_ids",
    tag_category: "Ambiente",
  },
  {
    tag: "Pet friendly",
    tag_id: "639cc731be58108851ce2316",
    tag_type: "place_profiles_ids",
    tag_category: "Ambiente",
  },
  {
    tag: "Música ao vivo",
    tag_id: "639cc763be58108851ce2317",
    tag_type: "place_profiles_ids",
    tag_category: "Ambiente",
  },
  {
    tag: "Música ambiente",
    tag_id: "639cc784be58108851ce2318",
    tag_type: "place_profiles_ids",
    tag_category: "Ambiente",
  },
  {
    tag: "Sustentável",
    tag_id: "639cc7a6be58108851ce2319",
    tag_type: "place_profiles_ids",
    tag_category: "Ambiente",
  },
];
