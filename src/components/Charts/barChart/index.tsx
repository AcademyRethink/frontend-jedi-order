import React, { useState } from "react";
import ChartForm from "./form";
import BarChart from "./barChart";
import { useFailureTypes, useFailureData } from "../../../hooks/barChart";
import { FailureType, FormValues } from "../../../types/charts";

const ChartBarWithDateAndFailureFilter: React.FC = () => {
  const failureTypes = useFailureTypes();
  const [formData, setFormData] = useState<FormValues>({
    startDate: "",
    endDate: "",
    failureType: 0,
  });
  const failureData = useFailureData(formData);

  const handleSubmit = (formData: FormValues) => {
    setFormData(formData);
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
