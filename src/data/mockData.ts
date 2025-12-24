import { Fatura, FaturaItem, Alerta, Cliente, Boleto, DashboardData } from "@/types";

// Mock data for demonstration
export const mockClientes: Cliente[] = [
  {
    unidade_consumidora: "24021394",
    cliente_numero: "68397731",
    nome: "ACADEMIA URUGUAI LTDA",
    cnpj: "12.345.678/0001-90",
    cep: "89896-000",
    cidade_uf: "ITAPIRANGA SC",
    desconto_contratado: 15,
    subvencao: 0,
    status: "Ativo"
  },
  {
    unidade_consumidora: "29607168",
    cliente_numero: "66461734",
    nome: "ACADEMIA PEREIRA",
    cnpj: "98.765.432/0001-10",
    cep: "89896-000",
    cidade_uf: "ITAPIRANGA SC",
    desconto_contratado: 15,
    subvencao: 500,
    status: "Ativo"
  },
  {
    unidade_consumidora: "15673885",
    cliente_numero: "15673885",
    nome: "HOTEL UNIAO LTDA",
    cnpj: "82.819.665/0001-96",
    cep: "89896-000",
    cidade_uf: "ITAPIRANGA SC",
    desconto_contratado: 15,
    subvencao: 0,
    status: "Ativo"
  },
  {
    unidade_consumidora: "28854811",
    cliente_numero: "69392563",
    nome: "COMERCIO E TRANSPORTES DIB LTDA",
    cnpj: "45.678.901/0001-23",
    cep: "89896-000",
    cidade_uf: "ITAPIRANGA SC",
    desconto_contratado: 15,
    subvencao: 0,
    status: "Ativo"
  },
  {
    unidade_consumidora: "64166808",
    cliente_numero: "64166808",
    nome: "DOCES E SALGADOS BELA VISTA LTDA",
    cnpj: "07.334.531/0001-60",
    cep: "89896-000",
    cidade_uf: "ITAPIRANGA SC",
    desconto_contratado: 15,
    subvencao: 0,
    status: "Ativo"
  }
];

const generateFaturaItens = (): FaturaItem[] => [
  {
    id: "1",
    codigo: "0D",
    descricao: "Consumo TE",
    unidade: "KWH",
    quantidade: 1918,
    tarifa: 0.416611,
    valor: 799.06,
    pis_valor: 45.76,
    cofins_base: 799.06,
    icms_aliquota: 17,
    icms_valor: 135.84,
    tarifa_sem_trib: 0.32193
  },
  {
    id: "2",
    codigo: "0E",
    descricao: "Consumo TUSD",
    unidade: "KWH",
    quantidade: 1918,
    tarifa: 0.483676,
    valor: 927.69,
    pis_valor: 53.13,
    cofins_base: 927.69,
    icms_aliquota: 17,
    icms_valor: 157.71,
    tarifa_sem_trib: 0.37375
  },
  {
    id: "3",
    codigo: "0R",
    descricao: "Energia Injet. TE",
    unidade: "KWH",
    quantidade: 896.53,
    tarifa: -0.321919,
    valor: -288.61,
    pis_valor: 0,
    cofins_base: 0,
    icms_aliquota: 0,
    icms_valor: 0,
    tarifa_sem_trib: 0.32193
  },
  {
    id: "4",
    codigo: "0S",
    descricao: "Energia Inj. TUSD",
    unidade: "KWH",
    quantidade: 896.53,
    tarifa: -0.373748,
    valor: -335.12,
    pis_valor: 0,
    cofins_base: 0,
    icms_aliquota: 0,
    icms_valor: 0,
    tarifa_sem_trib: 0.37375
  },
  {
    id: "5",
    codigo: "2U",
    descricao: "Band. Vermelha",
    unidade: "KWH",
    quantidade: 1918,
    tarifa: 0.04979,
    valor: 95.47,
    pis_valor: 5.47,
    cofins_base: 95.47,
    icms_aliquota: 17,
    icms_valor: 16.23,
    tarifa_sem_trib: 0.04
  }
];

