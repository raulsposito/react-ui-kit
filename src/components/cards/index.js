import React from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'

import Badge from '@components/badge'
import { Heading, Text } from '@components/texts'
import Button, { SolidButton } from '@components/button'

import {
  Img,
  Info,
  MyCard,
  Container,
  TextContainer,
  BadgeContainer,
  MultiButtonContainer,
  SingleButtonContainer
} from './styles'

const Card = ({ overline, title, content, actions, image, badges, type }) => (
  <MyCard type={type}>
    {badges && (
      <BadgeContainer>
        {badges.map((badge, i) => <Badge key={`badge_${i}`} {...badge} />)}
      </BadgeContainer>
    )}

    {image && <Img src={image} type={type} />}

    <Container type={type}>
      <Info>
        {overline && <Text size='small' marginBottom='one'>{overline}</Text>}
        {title && <Heading type='h5' size='xsmall' marginBottom='one'>{title}</Heading>}
        <TextContainer>
          {content && <Text marginBottom='two'>{content}</Text>}
        </TextContainer>

        {actions.length >= 2 && (
          <MultiButtonContainer>
            {actions.map((action, i) => <SolidButton key={`button_${i}`} {...action} />)}
          </MultiButtonContainer>
        )}

      </Info>

      {actions.length === 1 && (
        <SingleButtonContainer>
          <Button {...actions[0]} />
        </SingleButtonContainer>
      )}
    </Container>
  </MyCard>
)

Card.propTypes = {
  overline: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      size: MyPropTyes.size,
      type: PropTypes.oneOf(['line', 'ghost', 'solid']),
      text: PropTypes.string,
      color: MyPropTyes.color,
      onClick: PropTypes.func
    })
  ),
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      size: PropTypes.string,
      color: MyPropTyes.color
    })
  ),
  type: PropTypes.oneOf(['horizontal', 'vertical'])
}

Card.defaultProps = {
  actions: [],
  badges: []
}

export default Card
