import { useEffect, useState } from 'react';
import { useReportsFormStore } from './store';

export const useReportTable = () => {
  // Get data
  const tableData = useReportsFormStore((state) => state.reports);
  const setData = useReportsFormStore((state) => state.setReports);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await fetch('/api/report');
        const { data } = await response.json();
        setData(data);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTableData();
  }, [setData]);

  return { tableData, isLoading };
};
