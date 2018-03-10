import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading, Button} from '@atoms'
import {Masthead} from '@molecules'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const LogOut = props => (
  <div>
    <Masthead>
      <Heading level={2} icon='logout'>
        <FormattedMessage id='auth.logOut.title' />
      </Heading>
    </Masthead>

    <Alert type='error' message={props.errorMessage} />
    <Alert type='success' message={props.successMessage} />

    <Grid w={1} p='1rem'>
      <Heading level={3}>
        <FormattedMessage id='auth.logOut.confirm' />
      </Heading>
      <Button
        type='button'
        onClick={props.logOutAction}
        width='auto'
      >
        <FormattedMessage id='auth.logOut.title' />
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
