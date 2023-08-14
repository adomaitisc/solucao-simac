import axios from "axios";
import https from "https";
import { IResponse, columns } from "./columns";
import { DataTable } from "./data-table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const revalidate = 60; // 1 minute

const instance = axios.create({
  baseURL: "https://pbqp-h.mdr.gov.br",
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // This disables SSL verification
  }),
});

async function fetchApiData() {
  try {
    const response = await instance.get(
      "/sistemas/simac/empresas-qualificadas/?tabela=show"
    );
    return response.data;
  } catch (error) {
    return null;
  }
}

export default async function Page() {
  let data = (await fetchApiData()) as IResponse[] | null;
  while (data === null) {
    data = (await fetchApiData()) as IResponse[] | null;
  }

  return (
    <main className="h-screen">
      <div className="py-8 md:py-10 px-4 md:px-12 flex flex-col gap-1 h-full">
        <h1 className="text-2xl font-semibold">Página Alternativa do SiMaC.</h1>
        <p>
          Os dados sao coletados a cada hora da{" "}
          <Link
            className="text-blue-500 hover:underline"
            href="https://pbqp-h.mdr.gov.br/sistemas/simac/empresas-qualificadas/"
            target="_blank"
          >
            página do SiMaC do governo
          </Link>
          .
        </p>
        <div className="mr-auto mb-2">
          <Badge variant="outline" className="mt-2 rounded-full">
            <Link
              className="hover:underline font-medium"
              href="https://github.com/adomaitisc/solucao-simac"
              target="_blank"
            >
              Código aberto no GitHub
            </Link>
          </Badge>
        </div>
        {data ? (
          <>
            <DataTable columns={columns} data={data} />
          </>
        ) : (
          <p>Desculpe, houve um erro ao carregar os dados do SiMaC.</p>
        )}
      </div>
    </main>
  );
}
