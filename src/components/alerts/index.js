import React from 'react'
import PropTypes from 'prop-types'

import { Text } from '@components/texts'
import { LineButton } from '@components/button'
import dismiss from 'react-hot-toast'
import { Column, Row } from '@global/styles'
import { StyledAlert, Container, ButtonContainer } from './style'

const Alert = ({ id, title, text, type, actions, buttonText, buttonOnClick }) => (
  type ? (
    <StyledAlert type={type}>
      <Container>
        <Column style={{ paddingRight: '120px' }}>
          <Row>{title && (
          <>
            <Text size='large' weight='regular' color='background'>
              {title}
            </Text><br />
          </>
          )}
          </Row>
          <Row>{text && <><Text size='large' weight='regular' color='background'>{text}</Text></>}</Row>
        </Column>
      </Container>
      <ButtonContainer>
        { actions
        && (
        <LineButton
          color={type}
          size='medium'
          text={buttonText}
          onClick={buttonOnClick}
          id={id}
        />
        )}
      </ButtonContainer>
    </StyledAlert>
  ) : null
)

Alert.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['success', 'warning', 'error']),
  actions: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonOnClick: PropTypes.func
}

Alert.defaultProps = {
  buttonText: 'x',
  buttonOnClick: dismiss
}

export default Alert
