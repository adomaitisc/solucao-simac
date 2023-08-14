"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IResponse>[] = [
  {
    accessorKey: "psq",
    header: "PSQ",
    minSize: 150,
  },
  {
    accessorKey: "nome_da_empresa",
    header: "Nome da Empresa",
    minSize: 150,
  },
  {
    accessorKey: "cnpj",
    header: "CNPJ",
    minSize: 150,
  },
  {
    accessorKey: "cidade",
    header: "Cidade",
    minSize: 150,
  },
  {
    accessorKey: "uf",
    header: "UF",
    minSize: 150,
  },
  {
    accessorKey: "produto_alvo",
    header: "Produto Alvo",
    minSize: 150,
  },
  {
    accessorKey: "ncm",
    header: "NCM",
    minSize: 150,
  },
  {
    accessorKey: "nome_comercial",
    header: "Nome Comercial",
    minSize: 150,
  },
  {
    accessorKey: "marca",
    header: "Marca",
    minSize: 150,
  },
  {
    accessorKey: "nome_egt",
    header: "Nome EGT",
    minSize: 150,
  },
  {
    accessorKey: "classificacao",
    header: "Classificação",
    minSize: 150,
  },
  {
    accessorKey: "validade",
    header: "Validade",
    minSize: 150,
  },
  {
    accessorKey: "nome_entidade",
    header: "Nome Entidade",
    minSize: 150,
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
