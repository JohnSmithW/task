import { Form } from 'antd';
import { CustomForm } from '@/shared/ui/custom-form';
import { useReportForm } from '../model/useReportForm';

export const ReportForm: React.FC = () => {
  const [form] = Form.useForm();
  const { onSubmit, onSubmitFailed } = useReportForm();

  return (
    <CustomForm
      title="Report Form"
      form={form}
      onSubmit={(event) => {
        onSubmit(event);
        form.resetFields();
      }}
      onSubmitFailed={(event) => {
        onSubmitFailed(event);
        form.resetFields();
      }}
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
