import { Form } from 'antd';
import { CustomForm } from '@/shared/ui/custom-form';
import { useSignUp } from '../../model/useSignUp';

export const SignUpForm: React.FC = () => {
  const [form] = Form.useForm();
  const { onSubmit, onSubmitFailed } = useSignUp();

  return (
    <CustomForm
      title="Sign Up"
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
        {
          label: 'Password',
          name: 'password',
          type: 'password',
          rules: [{ required: true, message: 'Please input your password!' }],
        },
      ]}
      buttonText="Sign Up"
      links={[{ text: 'Sign In', href: '/signin' }]}
    />
  );
};
