import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading} from '@atoms'
import {PasswordResetForm} from '@organisms'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const PasswordReset = props => (
  <div>
    <Grid w={1} p={1}>
      <Heading level={1}>
        <FormattedMessage id='auth.reset.title' />
      </Heading>
      <Alert type='error' message={props.errorMessage} />
    </Grid>
    <Grid w={[1, 1 / 4, 1 / 4]} />
    <Grid w={[1, 1 / 2, 1 / 2]} p={1}>
      <PasswordResetForm
        onSubmit={props.formHandler}
        errorMessage={props.errorMessage}
      />
    </Grid>
  </div>
)

PasswordReset.propTypes = {
  formHandler: PropTypes.func,
  errorMessage: PropTypes.string
}

export default PasswordReset
