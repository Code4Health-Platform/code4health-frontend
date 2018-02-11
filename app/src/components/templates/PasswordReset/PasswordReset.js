import React from 'react'
import {Grid} from 'grid-styled'
import {Heading} from '@atoms'
import {Panel} from '@molecules'
import {PasswordResetForm} from '@organisms'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const PasswordReset = props => (
  <div>
    <Grid w={1} p={1}>
      <Heading level={2}>
        <FormattedMessage id='auth.reset.title' />
      </Heading>
    </Grid>
    <Grid w={[1, 1, 1/2]} p={1}>
      <PasswordResetForm
        formHandler={props.formHandler} errorMessage={props.errorMessage}
      />
    </Grid>
    <Grid w={[1, 1, 1/2]} p={1}>
      <Panel />
    </Grid>
  </div>
)

PasswordReset.propTypes = {
  formHandler: PropTypes.func,
  errorMessage: PropTypes.string
}

export default PasswordReset
