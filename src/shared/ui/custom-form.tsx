'use client';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, DatePicker } from 'antd';
import type { FormProps } from 'antd';
import type { NamePath } from 'antd/lib/form/interface';
import Link from 'next/link';

const { RangePicker } = DatePicker;

type FieldType = {
  username?: string;
  password?: string;
  label?: string;
  name?: NamePath;
  rules: { required: boolean; message: string }[];
  type?: 'password' | 'text' | 'date';
  startDate?: Date;
  endDate?: Date;
};

interface ICustomFormProps {
  onSubmit: FormProps<FieldType>['onFinish'];
  onSubmitFailed: FormProps<FieldType>['onFinishFailed'];
  onFormReset: FormProps<FieldType>['onReset'];
  fields: FieldType[];
  buttonText: string;
  link?: { text: string; href: string };
}

const dateFormat = 'YYYY/MM/DD';
export const CustomForm: React.FC<ICustomFormProps> = ({
  onSubmit,
  onSubmitFailed,
  onFormReset,
  fields,
  buttonText,
  link,
}) => {
  return (
    <Form
      name="basic"
      style={{ maxWidth: 600 }}
      onFinish={onSubmit}
      onFinishFailed={onSubmitFailed}
      onReset={onFormReset}
      autoComplete="off"
    >
      {fields.map(({ name, type = 'text', rules }, index) => (
        <Form.Item<FieldType> name={name} rules={[...rules]} key={index}>
          {type === 'password' && (
            <Input.Password prefix={<LockOutlined />} placeholder="password" />
          )}
          {type === 'text' && (
            <Input prefix={name === 'username' ? <UserOutlined /> : null} placeholder={name} />
          )}
          {type === 'date' && <RangePicker format={dateFormat} />}
        </Form.Item>
      ))}
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          {buttonText}
        </Button>
        {link && <Link href={link.href}>{link.text}</Link>}
      </Form.Item>
    </Form>
  );
};