export const mockFaturas: Fatura[] = [
  {
    id: "f1",
    unidade_consumidora: "24021394",
    cliente_numero: "68397731",
    nome: "ACADEMIA URUGUAI LTDA",
    cnpj: "12.345.678/0001-90",
    referencia: "12/2025",
    vencimento: "05/01/2026",
    total: 590.45,
    leitura_anterior: "06/11/2025",
    leitura_atual: "05/12/2025",
    dias: 29,
    proxima_leitura: "07/01/2026",
    nota_fiscal_numero: "071591205",
    nota_fiscal_serie: "001",
    nota_fiscal_emissao: "05/12/2025",
    cidade_uf: "ITAPIRANGA SC",
    cep: "89896-000",
    itens: generateFaturaItens(),
    status: "pendente",
    alertas: [
      {
        id: "a1",
        campo: "quantidade",
        tipo: "warning",
        mensagem: "Consumo 35% acima da média histórica",
        valor_atual: 1918,
        valor_esperado: 1420,
        desvio_percentual: 35
      }
    ]
  },
  {
    id: "f2",
    unidade_consumidora: "29607168",
    cliente_numero: "66461734",
    nome: "ACADEMIA PEREIRA",
    cnpj: "98.765.432/0001-10",
    referencia: "12/2025",
    vencimento: "05/01/2026",
    total: 340.72,
    leitura_anterior: "07/11/2025",
    leitura_atual: "08/12/2025",
    dias: 31,
    proxima_leitura: "08/01/2026",
    nota_fiscal_numero: "071234567",
    nota_fiscal_serie: "001",
    nota_fiscal_emissao: "08/12/2025",
    cidade_uf: "ITAPIRANGA SC",
    cep: "89896-000",
    itens: generateFaturaItens().slice(0, 3),
    status: "validado",
    alertas: []
  },
  {
    id: "f3",
    unidade_consumidora: "15673885",
    cliente_numero: "15673885",
    nome: "HOTEL UNIAO LTDA",
    cnpj: "82.819.665/0001-96",
    referencia: "12/2025",
    vencimento: "22/12/2025",
    total: 1336.80,
    leitura_anterior: "05/11/2025",
    leitura_atual: "04/12/2025",
    dias: 29,
    proxima_leitura: "06/01/2026",
    nota_fiscal_numero: "071388093",
    nota_fiscal_serie: "001",
    nota_fiscal_emissao: "04/12/2025",
    cidade_uf: "ITAPIRANGA SC",
    cep: "89896-000",
    itens: generateFaturaItens(),
    status: "pendente",
    alertas: [
      {
        id: "a2",
        campo: "total",
        tipo: "error",
        mensagem: "Valor total 50% acima do esperado",
        valor_atual: 1336.80,
        valor_esperado: 890,
        desvio_percentual: 50
      }
    ]
  },
  {
    id: "f4",
    unidade_consumidora: "28854811",
    cliente_numero: "69392563",
    nome: "COMERCIO E TRANSPORTES DIB LTDA",
    cnpj: "45.678.901/0001-23",
    referencia: "12/2025",
    vencimento: "29/12/2025",
    total: 461.77,
    leitura_anterior: "10/11/2025",
    leitura_atual: "09/12/2025",
    dias: 29,
    proxima_leitura: "09/01/2026",
    nota_fiscal_numero: "071976188",
    nota_fiscal_serie: "001",
    nota_fiscal_emissao: "09/12/2025",
    cidade_uf: "ITAPIRANGA SC",
    cep: "89896-000",
    itens: generateFaturaItens().slice(0, 4),
    status: "validado",
    alertas: []
  }
];

export const mockBoletos: Boleto[] = mockClientes.slice(0, 4).map((cliente, index) => ({
  id: `b${index + 1}`,
  cliente,
  referencia: "12/2025",
  vencimento: "15/01/2026",
  energia_compensada: 1574 + index * 200,
  tarifa_sem_desconto: 0.88,
  tarifa_com_desconto: 0.75,
  percentual_desconto: 15,
  bandeiras: 0.082,
  bandeiras_com_desconto: 0.070,
  valor_total: 969.01 + index * 150,
  economia_gerada: 228.08 + index * 50,
  status: index === 0 ? 'pendente' : index === 1 ? 'validado' : 'pendente',
  faturas: mockFaturas.filter(f => f.unidade_consumidora === cliente.unidade_consumidora)
}));

export const mockDashboardData: DashboardData = {
  total_economia: 45678.90,
  total_receita: 189450.00,
  total_clientes: 166,
  energia_compensada_total: 524680,
  economia_por_mes: [
    { mes: "Jan", valor: 3200 },
    { mes: "Fev", valor: 3450 },
    { mes: "Mar", valor: 3800 },
    { mes: "Abr", valor: 4100 },
    { mes: "Mai", valor: 4350 },
    { mes: "Jun", valor: 4500 },
    { mes: "Jul", valor: 3900 },
    { mes: "Ago", valor: 3600 },
    { mes: "Set", valor: 3750 },
    { mes: "Out", valor: 4200 },
    { mes: "Nov", valor: 4500 },
    { mes: "Dez", valor: 4678.90 }
  ],
  maiores_clientes: [
    { nome: "HOTEL UNIAO LTDA", economia: 8945.50 },
    { nome: "COMERCIO E TRANSPORTES DIB LTDA", economia: 6780.25 },
    { nome: "ACADEMIA URUGUAI LTDA", economia: 5430.80 },
    { nome: "DOCES E SALGADOS BELA VISTA LTDA", economia: 4890.60 },
    { nome: "ACADEMIA PEREIRA", economia: 3456.90 }
  ],
  receita_por_mes: [
    { mes: "Jan", valor: 15200 },
    { mes: "Fev", valor: 15800 },
    { mes: "Mar", valor: 16100 },
    { mes: "Abr", valor: 15900 },
    { mes: "Mai", valor: 16400 },
    { mes: "Jun", valor: 16800 },
    { mes: "Jul", valor: 15600 },
    { mes: "Ago", valor: 15300 },
    { mes: "Set", valor: 15750 },
    { mes: "Out", valor: 16200 },
    { mes: "Nov", valor: 16500 },
    { mes: "Dez", valor: 13900 }
  ]
};
