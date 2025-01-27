import { Form } from 'antd';
import type { Rule } from 'antd/es/form';
import { CustomForm } from '@/shared/ui/custom-form';
import { UsePasswordReset } from '../../model/usePasswordReset';

export const PasswordResetForm: React.FC = () => {
  const [form] = Form.useForm();
  const { onSubmit, onSubmitFailed } = UsePasswordReset();

  const validateNewPassword = (_: Rule, value: string): Promise<void> => {
    const oldPassword = form.getFieldValue('oldPassword');
    if (value && value === oldPassword) {
      return Promise.reject('New password must be different from old password!');
    }
    return Promise.resolve();
  };

  return (
    <CustomForm
      title="Reset Password"
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
          label: 'Old Password',
          name: 'oldPassword',
          type: 'password',
          rules: [{ required: true, message: 'Please input your old Password!' }],
          placeholder: 'Old Password',
        },
        {
          label: 'New Password',
          name: 'password',
          type: 'password',
          dependencies: ['oldPassword'],
          rules: [
            { required: true, message: 'Please input your new password!' },
            { validator: validateNewPassword },
          ],
          placeholder: 'New Password',
        },
      ]}
      buttonText="Sign In"
      links={[{ text: 'Sign Up', href: '/signup' }]}
    />
  );
};
