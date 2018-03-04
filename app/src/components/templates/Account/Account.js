import React from 'react'
import PropTypes from 'prop-types'
import {Grid} from 'grid-styled'
import {Alert, Heading} from '@atoms'
import {Masthead} from '@molecules'
import {AccountDetailsForm, PasswordChangeForm} from '@organisms'

function initialValues (account) {
  const initialValues = {}

  if (account && account.firstName) {
    initialValues.firstName = account.firstName || null
  }
  if (account && account.lastName) {
    initialValues.lastName = account.lastName || null
  }
  if (account && account.email) {
    initialValues.email = account.email || null
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
        account={props.account}
        initialValues={initialValues(props.account)}
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
  account: PropTypes.object
}

export default Account
