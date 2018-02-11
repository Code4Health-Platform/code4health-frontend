import React from 'react'
import {Grid} from 'grid-styled'
import {Heading} from '@atoms'
import {Panel} from '@molecules'
import {LogInForm} from '@organisms'
import PropTypes from 'prop-types'

const LogIn = props => (
  <div>
    <Grid w={1} p={1}>
      <Heading level={2}>
        Log In
      </Heading>
    </Grid>
    <Grid w={[1, 1, 1/3]} p={1}>
      <LogInForm
        onSubmit={props.formHandler} errorMessage={props.errorMessage}
      />
    </Grid>
    <Grid w={[1, 1, 2/3]} p={1}>
      <Panel>
        Sidebar content
      </Panel>
    </Grid>
  </div>
)

LogIn.propTypes = {
  formHandler: PropTypes.func,
  errorMessage: PropTypes.string
}

export default LogIn
