import type { FormProps } from 'antd';
import { useUserStore } from '@/enteties/user/store';
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export const useSignUp = () => {
  const onSubmit: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      } else {
        useUserStore.getState().setUser(data);
        if (typeof window !== 'undefined') {
          window.location.href = '/report';
        }
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
