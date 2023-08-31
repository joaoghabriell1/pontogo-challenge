export interface Plan {
  id: number;
  heading: HeaderType;
  benefits: BenefitType[];
}

export interface HeaderType {
  title: string;
  price: string;
  collaborators: string;
}
export interface BenefitType {
  available: boolean;
  body: string;
}

export const plans = [
  {
    id: 1,
    heading: {
      title: "Plano Bronze",
      price: "30",
      collaborators: "5",
    },
    benefits: [
      { available: true, body: "Área de meus registros" },
      { available: true, body: "Dashboard" },
      { available: true, body: "Acesso de 5 colaboradores" },
      { available: false, body: "Suporte exclusivo" },
      { available: false, body: "Email corporativo" },
    ],
  },
  {
    id: 2,
    heading: {
      title: "Plano Prata",
      price: "50",
      collaborators: "10",
    },
    benefits: [
      { available: true, body: "Área de meus registros" },
      { available: true, body: "Dashboard" },
      { available: true, body: "Acesso de 10 colaboradores" },
      { available: false, body: "Suporte exclusivo" },
      { available: false, body: "Email corporativo" },
    ],
  },
  {
    id: 3,
    heading: {
      price: "100",
      collaborators: "20",
      title: "Plano Ouro",
    },
    benefits: [
      { available: true, body: "Área de meus registros" },
      { available: true, body: "Dashboard" },
      { available: true, body: "Acesso de 10 colaboradores" },
      { available: true, body: "Suporte exclusivo" },
      { available: false, body: "Email corporativo" },
    ],
  },
  {
    id: 4,
    heading: {
      title: "Plano Platina",
      price: "200",
      collaborators: "No limit",
    },
    benefits: [
      { available: true, body: "Área de meus registros" },
      { available: true, body: "Dashboard" },
      { available: true, body: "Acesso Ilimitado" },
      { available: true, body: "Suporte exclusivo" },
      { available: true, body: "Email corporativo" },
    ],
  },
];
