import axios from "axios";
import { FormData } from "../../types/exportCsv";

const apiUrl = "http://tecnovia.rj.r.appspot.com/communication-reports";

export const fetchCSVData = async (data: FormData): Promise<Blob> => {
  try {
    // Converte as datas para o formato aaaa-mm-dd
    const startDate = formatDate(data.startDate);
    const endDate = formatDate(data.endDate);

    // Faz a requisição para a rota de download do arquivo CSV
    const response = await axios.post(
      `${apiUrl}/filterbytimeinterval`,
      { startDate, endDate },
      { responseType: "blob" } // Indica que a resposta é um arquivo binário (o arquivo CSV)
    );

    return new Blob([response.data]);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const formatDate = (date: string) => {
  // Separa o mês e o ano
  const [month, year] = date.split("/");

  // Obtém o primeiro dia do mês
  const day = "01";

  return `${year}-${month}-${day}`;
};
