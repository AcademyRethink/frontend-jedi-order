import React, { useState } from "react";
import ChartForm from "./form";
import BarChart from "./barChart";
import { FormValues } from "../../../types/charts";
import useCommunicationReportsViewModel from "../../../viewmodel/useCommunicationReportsViewModel";

const ChartBarWithDateAndFailureFilter: React.FC = () => {
  const { failureTypes, failureData, getFailureData } =
    useCommunicationReportsViewModel();
  const [formData, setFormData] = useState<FormValues>({
    startDate: "2023-01-01",
    endDate: "2023-07-31",
    failureType: 2,
  });

  const handleSubmit = (formValues: FormValues) => {
    setFormData(formValues);
    getFailureData(formData);
  };

  const hasData = failureData.length > 0;

  return (
    <div>
      <ChartForm onSubmit={handleSubmit} failureTypes={failureTypes} />
      {hasData ? (
        <BarChart data={failureData} />
      ) : (
        <p>Não há dados disponíveis com os filtros informados.</p>
      )}
    </div>
  );
};

export default ChartBarWithDateAndFailureFilter;
