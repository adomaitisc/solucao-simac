"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IResponse>[] = [
  {
    accessorKey: "psq",
    header: "PSQ",
    id: "PSQ",
  },
  {
    accessorKey: "nome_da_empresa",
    header: "Nome da Empresa",
    id: "Nome da Empresa",
  },
  {
    accessorKey: "cnpj",
    header: "CNPJ",
    id: "CNPJ",
  },
  {
    accessorKey: "cidade",
    header: "Cidade",
    id: "Cidade",
  },
  {
    accessorKey: "uf",
    header: "UF",
    id: "UF",
  },
  {
    accessorKey: "produto_alvo",
    header: "Produto Alvo",
    id: "Produto Alvo ",
  },
  {
    accessorKey: "ncm",
    header: "NCM",
    id: "NCM ",
  },
  {
    accessorKey: "nome_comercial",
    header: "Nome Comercial",
    id: "Nome Comercial",
  },
  {
    accessorKey: "marca",
    header: "Marca",
    id: "Marca",
  },
  {
    accessorKey: "nome_egt",
    header: "Nome EGT",
    id: "Nome EGT",
  },
  {
    accessorKey: "classificacao",
    header: "Classificação",
    id: "Classificação",
  },
  {
    accessorKey: "validade",
    header: "Validade",
    id: "Validade",
  },
  {
    accessorKey: "nome_entidade",
    header: "Nome Entidade",
    id: "Nome Entidade",
  },
];

export interface IResponse {
  psq: string;
  nome_da_empresa: string;
  cnpj: string;
  cidade: string;
  uf: string;
  produto_alvo: string;
  ncm: string;
  nome_comercial: string;
  marca: string;
  nome_egt: string;
  classificacao: string;
  validade: string;
  nome_entidade: string;
}
