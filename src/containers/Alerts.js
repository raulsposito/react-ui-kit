import React from 'react'
import SolidButton from '@components/button/index'
import Alert from '@components/alerts'
import styled from 'styled-components'
import toast, { Toaster } from 'react-hot-toast'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 16px;
  margin: -8px;
  > * {
    margin: 8px;
  }
`

const notify = () => toast('This alert is on fire!', { icon: '🔥' })

const s = () => toast.custom(<><Alert title='Success' type='success' /></>)
const w = () => toast.custom(<><Alert title='Warning' type='warning' /></>)
const d = () => toast.custom(<><Alert title='Error' type='error' /></>)

const sOneLineButton = () => toast.custom(t => (
  <><Alert id={t.id} title='Success one line with button' type='success' actions buttonText='Accion' /></>
))
const wOneLineButton = () => toast.custom(<><Alert title='Warning' type='warning' actions /></>)
const dOneLineButton = () => toast.custom(<><Alert title='Error' type='error' actions /></>)

const sTwoLines = () => toast.custom(<><Alert title='Two' text='Lines' type='success' /></>)
const wTwoLines = () => toast.custom(<><Alert title='Two' text='Lines' type='warning' /></>)
const dTwoLines = () => toast.custom(<><Alert title='Two' text='Lines' type='error' /></>)

// eslint-disable-next-line max-len
const sTwoLinesButton = () => toast.custom(<><Alert title='Success Alert!' text='Two Lines with Button' type='success' actions /></>)
const wTwoLinesButtons = () => toast.custom(<><Alert title='Two' text='Lines' type='warning' actions /></>)
const dTwoLinesButtons = () => toast.custom(<><Alert title='Two' text='Lines' type='error' actions /></>)

const Alerts = () => (
  <>
    <h1>Alerts</h1>
    <hr />
    <h2>Not styled</h2>
    <Grid>
      <Toaster
        position='top-right'
        reverseOrder={false}
      />
      <SolidButton
        size='medium'
        text='Click me and be alert'
        onClick={notify}
      />
    </Grid>

    <hr />
    <h2>Success</h2>
    <Grid>
      <SolidButton
        size='medium'
        text='One line'
        onClick={s}
      />
      <SolidButton
        size='medium'
        text='Two lines'
        onClick={sTwoLines}
      />
      <SolidButton
        size='medium'
        text='One line with button'
        onClick={sOneLineButton}
      />
      <SolidButton
        size='medium'
        text='Two lines with button'
        onClick={sTwoLinesButton}
      />
    </Grid>
    <hr />
    <h2>Warning</h2>
    <Grid>
      <SolidButton
        size='medium'
        text='One line'
        onClick={w}
      />
      <SolidButton
        size='medium'
        text='Two lines'
        onClick={wTwoLines}
      />
      <SolidButton
        size='medium'
        text='One line with button'
        onClick={wOneLineButton}
      />
      <SolidButton
        size='medium'
        text='Two lines with button'
        onClick={wTwoLinesButtons}
      />
    </Grid>
    <h2>Danger</h2>
    <Grid>
      <SolidButton
        size='medium'
        text='One line'
        onClick={d}
      />
      <SolidButton
        size='medium'
        text='Two lines'
        onClick={dTwoLines}
      />
      <SolidButton
        size='medium'
        text='One line with button'
        onClick={dOneLineButton}
      />
      <SolidButton
        size='medium'
        text='Two lines with button'
        onClick={dTwoLinesButtons}
      />
    </Grid>
    <hr />
  </>
)
export default Alerts
