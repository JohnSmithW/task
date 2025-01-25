import { CustomForm } from '@/shared/ui/custom-form';
import { useSignUp } from '../../model/useSignUp';

export const SignUpForm = () => {
  const { onSubmit, onSubmitFailed } = useSignUp();

  return (
    <CustomForm
      onSubmit={(event) => {
        onSubmit(event);
      }}
      onSubmitFailed={(event) => {
        onSubmitFailed(event);
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
      link={{ text: 'Sign In', href: '/signin' }}
    />
  );
};
