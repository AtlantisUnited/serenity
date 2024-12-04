import { useIntl }  from 'react-intl'
import React        from 'react'

import { Template } from './Template'

const ResetPasswordTemplate = ({ url }) => {
  const data = url.query || {}
  const intl = useIntl()

  const link = `${process.env.ACCOUNTS_URL}/change-password/${data.resetToken}`

  return <Template {...data} link={link} intl={intl} />
}

export default ResetPasswordTemplate
