import axios from "axios";
import https from "https";
import { IResponse, columns } from "./columns";
import { DataTable } from "./data-table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const revalidate = 60 * 60 * 24; // 24 hours

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
  const data = (await fetchApiData()) as IResponse[] | null;

  return (
    <div className="py-10 px-12">
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="text-2xl font-semibold mb-4">
          Solução para a página do SiMaC.
        </h1>
        <p>
          Uma alternativa para a página do SiMaC, que está malfuncionando há
          meses. Os dados sao coletados diariamente da{" "}
          <Link
            className="text-blue-500 hover:underline"
            href="https://pbqp-h.mdr.gov.br/sistemas/simac/empresas-qualificadas/"
            target="_blank"
          >
            página do SiMaC do governo
          </Link>
          .
        </p>
        <p className="font-medium">
          Utilize Ctrl + F para pesquisar elementos específicos.
        </p>
        <div className="mr-auto">
          <Badge className="mt-2 rounded-full">
            <Link
              className="hover:underline font-medium"
              href="https://github.com/"
              target="_blank"
            >
              Código aberto no GitHub
            </Link>
          </Badge>
        </div>
      </div>
      {data ? (
        <>
          <DataTable columns={columns} data={data} />
        </>
      ) : (
        <p>Desculpe, houve um erro ao carregar os dados do SiMaC.</p>
      )}
    </div>
  );
}
