import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading} from '@atoms'
import {LogInForm} from '@organisms'
import PropTypes from 'prop-types'

const LogIn = props => (
  <div>
    <Grid w={1} p={1}>
      <Heading level={2}>
        Log In
      </Heading>
      <Alert type='error' message={props.errorMessage} />
    </Grid>
    <Grid w={[1, 1/4, 1/4]} />
    <Grid w={[1, 1/2, 1/2]} p={1}>
      <LogInForm
        onSubmit={props.formHandler}
        errorMessage={props.errorMessage}
      />
    </Grid>
  </div>
)

LogIn.propTypes = {
  formHandler: PropTypes.func,
  errorMessage: PropTypes.string
}

export default LogIn
