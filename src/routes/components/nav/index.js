import React from 'react'

import { SITE } from '@routes/paths'

import { MyNav, MyLink } from './styles'

export const Nav = () => (
  <MyNav>
    <MyLink to={SITE.INPUTS}>Inputs</MyLink>
    <MyLink to={SITE.DROPDOWNS}>Dropwdowns</MyLink>
    <MyLink to={SITE.SOLID_BUTTONS}>Solid Buttons</MyLink>
    <MyLink to={SITE.LINE_BUTTONS}>Line Buttons</MyLink>
    <MyLink to={SITE.TEXTS}>Text & headings</MyLink>
    <MyLink to={SITE.BADGES}>Badges</MyLink>
    <MyLink to={SITE.ALERTS}>Alerts</MyLink>
    <MyLink to={SITE.MODALS}>Modals</MyLink>
    <MyLink to={SITE.CARDS}>Cards</MyLink>
    <MyLink to={SITE.PAGINATION_CONTAINER}>Pagination</MyLink>
    <MyLink to={SITE.REDUX_EXAMPLE}>Example</MyLink>
  </MyNav>
)

export default Nav
