import React from 'react'
import styled from 'styled-components'

import Badge from '@components/badge'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: max-content;
`
const Buttons = () => (
  <>
    <h1>Badges</h1>
    <hr />
    <h2>Solid</h2>
    <Grid>
      <Badge text='Small badge' size='small' color='secondary' />
      <Badge text='Medium badge' size='medium' color='primary' />
      <Badge text='Large badge' size='large' color='variant' />

      <Badge text='Small badge' size='small' color='secondary' icon='pets' />
      <Badge text='Medium badge' size='medium' color='primary' icon='view_in_ar' />
      <Badge text='Large badge' size='large' color='variant' icon='psychology' />

      <Badge text='Small badge' size='small' color='secondary' icon='pets' reverse />
      <Badge text='Medium badge' size='medium' color='primary' icon='view_in_ar' reverse />
      <Badge text='Large badge' size='large' color='variant' icon='psychology' reverse />

      <Badge size='small' color='secondary' icon='pets' />
      <Badge size='medium' color='primary' icon='view_in_ar' />
      <Badge size='large' color='variant' icon='psychology' />
    </Grid>

    <hr />
    <h2>Line</h2>
    <Grid>
      <Badge type='line' text='Small badge' size='small' color='secondary' />
      <Badge type='line' text='Medium badge' size='medium' color='primary' />
      <Badge type='line' text='Large badge' size='large' color='variant' />

      <Badge type='line' text='Small badge' size='small' color='secondary' icon='pets' />
      <Badge type='line' text='Medium badge' size='medium' color='primary' icon='view_in_ar' />
      <Badge type='line' text='Large badge' size='large' color='variant' icon='psychology' />

      <Badge type='line' text='Small badge' size='small' color='secondary' icon='pets' reverse />
      <Badge type='line' text='Medium badge' size='medium' color='primary' icon='view_in_ar' reverse />
      <Badge type='line' text='Large badge' size='large' color='variant' icon='psychology' reverse />

      <Badge type='line' size='small' color='secondary' icon='pets' />
      <Badge type='line' size='medium' color='primary' icon='view_in_ar' />
      <Badge type='line' size='large' color='variant' icon='psychology' />
    </Grid>

    <hr />
    <h2>Regular colors</h2>
    <Grid style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
      <Badge text='Primary' color='primary' />
      <Badge type='line' text='Primary' color='primary' />

      <Badge text='Variant' color='variant' />
      <Badge type='line' text='Variant' color='variant' />

      <Badge text='Secondary' color='secondary' />
      <Badge type='line' text='Secondary' color='secondary' />

      <Badge text='Success' color='success' />
      <Badge type='line' text='Success' color='success' />

      <Badge text='Warning' color='warning' />
      <Badge type='line' text='Warning' color='warning' />

      <Badge text='Error' color='error' />
      <Badge type='line' text='Error' color='error' />

      <Badge text='System' color='system' />
      <Badge type='line' text='System' color='system' />
    </Grid>

    <hr />
    <h2>Event Badges</h2>
    <div style={{ width: '100%', padding: '32px', backgroundColor: '#343434' }}>
      <Grid style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <Badge text='In progress' color='inprogress' />
        <Badge type='line' text='In progress' color='inprogress' />

        <Badge text='Next' color='next' />
        <Badge type='line' text='Next' color='next' />

        <Badge text='Finished' color='finished' />
        <Badge type='line' text='Finished' color='finished' />

        <Badge text='Suspended' color='suspended' />
        <Badge type='line' text='Suspended' color='suspended' />

        <Badge text='Cancelled' color='cancelled' />
        <Badge type='line' text='Cancelled' color='cancelled' />

        <Badge text='White' color='white' />
        <Badge type='line' text='White' color='white' />
      </Grid>
    </div>
  </>
)
export default Buttons
