import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FormData } from "../../types/exportCsv";
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
    <div className="export-modal-date-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="export-modal-form-container">
          <div className="export-modal-date-form-inputs">
            <div className="export-modal-date-form-input">
              <Controller
                name="startDate"
                control={control}
                rules={{ required: "Campo obrigatório" }}
                render={({ field }) => (
                  <div className="export-modal-date-input-container">
                    <input
                      {...field}
                      type="text"
                      placeholder="MM/AAAA"
                      maxLength={7}
                      pattern="\d{2}/\d{4}"
                    />
                  </div>
                )}
              />
              {errors.startDate && <p>{errors.startDate.message}</p>}
            </div>
            <div className="export-modal-date-form-input">
              <Controller
                name="endDate"
                control={control}
                rules={{ required: "Campo obrigatório" }}
                render={({ field }) => (
                  <div className="export-modal-date-input-container">
                    <input
                      {...field}
                      type="text"
                      placeholder="MM/AAAA"
                      maxLength={7}
                      pattern="\d{2}/\d{4}"
                    />
                  </div>
                )}
              />
              {errors.endDate && <p>{errors.endDate.message}</p>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DateForm;
