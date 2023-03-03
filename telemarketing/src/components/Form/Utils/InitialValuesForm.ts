import { EmpréstimoConsignadoValues } from "../Types";

export const initialValuesForm: EmpréstimoConsignadoValues = {
  beneficio: "a",
  nome: "a",
  dataNascimento: "",
  cpf: "a",
  situacaoBeneficio: "ativo",
  nit: "a",
  identidade: 11,
  sexo: "masculino",
  dib: "",
  valorBeneficio: 11,
  possuiRepresentanteLegalProcurador: "sim",
  pensaoAlimenticia: "sim",
  bloqueioEmprestismo: "sim",
  beneficioPermiteEmprestimo: "sim",
  naoPerturbe: "a",
  rg: "a",
  ddb: "",
  nomeMae: "a",
  descontosCartao: {},
  enderecoPessoal: {
    bairro: "a",
    cep: "a",
    cidade: "a",
    endereco: "a",
    uf: "a",
  },
  especie: {
    codigo: "a",
    descricao: "a",
  },
  margem: {
    competencia: "a",
    baseCalculoMargemConsignavel: 12,
    margemDisponivelEmprestimo: 12,
    margemDisponivelCartao: 12,
    percentualMargemDisponivelEmprestimo: 12,
    percentualMargemTotalEmprestimo: 12,
    quantidadeEmprestimo: 12,
    possuiCartao: "sim",
    percentualmargemDisponivelCartao: 12,
    percentualMargemTotalCartao: 12,
    margemDisponivelRcc: 12,
    margemDisponivelEmprestimoOn: "a",
  },
  // contratosEmprestimo: [
  //   {
  //     contrato: "",
  //     dataInicioContrato: "",
  //     competenciaInicioDesconto: "",
  //     competenciaFimDesconto: "",
  //     dataInclusao: "",
  //     situacao: "",
  //     excluidoAps: "",
  //     excluidoBanco: "",
  //     valorEmprestado: 0,
  //     valorParcela: 0,
  //     quantidadeParcelas: 0,
  //     quantidadeParcelasEmAberto: 0,
  //     saldoQuitacao: 0,
  //     taxa: 0,
  //     tipoEmprestimo: {
  //       codigo: "",
  //       descricao: "",
  //     },
  //     banco: {
  //       codigo: "",
  //       nome: "",
  //     },
  //   },
  // ],
};