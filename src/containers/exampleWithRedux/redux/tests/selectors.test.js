/* eslint-disable max-len */
import SELECTORS from '../selectors'

const mockProps = {
  loading: false,
  text: 'One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them, In the Land of Mordor where the Shadows lie.'
}

describe('<ReduxExample /> SELECTORS', () => {
  it('should select loading', () => {
    const loading = SELECTORS.LOADING.resultFunc(mockProps)
    expect(loading).toEqual(mockProps.loading)
  })
  it('should select text', () => {
    const text = SELECTORS.TEXT.resultFunc(mockProps)
    expect(text).toEqual(mockProps.text)
  })
})
