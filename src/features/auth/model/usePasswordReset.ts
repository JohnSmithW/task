import type { FormProps } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export const UsePasswordReset = () => {
  const onSubmit: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const response = await fetch('/api/auth/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.redirected) {
        // If the server responds with a redirect
        window.location.href = response.url;
      } else {
        // Handle non-redirect responses
        const data = await response.json();
        console.log(data);
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
