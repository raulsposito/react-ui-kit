import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'

import { useWindowDimensions } from '@components/windowDimensions'
import { Text, Heading } from '@components/texts'
import Button, { GhostButton } from '@components/button'
import Icon from '@components/icon'

import { Overlay, Wrapper, Area, Close, IconContainer, ButtonContainer } from './style'
import { useClickOutside } from './hooks'

const Modal = ({ isShowing, close, children, icon, title, text, actions }) => {
  const device = useWindowDimensions()

  const ref = useRef()
  useClickOutside(ref, () => close())

  if (!isShowing) return null

  return (
    createPortal(
      <Overlay
        tag='aside'
        role='dialog'
        tabIndex='-1'
        aria-modal='true'
      >
        <Wrapper>
          <Area ref={ref} device={device}>
            <Close>
              <GhostButton icon='close' onClick={close} size='large' color='contrast' />
            </Close>
            {children || (
              <>
                {icon && (
                  <IconContainer>
                    <Icon {...icon} />
                  </IconContainer>
                )}
                {title && (
                  <Heading
                    text={title}
                    type='h3'
                    size='small'
                    weight='light'
                    marginBottom='one'
                  />
                )}
                {text && <Text text={text} size='large' align='center' />}
                {!!actions.length && (
                  <ButtonContainer>
                    {actions.map(el => <Button {...el} key={el.text} />)}
                  </ButtonContainer>
                )}
              </>
            )}
          </Area>
        </Wrapper>
      </Overlay>,
      document.body
    )
  )
}

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node,

  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.shape({
    name: PropTypes.string,
    color: MyPropTyes.color,
    size: MyPropTyes.size
  }),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
      size: PropTypes.oneOf([
        'small',
        'medium',
        'large'
      ]),
      color: MyPropTyes.color,
      type: PropTypes.oneOf(['solid', 'line', 'ghost']),
      block: PropTypes.bool,
      reverse: PropTypes.bool,
      fixWidth: PropTypes.bool,
      onClick: PropTypes.func.isRequired
    })
  )
}

Modal.defaultProps = {
  actions: []
}

export default Modal
