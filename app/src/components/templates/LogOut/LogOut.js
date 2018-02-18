import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading, Button, Paragraph} from '@atoms'
import PropTypes from 'prop-types'

const LogOut = props => {
  if (props.authenticated) {
    return (
      <div>
        <Grid w={1} p={1}>
          <Heading level={2} icon='logout'>
            Log Out
          </Heading>
          <Alert type='error' message={props.errorMessage} />
        </Grid>
        <Grid w={1} p={1}>
          <Paragraph>Are you sure you want to log out?</Paragraph>
          <Button
            type='button'
            clickHandler={() => props.logOutAction}
            width='auto'
          >
            Log Out
          </Button>
        </Grid>
      </div>
    )
  } else {
    return (
      <div>already logged out</div>
    )
  }
}

LogOut.propTypes = {
  errorMessage: PropTypes.string,
  logOutAction: PropTypes.func,
  authenticated: PropTypes.bool
}

export default LogOut
