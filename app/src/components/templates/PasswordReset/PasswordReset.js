import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading} from '@atoms'
import {Masthead} from '@molecules'
import {PasswordResetForm} from '@organisms'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const PasswordReset = props => (
  <div>
    <Masthead>
      <Heading level={2} icon='account'>
        <FormattedMessage id='auth.reset.title' />
      </Heading>
    </Masthead>

    <Alert type='error' message={props.errorMessage} />

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
