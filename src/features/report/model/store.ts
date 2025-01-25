import { create } from 'zustand';
import type { ReportData } from './types';

type ReportsFormState = {
  reports: ReportData[] | null;
  setReports: (data: ReportData[]) => void;
};

export const useReportsFormStore = create<ReportsFormState>((set) => ({
  reports: null,
  setReports: (reports: ReportData[]) => set({ reports }),
}));
