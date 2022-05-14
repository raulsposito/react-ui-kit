import React, { useState } from 'react'

import { SolidButton } from '@components/button'
import Modal from '@components/modal'

import { Text } from '@components/texts'
import Icon from '@components/icon'

const Modals = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  const data1 = {
    icon: {
      name: 'settings',
      color: 'system',
      size: 'xxlarge'
    },
    title: 'Atención',
    text: '¿Está seguro que desa continuar con esta acción? No podrá recuperar los datos si decide continuar.',
    actions: [
      {
        text: 'OK',
        // eslint-disable-next-line
        onClick: () => setOpen1(false),
        color: 'success'
      },
      {
        text: 'NO',
        // eslint-disable-next-line
        onClick: () => setOpen1(false),
        color: 'error'
      }
    ]
  }

  const data2 = {
    title: 'Another modal to test',
    text: 'This modal has no icon or actions. Is just for shows'
  }

  return (
    <>
      <h1>Modal</h1>
      <hr />

      <div style={{ display: 'flex', columnGap: '0.5em', flexDirection: 'row' }}>
        <SolidButton text='Open modal with buttons' onClick={() => setOpen1(true)} />
        <SolidButton text='Open modal no buttons' onClick={() => setOpen2(true)} />
        <SolidButton text='Open modal with custom content' onClick={() => setOpen3(true)} />
      </div>

      <Modal isShowing={open1} close={() => setOpen1(false)} {...data1} />

      <Modal isShowing={open2} close={() => setOpen2(false)} {...data2} />
      <Modal isShowing={open3} close={() => setOpen3(false)}>
        <Icon name='dashboard' size='xxlarge' color='warning' />
        <Text size='xxlarge'>bla bla totally custom</Text>
      </Modal>

    </>
  )
}

export default Modals
