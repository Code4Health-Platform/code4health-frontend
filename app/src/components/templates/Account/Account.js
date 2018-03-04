import React from 'react'
import PropTypes from 'prop-types'
import {Grid} from 'grid-styled'
import {Alert, Heading} from '@atoms'
import {Masthead} from '@molecules'
import {AccountDetailsForm, PasswordChangeForm} from '@organisms'

function initialValues (account) {
  const initialValues = {}

  if (!account || !account.data) {
    return initialValues
  }

  if (account.data.firstName) {
    initialValues.firstName = account.data.firstName || null
  }
  if (account.data.lastName) {
    initialValues.lastName = account.data.lastName || null
  }
  if (account.data.email) {
    initialValues.email = account.data.email || null
  }
  if (account.data.login) {
    initialValues.login = account.data.login || ''
  }

  return initialValues
}

const Account = props => (
  <div>
    <Masthead>
      <Heading level={2} icon='account'>Account</Heading>
    </Masthead>

    <Alert type='error' message={props.errorMessage} />
    <Alert type='success' message={props.successMessage} />

    <Grid w={[1, 1/2, 1/2]} p={'1rem'}>
      <Heading level={3} icon='account'>
        Change Account Details
      </Heading>
      <AccountDetailsForm
        errorMessage={props.errorMessage}
        isLoading={props.isLoading}
        account={props.accountDetails}
        initialValues={initialValues(props.accountDetails)}
        formHandler={props.accountDetailsFormHandler}
      />
    </Grid>
    <Grid w={[1, 1/2, 1/2]} p={'1rem'}>
      <Heading level={3} icon='key'>
        Change Password
      </Heading>
      <PasswordChangeForm
        formHandler={props.changePasswordFormHandler}
        errorMessage={props.errorMessage}
      />
    </Grid>
  </div>
)

Account.propTypes = {
  isLoading: PropTypes.bool,
  accountDetailsFormHandler: PropTypes.func,
  changePasswordFormHandler: PropTypes.func,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  accountDetails: PropTypes.object
}

export default Account
