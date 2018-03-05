import React from 'react'
import {Grid} from 'grid-styled'
import {Heading} from '@atoms'
import {Masthead, Panel} from '@molecules'
import {SignUpForm} from '@organisms'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const SignUp = props => (
  <div>
    <Masthead>
      <Heading level={2} icon='account'>
        <FormattedMessage id='auth.signUp.title' />
      </Heading>
    </Masthead>
    <Grid w={[1, 1, 1 / 3]} p={1}>
      <SignUpForm
        onSubmit={props.formHandler}
        errorMessage={props.errorMessage}
        success={props.success}
      />
    </Grid>
    <Grid w={[1, 1, 2 / 3]} p={1}>
      <Panel>
        Sidebar content
      </Panel>
    </Grid>
  </div>
)

SignUp.propTypes = {
  formHandler: PropTypes.func,
  errorMessage: PropTypes.string,
  success: PropTypes.bool
}

export default SignUp
