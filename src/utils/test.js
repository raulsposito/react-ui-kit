export const getComponents = styled => {
  const componentClass = styled.styledComponentId
  return document.getElementsByClassName(componentClass)
}

export const getComponent = (styled, index = 0) => {
  const components = getComponents(styled)
  return components[index]
}
