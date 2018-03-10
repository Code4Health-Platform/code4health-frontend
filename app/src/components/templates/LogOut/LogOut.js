import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading, Button} from '@atoms'
import {Masthead} from '@molecules'
import PropTypes from 'prop-types'

const LogOut = props => (
  <div>
    <Masthead>
      <Heading level={2} icon='logout'>Log Out</Heading>
    </Masthead>

    <Alert type='error' message={props.errorMessage} />
    <Alert type='success' message={props.successMessage} />

    <Grid w={1} p='1rem'>
      <Heading level={3}>Are you sure you want to log out?</Heading>
      <Button
        type='button'
        onClick={props.logOutAction}
        width='auto'
      >
        Log Out
      </Button>
    </Grid>
  </div>
)

LogOut.propTypes = {
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  logOutAction: PropTypes.func
}

export default LogOut
