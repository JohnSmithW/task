import { Form } from 'antd';
import { CustomForm } from '@/shared/ui/custom-form';
import { useForgotPassword } from '../../model/useForgotPassword';

export const ForgotPasswordForm: React.FC = () => {
  const [form] = Form.useForm();
  const { onSubmit, onSubmitFailed } = useForgotPassword();

  return (
    <CustomForm
      title="Password Reset"
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
          label: 'Username',
          name: 'username',
          type: 'text',
          rules: [{ required: true, message: 'Please input your username!' }],
        },
      ]}
      buttonText="Reset Password"
      links={[{ text: 'Sign Up', href: '/signup', style: { paddingTop: 10 } }]}
    />
  );
};
