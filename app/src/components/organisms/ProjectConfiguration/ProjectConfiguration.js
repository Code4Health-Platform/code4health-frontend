import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button, Heading, Input, Label} from '@atoms'
import {Grid} from 'grid-styled'

class ProjectConfiguration extends Component {
  render () {
    return (
      <div>
        <Heading level={2}>Configuration</Heading>
        <Grid w={1} p={[0, 1]}>
          <Label>Token</Label>
        </Grid>
        <Grid w={[1, 3 / 4]} p={[0, '1rem']}>
          <Input value={this.props.config.token} readOnly />
        </Grid>
        <Grid w={[1, 1 / 4]} p={[0, '1rem']}>
          <Button icon='copy' width='auto' variant='muted'>
            Copy
          </Button>
        </Grid>

        <Grid w={1} p={[0, '1rem']}>
          <Label>Username</Label>
        </Grid>
        <Grid w={[1, 3 / 4]} p={[0, '1rem']}>
          <Input value={this.props.config.username} readOnly />
        </Grid>
        <Grid w={[1, 1 / 4]} p={[0, '1rem']}>
          <Button icon='copy' width='auto' variant='muted'>
            Copy
          </Button>
        </Grid>

        <Grid w={1} p={[0, '1rem']}>
          <Label>Password</Label>
        </Grid>
        <Grid w={[1, 3 / 4]} p={[0, '1rem']}>
          <Input value={this.props.config.password} readOnly />
        </Grid>
        <Grid w={[1, 1 / 4]} p={[0, '1rem']}>
          <Button icon='copy' width='auto' variant='muted'>
            Copy
          </Button>
        </Grid>
      </div>

    )
  }
}

ProjectConfiguration.propTypes = {
  config: PropTypes.object
}

export default ProjectConfiguration
