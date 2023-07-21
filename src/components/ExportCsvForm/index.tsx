import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { FormData, FormErrors } from "../../types/exportCsv";
import { SubmitHandler } from "react-hook-form";
import { fetchCSVData } from "../../model/api/exportCsv";
import "./styles.css";
const DateForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Faz a requisição para a rota de download do arquivo CSV
      const csvData = await fetchCSVData(data);

      const url = window.URL.createObjectURL(csvData);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "dados.csv");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container-all">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <Controller
            name="startDate"
            control={control}
            rules={{ required: "Campo obrigatório" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="MM/AAAA"
                // Adicione a máscara para o formato MM/AAAA
                maxLength={7}
                pattern="\d{2}/\d{4}"
              />
            )}
          />
          <span className="material-icons">calendar_today</span>
          {errors.startDate && <p>{errors.startDate.message}</p>}
        </div>
        <div className="form-container">
          <Controller
            name="endDate"
            control={control}
            rules={{ required: "Campo obrigatório" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="MM/AAAA"
                // Adicione a máscara para o formato MM/AAAA
                maxLength={7}
                pattern="\d{2}/\d{4}"
              />
            )}
          />
          <span className="material-icons">calendar_today</span>
          {errors.endDate && <p>{errors.endDate.message}</p>}
        </div>
        <button type="submit">Exportar relatório</button>
      </form>
    </div>
  );
};

export default DateForm;
