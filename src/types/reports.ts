export type ReportType = {
  id: number;
  subject_id: number;
  created_by_id: number;
  driver_id: number;
  locomotive_id: number;
  created_at: Date;
  is_stopped: boolean;
  is_communication_failed: boolean;
  location: string;
  description: string;
  reason_stopped: string;
  subject: string;
  created_by: string;
  driver: string;
  locomotive: string;
  date: string;
  time: string;
};
