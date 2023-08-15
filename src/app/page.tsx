import axios from "axios";
import https from "https";
import { IResponse, columns } from "./columns";
import { DataTable } from "./data-table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { parse } from "json2csv";

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
    console.log("fetch success");
    return response.data;
  } catch (error) {
    console.log("fetch failed");
    return null;
  }
}

function generateCsv(data: IResponse[]) {
  // make header
  const header = Object.keys(data[0]).join(",");
  const rows = [];

  for (let i = 0; i < 5; i++) {
    let row = Object.values(data[i]).join(",");

    // remove line breaks
    row = row.replace(/(\r\n|\n|\r)/gm, "");

    rows.push(row);
  }

  const csv = [header, ...rows].join("\n");

  return csv;
}

export default async function Page() {
  let data = (await fetchApiData()) as IResponse[] | null;
  while (data === null) {
    data = (await fetchApiData()) as IResponse[] | null;
  }

  const csv = generateCsv(data);

  return (
    <main className="h-screen">
      <div className="py-8 md:py-10 px-4 md:px-12 flex flex-col gap-1 h-full">
        <div className="flex flex-col md:flex-row justify-start items-start md:justify-between gap-1">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold">
              Página Alternativa do SiMaC.
            </h1>
            <p>
              Os dados sao coletados a cada hora da{" "}
              <Link
                className="text-orange-500 hover:underline"
                href="https://pbqp-h.mdr.gov.br/sistemas/simac/empresas-qualificadas/"
                target="_blank"
              >
                página do SiMaC do governo
              </Link>
              .
            </p>
          </div>
          <Badge variant="outline" className="mt-2 rounded-full">
            <Link
              className="hover:underline font-normal text-orange-500"
              href="https://github.com/adomaitisc/solucao-simac"
              target="_blank"
            >
              Código aberto no GitHub
            </Link>
          </Badge>
        </div>
        {data ? (
          <>
            <DataTable columns={columns} data={data} csv={csv} />
          </>
        ) : (
          <p>Desculpe, houve um erro ao carregar os dados do SiMaC.</p>
        )}
      </div>
    </main>
  );
}
