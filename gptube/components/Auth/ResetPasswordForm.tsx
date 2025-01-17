import { Form, Input } from 'antd'
import { Toaster } from 'react-hot-toast'

import { openSans } from '@/components/Common/Fonts'
import { useAuth } from '@/hooks/useAuth'

function ResetPasswordForm() {
  const { resetPasswordHandler } = useAuth()

  return (
    <Form
      autoComplete="off"
      className="mx-auto w-96"
      labelCol={{ span: 24 }}
      name="reset_password_form"
      wrapperCol={{ span: 24 }}
      onFinish={resetPasswordHandler}
    >
      <Toaster />
      <Form.Item
        label={<p className={`text-typo ${openSans.className}`}>E-mail</p>}
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <button className="p-2 mx-auto primary-button" type="submit">
          <span className={`${openSans.className}`}>Send Email</span>
        </button>
      </Form.Item>
    </Form>
  )
}

export default ResetPasswordForm
