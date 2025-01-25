import { CustomForm } from '@/shared/ui/custom-form';
import { useReportForm } from '../model/useReportForm';

export const ReportForm: React.FC = () => {
  const { onSubmit, onSubmitFailed } = useReportForm();

  return (
    <CustomForm
      onSubmit={onSubmit}
      onSubmitFailed={onSubmitFailed}
      fields={[
        {
          name: 'name',
          type: 'text',
          rules: [{ required: true, message: 'Please input report name!' }],
        },
        {
          name: 'userName',
          type: 'text',
          rules: [{ required: true, message: 'Please input user name!' }],
        },
        {
          name: 'date',
          type: 'date',
          rules: [{ required: true, message: 'Please select date!' }],
        },
      ]}
      buttonText="Add to report"
    />
  );
};
