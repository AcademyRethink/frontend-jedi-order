export interface FormularioProps {
  onSubmit: (formData: FormValues) => void;
  failureTypes: FailureType[];
}

export interface FormValues {
  startDate: string;
  endDate: string;
  failureType: number;
}

export interface FailureData {
  locomotive: string;
  failure_type: string;
  count: number;
}
export interface FailureDataMonth {
  month: string;
  failure_type: string;
  count: number;
}

export interface FailureType {
  id: number;
  failure_type: string;
}

export interface ChartBarProps {
  data: DataChart[];
}

export interface DataChart {
  locomotive: string;
  count: number;
}
export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: any;
  borderColor: string;
  borderWidth: number;
}

export interface ReportsFilteredByDays {
  date: string;
  reports: {
    [key: string]: string;
  };
}
