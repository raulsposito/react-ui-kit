import React from 'react'
import styled from 'styled-components'
import Card from '@components/cards/index'
import Placeholder from '../assets/Placeholder.png'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #343434;
  padding: 16px;
  margin: -8px;
  > * {
    margin: 8px;
  }
`

const oneButton = [
  {
    size: 'large',
    text: 'Accion',
    color: 'secondary',
    // eslint-disable-next-line
    onClick: () => console.log('they clicked me, Im so happy')
  }
]

const buttons = [
  {
    size: 'small',
    text: 'Ir',
    // eslint-disable-next-line
    onClick: () => console.log('they clicked me, Im so happy')
  },
  {
    color: 'variant',
    size: 'small',
    text: 'Cambiar contraseña',
    // eslint-disable-next-line
    onClick: () => console.log('they clicked me, Im so happy')
  }
]

const iconAction = [
  {
    size: 'large',
    type: 'ghost',
    icon: 'arrow_forward',
    // eslint-disable-next-line
    onClick: () => console.log('something')
  }
]

const badges = [
  {
    id: 0,
    text: 'Badges',
    size: 'small',
    color: 'primary'
  }
]

const twoBadges = [
  {
    id: 1,
    text: 'Badges',
    size: 'small',
    color: 'primary'
  },
  {
    id: 2,
    text: 'Badges',
    size: 'small',
    color: 'primary'
  }
]

const Cards = () => (
  <>
    <h1>Cards</h1>
    <hr />
    <h2>Square No Image Card</h2>
    <Grid>
      <Card
        overline='texto previo'
        title='Titulo de la Card'
        content='Las cards son superficies donde se muestra contenido y acciones sobre un tema.'
      />
      <Card
        overline='texto previo'
        title='Titulo de la Card'
        content='Las cards son superficies donde se muestra contenido y acciones sobre un tema.'
        actions={buttons}
      />
    </Grid>

    <hr />
    <h2>Square Card with Image</h2>
    <Grid>
      <Card
        overline='texto previo'
        title='Titulo de la Card'
        content='Las cards son superficies donde se muestra contenido y acciones sobre un tema.'
        actions={buttons}
        image={Placeholder}
      />
      <Card
        overline='texto previo'
        title='Titulo de la Card'
        content='Las cards son superficies donde se muestra contenido y acciones sobre un tema.'
        actions={buttons}
        image={Placeholder}
        badges={badges}
      />
      <Card
        overline='texto previo'
        title='Titulo de la Card'
        content='Las cards son superficies donde se muestra contenido y acciones sobre un tema.'
        actions={buttons}
        image={Placeholder}
        badges={twoBadges}
      />
    </Grid>
    <hr />
    <h2>Horizontal No Badge</h2>
    <Grid>
      <Card
        title='Titulo de la Card'
        content='Las cards son superficies donde se muestra contenido y acciones sobre un tema.
        Las cards son superficies donde se muestra contenido y acciones sobre un tema.'
        image={Placeholder}
        type='horizontal'
        size='xxlarge'
        actions={iconAction}
      />
      <Card
        title='Titulo de la Card'
        content='Las cards son superficies donde se muestra contenido y acciones sobre un tema.
        Las cards son superficies donde se muestra contenido y acciones sobre un tema.'
        image={Placeholder}
        type='horizontal'
        size='xxlarge'
        actions={oneButton}
      />
      <Card
        title='Titulo de la Card'
        content='Las cards son superficies donde se muestra contenido y acciones sobre un tema.
        Las cards son superficies donde se muestra contenido y acciones sobre un tema.'
        image={Placeholder}
        type='horizontal'
        size='xxlarge'
        actions={buttons}
      />
    </Grid>

    <hr />
    <h2>Horizontal with Badge</h2>
    <Grid>
      <Card
        title='Titulo de la Card'
        content='Las cards son superficies donde se muestra contenido y acciones sobre un tema.
        Las cards son superficies donde se muestra contenido y acciones sobre un tema.'
        image={Placeholder}
        type='horizontal'
        size='xxlarge'
        actions={oneButton}
        badges={badges}
      />
      <Card
        title='Titulo de la Card'
        content='Las cards son superficies donde se muestra contenido y acciones sobre un tema.
        Las cards son superficies donde se muestra contenido y acciones sobre un tema.'
        image={Placeholder}
        type='horizontal'
        actions={iconAction}
        badges={twoBadges}
      />
      <Card
        title='Titulo de la Card'
        content='Un contenido con overflow
        Un contenido con overflow
        Un contenido con overflow
        Un contenido con overflow
        Un contenido con overflow
        Un contenido con overflow
        Un contenido con overflow
        Un contenido con overflow
        Un contenido con overflow
        Un contenido con overflow
        Un contenido con overflow
        Un contenido con overflow'
        image={Placeholder}
        type='horizontal'
        size='xxlarge'
        actions={buttons}
        badges={badges}
      />
    </Grid>
  </>
)
export default Cards
