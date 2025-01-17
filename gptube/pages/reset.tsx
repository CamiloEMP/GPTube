import Link from 'next/link'

import { openSans } from '@/components/Common/Fonts'
import ResetPasswordForm from '@/components/Auth/ResetPasswordForm'
import { LayoutsAvailable } from '@/components/Layouts/Layouts'

function Reset() {
  return (
    <div className={`${openSans.className}`}>
      <h1 className="text-4xl text-center text-typo">
        <Link className="font-bold hover:text-primary" href="/">
          GPTube
        </Link>{' '}
        reset password
      </h1>
      <div className="flex mt-10">
        <ResetPasswordForm />
      </div>
    </div>
  )
}

export default Reset
Reset.Layout = LayoutsAvailable.Auth
