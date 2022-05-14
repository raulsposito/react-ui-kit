import React from 'react'
import styled from 'styled-components'

import { SolidButton } from '@components/button'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 12px;
`
/* eslint no-console: 0 */
const click = () => console.log('they clicked me, Im so happy')

const Buttons = () => (
  <>
    <h1>Solid Buttons</h1>
    <hr />
    <h2>Regular</h2>
    <Grid>
      <SolidButton size='large' text='Large' icon='help_outline' onClick={click} />
      <SolidButton size='large' text='Large' onClick={click} />
      <SolidButton size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <SolidButton size='medium' text='Medium' icon='help_outline' onClick={click} />
      <SolidButton size='medium' text='Medium' onClick={click} />
      <SolidButton size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <SolidButton size='small' text='Small' icon='help_outline' onClick={click} />
      <SolidButton size='small' text='Small' onClick={click} />
      <SolidButton size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <SolidButton color='variant' size='large' text='Large' icon='help_outline' onClick={click} />
      <SolidButton color='variant' size='large' text='Large' onClick={click} />
      <SolidButton color='variant' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <SolidButton color='variant' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <SolidButton color='variant' size='medium' text='Medium' onClick={click} />
      <SolidButton color='variant' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <SolidButton color='variant' size='small' text='Small' icon='help_outline' onClick={click} />
      <SolidButton color='variant' size='small' text='Small' onClick={click} />
      <SolidButton color='variant' size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <SolidButton color='secondary' size='large' text='Large' icon='help_outline' onClick={click} />
      <SolidButton color='secondary' size='large' text='Large' onClick={click} />
      <SolidButton color='secondary' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <SolidButton color='secondary' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <SolidButton color='secondary' size='medium' text='Medium' onClick={click} />
      <SolidButton color='secondary' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <SolidButton color='secondary' size='small' text='Small' icon='help_outline' onClick={click} />
      <SolidButton color='secondary' size='small' text='Small' onClick={click} />
      <SolidButton color='secondary' size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <SolidButton color='success' size='large' text='Large' icon='help_outline' onClick={click} />
      <SolidButton color='success' size='large' text='Large' onClick={click} />
      <SolidButton color='success' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <SolidButton color='success' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <SolidButton color='success' size='medium' text='Medium' onClick={click} />
      <SolidButton color='success' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <SolidButton color='success' size='small' text='Small' icon='help_outline' onClick={click} />
      <SolidButton color='success' size='small' text='Small' onClick={click} />
      <SolidButton color='success' size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <SolidButton color='warning' size='large' text='Large' icon='help_outline' onClick={click} />
      <SolidButton color='warning' size='large' text='Large' onClick={click} />
      <SolidButton color='warning' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <SolidButton color='warning' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <SolidButton color='warning' size='medium' text='Medium' onClick={click} />
      <SolidButton color='warning' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <SolidButton color='warning' size='small' text='Small' icon='help_outline' onClick={click} />
      <SolidButton color='warning' size='small' text='Small' onClick={click} />
      <SolidButton color='warning' size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <SolidButton color='error' size='large' text='Large' icon='help_outline' onClick={click} />
      <SolidButton color='error' size='large' text='Large' onClick={click} />
      <SolidButton color='error' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <SolidButton color='error' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <SolidButton color='error' size='medium' text='Medium' onClick={click} />
      <SolidButton color='error' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <SolidButton color='error' size='small' text='Small' icon='help_outline' onClick={click} />
      <SolidButton color='error' size='small' text='Small' onClick={click} />
      <SolidButton color='error' size='small' text='Small' icon='help_outline' reverse onClick={click} />

      <SolidButton color='system' size='large' text='Large' icon='help_outline' onClick={click} />
      <SolidButton color='system' size='large' text='Large' onClick={click} />
      <SolidButton color='system' size='large' text='Large' icon='help_outline' reverse onClick={click} />
      <SolidButton color='system' size='medium' text='Medium' icon='help_outline' onClick={click} />
      <SolidButton color='system' size='medium' text='Medium' onClick={click} />
      <SolidButton color='system' size='medium' text='Medium' icon='help_outline' reverse onClick={click} />
      <SolidButton color='system' size='small' text='Small' icon='help_outline' onClick={click} />
      <SolidButton color='system' size='small' text='Small' onClick={click} />
      <SolidButton color='system' size='small' text='Small' icon='help_outline' reverse onClick={click} />
    </Grid>

    <hr />
    <h2>Block</h2>
    <Grid style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <SolidButton size='large' text='Primary' onClick={click} block />
      <SolidButton color='variant' size='large' text='Variant' onClick={click} block />
      <SolidButton color='secondary' size='large' text='Secondary' onClick={click} block />
      <SolidButton color='success' size='large' text='Success' onClick={click} block />
      <SolidButton color='warning' size='large' text='Warning' onClick={click} block />
      <SolidButton color='error' size='large' text='Error' onClick={click} block />
      <SolidButton color='system' size='large' text='System' onClick={click} block />
    </Grid>

    <hr />
    <h2>Fixed Width</h2>
    <Grid style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <SolidButton size='large' icon='face' onClick={click} fixWidth />
      <SolidButton size='medium' icon='face' onClick={click} fixWidth />
      <SolidButton size='small' icon='face' onClick={click} fixWidth />

      <SolidButton color='variant' size='large' icon='face' onClick={click} fixWidth />
      <SolidButton color='variant' size='medium' icon='face' onClick={click} fixWidth />
      <SolidButton color='variant' size='small' icon='face' onClick={click} fixWidth />

      <SolidButton color='secondary' size='large' icon='face' onClick={click} fixWidth />
      <SolidButton color='secondary' size='medium' icon='face' onClick={click} fixWidth />
      <SolidButton color='secondary' size='small' icon='face' onClick={click} fixWidth />

      <SolidButton color='success' size='large' icon='face' onClick={click} fixWidth />
      <SolidButton color='success' size='medium' icon='face' onClick={click} fixWidth />
      <SolidButton color='success' size='small' icon='face' onClick={click} fixWidth />

      <SolidButton color='warning' size='large' icon='face' onClick={click} fixWidth />
      <SolidButton color='warning' size='medium' icon='face' onClick={click} fixWidth />
      <SolidButton color='warning' size='small' icon='face' onClick={click} fixWidth />

      <SolidButton color='error' size='large' icon='face' onClick={click} fixWidth />
      <SolidButton color='error' size='medium' icon='face' onClick={click} fixWidth />
      <SolidButton color='error' size='small' icon='face' onClick={click} fixWidth />

      <SolidButton color='system' size='large' icon='face' onClick={click} fixWidth />
      <SolidButton color='system' size='medium' icon='face' onClick={click} fixWidth />
      <SolidButton color='system' size='small' icon='face' onClick={click} fixWidth />
    </Grid>

    <hr />
    <h2>Disabled</h2>
    <Grid style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <SolidButton disabled size='large' text='Primary' onClick={click} block />
      <SolidButton disabled color='variant' size='large' text='Variant' onClick={click} block />
      <SolidButton disabled color='secondary' size='large' text='Secondary' onClick={click} block />
      <SolidButton disabled color='success' size='large' text='Success' onClick={click} block />
      <SolidButton disabled color='warning' size='large' text='Warning' onClick={click} block />
      <SolidButton disabled color='error' size='large' text='Error' onClick={click} block />
      <SolidButton disabled color='system' size='large' text='System' onClick={click} block />
    </Grid>
  </>
)
export default Buttons
