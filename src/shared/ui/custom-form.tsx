'use client';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Typography, Form, Input, DatePicker, FormInstance } from 'antd';
import type { FormProps } from 'antd';
import type { Rule } from 'antd/es/form';
import type { NamePath } from 'antd/lib/form/interface';
import Link from 'next/link';

const { Title } = Typography;

const { RangePicker } = DatePicker;

type FieldType = {
  username?: string;
  password?: string;
  label?: string;
  name?: NamePath;
  rules: Rule[];
  type?: 'password' | 'text' | 'date';
  startDate?: Date;
  endDate?: Date;
  dependencies?: NamePath[];
  placeholder?: string;
};

interface ICustomFormProps {
  onSubmit: FormProps<FieldType>['onFinish'];
  onSubmitFailed: FormProps<FieldType>['onFinishFailed'];
  fields: FieldType[];
  buttonText: string;
  links?: { text: string; href: string; style?: object }[];
  form: FormInstance;
  title?: string;
}

const dateFormat = 'YYYY/MM/DD';
export const CustomForm: React.FC<ICustomFormProps> = ({
  onSubmit,
  onSubmitFailed,
  fields,
  buttonText,
  links,
  form,
  title,
}) => {
  return (
    <Form
      form={form}
      name="basic"
      style={{ maxWidth: 600 }}
      onFinish={onSubmit}
      onFinishFailed={onSubmitFailed}
      autoComplete="off"
    >
      {title && (
        <Form.Item>
          <Title level={2}>{title}</Title>
        </Form.Item>
      )}
      {fields.map(({ name, type = 'text', rules, dependencies, placeholder }, index) => (
        <Form.Item<FieldType>
          name={name}
          rules={[...rules]}
          key={index}
          dependencies={dependencies}
        >
          {type === 'password' && (
            <Input.Password
              prefix={<LockOutlined />}
              placeholder={placeholder ? placeholder : 'password'}
            />
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
        {links &&
          links.map(({ text, href, style }, index) => (
            <Link href={href} key={index} style={style}>
              {text}
            </Link>
          ))}
      </Form.Item>
    </Form>
  );
};
