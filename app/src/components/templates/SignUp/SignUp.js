import React from 'react'
import {Grid} from 'grid-styled'
import {Heading} from '@atoms'
import {Panel} from '@molecules'
import {SignUpForm} from '@organisms'
import PropTypes from 'prop-types'

const SignUp = props => (
  <div>
    <Grid w={1} p={1}>
      <Heading level={2}>Sign Up</Heading>
    </Grid>
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
