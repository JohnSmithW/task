import type { FormProps } from 'antd';
import { useReportsFormStore } from './store';
type FieldType = {
  name?: string;
  userName?: string;
  startDate?: Date;
  endDate?: Date;
};

export const useReportForm = () => {
  const onSubmit: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const response = await fetch('/api/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'something went wrong');
      } else {
        const { reports } = useReportsFormStore.getState();
        const newReports = reports ? [...reports, data.data] : [data.data];
        useReportsFormStore.setState({ reports: newReports });

        console.log(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return { onSubmit, onSubmitFailed };
};
