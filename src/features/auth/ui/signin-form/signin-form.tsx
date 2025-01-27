import { Form } from 'antd';
import { CustomForm } from '@/shared/ui/custom-form';
import { useSignIn } from '../../model/useSignIn';

export const SignInForm: React.FC = () => {
  const [form] = Form.useForm();
  const { onSubmit, onSubmitFailed } = useSignIn();

  return (
    <CustomForm
      title="Sign In"
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
      buttonText="Sign In"
      links={[
        { text: 'Sign Up', href: '/signup' },
        { text: 'Forgot Password', href: '/forgot-password', style: { marginLeft: 10 } },
      ]}
    />
  );
};
