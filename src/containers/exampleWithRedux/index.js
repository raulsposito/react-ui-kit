import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Text } from '@components/texts'

import useRedux from './redux'
import SELECTORS from './redux/selectors'
import { STATUS_ACTIONS, VALUE_ACTIONS } from './redux/actions'

import { Column, Input, Button, ButtonRow, Modal } from './styles'

export const ReduxExample = () => {
  useRedux()
  const dispatch = useDispatch()
  const text = useSelector(SELECTORS.TEXT)
  const loading = useSelector(SELECTORS.LOADING)
  const value = useSelector(SELECTORS.VALUE)

  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    dispatch(STATUS_ACTIONS.START_LOAD('please wait for a bit'))
  }, [dispatch])

  const handleChange = ({ target }) => {
    dispatch(VALUE_ACTIONS.SET(target.value))
  }

  const clear = () => dispatch(VALUE_ACTIONS.CLEAR())

  return (
    <>
      {loading && (
        <>
          <Text size='large'>Loading</Text>
          <Text weight='bold'>{text}</Text>
          <br />
        </>
      )}

      <>
        <Column>
          <Text size='xlarge' weight='bold'>Little redux example code</Text>

          <Input
            value={value}
            name='theInput'
            placeholder='Write something here...'
            onChange={handleChange}
          />
          <Text stize='small'>{value}</Text>

          <ButtonRow>
            <Button onClick={() => setModalOpen(true)}>
              <Text weight='bold'>Show modal</Text>
            </Button>
            <Button onClick={clear} color='red' disabled={!value}>
              <Text weight='bold'>Clear</Text>
            </Button>
          </ButtonRow>

          {modalOpen && (
            <Modal>
              <Text
                text={value}
                size='xlarge'
                weight='xbold'
              />

              <Button color='red' onClick={() => setModalOpen(false)}>
                <Text weight='bold'>Close modal</Text>
              </Button>
            </Modal>
          )}
        </Column>
      </>
    </>
  )
}

export default ReduxExample
