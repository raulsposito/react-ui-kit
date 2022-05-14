import React from 'react'
import styled from 'styled-components'

import { LineButton } from '@components/button'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 12px;
`
/* eslint no-console: 0 */
const click = () => console.log('they clicked me, Im so happy')

const Buttons = () => (
  <>
    <h1>Line Buttons</h1>
    <hr />
    <h2>Regular</h2>
    <Grid>
      <LineButton size='large' text='Large' icon='help_outline' onClick={click} />
      <LineButton size='large' text='Large' onClick={click} />
      <LineButton size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <LineButton size='medium' text='Medium' icon='help_outline' onClick={click} />
      <LineButton size='medium' text='Medium' onClick={click} />
      <LineButton size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <LineButton size='small' text='Small' icon='help_outline' onClick={click} />
      <LineButton size='small' text='Small' onClick={click} />
      <LineButton size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <LineButton color='variant' size='large' text='Large' icon='help_outline' onClick={click} />
      <LineButton color='variant' size='large' text='Large' onClick={click} />
      <LineButton color='variant' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <LineButton color='variant' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <LineButton color='variant' size='medium' text='Medium' onClick={click} />
      <LineButton color='variant' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <LineButton color='variant' size='small' text='Small' icon='help_outline' onClick={click} />
      <LineButton color='variant' size='small' text='Small' onClick={click} />
      <LineButton color='variant' size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <LineButton color='secondary' size='large' text='Large' icon='help_outline' onClick={click} />
      <LineButton color='secondary' size='large' text='Large' onClick={click} />
      <LineButton color='secondary' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <LineButton color='secondary' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <LineButton color='secondary' size='medium' text='Medium' onClick={click} />
      <LineButton color='secondary' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <LineButton color='secondary' size='small' text='Small' icon='help_outline' onClick={click} />
      <LineButton color='secondary' size='small' text='Small' onClick={click} />
      <LineButton color='secondary' size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <LineButton color='success' size='large' text='Large' icon='help_outline' onClick={click} />
      <LineButton color='success' size='large' text='Large' onClick={click} />
      <LineButton color='success' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <LineButton color='success' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <LineButton color='success' size='medium' text='Medium' onClick={click} />
      <LineButton color='success' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <LineButton color='success' size='small' text='Small' icon='help_outline' onClick={click} />
      <LineButton color='success' size='small' text='Small' onClick={click} />
      <LineButton color='success' size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <LineButton color='warning' size='large' text='Large' icon='help_outline' onClick={click} />
      <LineButton color='warning' size='large' text='Large' onClick={click} />
      <LineButton color='warning' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <LineButton color='warning' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <LineButton color='warning' size='medium' text='Medium' onClick={click} />
      <LineButton color='warning' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <LineButton color='warning' size='small' text='Small' icon='help_outline' onClick={click} />
      <LineButton color='warning' size='small' text='Small' onClick={click} />
      <LineButton color='warning' size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <LineButton color='error' size='large' text='Large' icon='help_outline' onClick={click} />
      <LineButton color='error' size='large' text='Large' onClick={click} />
      <LineButton color='error' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <LineButton color='error' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <LineButton color='error' size='medium' text='Medium' onClick={click} />
      <LineButton color='error' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <LineButton color='error' size='small' text='Small' icon='help_outline' onClick={click} />
      <LineButton color='error' size='small' text='Small' onClick={click} />
      <LineButton color='error' size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <LineButton color='system' size='large' text='Large' icon='help_outline' onClick={click} />
      <LineButton color='system' size='large' text='Large' onClick={click} />
      <LineButton color='system' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <LineButton color='system' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <LineButton color='system' size='medium' text='Medium' onClick={click} />
      <LineButton color='system' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <LineButton color='system' size='small' text='Small' icon='help_outline' onClick={click} />
      <LineButton color='system' size='small' text='Small' onClick={click} />
      <LineButton color='system' size='small' text='Small' icon='help_outline' reverse onClick={click} />
    </Grid>

    <hr />
    <h2>Block</h2>
    <Grid style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <LineButton size='large' text='Primary' onClick={click} block />
      <LineButton color='variant' size='large' text='Variant' onClick={click} block />
      <LineButton color='secondary' size='large' text='Secondary' onClick={click} block />
      <LineButton color='success' size='large' text='Success' onClick={click} block />
      <LineButton color='warning' size='large' text='Warning' onClick={click} block />
      <LineButton color='error' size='large' text='Error' onClick={click} block />
      <LineButton color='system' size='large' text='System' onClick={click} block />
    </Grid>

    <hr />
    <h2>Fixed Width</h2>
    <Grid style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <LineButton size='large' icon='face' onClick={click} fixWidth />
      <LineButton size='medium' icon='face' onClick={click} fixWidth />
      <LineButton size='small' icon='face' onClick={click} fixWidth />

      <LineButton color='variant' size='large' icon='face' onClick={click} fixWidth />
      <LineButton color='variant' size='medium' icon='face' onClick={click} fixWidth />
      <LineButton color='variant' size='small' icon='face' onClick={click} fixWidth />

      <LineButton color='secondary' size='large' icon='face' onClick={click} fixWidth />
      <LineButton color='secondary' size='medium' icon='face' onClick={click} fixWidth />
      <LineButton color='secondary' size='small' icon='face' onClick={click} fixWidth />

      <LineButton color='success' size='large' icon='face' onClick={click} fixWidth />
      <LineButton color='success' size='medium' icon='face' onClick={click} fixWidth />
      <LineButton color='success' size='small' icon='face' onClick={click} fixWidth />

      <LineButton color='warning' size='large' icon='face' onClick={click} fixWidth />
      <LineButton color='warning' size='medium' icon='face' onClick={click} fixWidth />
      <LineButton color='warning' size='small' icon='face' onClick={click} fixWidth />

      <LineButton color='error' size='large' icon='face' onClick={click} fixWidth />
      <LineButton color='error' size='medium' icon='face' onClick={click} fixWidth />
      <LineButton color='error' size='small' icon='face' onClick={click} fixWidth />

      <LineButton color='system' size='large' icon='face' onClick={click} fixWidth />
      <LineButton color='system' size='medium' icon='face' onClick={click} fixWidth />
      <LineButton color='system' size='small' icon='face' onClick={click} fixWidth />
    </Grid>

    <hr />
    <h2>Disabled</h2>
    <Grid style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <LineButton disabled size='large' text='Primary' onClick={click} block />
      <LineButton disabled color='variant' size='large' text='Variant' onClick={click} block />
      <LineButton disabled color='secondary' size='large' text='Secondary' onClick={click} block />
      <LineButton disabled color='success' size='large' text='Success' onClick={click} block />
      <LineButton disabled color='warning' size='large' text='Warning' onClick={click} block />
      <LineButton disabled color='error' size='large' text='Error' onClick={click} block />
      <LineButton disabled color='system' size='large' text='System' onClick={click} block />
    </Grid>
  </>
)
export default Buttons
