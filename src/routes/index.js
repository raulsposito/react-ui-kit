import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { SITE } from '@routes/paths'

import SolidButtons from '@containers/SolidButtons'
import LineButtons from '@containers/LineButtons'
import Texts from '@containers/TextsComponent'
import Badges from '@containers/Badges'
import Alerts from '@containers/Alerts'
import Cards from '@containers/Cards'
import PaginationContainer from '@containers/PaginationContainer'
import Inputs from '@containers/Inputs'
import Dropdowns from '@containers/Dropdowns'
import Modals from '@containers/Modals'

import ReduxExample from '@containers/exampleWithRedux'

import Header from './components/header'
import Nav from './components/nav'

import { Container, Page } from './styles'

export const App = () => (
  <Container>
    <Header />
    <Nav />
    <Page>
      <Switch>
        <Route path={SITE.SOLID_BUTTONS} component={SolidButtons} />
        <Route path={SITE.LINE_BUTTONS} component={LineButtons} />
        <Route path={SITE.TEXTS} component={Texts} />
        <Route path={SITE.BADGES} component={Badges} />
        <Route path={SITE.ALERTS} component={Alerts} />
        <Route path={SITE.CARDS} component={Cards} />
        <Route path={SITE.PAGINATION_CONTAINER} component={PaginationContainer} />
        <Route path={SITE.REDUX_EXAMPLE} component={ReduxExample} />
        <Route path={SITE.INPUTS} component={Inputs} />
        <Route path={SITE.DROPDOWNS} component={Dropdowns} />
        <Route path={SITE.MODALS} component={Modals} />

        <Route component={ReduxExample} />
      </Switch>
    </Page>
  </Container>
)

export default App
